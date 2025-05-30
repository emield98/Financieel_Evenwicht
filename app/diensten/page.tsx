import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Diensten() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Onze Diensten</h1>
          <div className="flex items-center text-sm text-white/80 mt-4">
            <Link href="/" className="hover:underline text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>Diensten</span>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12">
            {/* Particuliere dienstverlening */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image src="/img/particulier_dienst.png" alt="Particuliere dienstverlening" fill className="object-cover" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Particuliere dienstverlening</h2>
                <p className="text-lg mb-6">
                  Je kunt bij ons terecht met financiële vraagstukken, maar ook voor persoonlijke begeleiding wanneer het even niet alleen lukt. Van belastingaangifte tot ondersteuning bij NAH of ouderenzorg — altijd afgestemd op wat u nodig heeft.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>Financiële begeleiding</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>Belastingaangiften</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>Individuele begeleiding</span>
                  </li>
                </ul>
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link href="/diensten/particulier">
                    Meer informatie <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <hr className="my-8" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold mb-4">Bewindvoering</h2>
                <p className="text-lg mb-6">
                  Soms lukt het niet (meer) om de eigen financiën goed te overzien. Bewindvoering of budgetcoaching kan in zulke situaties uitkomst bieden — we kijken samen met u wat het beste past bij uw persoonlijke situatie.
                </p>
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link href="/diensten/bewindvoering">
                    Meer informatie <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl order-1 md:order-2">
                <Image src="/img/bewindvoering.png" alt="bewindvoering" fill className="object-cover" />
              </div>
            </div>

            <hr className="my-8" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold mb-4">zakelijke dienstverlening</h2>
                <p className="text-lg mb-6">
                  Wij ondersteunen zzp’ers en mkb’ers met hun administratie, belastingaangiften en financiële planning. Ook voor startersbegeleiding, loonadministratie en advies op maat kunt u bij ons terecht.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>Financiële administratie</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>Belastingaangiften (BTW, IB, VPB)</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>Jaarrekeningen</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>Debiteurenbeheer</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>Startersbegeleiding</span>
                  </li>
                </ul>
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link href="/diensten/zakelijk">
                    Meer informatie <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl order-1 md:order-2">
                <Image src="/img/zakelijk.png" alt="Particuliere dienstverlening" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Klaar om uw financiën op orde te brengen?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Neem vandaag nog contact met ons op voor een vrijblijvend gesprek over hoe wij u kunnen helpen.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Contact Opnemen</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
