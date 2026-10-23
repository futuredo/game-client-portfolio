export const navItems = [
  { label: '重点作品', href: '#labs' },
  { label: '项目经历', href: '#project-jinn' },
  { label: '架构研究', href: '#engine' },
  { label: '经历', href: '#experience' },
  { label: '联系', href: '#contact' },
]

export const jinnLayers = [
  {
    id: 'client', index: 'L1', title: 'Unity 客户端', stack: 'C# / Unity 6 / Input / UI / Network',
    detail: '负责输入、相机、第一/第三人称表现、交互反馈、UI、资源与本地调试；以即时反馈承接服务端权威结果。',
  },
  {
    id: 'replication', index: 'L2', title: 'Repgen / Proto', stack: '状态复制 / RPC / 序列化 / 兼容',
    detail: '通过 Repgen Diff 与 Protobuf 连接端服状态，处理请求响应、视图注册时序、竞态、旧包与断线恢复。',
  },
  {
    id: 'server', index: 'L3', title: 'ET 权威战斗服', stack: 'Actor / Room / Authority / Gameplay Logic',
    detail: '关键交互、移动、伤害、收益、怪物状态和拍照命中由战斗服复核，客户端不直接决定最终结果。',
  },
  {
    id: 'data', index: 'L4', title: 'Luban / BattleData / Config', stack: '配置表 / 技能数据 / 协议 / 地图数据',
    detail: '将玩法参数、技能轨道、Proto、地图 bytes 与资源绑定纳入同一数据契约，支撑高频迭代和发布兼容。',
  },
]

export const photoSteps = [
  ['01', '道具入口', '相机专属格、次数、第一人称持有与提示 UI'],
  ['02', '客户端状态机', '取景、触发、冷却、退出与交互冲突处理'],
  ['03', '空间扫描', '采集怪物/异常候选、距离与画面信息'],
  ['04', '服务端复核', '校验玩家、快照、目标类型与重复请求'],
  ['05', '收益同步', '按标签与稀有度结算，通过 Repgen/Proto 同步'],
  ['06', 'GM 与埋点', '失败码、生成工具、结果反馈与交互统计'],
]

export const jinnTools = [
  ['HTN', 'Sensor / Operator / Domain 组织怪物感知、目标选择与行为切换。'],
  ['RecastNav', '导航网格、地图分区、活动范围、动态避障与复杂地形移动。'],
  ['Timeline / BattleData', '位移、碰撞、伤害、动画、音频与 VFX 的可视化生产管线。'],
  ['ECS Buff', '属性、控制状态、触发器和战斗效果的组合式复用。'],
  ['运行时调试', '围绕多人对局中的配置、状态与结果反馈，改进玩法调试流程。'],
]

export const engineCapabilities = [
  ['世界权威', '讨论如何让模型提出意图，由规则系统校验并执行状态变更。'],
  ['能力与副作用', '为工具调用定义输入、前置条件、权限和可恢复的操作边界。'],
  ['观察与验证', '把运行轨迹、故障恢复和评测纳入设计，区分工具成功与结果正确。'],
]

export const evidenceUrl = 'https://github.com/futuredo/game-client-portfolio/blob/main/docs/PROJECT_EVIDENCE.md'

const swarm = 'https://github.com/futuredo/swarm-ecs-sandbox'
const swarmSource = `${swarm}/blob/829693ba7fa13e6b33963e7697f80402d9e2966e`
const graph = 'https://github.com/futuredo/graphview-skill-system'
const graphSource = `${graph}/blob/d628d22ee27c762a79b1d8f7aac9c479124a245e`
const kcp = 'https://github.com/futuredo/kcp-sync-core'
const streaming = 'https://github.com/futuredo/streaming-world-manager'

