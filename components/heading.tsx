import { cn } from "@/lib/utils"

type HeadingProps = {
  eyebrow?: string
  title: string
  intro?: string
  as?: "h1" | "h2"
  align?: "left" | "center"
  className?: string
}

export default function Heading({
  eyebrow,
  title,
  intro,
  as = "h2",
  align = "left",
  className,
}: HeadingProps) {
  const Tag = as

  return (
    <div className={cn("heading-block", align === "center" && "heading-block--center", className)}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <Tag className={as === "h1" ? "page-title" : "section-title"}>{title}</Tag>
      <span className="rule" aria-hidden="true" />
      {intro ? <p className="lede">{intro}</p> : null}
    </div>
  )
}
