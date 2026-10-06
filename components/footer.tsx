import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Link href="/" className="footer-logo">
              <Image src="/img/fin_logo.png" alt="Financieel Evenwicht" width={288} height={100} className="h-16 w-auto" />
            </Link>
            <p>
              Voor betrouwbare financiële en fiscale ondersteuning sinds 2008. Wij helpen u met uw administratie,
              belastingaangiften en financieel zorgbeheer.
            </p>
          </div>

          <div>
            <h3>Site</h3>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/over">Over ons</Link>
              </li>
              <li>
                <Link href="/tarieven">Tarieven</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3>Diensten</h3>
            <ul>
              <li>
                <Link href="/diensten/particulier">Particuliere dienstverlening</Link>
              </li>
              <li>
                <Link href="/diensten/zakelijk">Zakelijke dienstverlening</Link>
              </li>
              <li>
                <Link href="/diensten/bewindvoering">Bewindvoering</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3>Contact</h3>
            <ul>
              <li className="contact-row">
                <MapPin aria-hidden="true" />
                <span>
                  Spoorstraat 35
                  <br />
                  9636 AS Zuidbroek
                </span>
              </li>
              <li className="contact-row">
                <Phone aria-hidden="true" />
                <a href="tel:+31651740538">+316 517 405 38</a>
              </li>
              <li className="contact-row">
                <Mail aria-hidden="true" />
                <a href="mailto:financieel.evenwicht@home.nl">financieel.evenwicht@home.nl</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-base">
          <p>&copy; {new Date().getFullYear()} Financieel en Fiscaal Evenwicht. Alle rechten voorbehouden.</p>
          <nav aria-label="Juridisch">
            <Link href="/privacy">Privacybeleid</Link>
            <Link href="/voorwaarden">Algemene voorwaarden</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
