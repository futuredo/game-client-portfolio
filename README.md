# 宋子涵 · Game Client Portfolio

Unity 客户端 / Gameplay 工程作品集，优先展示 Swarm ECS、GraphView Skill System，以及 KCP、Streaming 的版本和验证范围。

[在线访问](https://futuredo.github.io/game-client-portfolio/) · [版本与验证依据](docs/PROJECT_EVIDENCE.md)

内容包括公开工程作品、个人项目经历、AI 原生引擎设计研究、游戏创作和教育经历。每项技术数字对应具体版本与测量范围；公开默认分支、开发分支和本地历史报告分别说明。原版简历保留为存档，项目状态以核对记录为准。

## 本地开发

使用 Node.js 22 和 npm：

```bash
npm ci
npm run dev
npm run check
npm run build
```

推送 main 后通过 GitHub Actions 部署至 GitHub Pages。项目内容在 `src/data/content.ts` 维护，引用记录在 `docs/PROJECT_EVIDENCE.md` 维护。

Project Jinn 部分为个人职责摘要，不包含公司源码、内部路径和项目资产。
