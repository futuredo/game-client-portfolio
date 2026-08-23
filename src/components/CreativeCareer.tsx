import { ArrowDownToLine, ArrowRight, ArrowUpRight, GitFork, Mail, Trophy } from 'lucide-react'
import { aiWorkflow, creativeWorks, timeline } from '../data/content'
import { SectionHeading } from './SectionHeading'

type CreativeCareerProps = { asset: (path: string) => string; resumeUrl: string }

export function CreativeCareer({ asset, resumeUrl }: CreativeCareerProps) {
  return (
    <>
      <section className="section section--creative" id="creative">
        <SectionHeading
          index="05"
          label="CREATIVE WORK"
          title="游戏创作与交互作品"
          intro="从 GameJam 的快速完整交付，到 VR 交互、规则解谜和梦核叙事。这里关注的不只是点子，而是把美术、交互、工具和运行时做成一套能上线的作品。"
        />
        <div className="creative-layout">
          <div className="creative-list reveal">
            <article className="creative-lead">
              <span>FEATURED WORK</span>
              <h3>Glitch</h3>
              <p>2D Meta 解谜｜TapTap 聚光灯 GameJam 获奖｜21 天上线</p>
              <div className="creative-proof"><strong>9.4</strong><span>评分</span><strong>2w+</strong><span>浏览</span><strong>2k+</strong><span>游玩</span></div>
            </article>
            {creativeWorks.map(([title, detail]) => (
              <article className="creative-row" key={title}>
                <div><strong>{title}</strong><p>{detail}</p></div><ArrowRight size={18} />
              </article>
            ))}
          </div>
          <div className="creative-media reveal reveal--delay">
            <figure className="media-frame media-frame--glitch">
              <img src={asset('assets/glitch.webp')} alt="Glitch 游戏封面" loading="lazy" />
              <figcaption>Glitch · 2D Meta Puzzle</figcaption>
            </figure>
            <figure className="media-frame media-frame--memory">
              <img src={asset('assets/memory-palace.jpg')} alt="记忆宫殿项目 A3 展板" loading="lazy" />
              <figcaption>记忆宫殿 · 7 场景梦核互动漫游</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section section--workflow" id="workflow">
        <SectionHeading
          index="06"
          label="AI WORKFLOW"
          title="AI 辅助游戏开发工作流"
          intro="AI 不替代工程判断；它放大可追踪、可回滚、可验证的生产流程。"
        />
        <div className="workflow-line reveal">
          {aiWorkflow.map(([index, title, detail]) => (
            <article className="workflow-step" key={index}>
              <span>{index}</span><i />
              <h3>{title}</h3><p>{detail}</p>
            </article>
          ))}
        </div>
        <div className="workflow-proof reveal">
          <span>已跑通</span>
          <p>Project Jinn 战斗服数据采集与 Gameplay 自动化入口；AINGE TaskToken / Checkpoint / Trace；Unity 项目从规格、资源接线到构建、测试与截图的自动化闭环。</p>
        </div>
      </section>

      <section className="section section--experience" id="experience">
        <SectionHeading
          index="07"
          label="EXPERIENCE & EDUCATION"
          title="经历与教育"
        />
        <div className="timeline">
          {timeline.map(([date, org, role, detail]) => (
            <article className="timeline-item reveal" key={date}>
              <div className="timeline-marker" aria-hidden="true"><i /></div>
              <time>{date}</time>
              <div><h3>{org}</h3><strong>{role}</strong><p>{detail}</p></div>
            </article>
          ))}
        </div>
        <div className="honors reveal">
          <Trophy size={22} aria-hidden="true" />
          <p>全国大学生数字媒体科技作品和创意竞赛一等奖</p><i />
          <p>中国大学生计算机设计大赛 A 类国家三等奖</p><i />
          <p>全国三维数字化创新设计大赛省级特等奖</p>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-grid" aria-hidden="true" />
        <h2 className="reveal">一起做出值得被记住的<span>游戏系统。</span></h2>
        <div className="contact-links reveal">
          <a href="https://github.com/futuredo" target="_blank" rel="noreferrer"><GitFork size={23} />GitHub<ArrowUpRight size={16} /></a>
          <a href="mailto:songzihan200@gmail.com"><Mail size={23} />Email<ArrowUpRight size={16} /></a>
          <a href="https://www.xyxya.xyz/" target="_blank" rel="noreferrer">个人主页<ArrowUpRight size={16} /></a>
          <a href="https://futuredo.github.io/interview-app/" target="_blank" rel="noreferrer">Unity 面试宝典<ArrowUpRight size={16} /></a>
        </div>
        <a className="button button--outline contact-download reveal" href={resumeUrl} download>
          <ArrowDownToLine size={19} />下载完整简历
        </a>
      </section>
    </>
  )
}
