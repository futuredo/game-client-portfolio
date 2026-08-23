import { ArrowDownRight, ArrowUpRight, GitFork } from 'lucide-react'

type HeroProps = { asset: (path: string) => string }

const proof = [
  ['505', '非合并提交'],
  ['3', '仓端服交付'],
  ['GPA Top 1', '4.35 / 5.0'],
]

const tech = ['Unity 6', 'ET/C#', 'Repgen', 'HTN', 'RecastNav', 'ECS Buff', 'C++23', 'Metal']

export function Hero({ asset }: HeroProps) {
  return (
    <section className="hero" id="about" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-trace" aria-hidden="true"><i /><i /><i /></div>
      <div className="hero-copy reveal">
        <h1 id="hero-title">把复杂玩法，<br />做成可配置、可同步、<br />可验证的系统。</h1>
        <div className="hero-identity">
          <strong>宋子涵</strong>
          <span>Unity 游戏客户端 / Gameplay / 客户端工具与引擎</span>
        </div>
        <p>从商业多人 PVE 的端服全链路，到 C++23 原生引擎与确定性网络实验。</p>
        <div className="hero-actions">
          <a className="button button--primary" href="#project-jinn">查看核心项目 <ArrowDownRight size={18} /></a>
          <a className="button button--ghost" href="https://github.com/futuredo" target="_blank" rel="noreferrer">
            <GitFork size={18} />GitHub <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
      <div className="hero-portrait reveal reveal--delay">
        <div className="portrait-calibration" aria-hidden="true"><span>20</span><span>30</span><span>20</span></div>
        <img src={asset('assets/portrait.jpg')} alt="宋子涵证件照" />
        <span className="portrait-coordinate" aria-hidden="true">PX.2303302019</span>
      </div>
      <div className="proof-rail reveal">
        {proof.map(([value, label]) => (
          <div key={value} className="proof-item"><strong>{value}</strong><span>{label}</span></div>
        ))}
      </div>
      <a className="project-preview reveal" href="#project-jinn">
        <div>
          <span>核心商业项目</span>
          <strong>Project Jinn</strong>
          <p>多人 PVE 项目中的客户端核心系统与战斗玩法全链路交付。</p>
        </div>
        <ArrowDownRight size={28} aria-hidden="true" />
      </a>
      <div className="tech-rail" aria-label="核心技术栈">
        {tech.map((item) => <span key={item}>{item}</span>)}
      </div>
    </section>
  )
}
