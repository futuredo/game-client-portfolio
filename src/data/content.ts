export const navItems = [
  { label: '项目', href: '#project-jinn' },
  { label: '引擎', href: '#engine' },
  { label: '实验', href: '#labs' },
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
  ['运行时热调 3x', '把改表、导表、部署、重启、重新进局压缩为真实多人对局内闭环。'],
]

export const engineCapabilities = [
  ['World + Snapshot', 'generation handle、场景 schema、增量快照与确定性状态哈希。'],
  ['Scheduler DAG', '系统依赖分层、同层并行、FixedStep 与时间域管理。'],
  ['Capability / Policy / Trace', '提案、Dry Run、策略、提交、事件与证据追踪。'],
  ['Input Tape / Lockstep', '输入磁带、回放、检查点与 PersistedStateHash 一致性。'],
  ['13 MCP Tools', '通过受控接口开放世界、实体、AI、渲染、调试与回滚能力。'],
]

export const labs = [
  {
    index: '01', title: 'Swarm ECS Sandbox', subtitle: '10,000 Agent 确定性仿真',
    image: 'assets/swarm-ecs.png', url: 'https://github.com/futuredo/swarm-ecs-sandbox',
    description: 'Q16.16 定点数、固定容量 SoA ECS、Uniform Grid/KD-Tree、预算化 A*、ORCA/RVO、SAT/CCD、Snapshot/Rollback/Replay 与权威 UDP 会话。',
    proof: 'EditMode 200/200 · macOS Player · 0 alloc 热路径证据',
  },
  {
    index: '02', title: 'KCP Sync Core', subtitle: '固定 Tick、预测 / 校正 / 重演',
    image: 'assets/kcp-sync.png', url: 'https://github.com/futuredo/kcp-sync-core',
    description: 'Q16.16 权威模拟、客户端预测与校正重演、远端快照插值、jitter-buffer time dilation，以及 IPv4 UDP + kcp2k 双通道。',
    proof: '47 tests · 协议 golden bytes · 弱网与旧会话回放',
  },
  {
    index: '03', title: 'GraphView Skill System', subtitle: '技能图编译器与多实体 VM',
    image: 'assets/graphview-skill.jpg', url: 'https://github.com/futuredo/graphview-skill-system',
    description: 'UI Toolkit / GraphView 技能图确定性编译为 GSKL v1 二进制，预分配多实体 VM、事务命令缓冲、trace、断点与单 Tick 调试。',
    proof: '61/61 · 1,000 实体 p95 345.4 μs · 0 B',
  },
  {
    index: '04', title: 'Streaming World Manager', subtitle: '4,096 Chunk 大世界流式加载',
    image: 'assets/streaming-world.png', url: 'https://github.com/futuredo/streaming-world-manager',
    description: '四叉树查询、分级驻留、速度预测、epoch 失效、I/O 背压、资源租约、对象池、时间分片与 HLOD Dither Cross-Fade。',
    proof: '63 EditMode + 4 PlayMode · YooAsset 生命周期',
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
