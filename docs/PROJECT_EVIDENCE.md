# 作品版本与验证依据

核对日期：2026-10-23。此页将公开默认分支、公开开发分支、本地历史测试报告分开记录。本轮进行了仓库和报告核对，没有重新运行 Unity 测试；历史通过结果不等于当前版本重新验收。

## KCP Sync Core

| 范围 | 版本 | 数量与含义 |
|---|---|---|
| 公开 main | ba3d1b8b0e2957f51d476ccf5a56286b207191ff | README 基线为 12 个 EditMode 用例，单进程 loopback |
| 公开 agent/udp-dedicated-server | 0260383340b811d1a916f0808cdc208947b401b0 | README 记载 47 个 EditMode 用例，包含 IPv4 UDP 与独立端服实现 |
| 本机历史报告 editmode-final.xml | 2026-07-14 12:57:10 UTC | 47 total / 47 passed / 0 failed / 0 skipped |

[main 说明](https://github.com/futuredo/kcp-sync-core/blob/ba3d1b8b0e2957f51d476ccf5a56286b207191ff/README.md) · [UDP 分支说明](https://github.com/futuredo/kcp-sync-core/blob/0260383340b811d1a916f0808cdc208947b401b0/README.md)

核对时本地工作树干净、HEAD 与公开 UDP 分支一致。原始 XML 没有记录 commit SHA，不能仅凭当前 HEAD 将历史报告绑定到精确提交。网站将 47 表述为开发分支的用例数量，没有写成今日对该提交重新跑出的成绩。该分支尚未合入 main。

## Streaming World Manager

| 范围 | 版本 | 数量与含义 |
|---|---|---|
| 公开 main | 9120d1f37f9cc44ce2ac3205f27c09ff857153cd | README 与 PERFORMANCE.md：30 EditMode + 3 PlayMode 基线 |
| 本地开发工作树 | 基于上述提交，含未提交代码 | 本地说明：63 EditMode + 4 PlayMode |
| 本机历史 EditMode 报告 | 2026-07-17 08:10:17 UTC | 63 total / 63 passed / 0 failed / 0 skipped |
| 本机历史 PlayMode 报告 | 2026-07-17 08:11:23 UTC | 4 total / 4 passed / 0 failed / 0 skipped |

[公开 README](https://github.com/futuredo/streaming-world-manager/blob/9120d1f37f9cc44ce2ac3205f27c09ff857153cd/README.md) · [性能验证规范](https://github.com/futuredo/streaming-world-manager/blob/9120d1f37f9cc44ce2ac3205f27c09ff857153cd/PERFORMANCE.md)

63 + 4 的记录有本地来源，但不能归为公开 main 的验收结果。本次没有提交、合并或改动该工程。XML 也没有记录其完整源码快照。网站使用可公开检查的 30 + 3 基线，3 ms 调度预算与受控稳态 0 B 保持为待目标 Player 验证的目标。

## Swarm ECS Sandbox

核对 main：829693ba7fa13e6b33963e7697f80402d9e2966e。[v0.4.0 Release](https://github.com/futuredo/swarm-ecs-sandbox/releases/tag/v0.4.0)有 macOS Universal 包、网络证据及校验附件；Release 与 main 各自的证据范围分别保留。

- [逻辑基准](https://github.com/futuredo/swarm-ecs-sandbox/blob/829693ba7fa13e6b33963e7697f80402d9e2966e/BenchmarkResults/latest.md)：2026-07-14，Unity 6000.3.9f1，Apple M5 Pro，Null Device，10,000 Agent，调用线程 + 14 workers，8 warmup / 32 sample ticks。平均 15.541 ms、p95 16.734 ms；当前采样线程分配 0 B。不能推导完整渲染帧率或全部线程零分配。
- [网络记录](https://github.com/futuredo/swarm-ecs-sandbox/blob/829693ba7fa13e6b33963e7697f80402d9e2966e/NetworkResults/latest/latest.md)：512 Agent/world，三个本机 Player 进程、210 ticks、4 条权威命令，最终 hash 收敛。
- [Socket 实现](https://github.com/futuredo/swarm-ecs-sandbox/blob/829693ba7fa13e6b33963e7697f80402d9e2966e/Assets/SwarmSandbox/Runtime/Networking/SwarmUdpSocketWorker.cs)绑定 IPAddress.Loopback，公开展示不声称已完成跨机器 LAN 验收。

## GraphView Skill System

核对 main：d628d22ee27c762a79b1d8f7aac9c479124a245e。

- [测试记录](https://github.com/futuredo/graphview-skill-system/blob/d628d22ee27c762a79b1d8f7aac9c479124a245e/Documentation/TEST_RESULTS.md)：2026-07-17 07:44:28 UTC，61/61 EditMode，记录中的 Source revision 为 bcb1f26e60e28ad48c46117a9cdf2adac753c568。
- [性能记录](https://github.com/futuredo/graphview-skill-system/blob/d628d22ee27c762a79b1d8f7aac9c479124a245e/Documentation/BENCHMARKS.md)：1,000 实体 p95 345.4 μs 与 0 B 是指定 Editor 环境、预热后限定区间的结果，不代表整个帧、Player 或其他设备。

## 展示口径

作品集优先链接以上可公开检查的记录。没有公开出处的提交计数、提效倍数和引擎性能数字移出主展示；AINGE 以设计研究与概念图呈现，链接实际公开文稿。个人经历和教育资料沿用作者原有介绍，不作为第三方认证结果。原版简历文件保留，公开页面已移除下载入口；项目状态以本页为准。

后续更新数据时，应同步修改项目版本、证据链接与采样范围；新增测试报告最好同时记录 commit 和运行环境。

## 本机历史报告指纹

用于辨认本次读取的原始文件；原始 XML 含机器路径，不公开上传。指纹不替代原始报告，也不证明与某一提交的绑定。

- KCP editmode-final.xml SHA-256: `12137504d366b17e64f41523eaed0af42d81f126fb5df8167dd7565575f24858`
- Streaming editmode.xml SHA-256: `f8a2dd2d988585acd23b86935253421562e9f3f3d9d298bf033fc63422905461`
- Streaming playmode.xml SHA-256: `0ad382cd59879a029844cf7dc9e8b8cd54e42a8e0c3f5aef0b5b16fcecd05261`
