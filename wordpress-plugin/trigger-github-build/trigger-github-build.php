<?php
/**
 * Plugin Name: Trigger GitHub Build
 * Description: 一键触发GitHub构建部署
 * Version: 1.0
 * Author: Tanjin Carbon
 */

if (!defined('ABSPATH')) exit;

// 添加管理菜单
add_action('admin_menu', 'trigger_build_menu');
function trigger_build_menu() {
    add_menu_page(
        '触发构建',
        '触发构建',
        'manage_options',
        'trigger-build',
        'trigger_build_page',
        'dashicons-update',
        100
    );
}

// 触发Vercel部署
function trigger_github_build($hook_url) {
    if (empty($hook_url)) {
        return ['success' => false, 'message' => '请先设置Vercel Deploy Hook URL'];
    }

    $response = wp_remote_post($hook_url, [
        'timeout' => 15
    ]);

    if (is_wp_error($response)) {
        return ['success' => false, 'message' => '触发失败: ' . $response->get_error_message()];
    }

    $code = wp_remote_retrieve_response_code($response);
    if ($code === 200 || $code === 201) {
        return ['success' => true, 'message' => '✓ 部署已触发，请等待几分钟完成'];
    }

    return ['success' => false, 'message' => '触发失败，HTTP状态码: ' . $code];
}

// 自动触发：产品发布或更新时
add_action('save_post_product', 'auto_trigger_build', 10, 3);
function auto_trigger_build($post_id, $post, $update) {
    // 检查是否启用自动触发
    if (!get_option('auto_trigger_enabled', false)) {
        return;
    }

    // 只在发布状态时触发
    if ($post->post_status !== 'publish') {
        return;
    }

    // 避免自动保存触发
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }

    // 触发构建
    $hook_url = get_option('vercel_deploy_hook');
    if (!empty($hook_url)) {
        trigger_github_build($hook_url);
    }
}

// 管理页面
function trigger_build_page() {
    if (!current_user_can('manage_options')) {
        return;
    }

    // 处理触发构建
    if (isset($_POST['trigger_build']) && check_admin_referer('trigger_build_action')) {
        $hook_url = get_option('vercel_deploy_hook');
        $result = trigger_github_build($hook_url);
        echo '<div class="notice notice-' . ($result['success'] ? 'success' : 'error') . ' is-dismissible"><p>' . esc_html($result['message']) . '</p></div>';
    }

    // 处理保存设置
    if (isset($_POST['save_settings']) && check_admin_referer('save_vercel_hook')) {
        update_option('vercel_deploy_hook', sanitize_text_field($_POST['vercel_deploy_hook']));
        update_option('auto_trigger_enabled', isset($_POST['auto_trigger_enabled']) ? 1 : 0);
        echo '<div class="notice notice-success is-dismissible"><p>设置已保存</p></div>';
    }
    ?>
    <div class="wrap">
        <h1>🚀 触发Vercel部署</h1>
        <p>更新WordPress内容后，点击按钮触发网站重新构建和部署</p>

        <div style="background: #fff; padding: 20px; border: 1px solid #ccc; border-radius: 5px; margin: 20px 0;">
            <form method="post">
                <?php wp_nonce_field('trigger_build_action'); ?>
                <button type="submit" name="trigger_build" class="button button-primary button-hero" style="font-size: 16px; padding: 10px 30px;">
                    ⚡ 立即触发部署
                </button>
            </form>
        </div>

        <hr style="margin: 40px 0;">

        <h2>⚙️ 设置</h2>
        <div style="background: #fff; padding: 20px; border: 1px solid #ccc; border-radius: 5px;">
            <form method="post">
                <?php wp_nonce_field('save_vercel_hook'); ?>
                <table class="form-table">
                    <tr>
                        <th scope="row"><label for="vercel_deploy_hook">Vercel Deploy Hook URL</label></th>
                        <td>
                            <input type="text" id="vercel_deploy_hook" name="vercel_deploy_hook" value="<?php echo esc_attr(get_option('vercel_deploy_hook')); ?>" class="regular-text" placeholder="https://api.vercel.com/v1/integrations/deploy/...">
                            <p class="description">
                                <strong>获取步骤：</strong><br>
                                1. 访问 <a href="https://vercel.com/dashboard" target="_blank">Vercel Dashboard</a><br>
                                2. 选择你的项目 > Settings > Git<br>
                                3. 找到 "Deploy Hooks" 部分<br>
                                4. 创建新的 Deploy Hook 并复制 URL 到此处
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row"><label for="auto_trigger_enabled">自动触发</label></th>
                        <td>
                            <label>
                                <input type="checkbox" id="auto_trigger_enabled" name="auto_trigger_enabled" value="1" <?php checked(get_option('auto_trigger_enabled'), 1); ?>>
                                产品发布或更新时自动触发部署
                            </label>
                            <p class="description">启用后，每次发布或更新产品都会自动触发Vercel部署，无需手动点击按钮</p>
                        </td>
                    </tr>
                </table>
                <button type="submit" name="save_settings" class="button button-primary">保存设置</button>
            </form>
        </div>

        <hr style="margin: 40px 0;">

        <h2>📖 使用说明</h2>
        <ol>
            <li>在上方设置中填入Vercel Deploy Hook URL并保存</li>
            <li>更新产品内容后，点击"立即触发部署"按钮</li>
            <li>等待3-5分钟，网站将自动更新</li>
        </ol>
    </div>
    <?php
}

