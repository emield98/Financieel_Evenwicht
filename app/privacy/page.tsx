import type { Metadata } from "next"
import { LegalSection, LegalToc } from "@/components/legal"
import PageHeader from "@/components/page-header"
import Section from "@/components/section"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Privacybeleid",
  description: "Hoe Financieel & Fiscaal Evenwicht omgaat met uw persoonsgegevens.",
  robots: { index: false },
}

const toc = [
  { id: "wie", label: "1. Wie zijn wij" },
  { id: "gegevens", label: "2. Welke gegevens verzamelen wij" },
  { id: "doelen", label: "3. Waarom verzamelen wij deze gegevens" },
  { id: "bewaren", label: "4. Hoe lang bewaren wij uw gegevens" },
  { id: "derden", label: "5. Delen van persoonsgegevens met derden" },
  { id: "cookies", label: "6. Cookies, of vergelijkbare technieken" },
  { id: "rechten", label: "7. Gegevens inzien, aanpassen of verwijderen" },
  { id: "beveiliging", label: "8. Hoe wij persoonsgegevens beveiligen" },
  { id: "wijzigingen", label: "9. Wijzigingen in het privacybeleid" },
]

export default function Privacy() {
  return (
    <>
      <PageHeader
        eyebrow="Privacy"
        title="Privacybeleid"
        crumbs={[{ href: "/", label: "Home" }, { label: "Privacybeleid" }]}
      />

      <Section narrow>
        <div className="copy">
          <p>
            Bij {site.legalName} hechten we groot belang aan de bescherming van uw persoonsgegevens. In dit
            privacybeleid willen we heldere en transparante informatie geven over hoe wij omgaan met persoonsgegevens.
          </p>

          <LegalToc items={toc} />

          <LegalSection id="wie" title="1. Wie zijn wij">
            <p>
              {site.legalName} is verantwoordelijk voor de verwerking van persoonsgegevens zoals weergegeven in deze
              privacyverklaring. Onze contactgegevens zijn:
            </p>
            <p>
              {site.legalName}
              <br />
              {site.address.street}
              <br />
              {site.address.postalCode} {site.address.city}
              <br />
              Telefoonnummer: {site.phone}
              <br />
              E-mail: {site.email}
            </p>
          </LegalSection>

          <LegalSection id="gegevens" title="2. Welke gegevens verzamelen wij">
            <p>
              Wij verwerken uw persoonsgegevens doordat u gebruik maakt van onze diensten en/of omdat u deze zelf aan ons
              verstrekt. Hieronder vindt u een overzicht van de persoonsgegevens die wij verwerken:
            </p>
            <ul className="list">
              <li>Voor- en achternaam</li>
              <li>Geslacht</li>
              <li>Geboortedatum</li>
              <li>Adresgegevens</li>
              <li>Telefoonnummer</li>
              <li>E-mailadres</li>
              <li>Bankrekeningnummer</li>
              <li>Overige persoonsgegevens die u actief verstrekt in correspondentie en telefonisch</li>
              <li>Financiële gegevens zoals inkomsten, uitgaven, schulden, vermogen, belastingaangiften en toeslagen</li>
            </ul>
          </LegalSection>

          <LegalSection id="doelen" title="3. Waarom verzamelen wij deze gegevens">
            <p>Wij verwerken uw persoonsgegevens voor de volgende doelen:</p>
            <ul className="list">
              <li>Het afhandelen van uw betaling</li>
              <li>U te kunnen bellen of e-mailen indien dit nodig is om onze dienstverlening uit te kunnen voeren</li>
              <li>U te informeren over wijzigingen van onze diensten en producten</li>
              <li>
                Het verzorgen van uw financiële administratie, belastingaangiften, jaarrekeningen en andere financiële
                diensten
              </li>
              <li>Het voldoen aan wettelijke verplichtingen, zoals de bewaarplicht voor administraties</li>
            </ul>
          </LegalSection>

          <LegalSection id="bewaren" title="4. Hoe lang bewaren wij uw gegevens">
            <p>
              {site.legalName} bewaart uw persoonsgegevens niet langer dan strikt nodig is om de doelen te realiseren
              waarvoor uw gegevens worden verzameld. Voor administraties, jaarrekeningen en belastingaangiften hanteren
              wij de wettelijke bewaartermijn van 7 jaar. Voor overige gegevens hanteren wij een bewaartermijn van 2
              jaar na het einde van de dienstverlening, tenzij er een wettelijke verplichting is om gegevens langer te
              bewaren.
            </p>
          </LegalSection>

          <LegalSection id="derden" title="5. Delen van persoonsgegevens met derden">
            <p>
              {site.legalName} verkoopt uw gegevens niet aan derden en verstrekt deze uitsluitend indien dit nodig is
              voor de uitvoering van onze overeenkomst met u of om te voldoen aan een wettelijke verplichting. Met
              bedrijven die uw gegevens verwerken in onze opdracht, sluiten wij een verwerkersovereenkomst om te zorgen
              voor eenzelfde niveau van beveiliging en vertrouwelijkheid van uw gegevens.
            </p>
          </LegalSection>

          <LegalSection id="cookies" title="6. Cookies, of vergelijkbare technieken">
            <p>
              {site.legalName} gebruikt alleen technische en functionele cookies, en analytische cookies die geen
              inbreuk maken op uw privacy. Een cookie is een klein tekstbestand dat bij het eerste bezoek aan deze
              website wordt opgeslagen op uw computer, tablet of smartphone. De cookies die wij gebruiken zijn
              noodzakelijk voor de technische werking van de website en uw gebruiksgemak. Ze zorgen ervoor dat de
              website naar behoren werkt en onthouden bijvoorbeeld uw voorkeursinstellingen.
            </p>
          </LegalSection>

          <LegalSection id="rechten" title="7. Gegevens inzien, aanpassen of verwijderen">
            <p>
              U heeft het recht om uw persoonsgegevens in te zien, te corrigeren of te verwijderen. Daarnaast heeft u
              het recht om uw eventuele toestemming voor de gegevensverwerking in te trekken of bezwaar te maken tegen
              de verwerking van uw persoonsgegevens door {site.legalName} en heeft u het recht op
              gegevensoverdraagbaarheid. U kunt een verzoek tot inzage, correctie, verwijdering, gegevensoverdraging van
              uw persoonsgegevens of verzoek tot intrekking van uw toestemming of bezwaar op de verwerking van uw
              persoonsgegevens sturen naar <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          </LegalSection>

          <LegalSection id="beveiliging" title="8. Hoe wij persoonsgegevens beveiligen">
            <p>
              {site.legalName} neemt de bescherming van uw gegevens serieus en neemt passende maatregelen om misbruik,
              verlies, onbevoegde toegang, ongewenste openbaarmaking en ongeoorloofde wijziging tegen te gaan. Als u de
              indruk heeft dat uw gegevens niet goed beveiligd zijn of er aanwijzingen zijn van misbruik, neem dan
              contact op via <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          </LegalSection>

          <LegalSection id="wijzigingen" title="9. Wijzigingen in het privacybeleid">
            <p>
              Wij behouden ons het recht voor om wijzigingen aan te brengen in dit privacybeleid. Het verdient
              aanbeveling om dit privacybeleid regelmatig te raadplegen, zodat u van deze wijzigingen op de hoogte bent.
            </p>
          </LegalSection>

          <p className="meta">Laatste update: 25 april 2025</p>
        </div>
      </Section>
    </>
  )
}
