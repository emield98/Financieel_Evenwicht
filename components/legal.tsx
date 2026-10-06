import type { ReactNode } from "react"

export type LegalTocItem = { id: string; label: string }

/** Inhoudsopgave met ankerlinks naar LegalSection-blokken op dezelfde pagina. */
export function LegalToc({ items }: { items: LegalTocItem[] }) {
  return (
    <nav className="toc" aria-label="Inhoudsopgave">
      <p className="eyebrow">Inhoud</p>
      <ol>
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`}>{item.label}</a>
          </li>
        ))}
      </ol>
    </nav>
  )
}

export function LegalSection({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="legal-section">
      <h2>{title}</h2>
      {children}
    </section>
  )
}
