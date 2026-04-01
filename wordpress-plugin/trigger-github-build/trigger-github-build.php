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

// 触发GitHub构建
function trigger_github_build($token) {
    if (empty($token)) {
        return ['success' => false, 'message' => '请先设置GitHub Token'];
    }

    $response = wp_remote_post('https://api.github.com/repos/qzce2024/tanjin/dispatches', [
        'headers' => [
            'Authorization' => 'Bearer ' . $token,
            'Accept' => 'application/vnd.github+json',
            'User-Agent' => 'WordPress'
        ],
        'body' => json_encode(['event_type' => 'wordpress_update']),
        'timeout' => 15
    ]);

    if (is_wp_error($response)) {
        return ['success' => false, 'message' => '触发失败: ' . $response->get_error_message()];
    }

    $code = wp_remote_retrieve_response_code($response);
    if ($code === 204) {
        return ['success' => true, 'message' => '✓ 构建已触发，请等待几分钟完成部署'];
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
    $token = get_option('github_token');
    if (!empty($token)) {
        trigger_github_build($token);
    }
}

// 管理页面
function trigger_build_page() {
    if (!current_user_can('manage_options')) {
        return;
    }

    // 处理触发构建
    if (isset($_POST['trigger_build']) && check_admin_referer('trigger_build_action')) {
        $token = get_option('github_token');
        $result = trigger_github_build($token);
        echo '<div class="notice notice-' . ($result['success'] ? 'success' : 'error') . ' is-dismissible"><p>' . esc_html($result['message']) . '</p></div>';
    }

    // 处理保存设置
    if (isset($_POST['save_settings']) && check_admin_referer('save_github_token')) {
        update_option('github_token', sanitize_text_field($_POST['github_token']));
        update_option('auto_trigger_enabled', isset($_POST['auto_trigger_enabled']) ? 1 : 0);
        echo '<div class="notice notice-success is-dismissible"><p>设置已保存</p></div>';
    }
    ?>
    <div class="wrap">
        <h1>🚀 触发GitHub构建</h1>
        <p>更新WordPress内容后，点击按钮触发网站重新构建和部署</p>

        <div style="background: #fff; padding: 20px; border: 1px solid #ccc; border-radius: 5px; margin: 20px 0;">
            <form method="post">
                <?php wp_nonce_field('trigger_build_action'); ?>
                <button type="submit" name="trigger_build" class="button button-primary button-hero" style="font-size: 16px; padding: 10px 30px;">
                    ⚡ 立即触发构建
                </button>
            </form>
        </div>

        <hr style="margin: 40px 0;">

        <h2>⚙️ 设置</h2>
        <div style="background: #fff; padding: 20px; border: 1px solid #ccc; border-radius: 5px;">
            <form method="post">
                <?php wp_nonce_field('save_github_token'); ?>
                <table class="form-table">
                    <tr>
                        <th scope="row"><label for="github_token">GitHub Token</label></th>
                        <td>
                            <input type="password" id="github_token" name="github_token" value="<?php echo esc_attr(get_option('github_token')); ?>" class="regular-text" placeholder="ghp_xxxxxxxxxxxx">
                            <p class="description">
                                <strong>获取步骤：</strong><br>
                                1. 访问 <a href="https://github.com/settings/tokens" target="_blank">GitHub Settings > Personal access tokens</a><br>
                                2. 点击 "Generate new token (classic)"<br>
                                3. 勾选 <code>repo</code> 权限<br>
                                4. 生成并复制token到此处
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row"><label for="auto_trigger_enabled">自动触发</label></th>
                        <td>
                            <label>
                                <input type="checkbox" id="auto_trigger_enabled" name="auto_trigger_enabled" value="1" <?php checked(get_option('auto_trigger_enabled'), 1); ?>>
                                产品发布或更新时自动触发构建
                            </label>
                            <p class="description">启用后，每次发布或更新产品都会自动触发GitHub构建，无需手动点击按钮</p>
                        </td>
                    </tr>
                </table>
                <button type="submit" name="save_settings" class="button button-primary">保存设置</button>
            </form>
        </div>

        <hr style="margin: 40px 0;">

        <h2>📖 使用说明</h2>
        <ol>
            <li>在上方设置中填入GitHub Token并保存</li>
            <li>更新产品内容后，点击"立即触发构建"按钮</li>
            <li>等待3-5分钟，网站将自动更新</li>
        </ol>
    </div>
    <?php
}

