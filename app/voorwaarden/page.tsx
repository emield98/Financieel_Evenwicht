import type { Metadata } from "next"
import { LegalSection, LegalToc } from "@/components/legal"
import PageHeader from "@/components/page-header"
import Section from "@/components/section"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Algemene voorwaarden",
  description: "De algemene voorwaarden van Financieel & Fiscaal Evenwicht.",
  robots: { index: false },
}

const toc = [
  { id: "artikel-1", label: "Artikel 1 - Definities" },
  { id: "artikel-2", label: "Artikel 2 - Toepasselijkheid" },
  { id: "artikel-3", label: "Artikel 3 - Aanvang en duur van de overeenkomst" },
  { id: "artikel-4", label: "Artikel 4 - Gegevens opdrachtgever" },
  { id: "artikel-5", label: "Artikel 5 - Uitvoering opdracht" },
  { id: "artikel-6", label: "Artikel 6 - Geheimhouding" },
  { id: "artikel-7", label: "Artikel 7 - Intellectuele eigendom" },
  { id: "artikel-8", label: "Artikel 8 - Honorarium" },
  { id: "artikel-9", label: "Artikel 9 - Betaling" },
  { id: "artikel-10", label: "Artikel 10 - Aansprakelijkheid" },
]

export default function Voorwaarden() {
  return (
    <>
      <PageHeader
        eyebrow="Voorwaarden"
        title="Algemene voorwaarden"
        crumbs={[{ href: "/", label: "Home" }, { label: "Algemene voorwaarden" }]}
      />

      <Section narrow>
        <div className="copy">
          <p>
            Hieronder vindt u de algemene voorwaarden van {site.legalName}. Deze voorwaarden zijn van toepassing op alle
            diensten die wij leveren.
          </p>

          <LegalToc items={toc} />

          <LegalSection id="artikel-1" title="Artikel 1 - Definities">
            <p>In deze algemene voorwaarden wordt verstaan onder:</p>
            <p>
              <strong>Opdrachtnemer:</strong> {site.legalName}, gevestigd te {site.address.city}, ingeschreven bij de
              Kamer van Koophandel onder nummer {site.kvk}.
            </p>
            <p>
              <strong>Opdrachtgever:</strong> De natuurlijke persoon of rechtspersoon die aan Opdrachtnemer opdracht
              heeft gegeven tot het verrichten van werkzaamheden.
            </p>
            <p>
              <strong>Werkzaamheden:</strong> Alle werkzaamheden waartoe opdracht is gegeven, of die door Opdrachtnemer
              uit anderen hoofde worden verricht, een en ander in de ruimste zin van het woord.
            </p>
          </LegalSection>

          <LegalSection id="artikel-2" title="Artikel 2 - Toepasselijkheid">
            <p>
              2.1 Deze algemene voorwaarden zijn van toepassing op alle overeenkomsten welke door Opdrachtnemer binnen
              het kader van de uitvoering van de werkzaamheden worden aangegaan.
            </p>
            <p>
              2.2 Afwijkingen van deze algemene voorwaarden zijn slechts geldig, indien en voor zover zij schriftelijk
              tussen Opdrachtgever en Opdrachtnemer zijn overeengekomen.
            </p>
          </LegalSection>

          <LegalSection id="artikel-3" title="Artikel 3 - Aanvang en duur van de overeenkomst">
            <p>
              3.1 De overeenkomst komt eerst tot stand en vangt aan op het moment dat de door Opdrachtgever ondertekende
              opdrachtbevestiging door Opdrachtnemer retour is ontvangen en ondertekend.
            </p>
            <p>
              3.2 De overeenkomst wordt aangegaan voor onbepaalde tijd tenzij uit de aard of strekking van de verleende
              opdracht voortvloeit dat deze voor een bepaalde tijd is aangegaan.
            </p>
          </LegalSection>

          <LegalSection id="artikel-4" title="Artikel 4 - Gegevens opdrachtgever">
            <p>
              4.1 Opdrachtgever is gehouden alle gegevens en bescheiden, welke Opdrachtnemer overeenkomstig zijn oordeel
              nodig heeft voor het correct uitvoeren van de verleende opdracht, tijdig in de gewenste vorm en op de
              gewenste wijze ter beschikking van Opdrachtnemer te stellen.
            </p>
            <p>
              4.2 Opdrachtnemer heeft het recht de uitvoering van de opdracht op te schorten tot het moment dat
              Opdrachtgever aan de in het vorige lid genoemde verplichting heeft voldaan.
            </p>
            <p>
              4.3 Indien en voor zover Opdrachtgever zulks verzoekt, worden de ter beschikking gestelde bescheiden,
              behoudens het bepaalde onder artikel 15, aan deze geretourneerd.
            </p>
          </LegalSection>

          <LegalSection id="artikel-5" title="Artikel 5 - Uitvoering opdracht">
            <p>5.1 Opdrachtnemer bepaalt de wijze waarop de verleende opdracht wordt uitgevoerd.</p>
            <p>
              5.2 Opdrachtnemer heeft het recht bepaalde werkzaamheden, zonder kennisgeving aan Opdrachtgever, te laten
              verrichten door derden.
            </p>
          </LegalSection>

          <LegalSection id="artikel-6" title="Artikel 6 - Geheimhouding">
            <p>
              6.1 Opdrachtnemer is, behoudens verplichtingen die de wet op hem legt tot openbaarmaking van bepaalde
              gegevens, verplicht tot geheimhouding tegenover derden, die niet bij de uitvoering van de opdracht zijn
              betrokken.
            </p>
            <p>
              6.2 Opdrachtnemer is niet gerechtigd de informatie die hem door Opdrachtgever ter beschikking wordt
              gesteld aan te wenden voor een ander doel dan waarvoor zij werd verkregen.
            </p>
          </LegalSection>

          <LegalSection id="artikel-7" title="Artikel 7 - Intellectuele eigendom">
            <p>
              7.1 Opdrachtnemer behoudt zich alle rechten voor met betrekking tot producten van de geest welke hij
              gebruikt of heeft gebruikt in het kader van de uitvoering van de overeenkomst met Opdrachtgever, voor
              zover op die producten in juridische zin rechten kunnen bestaan of worden gevestigd.
            </p>
            <p>
              7.2 Het is Opdrachtgever uitdrukkelijk verboden die producten, waaronder begrepen computerprogramma&apos;s,
              systeemontwerpen, werkwijzen, adviezen, (model)contracten en andere geestesproducten al dan niet met
              inschakeling van derden te verveelvoudigen, te openbaren of te exploiteren.
            </p>
          </LegalSection>

          <LegalSection id="artikel-8" title="Artikel 8 - Honorarium">
            <p>
              8.1 Het honorarium van Opdrachtnemer is niet afhankelijk van de uitkomst van de verleende opdracht en
              wordt berekend met inachtneming van de gebruikelijke tarieven van Opdrachtnemer.
            </p>
            <p>
              8.2 Het honorarium van Opdrachtnemer, zo nodig vermeerderd met verschotten en declaraties van
              ingeschakelde derden, wordt inclusief de eventueel verschuldigde omzetbelasting, per maand, per kwartaal,
              per jaar of na volbrenging van de werkzaamheden aan Opdrachtgever in rekening gebracht.
            </p>
          </LegalSection>

          <LegalSection id="artikel-9" title="Artikel 9 - Betaling">
            <p>
              9.1 Betaling van het factuurbedrag door Opdrachtgever dient te geschieden binnen 14 dagen na de
              factuurdatum, in Nederlandse valuta, door middel van storting ten gunste van een door Opdrachtnemer aan te
              wijzen bankrekening en zonder enig recht op korting of verrekening.
            </p>
            <p>
              9.2 Indien Opdrachtgever niet binnen de hiervoor genoemde termijn heeft betaald, is hij van rechtswege in
              verzuim en heeft Opdrachtnemer, zonder nadere sommatie of ingebrekestelling, het recht vanaf de vervaldag
              Opdrachtgever de wettelijke rente in rekening te brengen tot op de datum van algehele voldoening.
            </p>
          </LegalSection>

          <LegalSection id="artikel-10" title="Artikel 10 - Aansprakelijkheid">
            <p>
              10.1 Voor alle directe schade van Opdrachtgever, op enigerlei wijze verband houdend met, dan wel
              veroorzaakt door niet-, niet tijdige of niet behoorlijke uitvoering van de opdracht, is de Opdrachtnemer
              slechts aansprakelijk tot een maximum van het bedrag van het honorarium voor de betreffende opdracht over
              het laatste kalenderjaar, tenzij er aan de zijde van Opdrachtnemer sprake is van opzet of daarmee gelijk
              te stellen grove nalatigheid.
            </p>
            <p>
              10.2 Opdrachtnemer is niet aansprakelijk voor schade, welke is veroorzaakt doordat Opdrachtgever hem
              onjuiste of onvolledige informatie heeft verstrekt.
            </p>
            <p>
              10.3 Voor alle indirecte schade, waaronder mede begrepen stagnatie in de geregelde gang van zaken in de
              onderneming van Opdrachtgever, op enigerlei wijze verband houdend met, dan wel veroorzaakt door een fout
              in de uitvoering van de werkzaamheden door Opdrachtnemer, is deze nimmer aansprakelijk.
            </p>
          </LegalSection>

          <p className="meta">Laatste update: 25 april 2025</p>
        </div>
      </Section>
    </>
  )
}
