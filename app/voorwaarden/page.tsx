import Link from "next/link"

export default function Voorwaarden() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Algemene voorwaarden</h1>
          <div className="flex items-center text-sm text-white/80 mt-4">
            <Link href="/" className="hover:underline text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>Algemene voorwaarden</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-8">
              Hieronder vindt u de algemene voorwaarden van Financieel en Fiscaal Evenwicht. Deze voorwaarden zijn van
              toepassing op alle diensten die wij leveren.
            </p>

            <h2 className="text-2xl font-bold mb-4">Artikel 1 - Definities</h2>
            <p className="mb-8">
              In deze algemene voorwaarden wordt verstaan onder:
              <br />
              <br />
              <strong>Opdrachtnemer:</strong> Financieel en Fiscaal Evenwicht, gevestigd te Zuidbroek, ingeschreven bij
              de Kamer van Koophandel onder nummer 12345678.
              <br />
              <br />
              <strong>Opdrachtgever:</strong> De natuurlijke persoon of rechtspersoon die aan Opdrachtnemer opdracht
              heeft gegeven tot het verrichten van werkzaamheden.
              <br />
              <br />
              <strong>Werkzaamheden:</strong> Alle werkzaamheden waartoe opdracht is gegeven, of die door Opdrachtnemer
              uit anderen hoofde worden verricht, een en ander in de ruimste zin van het woord.
            </p>

            <h2 className="text-2xl font-bold mb-4">Artikel 2 - Toepasselijkheid</h2>
            <p className="mb-8">
              2.1 Deze algemene voorwaarden zijn van toepassing op alle overeenkomsten welke door Opdrachtnemer binnen
              het kader van de uitvoering van de werkzaamheden worden aangegaan.
              <br />
              <br />
              2.2 Afwijkingen van deze algemene voorwaarden zijn slechts geldig, indien en voor zover zij schriftelijk
              tussen Opdrachtgever en Opdrachtnemer zijn overeengekomen.
            </p>

            <h2 className="text-2xl font-bold mb-4">Artikel 3 - Aanvang en duur van de overeenkomst</h2>
            <p className="mb-8">
              3.1 De overeenkomst komt eerst tot stand en vangt aan op het moment dat de door Opdrachtgever ondertekende
              opdrachtbevestiging door Opdrachtnemer retour is ontvangen en ondertekend.
              <br />
              <br />
              3.2 De overeenkomst wordt aangegaan voor onbepaalde tijd tenzij uit de aard of strekking van de verleende
              opdracht voortvloeit dat deze voor een bepaalde tijd is aangegaan.
            </p>

            <h2 className="text-2xl font-bold mb-4">Artikel 4 - Gegevens Opdrachtgever</h2>
            <p className="mb-8">
              4.1 Opdrachtgever is gehouden alle gegevens en bescheiden, welke Opdrachtnemer overeenkomstig zijn oordeel
              nodig heeft voor het correct uitvoeren van de verleende opdracht, tijdig in de gewenste vorm en op de
              gewenste wijze ter beschikking van Opdrachtnemer te stellen.
              <br />
              <br />
              4.2 Opdrachtnemer heeft het recht de uitvoering van de opdracht op te schorten tot het moment dat
              Opdrachtgever aan de in het vorige lid genoemde verplichting heeft voldaan.
              <br />
              <br />
              4.3 Indien en voor zover Opdrachtgever zulks verzoekt, worden de ter beschikking gestelde bescheiden,
              behoudens het bepaalde onder artikel 15, aan deze geretourneerd.
            </p>

            <h2 className="text-2xl font-bold mb-4">Artikel 5 - Uitvoering opdracht</h2>
            <p className="mb-8">
              5.1 Opdrachtnemer bepaalt de wijze waarop de verleende opdracht wordt uitgevoerd.
              <br />
              <br />
              5.2 Opdrachtnemer heeft het recht bepaalde werkzaamheden, zonder kennisgeving aan Opdrachtgever, te laten
              verrichten door derden.
            </p>

            <h2 className="text-2xl font-bold mb-4">Artikel 6 - Geheimhouding</h2>
            <p className="mb-8">
              6.1 Opdrachtnemer is, behoudens verplichtingen die de wet op hem legt tot openbaarmaking van bepaalde
              gegevens, verplicht tot geheimhouding tegenover derden, die niet bij de uitvoering van de opdracht zijn
              betrokken.
              <br />
              <br />
              6.2 Opdrachtnemer is niet gerechtigd de informatie die hem door Opdrachtgever ter beschikking wordt
              gesteld aan te wenden voor een ander doel dan waarvoor zij werd verkregen.
            </p>

            <h2 className="text-2xl font-bold mb-4">Artikel 7 - Intellectuele eigendom</h2>
            <p className="mb-8">
              7.1 Opdrachtnemer behoudt zich alle rechten voor met betrekking tot producten van de geest welke hij
              gebruikt of heeft gebruikt in het kader van de uitvoering van de overeenkomst met Opdrachtgever, voor
              zover op die producten in juridische zin rechten kunnen bestaan of worden gevestigd.
              <br />
              <br />
              7.2 Het is Opdrachtgever uitdrukkelijk verboden die producten, waaronder begrepen computerprogramma's,
              systeemontwerpen, werkwijzen, adviezen, (model)contracten en andere geestesproducten al dan niet met
              inschakeling van derden te verveelvoudigen, te openbaren of te exploiteren.
            </p>

            <h2 className="text-2xl font-bold mb-4">Artikel 8 - Honorarium</h2>
            <p className="mb-8">
              8.1 Het honorarium van Opdrachtnemer is niet afhankelijk van de uitkomst van de verleende opdracht en
              wordt berekend met inachtneming van de gebruikelijke tarieven van Opdrachtnemer.
              <br />
              <br />
              8.2 Het honorarium van Opdrachtnemer, zo nodig vermeerderd met verschotten en declaraties van
              ingeschakelde derden, wordt inclusief de eventueel verschuldigde omzetbelasting, per maand, per kwartaal,
              per jaar of na volbrenging van de werkzaamheden aan Opdrachtgever in rekening gebracht.
            </p>

            <h2 className="text-2xl font-bold mb-4">Artikel 9 - Betaling</h2>
            <p className="mb-8">
              9.1 Betaling van het factuurbedrag door Opdrachtgever dient te geschieden binnen 14 dagen na de
              factuurdatum, in Nederlandse valuta, door middel van storting ten gunste van een door Opdrachtnemer aan te
              wijzen bankrekening en zonder enig recht op korting of verrekening.
              <br />
              <br />
              9.2 Indien Opdrachtgever niet binnen de hiervoor genoemde termijn heeft betaald, is hij van rechtswege in
              verzuim en heeft Opdrachtnemer, zonder nadere sommatie of ingebrekestelling, het recht vanaf de vervaldag
              Opdrachtgever de wettelijke rente in rekening te brengen tot op de datum van algehele voldoening.
            </p>

            <h2 className="text-2xl font-bold mb-4">Artikel 10 - Aansprakelijkheid</h2>
            <p className="mb-8">
              10.1 Voor alle directe schade van Opdrachtgever, op enigerlei wijze verband houdend met, dan wel
              veroorzaakt door niet-, niet tijdige of niet behoorlijke uitvoering van de opdracht, is de Opdrachtnemer
              slechts aansprakelijk tot een maximum van het bedrag van het honorarium voor de betreffende opdracht over
              het laatste kalenderjaar, tenzij er aan de zijde van Opdrachtnemer sprake is van opzet of daarmee gelijk
              te stellen grove nalatigheid.
              <br />
              <br />
              10.2 Opdrachtnemer is niet aansprakelijk voor schade, welke is veroorzaakt doordat Opdrachtgever hem
              onjuiste of onvolledige informatie heeft verstrekt.
              <br />
              <br />
              10.3 Voor alle indirecte schade, waaronder mede begrepen stagnatie in de geregelde gang van zaken in de
              onderneming van Opdrachtgever, op enigerlei wijze verband houdend met, dan wel veroorzaakt door een fout
              in de uitvoering van de werkzaamheden door Opdrachtnemer, is deze nimmer aansprakelijk.
            </p>

            <p className="text-sm text-muted-foreground">Laatste update: 25 april 2025</p>
          </div>
        </div>
      </section>
    </>
  )
}
