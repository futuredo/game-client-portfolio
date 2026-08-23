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
        label="CORE COMMERCIAL PROJECT"
        title="Project Jinn — 商业项目全链路"
        intro="多人 PVE 合作生存搜打撤手游｜Unity 6 + ET/C#｜2026.04 — 至今。工作重点不是单点功能，而是把复杂玩法做成可配置、可同步、可观测、可测试、可持续演进的系统。"
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

      <div className="delivery-proof reveal">
        <div className="delivery-copy">
          <span>真实交付证明</span>
          <strong>跨客户端、战斗服、配置协议三仓持续交付</strong>
          <p>统计来自本机 Git author=宋子涵，已排除 merge commit；用于说明持续交付范围，不代替运行时验收。</p>
        </div>
        {[['302', 'Client'], ['145', 'Server'], ['58', 'Config / Proto']].map(([number, label]) => (
          <div className="delivery-number" key={label}><strong>{number}</strong><span>{label}</span><small>非合并提交</small></div>
        ))}
      </div>

      <p className="confidentiality-note reveal"><ShieldCheck size={16} />公开版仅展示职责、架构与结果，不包含公司源码、内部路径与项目资产。</p>
    </section>
  )
}
