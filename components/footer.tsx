import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"
import { site } from "@/lib/site"

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Link href="/" className="footer-logo">
              <Image src="/img/fin_logo.png" alt={site.name} width={288} height={100} className="h-16 w-auto" />
            </Link>
            <p>
              Voor betrouwbare financiële en fiscale ondersteuning sinds {site.since}. Wij helpen u met uw
              administratie, belastingaangiften en financieel zorgbeheer.
            </p>
          </div>

          <div>
            <h3>Bedrijfsgegevens</h3>
            <ul>
              <li>KvK {site.kvk}</li>
              <li>{site.openingHours}</li>
              <li>{site.openingNote}</li>
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
              <li>
                <Link href="/tarieven">Tarieven</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3>Contact</h3>
            <ul>
              <li className="contact-row">
                <MapPin aria-hidden="true" />
                <span>
                  {site.address.street}
                  <br />
                  {site.address.postalCode} {site.address.city}
                </span>
              </li>
              <li className="contact-row">
                <Phone aria-hidden="true" />
                <a href={site.phoneHref}>{site.phone}</a>
              </li>
              <li className="contact-row">
                <Mail aria-hidden="true" />
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-base">
          <p>
            &copy; {new Date().getFullYear()} {site.legalName}. Alle rechten voorbehouden.
          </p>
          <nav aria-label="Juridisch">
            <Link href="/privacy">Privacybeleid</Link>
            <Link href="/voorwaarden">Algemene voorwaarden</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
