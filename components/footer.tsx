import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image src="/img/fin_logo.png" alt="Financieel Evenwicht" width={180} height={70} />
            </Link>
            <p className="text-muted-foreground text-sm">
              Voor betrouwbare financiële en fiscale ondersteuning sinds 2008. Wij helpen u met uw administratie, belastingaangiften en financieel advies.
            </p>
          </div>

          {/* Site Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Site</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/over" className="text-muted-foreground hover:text-foreground transition-colors">
                  Over ons
                </Link>
              </li>
              <li>
                <Link href="/tarieven" className="text-muted-foreground hover:text-foreground transition-colors">
                  Tarieven
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Diensten</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/diensten/particulier"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Particuliere dienstverlening
                </Link>
              </li>
              <li>
                <Link
                  href="/diensten/zakelijk"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Zakelijke dienstverlening
                </Link>
              </li>
              <li>
                <Link
                  href="/diensten/bewindvoering"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Bewindvoering
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Spoorstraat 35
                  <br />
                  9636 AS Zuidbroek
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <a href="tel:+31651740538" className="text-muted-foreground hover:text-foreground transition-colors">
                  +316 517 405 38
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <a
                  href="mailto:info@financieelevenwicht.nl"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  info@financieelevenwicht.nl
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-border" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Financieel en Fiscaal Evenwicht. Alle rechten voorbehouden.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacybeleid
            </Link>
            <Link href="/voorwaarden" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Algemene voorwaarden
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
