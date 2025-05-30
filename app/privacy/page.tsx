import Link from "next/link"

export default function Privacy() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Privacybeleid</h1>
          <div className="flex items-center text-sm text-white/80 mt-4">
            <Link href="/" className="hover:underline text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>Privacybeleid</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-8">
              Bij Financieel en Fiscaal Evenwicht hechten we groot belang aan de bescherming van uw persoonsgegevens. In
              dit privacybeleid willen we heldere en transparante informatie geven over hoe wij omgaan met
              persoonsgegevens.
            </p>

            <h2 className="text-2xl font-bold mb-4">1. Wie zijn wij</h2>
            <p className="mb-8">
              Financieel en Fiscaal Evenwicht is verantwoordelijk voor de verwerking van persoonsgegevens zoals
              weergegeven in deze privacyverklaring. Onze contactgegevens zijn:
              <br />
              <br />
              Financieel en Fiscaal Evenwicht
              <br />
              Spoorstraat 35
              <br />
              9636 AS Zuidbroek
              <br />
              Telefoonnummer: +316 517 405 38
              <br />
              E-mail: info@financieelevenwicht.nl
            </p>

            <h2 className="text-2xl font-bold mb-4">2. Welke gegevens verzamelen wij</h2>
            <p className="mb-8">
              Wij verwerken uw persoonsgegevens doordat u gebruik maakt van onze diensten en/of omdat u deze zelf aan
              ons verstrekt. Hieronder vindt u een overzicht van de persoonsgegevens die wij verwerken:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li className="flex items-start">
<ArrowRight className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />Voor- en achternaam</li>
              <li className="flex items-start">
<ArrowRight className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />Geslacht</li>
              <li className="flex items-start">
<ArrowRight className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />Geboortedatum</li>
              <li className="flex items-start">
<ArrowRight className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />Adresgegevens</li>
              <li className="flex items-start">
<ArrowRight className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />Telefoonnummer</li>
              <li className="flex items-start">
<ArrowRight className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />E-mailadres</li>
              <li className="flex items-start">
<ArrowRight className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />Bankrekeningnummer</li>
              <li className="flex items-start">
<ArrowRight className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />Overige persoonsgegevens die u actief verstrekt in correspondentie en telefonisch</li>
              <li className="flex items-start">
<ArrowRight className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                Financiële gegevens zoals inkomsten, uitgaven, schulden, vermogen, belastingaangiften en toeslagen
              </li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">3. Waarom verzamelen wij deze gegevens</h2>
            <p className="mb-4">Wij verwerken uw persoonsgegevens voor de volgende doelen:</p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li className="flex items-start">
<ArrowRight className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />Het afhandelen van uw betaling</li>
              <li className="flex items-start">
<ArrowRight className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />U te kunnen bellen of e-mailen indien dit nodig is om onze dienstverlening uit te kunnen voeren</li>
              <li className="flex items-start">
<ArrowRight className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />U te informeren over wijzigingen van onze diensten en producten</li>
              <li className="flex items-start">
<ArrowRight className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                Het verzorgen van uw financiële administratie, belastingaangiften, jaarrekeningen en andere financiële
                diensten
              </li>
              <li className="flex items-start">
<ArrowRight className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />Het voldoen aan wettelijke verplichtingen, zoals de bewaarplicht voor administraties</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">4. Hoe lang bewaren wij uw gegevens</h2>
            <p className="mb-8">
              Financieel en Fiscaal Evenwicht bewaart uw persoonsgegevens niet langer dan strikt nodig is om de doelen
              te realiseren waarvoor uw gegevens worden verzameld. Voor administraties, jaarrekeningen en
              belastingaangiften hanteren wij de wettelijke bewaartermijn van 7 jaar. Voor overige gegevens hanteren wij
              een bewaartermijn van 2 jaar na het einde van de dienstverlening, tenzij er een wettelijke verplichting is
              om gegevens langer te bewaren.
            </p>

            <h2 className="text-2xl font-bold mb-4">5. Delen van persoonsgegevens met derden</h2>
            <p className="mb-8">
              Financieel en Fiscaal Evenwicht verkoopt uw gegevens niet aan derden en verstrekt deze uitsluitend indien
              dit nodig is voor de uitvoering van onze overeenkomst met u of om te voldoen aan een wettelijke
              verplichting. Met bedrijven die uw gegevens verwerken in onze opdracht, sluiten wij een
              verwerkersovereenkomst om te zorgen voor eenzelfde niveau van beveiliging en vertrouwelijkheid van uw
              gegevens.
            </p>

            <h2 className="text-2xl font-bold mb-4">6. Cookies, of vergelijkbare technieken</h2>
            <p className="mb-8">
              Financieel en Fiscaal Evenwicht gebruikt alleen technische en functionele cookies, en analytische cookies
              die geen inbreuk maken op uw privacy. Een cookie is een klein tekstbestand dat bij het eerste bezoek aan
              deze website wordt opgeslagen op uw computer, tablet of smartphone. De cookies die wij gebruiken zijn
              noodzakelijk voor de technische werking van de website en uw gebruiksgemak. Ze zorgen ervoor dat de
              website naar behoren werkt en onthouden bijvoorbeeld uw voorkeursinstellingen.
            </p>

            <h2 className="text-2xl font-bold mb-4">7. Gegevens inzien, aanpassen of verwijderen</h2>
            <p className="mb-8">
              U heeft het recht om uw persoonsgegevens in te zien, te corrigeren of te verwijderen. Daarnaast heeft u
              het recht om uw eventuele toestemming voor de gegevensverwerking in te trekken of bezwaar te maken tegen
              de verwerking van uw persoonsgegevens door Financieel en Fiscaal Evenwicht en heeft u het recht op
              gegevensoverdraagbaarheid. U kunt een verzoek tot inzage, correctie, verwijdering, gegevensoverdraging van
              uw persoonsgegevens of verzoek tot intrekking van uw toestemming of bezwaar op de verwerking van uw
              persoonsgegevens sturen naar info@financieelevenwicht.nl.
            </p>

            <h2 className="text-2xl font-bold mb-4">8. Hoe wij persoonsgegevens beveiligen</h2>
            <p className="mb-8">
              Financieel en Fiscaal Evenwicht neemt de bescherming van uw gegevens serieus en neemt passende maatregelen
              om misbruik, verlies, onbevoegde toegang, ongewenste openbaarmaking en ongeoorloofde wijziging tegen te
              gaan. Als u de indruk heeft dat uw gegevens niet goed beveiligd zijn of er aanwijzingen zijn van misbruik,
              neem dan contact op via info@financieelevenwicht.nl.
            </p>

            <h2 className="text-2xl font-bold mb-4">9. Wijzigingen in het privacybeleid</h2>
            <p className="mb-8">
              Wij behouden ons het recht voor om wijzigingen aan te brengen in dit privacybeleid. Het verdient
              aanbeveling om dit privacybeleid regelmatig te raadplegen, zodat u van deze wijzigingen op de hoogte bent.
            </p>

            <p className="text-sm text-muted-foreground">Laatste update: 25 april 2025</p>
          </div>
        </div>
      </section>
    </>
  )
}
