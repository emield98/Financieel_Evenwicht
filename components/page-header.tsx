import Heading from "@/components/heading"
import Link from "next/link"
import { Fragment } from "react"

type Crumb = {
  href?: string
  label: string
}

type PageHeaderProps = {
  eyebrow: string
  title: string
  crumbs: Crumb[]
}

export default function PageHeader({ eyebrow, title, crumbs }: PageHeaderProps) {
  return (
    <header className="page-intro">
      <div className="wrap wrap--tight">
        <Heading as="h1" eyebrow={eyebrow} title={title} />
        <nav className="crumbs" aria-label="Kruimelpad">
          {crumbs.map((crumb, index) => (
            <Fragment key={`${crumb.label}-${index}`}>
              {index > 0 ? (
                <span className="crumbs__sep" aria-hidden="true">
                  /
                </span>
              ) : null}
              {crumb.href ? (
                <Link href={crumb.href}>{crumb.label}</Link>
              ) : (
                <span aria-current="page">{crumb.label}</span>
              )}
            </Fragment>
          ))}
        </nav>
      </div>
    </header>
  )
}
