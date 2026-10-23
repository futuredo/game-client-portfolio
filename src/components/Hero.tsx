import { ArrowDownRight, ArrowUpRight, GitFork } from 'lucide-react'
import { evidenceUrl } from '../data/content'

type HeroProps = { asset: (path: string) => string }

export function Hero({ asset }: HeroProps) {
  return (
    <section className="hero" id="about" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-copy reveal">
        <p className="eyebrow">GAMEPLAY / SIMULATION / TOOLS</p>
        <h1 id="hero-title">让玩法可实现，<br />让系统可验证。</h1>
        <div className="hero-identity">
          <img src={asset('assets/portrait.jpg')} alt="宋子涵" width="48" height="60" />
          <div><strong>宋子涵 · futuredo</strong><span>Unity 客户端 / Gameplay 工程师</span></div>
        </div>
        <p>围绕确定性仿真、网络同步和内容工具，记录从实现到调试、测量与交付的过程。</p>
        <div className="hero-actions">
          <a className="button button--primary" href="#labs">查看重点作品 <ArrowDownRight size={18} /></a>
          <a className="button button--ghost" href="https://github.com/futuredo" target="_blank" rel="noreferrer"><GitFork size={18} />GitHub <ArrowUpRight size={15} /></a>
        </div>
      </div>
      <a className="hero-showcase reveal reveal--delay" href="#swarm" aria-label="查看 Swarm ECS 项目与实验记录">
        <div className="showcase-label"><span>FEATURED / 01</span><span>Unity · C#</span></div>
        <img src={asset('assets/swarm-ecs.png')} alt="Swarm ECS 运行画面与仿真诊断面板" fetchPriority="high" />
        <div className="showcase-caption"><div><strong>Swarm ECS Sandbox</strong><span>确定性仿真与可复现的网络实验</span></div><ArrowDownRight size={24} /></div>
      </a>
      <div className="proof-rail reveal" aria-label="快速查看作品与证据">
        <a className="proof-item" href="https://github.com/futuredo/swarm-ecs-sandbox/releases/tag/v0.4.0" target="_blank" rel="noreferrer"><strong>Swarm v0.4.0</strong><span>macOS 演示与发布附件 ↗</span></a>
        <a className="proof-item" href="#graphview"><strong>GraphView</strong><span>技能编译、VM 与调试工具 ↓</span></a>
        <a className="proof-item" href={evidenceUrl} target="_blank" rel="noreferrer"><strong>版本与依据</strong><span>2026-10-23 核对记录 ↗</span></a>
      </div>
    </section>
  )
}
