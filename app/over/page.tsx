import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function OverOns() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Over Financieel & Fiscaal Evenwicht</h1>
          <div className="flex items-center text-sm text-white/80 mt-4">
            <Link href="/" className="hover:underline text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>Over mij</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-3xl font-bold mb-6">Mijn Achtergrond</h2>

              <p className="text-lg">
                Financieel en Fiscaal Evenwicht is sinds 2008 mijn administratiekantoor voor particulieren, zzp'ers en
                mkb-bedrijven. Als oprichter combineer ik meer dan 16 jaar ervaring bij ABN AMRO met kennis uit mijn
                werk bij een administratiekantoor en belastingadviesbureau. Hierdoor kan ik u breed en discreet
                adviseren op financieel gebied, en bied ik waar nodig persoonlijke begeleiding.
              </p>

              <p className="text-lg">
                Ik geloof in persoonlijk contact, wederzijds respect en vertrouwen. Of u nu een startende ondernemer
                bent of behoefte heeft aan financiële zorgbeheer, ik neem u zoveel mogelijk werk uit handen, zodat u
                zich kunt concentreren op wat u het beste doet: ondernemen.
              </p>

              <p className="text-lg">
                Mijn specialiteit ligt ook in financiële zorgbeheer, waaronder ouderenadministratie en
                beschermingsbewind. Ik heb ruime ervaring in de financiële begeleiding van cliënten, waaronder mensen
                die getroffen zijn door niet-aangeboren hersenletsel zoals MS, hersenbloeding, Parkinson of Alzheimer.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">Mijn Waarden</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Persoonlijke Aanpak</h3>
                  <p>Ik geloof in een persoonlijke benadering waarbij ik echt luister naar uw behoeften en situatie.</p>
                </div>

                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Betrouwbaarheid</h3>
                  <p>
                    Discretie en betrouwbaarheid staan centraal in mijn dienstverlening. Uw gegevens zijn bij mij in
                    veilige handen.
                  </p>
                </div>

                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Expertise</h3>
                  <p>Met jarenlange ervaring in de financiële sector bied ik deskundig advies op maat.</p>
                </div>

                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Transparantie</h3>
                  <p>Ik werk met duidelijke afspraken en heldere communicatie, zonder verborgen kosten.</p>
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
                  <p className="mb-6">Heeft u vragen of wilt u een afspraak maken? Neem gerust contact met mij op.</p>
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
