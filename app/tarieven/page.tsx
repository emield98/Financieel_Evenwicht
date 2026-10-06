import { Button } from "@/components/ui/button"
import Heading from "@/components/heading"
import PageHeader from "@/components/page-header"
import Section from "@/components/section"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Tarieven() {
  return (
    <>
      <PageHeader
        eyebrow="Tarieven"
        title="Tarieven"
        crumbs={[{ href: "/", label: "Home" }, { label: "Tarieven" }]}
      />

      <Section narrow>
        <div className="copy center">
          <p>
            Wij hanteren eerlijke en transparante tarieven. Hieronder vindt u een overzicht per dienst. Voor maatwerk en
            specifieke vragen kunt u altijd <Link href="/contact">contact opnemen</Link>.
          </p>
        </div>

        <Heading align="center" title="Tarieven per dienst" />

        <div className="rate-table">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[300px]">Dienst</TableHead>
                <TableHead>Tarief per uur (excl. BTW)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Particuliere dienstverlening</TableCell>
                <TableCell>vanaf € 60,00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Zakelijke dienstverlening</TableCell>
                <TableCell>vanaf € 60,00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Bewindvoering</TableCell>
                <TableCell>
                  <i>De tarieven worden jaarlijks vastgesteld door de Landelijke Organisatie van Kantonrechters (LOK)</i>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Individuele begeleiding</TableCell>
                <TableCell>
                  vanaf € 50,00
                  <br />
                  <i>De uiteindelijke kosten zijn afhankelijk van eventuele vergoedingen via de gemeente (Wmo of Wlz).</i>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="note">
          <h3>Maatwerk</h3>
          <p>
            Bovenstaande tarieven zijn richtprijzen. Afhankelijk van uw specifieke situatie en wensen kunnen er een
            tarief op maat aanbieden. Neem contact met ons op voor een vrijblijvende offerte.
          </p>
        </div>

        <div className="actions actions--center">
          <Button asChild size="lg">
            <Link href="/contact">
              Vraag een offerte aan
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </Section>
    </>
  )
}
