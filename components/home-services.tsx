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
    <section className="border-t-4 border-primary bg-[#f7f4f2]">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Diensten</p>
        <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Onze diensten
        </h2>
        <span className="mt-5 block h-px w-12 bg-primary" aria-hidden="true" />
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Wij bieden een breed scala aan financiële en fiscale diensten voor particulieren en bedrijven
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.href} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
