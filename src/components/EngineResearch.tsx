import { ArrowUpRight } from 'lucide-react'
import { engineCapabilities } from '../data/content'
import { SectionHeading } from './SectionHeading'

export function EngineResearch({ asset }: { asset: (path: string) => string }) {
  return (
    <section className="section section--engine" id="engine">
      <SectionHeading index="03" label="ARCHITECTURE RESEARCH" title="AI 原生游戏引擎：架构研究"
        intro="研究如何让智能体通过明确的能力协议参与游戏生产，并保留世界权威、操作边界和验证记录。公开材料是《AI 原生游戏引擎设计》v0.2，156 页设计文稿。" />
      <div className="engine-feature">
        <figure className="engine-media reveal">
          <img src={asset('assets/ainge-editor-concept.png')} alt="AINGE Studio 编辑器概念图，非运行截图" loading="lazy" />
          <figcaption>AINGE Studio · 编辑器概念图；本节展示设计研究</figcaption>
        </figure>
        <div className="capability-list reveal">
          <h3>文稿讨论的问题</h3>
          {engineCapabilities.map(([title, detail]) => <div className="research-row" key={title}><strong>{title}</strong><p>{detail}</p></div>)}
          <div className="project-links">
            <a href="https://futuredo.github.io/ai-native-game-engine-design/" target="_blank" rel="noreferrer">在线阅读<ArrowUpRight size={14} /></a>
            <a href="https://github.com/futuredo/ai-native-game-engine-design" target="_blank" rel="noreferrer">文稿仓库<ArrowUpRight size={14} /></a>
          </div>
        </div>
      </div>
    </section>
  )
}
