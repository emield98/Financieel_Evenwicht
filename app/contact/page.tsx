import type { Metadata } from "next"
import ContactForm from "@/components/contact-form"
import PageHeader from "@/components/page-header"
import Section from "@/components/section"
import { Clock, Mail, MapPin, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Neem contact op met Financieel & Fiscaal Evenwicht in Zuidbroek voor een vrijblijvend gesprek over administratie, belastingaangifte of bewindvoering.",
}

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Contact"
        crumbs={[{ href: "/", label: "Home" }, { label: "Contact" }]}
      />

      <Section>
        <div className="split">
          <ContactForm />

          <aside className="split__aside">
            <div className="panel">
              <p className="eyebrow">Gegevens</p>
              <h2 className="section-title">Contactgegevens</h2>
              <span className="rule" aria-hidden="true" />
              <div className="contact-list">
                <div className="contact-row">
                  <MapPin aria-hidden="true" />
                  <div>
                    <h3>Adres</h3>
                    <p>Financieel en Fiscaal Evenwicht</p>
                    <p>Spoorstraat 35</p>
                    <p>9636 AS Zuidbroek</p>
                  </div>
                </div>
                <div className="contact-row">
                  <MapPin aria-hidden="true" />
                  <div>
                    <h3>Postbus</h3>
                    <p>Financieel en Fiscaal Evenwicht</p>
                    <p>Postbus 7</p>
                    <p>9620 AA Slochteren</p>
                  </div>
                </div>
                <div className="contact-row">
                  <Phone aria-hidden="true" />
                  <div>
                    <h3>Telefoon</h3>
                    <p>
                      <a href="tel:+31651740538">+316 517 405 38</a>
                    </p>
                  </div>
                </div>
                <div className="contact-row">
                  <Mail aria-hidden="true" />
                  <div>
                    <h3>E-mail</h3>
                    <p>
                      <a href="mailto:financieel.evenwicht@home.nl">financieel.evenwicht@home.nl</a>
                    </p>
                  </div>
                </div>
                <div className="contact-row">
                  <Clock aria-hidden="true" />
                  <div>
                    <h3>Openingstijden</h3>
                    <p>
                      <strong>Maandag:</strong> Gesloten
                    </p>
                    <p>
                      <strong>Dinsdag:</strong> 09:00 - 17:00
                    </p>
                    <p>
                      <strong>Woensdag:</strong> 09:00 - 17:00
                    </p>
                    <p>
                      <strong>Donderdag:</strong> 09:00 - 17:00
                    </p>
                    <p>
                      <strong>Vrijdag:</strong> 09:00 - 17:00
                    </p>
                    <p>
                      <strong>Zaterdag:</strong> Gesloten
                    </p>
                    <p>
                      <strong>Zondag:</strong> Gesloten
                    </p>
                    <p>
                      <i>Ons kantoor is enkel op afspraak geopend.</i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Section>
    </>
  )
}
