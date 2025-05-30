import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function OverOns() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Over Financieel & Fiscaal Evenwicht
          </h1>
          <div className="flex items-center text-sm text-white/80 mt-4">
            <Link href="/" className="hover:underline text-white">
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
              <blockquote className="mb-12 text-center max-w-3xl rounded-xl border-l-4 border-primary px-6 py-6 md:text-2xl font-semibold shadow-sm">
                Betrokken, betrouwbaar en mensgericht — <br />dat is waar Financieel
                en Fiscaal Evenwicht voor staat.
              </blockquote>
              <h2 className="text-3xl font-bold mb-6">Mijn Achtergrond</h2>

              <p className="text-lg">
                Sinds 2008 biedt Financieel en Fiscaal Evenwicht ondersteuning
                aan particulieren, zzp’ers en mkb’ers. Oprichter Margriet
                Doornbosch combineert meer dan 16 jaar ervaring bij ABN AMRO met
                kennis uit de praktijk. Deze brede achtergrond maakt het
                mogelijk om klanten zowel financieel als persoonlijk te
                begeleiden — met discretie, betrokkenheid en vakkennis.
              </p>

              <p className="text-lg">
                Van belastingaangifte tot beschermingsbewind: wij geloven in
                maatwerk, duidelijke communicatie en een menselijke benadering.
                U staat centraal, niet de cijfers. Dat betekent dat we altijd
                goed luisteren, samen doelen opstellen en begeleiding bieden die
                aansluit bij uw situatie en wensen.
              </p>

              <p className="text-lg">
                We hebben ruime ervaring in het ondersteunen van mensen met
                niet-aangeboren hersenletsel (zoals MS, Parkinson of een
                hersenbloeding), ouderen die moeite hebben met administratie, en
                cliënten die tijdelijk of langdurig behoefte hebben aan
                bescherming van hun financiën. Waar nodig schakelen we ook het
                sociale netwerk in en stimuleren we het behoud van eigen regie.
              </p>
              <hr className="border: none; height: 0.5px; margin: 1rem 0;" />
              <h2 className="text-3xl font-bold mt-12 mb-6">
                Onze kernwaarden
              </h2>
              <p className="text-lg text-muted-foreground">
                Wij bieden een breed scala aan financiële en fiscale diensten voor particulieren en bedrijven.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">
                    Persoonlijk contact
                  </h3>
                  <p>
                    We nemen de tijd voor u en bouwen aan een vertrouwensband.
                  </p>
                </div>

                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Wederzijds respect</h3>
                  <p>Iedereen verdient begeleiding zonder oordeel.</p>
                </div>

                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">
                    Verantwoordelijkheid en integriteit
                  </h3>
                  <p>We gaan zorgvuldig om met wat u ons toevertrouwt.</p>
                </div>

                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">
                    Humor waar het kan, helderheid waar het moet
                  </h3>
                  <p>We maken zaken begrijpelijk en toegankelijk.</p>
                </div>

                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">
                    Stimuleren van zelfstandigheid
                  </h3>
                  <p>
                    Waar mogelijk helpen we u om zelf de regie (terug) te nemen.
                  </p>
                </div>
              </div>
              <hr className="border: none; height: 0.5px; margin: 1rem 0;" />
              <h2 className="text-3xl font-bold mb-6">Heldere gedragsregels</h2>
              <p className="text-lg">
                Om een veilige, prettige en professionele samenwerking te waarborgen, hanteren wij een gedragscode. Deze omvat onder andere:
                <ul className="list-disc list-inside space-y-2">
                  <li className="flex items-start">
<ArrowRight className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />Respectvolle omgang met elkaar, ongeacht achtergrond of overtuiging</li>
                  <li className="flex items-start">
<ArrowRight className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />Geen ruimte voor discriminatie, intimidatie of grensoverschrijdend gedrag</li>
                  <li className="flex items-start">
<ArrowRight className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />Geen gebruik van alcohol of drugs tijdens begeleiding</li>
                  <li className="flex items-start">
<ArrowRight className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />Rookvrij beleid, tenzij uitdrukkelijk anders afgesproken</li>
                </ul>
              </p>
              <p className="text-lg">
                Deze richtlijnen gelden zowel voor ons als voor onze cliënten. Zo creëren we een veilige en respectvolle werkomgeving voor iedereen.
              </p>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/img/finadmfis.png"
                    alt="Financieel Evenwicht"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="sm: bg-primary lg:bg-primary/70 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Neem Contact Op</h3>
                  <p className="mb-6">
                    Heeft u vragen of wilt u een afspraak maken? Neem gerust
                    contact met mij op.
                  </p>
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
  );
}
