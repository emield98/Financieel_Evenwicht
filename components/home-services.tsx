import Heading from "@/components/heading"
import ServiceCard from "@/components/service-card"

const services = [
  {
    title: "Particuliere dienstverlening",
    description:
      "U kunt bij ons terecht met financiële vraagstukken, maar ook voor persoonlijke begeleiding wanneer het even niet alleen lukt. Van belastingaangifte tot ondersteuning bij NAH: altijd afgestemd op wat u nodig heeft.",
    imageSrc: "/img/card/part_dienst.jpg",
    href: "/diensten/particulier",
  },
  {
    title: "Bewindvoering",
    description:
      "Soms lukt het niet (meer) om de eigen financiën goed te overzien. Bewindvoering of budgetcoaching kan in zulke situaties uitkomst bieden. We kijken samen met u wat het beste past bij uw persoonlijke situatie.",
    imageSrc: "/img/card/bewind.jpg",
    href: "/diensten/bewindvoering",
  },
  {
    title: "Zakelijke dienstverlening",
    description:
      "Wij ondersteunen zzp’ers en mkb’ers met hun administratie, belastingaangiften en financiële planning. Ook voor startersbegeleiding, loonadministratie en advies op maat kunt u bij ons terecht.",
    imageSrc: "/img/card/zak_dienst.jpg",
    href: "/diensten/zakelijk",
  },
]

export default function HomeServices() {
  return (
    <section className="section section--white">
      <div className="wrap">
        <Heading
          eyebrow="Diensten"
          title="Onze diensten"
          intro="Wij bieden een breed scala aan financiële en fiscale diensten voor particulieren en bedrijven"
        />
        <div className="card-grid">
          {services.map((service) => (
            <ServiceCard key={service.href} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
