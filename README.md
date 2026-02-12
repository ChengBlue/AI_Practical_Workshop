# AI 实操学堂

面向零基础用户的 AI 工具学习网站：不讲复杂理论，跟着做就能学会。

## 技术栈

- **前端**：React 18 + TypeScript + Vite + Tailwind CSS + React Router
- **后端**：Node.js + Express（提供教程/资源/案例等 API，数据为 mock JSON）

## 如何启动

```bash
# 安装依赖
npm install

# 同时启动前端（Vite）与后端（Express）
npm run dev
```

- 前端地址：<http://localhost:5173>
- 后端 API：<http://localhost:3001>（前端通过 Vite 代理 `/api` 到该端口）

仅构建前端：

```bash
npm run build
npm run preview
```

## 项目结构

```
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── server/                 # Express 后端
│   ├── index.js            # API 入口
│   └── data/               # mock 数据（JSON）
│       ├── tutorials.json
│       ├── resources.json
│       └── cases.json
├── public/
│   └── favicon.svg
└── src/
    ├── main.tsx
    ├── App.tsx             # 路由配置
    ├── index.css           # 全局样式 + Tailwind
    ├── types/              # 类型定义
    ├── data/               # 前端 mock 与 API 调用
    │   └── mock.ts
    ├── components/
    │   └── Layout/         # Header、Footer、Layout
    └── pages/              # 各页面
        ├── Home.tsx
        ├── AiBasic.tsx
        ├── Tutorials.tsx
        ├── TutorialDetail.tsx
        ├── Cases.tsx
        ├── Practice.tsx
        ├── Resources.tsx
        ├── Community.tsx
        ├── About.tsx
        └── Login.tsx
```

## 页面路由

| 路径 | 说明 |
|------|------|
| `/` | 首页 |
| `/ai-basic` | AI 基础 |
| `/tutorials` | 工具教程列表 |
| `/tutorials/:tool/:id` | 教程详情 |
| `/cases` | 实操案例 |
| `/practice` | 实操练习区 |
| `/resources` | 资源下载 |
| `/community` | 社区 |
| `/about` | 关于我们 |
| `/login` | 登录/注册 |

## 说明

- 教程、资源、案例等数据来自 `server/data/*.json`，可按需修改或扩展。
- 收藏/点赞/评论、登录注册、下载等为前端 mock，未接真实后端。
- 所有页面使用统一 Layout（Header + Footer），支持响应式布局。
