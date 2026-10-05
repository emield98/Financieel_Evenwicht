import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

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
    points: ["Vaste lasten betalen", "Bankrekeningen beheren", "Het aanvragen van toeslagen en uitkeringen", "Het aflossen van schulden (indien mogelijk)", "Een overzichtelijk budgetplan"],
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

export default function Diensten() {
  return (
    <>
      <section className="page-header py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Onze diensten</h1>
          <div className="mt-4 flex items-center text-sm text-white/80">
            <Link href="/" className="text-white hover:underline">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>Diensten</span>
          </div>
        </div>
      </section>


      {services.map((service, index) => {
        const imageFirst = index % 2 === 0

        return (
          <section
            key={service.href}
            className={index % 2 === 1 ? "bg-muted/40" : "bg-white"}
          >
            <div className="container mx-auto px-4 py-14 md:py-20">
              <div className="grid items-center gap-8 md:grid-cols-2 md:gap-16">
                <div
                  className={`relative aspect-[4/3] overflow-hidden rounded-xl shadow-md ${
                    imageFirst ? "" : "md:order-2"
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className={imageFirst ? "" : "md:order-1"}>
                  <h2 className="mb-4 text-3xl font-bold">{service.title}</h2>
                  <p className="mb-6 text-lg text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="mb-8 space-y-3">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start">
                        <ArrowRight className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="bg-primary hover:bg-primary/90">
                    <Link href={service.href}>
                      Meer informatie <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        )
      })}

      <section className="bg-primary py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Klaar om uw financiën op orde te brengen?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl">
            Neem vandaag nog contact met ons op voor een vrijblijvend gesprek
            over hoe wij u kunnen helpen.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Contact opnemen</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
