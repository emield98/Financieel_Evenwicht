/** Centrale bedrijfsgegevens. Pas hier aan; footer en juridische pagina's lezen hieruit. */
export const site = {
  name: "Financieel & Fiscaal Evenwicht",
  legalName: "Financieel en Fiscaal Evenwicht",
  since: 2008,
  address: {
    street: "Spoorstraat 35",
    postalCode: "9636 AS",
    city: "Zuidbroek",
  },
  postbus: {
    box: "Postbus 7",
    postalCode: "9620 AA",
    city: "Slochteren",
  },
  phone: "+316 517 405 38",
  phoneHref: "tel:+31651740538",
  email: "financieel.evenwicht@home.nl",
  kvk: "01128138",
  openingHours: "Di t/m vr 09:00 - 17:00",
  openingNote: "Uitsluitend op afspraak",
} as const
