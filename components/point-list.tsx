import { ArrowRight } from "lucide-react"

export default function PointList({ items }: { items: string[] }) {
  return (
    <ul className="points">
      {items.map((item) => (
        <li key={item}>
          <ArrowRight aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}
