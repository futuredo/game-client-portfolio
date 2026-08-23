import { ArrowUpRight, Box, GitBranch, GitFork, History, ShieldCheck, Wrench } from 'lucide-react'
import { engineCapabilities, labs } from '../data/content'
import { SectionHeading } from './SectionHeading'

type EngineLabsProps = { asset: (path: string) => string }
const capabilityIcons = [Box, GitBranch, ShieldCheck, History, Wrench]

export function EngineLabs({ asset }: EngineLabsProps) {
  return (
    <>
      <section className="section section--engine" id="engine">
        <SectionHeading
          index="03"
          label="PERSONAL ENGINE"
          title="AINGE Studio — AI 原生 C++23 游戏引擎"
          intro="目标不是给编辑器加一个聊天框，而是让人、脚本与 Agent 通过同一套受控 Capability 修改世界，并为每次变更留下可恢复、可审计的证据。"
        />
        <div className="engine-feature">
          <figure className="engine-media reveal">
            <img src={asset('assets/ainge-editor-concept.png')} alt="AINGE Studio 编辑器界面概念图" loading="lazy" />
            <figcaption>Editor interface concept · 运行时、测试与性能证据以本地源码和仓库制品为准</figcaption>
          </figure>
          <div className="capability-list reveal reveal--delay">
            <h3>开放 Capability 列表</h3>
            {engineCapabilities.map(([title, detail], index) => {
              const Icon = capabilityIcons[index]
              return (
                <div className="capability-row" key={title}>
                  <Icon size={24} aria-hidden="true" />
                  <span><strong>{title}</strong><small>{detail}</small></span>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </div>
              )
            })}
            <div className="engine-evidence">
              <p><i />约 2.3 万行 C++ / Objective-C++ / Metal</p>
              <p><i />10K 实体 build median 0.1541 ms</p>
              <p><i />GPU encode median 2.2252 ms</p>
              <p className="boundary"><i />Windows D3D11 源码已落地，尚待 Windows 实机验收</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--labs" id="labs">
        <SectionHeading
          index="04"
          label="ENGINEERING LAB"
          title="确定性、网络、工具与流式加载"
          intro="这些公开仓库用于验证特定工程命题，不与商业项目等量陈述。每个项目都强调边界、自动化证据和可复现的技术说明。"
        />
        <div className="lab-index">
          <div className="lab-spine" aria-hidden="true"><i /></div>
          {labs.map((lab) => (
            <article className="lab-item reveal" key={lab.index}>
              <div className="lab-number">{lab.index}</div>
              <div className="lab-copy">
                <h3>{lab.title}</h3>
                <span>{lab.subtitle}</span>
                <p>{lab.description}</p>
                <strong>Proof · {lab.proof}</strong>
                <a href={lab.url} target="_blank" rel="noreferrer" aria-label={`打开 ${lab.title} GitHub 仓库`}>
                  查看仓库 <ArrowUpRight size={15} />
                </a>
              </div>
              <a className="lab-media" href={lab.url} target="_blank" rel="noreferrer" tabIndex={-1} aria-hidden="true">
                <img src={asset(lab.image)} alt="" loading="lazy" />
              </a>
            </article>
          ))}
        </div>
        <a className="button button--outline lab-github" href="https://github.com/futuredo" target="_blank" rel="noreferrer">
          <GitFork size={18} />查看 GitHub 全部项目<ArrowUpRight size={16} />
        </a>
      </section>
    </>
  )
}
