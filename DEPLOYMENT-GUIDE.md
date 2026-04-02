# WordPress + Astro + Vercel 部署指南

快速复用本项目的 WordPress 内容同步到 Astro 静态站点的完整流程。

## 📦 准备文件

- `wordpress-plugin/trigger-github-build.zip` - WordPress 同步插件
- 本 Astro 项目作为模板

## 🚀 5 步部署流程

### 1. WordPress 配置（5分钟）

**安装插件：**
1. 上传 `trigger-github-build.zip` 到 WordPress
2. 启用插件
3. 进入「触发构建」菜单

**配置 GitHub Token：**
1. 访问 https://github.com/settings/tokens
2. 生成 classic token，勾选 `repo` 权限
3. 复制 token 到插件设置并保存
4. 可选：启用「自动触发」

### 2. Astro 项目配置（10分钟）

**克隆本项目：**
```bash
git clone <your-repo>
cd <project-name>
npm install
```

**配置 WordPress API：**

创建 `.env` 文件：
```env
WP_API_URL=https://your-wordpress-site.com/wp-json/wp/v2
```

**关键文件说明：**
- `src/lib/wordpress.ts` - WordPress API 客户端
- `src/pages/products/[slug].astro` - 产品详情页模板
- `src/pages/products/index.astro` - 产品列表页

### 3. 必需的 WordPress REST API Endpoints

确保以下 endpoints 可访问（默认已启用）：

```
GET /wp-json/wp/v2/product          # 产品列表
GET /wp-json/wp/v2/product/{id}     # 单个产品
GET /wp-json/wp/v2/media/{id}       # 媒体文件
```

如果使用自定义字段，需要在 WordPress 中注册到 REST API：

```php
// functions.php
register_rest_field('product', 'custom_field_name', [
    'get_callback' => function($post) {
        return get_post_meta($post['id'], 'custom_field_name', true);
    }
]);
```

### 4. Vercel 部署（5分钟）

**连接 GitHub：**
1. 访问 https://vercel.com
2. Import Git Repository
3. 选择你的项目仓库

**配置环境变量：**
```
WP_API_URL = https://your-wordpress-site.com/wp-json/wp/v2
```

**构建设置（自动检测）：**
- Framework: Astro
- Build Command: `npm run build`
- Output Directory: `dist`

点击 Deploy，等待完成。

### 5. 测试同步流程（2分钟）

1. 在 WordPress 中编辑/发布一个产品
2. 进入「触发构建」菜单，点击「立即触发部署」
3. 等待 3-5 分钟
4. 访问 Vercel 站点，确认内容已更新

## 🔄 日常使用

**更新内容：**
1. 在 WordPress 中编辑内容
2. 点击「触发构建」按钮（或启用自动触发）
3. Vercel 自动重新构建并部署

**查看部署状态：**
- Vercel Dashboard: https://vercel.com/dashboard
- GitHub Actions: 仓库的 Actions 标签页

## 📝 自定义适配

### 修改产品数据结构

编辑 `src/lib/wordpress.ts` 中的类型定义：

```typescript
export interface Product {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  // 添加你的自定义字段
  acf?: {
    custom_field: string;
  };
}
```

### 添加新的内容类型

1. 在 WordPress 中注册自定义文章类型
2. 在 Astro 中创建对应的页面模板
3. 添加 API 获取函数到 `wordpress.ts`

示例：
```typescript
export async function getCustomPosts() {
  const response = await fetch(`${WP_API_URL}/custom-post-type`);
  return response.json();
}
```

## ⚠️ 常见问题

**Q: 触发构建失败，提示 422 错误**
A: 检查 GitHub Token 权限是否包含 `repo`

**Q: Vercel 构建失败**
A: 检查环境变量 `WP_API_URL` 是否正确配置

**Q: 产品页面显示 404**
A: 确认 WordPress API 可访问，检查 CORS 设置

**Q: 图片无法显示**
A: 检查 WordPress 媒体库 URL 是否可公开访问

## 📚 技术栈

- **CMS**: WordPress (内容管理)
- **前端**: Astro (静态站点生成)
- **部署**: Vercel (自动构建和托管)
- **同步**: GitHub API (触发构建)

## 🔗 相关资源

- [Astro 文档](https://docs.astro.build)
- [WordPress REST API](https://developer.wordpress.org/rest-api/)
- [Vercel 文档](https://vercel.com/docs)
- [GitHub API](https://docs.github.com/en/rest)
