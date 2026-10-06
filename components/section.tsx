import { cn } from "@/lib/utils"

type SectionProps = {
  tone?: "white" | "paper"
  narrow?: boolean
  tight?: boolean
  className?: string
  children: React.ReactNode
}

export default function Section({
  tone = "white",
  narrow = false,
  tight = false,
  className,
  children,
}: SectionProps) {
  return (
    <section className={cn("section", tone === "paper" ? "section--paper" : "section--white", className)}>
      <div className={cn("wrap", narrow && "wrap--narrow", tight && "wrap--tight")}>{children}</div>
    </section>
  )
}
