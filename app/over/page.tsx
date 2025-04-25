import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function OverOns() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Over Financieel & Fiscaal Evenwicht</h1>
          <div className="flex items-center text-sm text-muted-foreground mt-4">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>Over ons</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-3xl font-bold mb-6">Onze Geschiedenis</h2>

              <p className="text-lg">
                Financieel en Fiscaal Evenwicht is sinds 2008 hét administratiekantoor voor particulieren, zzp'ers en
                mkb-bedrijven. Oprichter Margriet Doornbosch combineert meer dan 16 jaar ervaring bij ABN AMRO met
                kennis uit haar werk bij een administratiekantoor en belastingadviesbureau. Hierdoor kunnen we u breed
                en discreet adviseren op financieel gebied, en bieden we waar nodig persoonlijke begeleiding.
              </p>

              <p className="text-lg">
                Wij geloven in persoonlijk contact, wederzijds respect en vertrouwen. Of u nu een startende ondernemer
                bent of behoefte heeft aan financiële zorgbeheer, wij nemen u zoveel mogelijk werk uit handen, zodat u
                zich kunt concentreren op wat u het beste doet: ondernemen.
              </p>

              <p className="text-lg">
                Onze specialiteit ligt ook in financiële zorgbeheer, waaronder ouderenadministratie en
                beschermingsbewind. We hebben ruime ervaring in de financiële begeleiding van cliënten, waaronder mensen
                die getroffen zijn door niet-aangeboren hersenletsel zoals MS, hersenbloeding, Parkinson of Alzheimer.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">Onze Waarden</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Persoonlijke Aanpak</h3>
                  <p>
                    Wij geloven in een persoonlijke benadering waarbij we echt luisteren naar uw behoeften en situatie.
                  </p>
                </div>

                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Betrouwbaarheid</h3>
                  <p>
                    Discretie en betrouwbaarheid staan centraal in onze dienstverlening. Uw gegevens zijn bij ons in
                    veilige handen.
                  </p>
                </div>

                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Expertise</h3>
                  <p>Met jarenlange ervaring in de financiële sector bieden wij deskundig advies op maat.</p>
                </div>

                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Transparantie</h3>
                  <p>Wij werken met duidelijke afspraken en heldere communicatie, zonder verborgen kosten.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <Image src="/img/finadmfis.png" alt="Financieel Evenwicht" fill className="object-cover" />
                </div>

                <div className="bg-primary text-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Neem Contact Op</h3>
                  <p className="mb-6">Heeft u vragen of wilt u een afspraak maken? Neem gerust contact met ons op.</p>
                  <Button asChild variant="secondary" className="w-full">
                    <Link href="/contact">
                      Contact Opnemen <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
