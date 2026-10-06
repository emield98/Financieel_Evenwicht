import ContactPanel from "@/components/contact-panel"
import MediaFrame from "@/components/media-frame"
import PageHeader from "@/components/page-header"
import RelatedServices from "@/components/related-services"
import Section from "@/components/section"

type ServicePageProps = {
  title: string
  crumb: string
  image: string
  imageAlt: string
  asideTitle: string
  asideText: string
  exclude: string
  children: React.ReactNode
}

export default function ServicePage({
  title,
  crumb,
  image,
  imageAlt,
  asideTitle,
  asideText,
  exclude,
  children,
}: ServicePageProps) {
  return (
    <>
      <PageHeader
        eyebrow="Diensten"
        title={title}
        crumbs={[{ href: "/", label: "Home" }, { href: "/diensten", label: "Diensten" }, { label: crumb }]}
      />
      <Section>
        <div className="split">
          <div className="copy">{children}</div>
          <aside className="split__aside">
            <MediaFrame className="media--tall" src={image} alt={imageAlt} />
            <ContactPanel title={asideTitle} text={asideText} />
          </aside>
        </div>
      </Section>
      <RelatedServices exclude={exclude} />
    </>
  )
}
