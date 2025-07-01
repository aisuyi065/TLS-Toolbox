## TLS-Toolbox4 电商导航网站

这是一个基于Hugo框架的电商工具导航网站，集合了各种电商相关的工具、平台和资源链接，方便电商从业者快速访问所需资源。

### 项目结构

```
/
├── archetypes/               # Hugo内容模板目录
│   └── default.md            # 默认内容模板
├── content/                  # 内容目录
│   ├── about.md              # "关于"页面内容
│   ├── sub1.md               # 子页面1内容
│   └── sub2.md               # 子页面2内容
├── data/                     # 数据目录
│   └── webstack.yml          # 主页导航网址数据配置
├── layouts/                  # 布局模板目录
│   ├── _default/             # 默认布局模板
│   ├── nav/                  # 导航相关布局模板
│   ├── index.html            # 主页布局
│   ├── search.html           # 搜索页面布局
│   └── 404.html              # 404错误页面
├── static/                   # 静态资源目录
│   ├── css/                  # CSS样式文件
│   ├── js/                   # JavaScript文件
│   ├── webfonts/             # 网页字体
│   ├── _headers              # Netlify/Vercel自定义HTTP头
│   ├── _redirects            # Netlify/Vercel重定向规则
│   └── images/               # 图片资源目录
│       ├── logos/            # 网站logo图片
│       │   └── default.png   # 默认logo
│       ├── flags/            # 国旗图标
│       ├── qrcodes/          # 二维码图片
│       ├── favicon.png       # 网站图标
│       └── logo.png          # 网站logo
├── hugo.toml                 # Hugo配置文件
├── LICENSE                   # 许可证文件
└── README.md                 # 项目说明文档
```

### 使用方法

1. 拥有 Cloudflare 账号
2. 已将项目推送到 GitHub 或 GitLab 代码仓库
## 部署步骤
1. 登录 Cloudflare Dashboard
2. 进入 Pages 服务
3. 点击"创建项目"
4. 选择"连接到 Git"并授权访问你的代码仓库
5. 选择本项目的代码仓库
### 构建设置
在部署设置页面，配置以下内容：
- **构建命令**：`hugo --gc --minify`
- **构建输出目录**：`public`
- **环境变量**：添加一个环境变量，名称为 `HUGO_VERSION`，值为 `0.128.0`


### 配置选项

在 `hugo.toml` 文件中，你可以修改以下配置：

- `title`: 网站标题
- `params.search.enable`: 是否启用搜索功能
- `params.darkmode.enable`: 是否默认使用暗色模式
- `params.pinyin.enable`: 是否启用拼音搜索功能

### 许可证

本项目基于MIT许可证开源。
