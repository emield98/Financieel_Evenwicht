import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export default function Tarieven() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Tarieven</h1>
          <div className="flex items-center text-sm text-white/80 mt-4">
            <Link href="/" className="hover:underline text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>Tarieven</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-8 text-center">
              Wij hanteren eerlijke en transparante tarieven. Hieronder vindt u
              een overzicht per dienst. Voor maatwerk en specifieke vragen kunt
              u altijd{" "}
              <Link href="/contact" className="text-primary hover:underline">
                contact
              </Link>{" "}
              met mij opnemen.
            </p>

            <h2 className="text-3xl font-bold mb-8 text-center">
              Tarieven per dienst
            </h2>

            <div className="mb-12">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[300px]">Dienst</TableHead>
                    <TableHead>Tarief per uur (excl. BTW)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      Particuliere dienstverlening
                    </TableCell>
                    <TableCell>€ 60,00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Zakelijke dienstverlening
                    </TableCell>
                    <TableCell>€ 60,00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Bewindvoering
                    </TableCell>
                    <TableCell><i>De tarieven worden jaarlijks vastgesteld door de Landelijke Organisatie van Kantonrechters (LOK)</i></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Individuele begeleiding
                    </TableCell>
                    <TableCell>€ 50,00 <br /><i>De uiteindelijke kosten zijn afhankelijk van eventuele vergoedingen via de gemeente (Wmo of Wlz).</i></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div className="bg-muted p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">Maatwerk</h3>
              <p className="mb-4">
                Bovenstaande tarieven zijn richtprijzen. Afhankelijk van uw
                specifieke situatie en wensen kunnen er een tarief op maat
                aanbieden. Neem contact met ons op voor een vrijblijvende
                offerte.
              </p>
              <p>
                Voor langdurige samenwerking bied ik aantrekkelijke abonnementen
                aan. Vraag naar de mogelijkheden.
              </p>
            </div>

            <div className="text-center">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90"
              >
                <Link href="/contact">
                  Vraag een offerte aan <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
