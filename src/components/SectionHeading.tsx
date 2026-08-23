type SectionHeadingProps = {
  index: string
  label: string
  title: string
  intro?: string
}

export function SectionHeading({ index, label, title, intro }: SectionHeadingProps) {
  return (
    <header className="section-heading reveal">
      <div className="section-heading__meta" aria-hidden="true">
        <span>{index}</span>
        <span>{label}</span>
        <i />
      </div>
      <h2>{title}</h2>
      {intro && <p>{intro}</p>}
    </header>
  )
}
