import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import CtaBand from "@/components/cta-band"
import Heading from "@/components/heading"
import MediaFrame from "@/components/media-frame"
import PageHeader from "@/components/page-header"
import PointList from "@/components/point-list"
import Section from "@/components/section"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    title: "Particuliere dienstverlening",
    description:
      "U kunt bij ons terecht met financiële vraagstukken, maar ook voor persoonlijke begeleiding wanneer het even niet alleen lukt. Van belastingaangifte tot ondersteuning bij NAH: altijd afgestemd op wat u nodig heeft.",
    points: ["Financiële begeleiding", "Individuele begeleiding"],
    href: "/diensten/particulier",
    image: "/img/card/part_dienst.jpg",
    imageAlt: "Particuliere dienstverlening",
  },
  {
    title: "Bewindvoering",
    description:
      "Soms lukt het niet (meer) om de eigen financiën goed te overzien. Bewindvoering of budgetcoaching kan in zulke situaties uitkomst bieden. We kijken samen met u wat het beste past bij uw persoonlijke situatie.",
    points: [
      "Vaste lasten betalen",
      "Bankrekeningen beheren",
      "Het aanvragen van toeslagen en uitkeringen",
      "Het aflossen van schulden (indien mogelijk)",
      "Een overzichtelijk budgetplan",
    ],
    href: "/diensten/bewindvoering",
    image: "/img/card/bewind.jpg",
    imageAlt: "Bewindvoering",
  },
  {
    title: "Zakelijke dienstverlening",
    description:
      "Wij ondersteunen zzp’ers en mkb’ers met hun administratie, belastingaangiften en financiële planning. Ook voor startersbegeleiding, loonadministratie en advies op maat kunt u bij ons terecht.",
    points: [
      "Financiële administratie",
      "Belastingaangiften (BTW, IB)",
      "Jaarrekeningen",
      "Debiteurenbeheer",
      "Startersbegeleiding",
    ],
    href: "/diensten/zakelijk",
    image: "/img/card/zak_dienst.jpg",
    imageAlt: "Zakelijke dienstverlening",
  },
]

export const metadata: Metadata = {
  title: "Diensten",
  description:
    "Overzicht van onze diensten: particuliere dienstverlening, zakelijke administratie en belastingaangiften, en bewindvoering of budgetcoaching.",
}

export default function Diensten() {
  return (
    <>
      <PageHeader
        eyebrow="Diensten"
        title="Onze diensten"
        crumbs={[{ href: "/", label: "Home" }, { label: "Diensten" }]}
      />

      <Section>
        {services.map((service, index) => (
          <article key={service.href} className={index % 2 === 1 ? "feature feature--flip" : "feature"}>
            <MediaFrame className="media--feature" src={service.image} alt={service.imageAlt} />
            <div>
              <Heading title={service.title} />
              <p className="lede">{service.description}</p>
              <PointList items={service.points} />
              <div className="actions">
                <Button asChild>
                  <Link href={service.href}>
                    Meer informatie
                    <ArrowRight />
                  </Link>
                </Button>
              </div>
            </div>
          </article>
        ))}
      </Section>

      <CtaBand
        title="Klaar om uw financiën op orde te brengen?"
        text="Neem vandaag nog contact met ons op voor een vrijblijvend gesprek over hoe wij u kunnen helpen."
        href="/contact"
        label="Contact opnemen"
      />
    </>
  )
}
