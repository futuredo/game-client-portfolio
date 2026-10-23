import { ArrowUpRight, GitFork } from 'lucide-react'
import { evidenceUrl, labs } from '../data/content'
import { SectionHeading } from './SectionHeading'

type EngineLabsProps = { asset: (path: string) => string }

export function EngineLabs({ asset }: EngineLabsProps) {
  return (
    <section className="section section--labs" id="labs">
      <SectionHeading index="01" label="SELECTED ENGINEERING WORK" title="从运行画面，走进实现。"
        intro="优先看 Swarm 的仿真与网络实验，再看 GraphView 的内容编译与调试流程。每个项目都提供源码、验证范围和可继续阅读的记录。" />
      <div className="evidence-note reveal">
        <span>版本核对 · 2026-10-23</span>
        <p>测试与性能数字保留各自的环境和日期；开发分支、历史报告和已发布版本分别标注。</p>
        <a href={evidenceUrl} target="_blank" rel="noreferrer">查看完整依据 <ArrowUpRight size={15} /></a>
      </div>
      <div className="project-grid">
        {labs.map((lab) => (
          <article className="project-card reveal" key={lab.id} id={lab.id}>
            <div className="project-card__heading"><span>{lab.index} / {Number(lab.index) <= 2 ? '重点作品' : '专项实验'}</span><span>{lab.status}</span></div>
            <a className="project-card__image" href={lab.url} target="_blank" rel="noreferrer" aria-label={'查看 ' + lab.title + ' 源码'}>
              <img src={asset(lab.image)} alt={lab.title + ' 演示界面'} loading="lazy" />
            </a>
            <div className="project-card__body">
              <h3>{lab.title}</h3><p className="project-card__subtitle">{lab.subtitle}</p>
              <p>{lab.description}</p>
              <div className="project-card__proof"><span>验证记录</span><p>{lab.proof}</p></div>
              <details className="project-scope"><summary>版本与验证范围</summary><p>{lab.scope}</p></details>
              <div className="project-links">
                {lab.links.map((link) => <a key={link.url} href={link.url} target="_blank" rel="noreferrer">{link.label}<ArrowUpRight size={14} /></a>)}
                <a href={lab.url} target="_blank" rel="noreferrer" aria-label={'打开 ' + lab.title + ' GitHub 仓库'}><GitFork size={14} />源码</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
