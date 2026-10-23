import { Activity, ArrowRight, Box, Camera, Database, Layers3, Network, Radar, ShieldCheck, Wrench } from 'lucide-react'
import { useState } from 'react'
import { jinnLayers, jinnTools, photoSteps } from '../data/content'
import { SectionHeading } from './SectionHeading'

const layerIcons = [Box, Network, Layers3, Database]
const stepIcons = [Camera, Activity, Radar, ShieldCheck, Database, Wrench]

export function ProjectJinn() {
  const [activeLayer, setActiveLayer] = useState(jinnLayers[0].id)
  const layer = jinnLayers.find((item) => item.id === activeLayer) ?? jinnLayers[0]

  return (
    <section className="section section--jinn" id="project-jinn">
      <SectionHeading
        index="02"
        label="PROFESSIONAL EXPERIENCE"
        title="Project Jinn — 多人玩法与工程实践"
        intro="Unity 6 + ET/C#｜2026.04 — 至今。个人工作经历摘要：参与客户端、权威战斗服与配置协议之间的玩法实现、调试和版本交付。"
      />

      <div className="jinn-layout">
        <div className="architecture reveal">
          <h3><span>01</span> 端服四层架构</h3>
          <div className="architecture-stack">
            {jinnLayers.map((item, index) => {
              const Icon = layerIcons[index]
              return (
                <button
                  key={item.id}
                  className={activeLayer === item.id ? 'architecture-layer is-active' : 'architecture-layer'}
                  onMouseEnter={() => setActiveLayer(item.id)}
                  onFocus={() => setActiveLayer(item.id)}
                  onClick={() => setActiveLayer(item.id)}
                >
                  <span className="architecture-layer__index">{item.index}</span>
                  <Icon size={28} aria-hidden="true" />
                  <span><strong>{item.title}</strong><small>{item.stack}</small></span>
                  <ArrowRight size={18} aria-hidden="true" />
                </button>
              )
            })}
          </div>
          <div className="architecture-detail" aria-live="polite">
            <span>{layer.index}</span><strong>{layer.title}</strong><p>{layer.detail}</p>
          </div>
        </div>

        <aside className="toolchain reveal reveal--delay">
          <h3><span>03</span> 怪物 AI 与工具链</h3>
          <div className="toolchain-list">
            {jinnTools.map(([title, detail], index) => (
              <details key={title} open={index === 0}>
                <summary><i />{title}<ArrowRight size={16} /></summary>
                <p>{detail}</p>
              </details>
            ))}
          </div>
        </aside>
      </div>

      <div className="photo-system reveal">
        <h3><span>02</span> 拍照与灵异异常：从取景到权威结算</h3>
        <div className="photo-steps">
          {photoSteps.map(([index, title, detail], i) => {
            const Icon = stepIcons[i]
            return (
              <article key={index} className="photo-step">
                <header><span>{index}</span><Icon size={22} /></header>
                <strong>{title}</strong>
                <p>{detail}</p>
              </article>
            )
          })}
        </div>
      </div>

      <div className="delivery-proof delivery-proof--summary reveal">
        <div className="delivery-copy">
          <span>个人参与范围</span>
          <strong>沿客户端、战斗服、配置协议追踪完整玩法流程</strong>
          <p>关注输入反馈、权威校验、结果同步和故障定位。此处为个人职责说明；可公开复现的源码与实验记录见上方工程作品。</p>
        </div>
      </div>

      <p className="confidentiality-note reveal"><ShieldCheck size={16} />公开版仅展示职责、架构与结果，不包含公司源码、内部路径与项目资产。</p>
    </section>
  )
}