export const labs = [
  {
    id: 'swarm', index: '01', title: 'Swarm ECS Sandbox', subtitle: '确定性仿真 · 空间算法 · 回放与网络',
    image: 'assets/swarm-ecs.png', url: swarm, status: 'macOS 演示已发布 · v0.4.0',
    description: '把一万 Agent 的逻辑放入纯 C# 定点数据层，Unity 负责表现。用共享寻路、空间查询、避障、碰撞和状态哈希，观察复杂仿真如何保持可解释。',
    proof: '10,000 Agent 逻辑基准；独立的 512 Agent / 3 进程 UDP 记录。',
    scope: '逻辑基准使用 Null Device；UDP 记录为本机回环、210 ticks。跨机器联网、快照修复与跨平台性能仍需验证。',
    links: [
      { label: '下载 macOS 演示', url: `${swarm}/releases/tag/v0.4.0` },
      { label: '逻辑基准', url: `${swarmSource}/BenchmarkResults/latest.md` },
      { label: '网络实验记录', url: `${swarmSource}/NetworkResults/latest/latest.md` },
    ],
  },
  {
    id: 'graphview', index: '02', title: 'GraphView Skill System', subtitle: '技能图编辑 · 编译器 · 运行时调试',
    image: 'assets/graphview-skill.jpg', url: graph, status: '源码与验收记录公开',
    description: '从可视化技能图编译到 GSKL 二进制，再由多实体 VM 执行。支持编译诊断、事务命令缓冲、实体轨迹、断点和单 Tick 调试。',
    proof: '61/61 EditMode 历史验收快照 · 2026-07-17。',
    scope: '1,000 实体 p95 345.4 μs、0 B 属于特定 Editor 回归测量段；不代表整个帧或目标设备 Player 性能。',
    links: [
      { label: '运行与编图指南', url: `${graphSource}/README.md#quick-start` },
      { label: '测试记录', url: `${graphSource}/Documentation/TEST_RESULTS.md` },
      { label: '性能口径', url: `${graphSource}/Documentation/BENCHMARKS.md` },
    ],
  },
  {
    id: 'kcp', index: '03', title: 'KCP Sync Core', subtitle: '客户端预测 · 快照插值 · 服务器校正',
    image: 'assets/kcp-sync.png', url: kcp, status: '默认分支与 UDP 开发分支分开展示',
    description: '固定 Tick 与 Q16.16 模拟，可靠输入与不可靠快照分流。默认分支提供 loopback 实验；公开开发分支增加真实 IPv4 UDP 与独立客户端／服务端。',
    proof: 'main：12 项 EditMode 基线；UDP 开发分支：47 项用例。',
    scope: '47 项对应 agent/udp-dedicated-server（0260383），尚未合入 main。本轮核对源码与历史报告，没有重跑 Unity 测试。',
    links: [
      { label: '默认分支说明', url: `${kcp}/blob/ba3d1b8b0e2957f51d476ccf5a56286b207191ff/README.md` },
      { label: 'UDP 分支与 47 项说明', url: `${kcp}/blob/0260383340b811d1a916f0808cdc208947b401b0/README.md` },
    ],
  },
  {
    id: 'streaming', index: '04', title: 'Streaming World Manager', subtitle: '分级驻留 · 资源租约 · 时间分片',
    image: 'assets/streaming-world.png', url: streaming, status: '以公开 main 的能力为准',
    description: '以四叉树管理 4,096 个逻辑 Chunk，串联预测预取、过期请求丢弃、共享资源租约、对象池与 HLOD 过渡，观察加载和回收的生命周期。',
    proof: '公开版本基线：30 EditMode + 3 PlayMode。',
    scope: '3 ms 调度预算和稳态 0 B 是有条件的目标，待 Player 实测。63 + 4 的本地报告对应未提交版本，不计入公开主分支。',
    links: [
      { label: '公开版本说明', url: `${streaming}/blob/9120d1f37f9cc44ce2ac3205f27c09ff857153cd/README.md` },
      { label: '性能验证规范', url: `${streaming}/blob/9120d1f37f9cc44ce2ac3205f27c09ff857153cd/PERFORMANCE.md` },
    ],
  },
]

export const creativeWorks = [
  ['菇与勇者', '主程 / 技术美术；Vector-to-Mesh 程序化地牢、可视化关卡编辑器、Billboarding 与像素化后处理。'],
  ['eat is rule', '规则驱动解谜；主谓宾语义扫描、规则热更新、策略模式交互、Command Undo 与观察者 UI。'],
  ['逆序圣典', 'Unity VR 动作 RPG；凝视锁定、手势施法、冷兵器/元素战斗、Boss 状态与 VFX 解耦。'],
  ['VR 数字展馆', '五人团队队长 / 主程；STT → DeepSeek → TTS → OVRLipSync，VR 毛笔与 OCR、星宿连线、物理射箭。'],
  ['记忆宫殿', '三维重建 / AI 重建旧物的梦核漫游；7 场景、5 件互动旧物、NPC、隐藏异常与最终展厅。'],
]

export const aiWorkflow = [
  ['01', '规格与边界', '先定义玩法闭环、所有权、可修改目录、资源依赖和验收层级。'],
  ['02', '项目取证', '同时追踪 Code → Config → Asset/Prefab → Scene → Runtime。'],
  ['03', '受控执行', '任务拆成可回滚小步；关键修改经过 Capability / Policy / 审批。'],
  ['04', '分层验证', '静态 → Headless → Unity 编译 → Edit/Play Mode → 多人/设备 → Player/GPU。'],
  ['05', '交付证据', '保留测试 XML、benchmark JSON、截图、状态 hash、版本与已知边界。'],
]

export const timeline = [
  ['2026.04 — 至今', '微派网络', '游戏客户端开发工程师', 'Unity 客户端、ET/C# 权威战斗服、配置协议、怪物 AI、战斗工具与版本交付。'],
  ['2025.06 — 2025.08', '哈米科技', 'Unity 技术美术实习生', '三渲二角色渲染、SDF 阴影、Ramp/Matcap、Sobel 描边、资源与关卡工具。'],
  ['2023.09 — 2027.06', '成都东软学院', '虚拟现实技术 · GPA 4.35 / 5.0 · Top 1', '数据结构、操作系统、计算机网络、计算机图形学、Unity、Shader 与 Unreal Engine。'],
]
