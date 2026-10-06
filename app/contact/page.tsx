"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Heading from "@/components/heading"
import PageHeader from "@/components/page-header"
import Section from "@/components/section"
import { useToast } from "@/hooks/use-toast"
import { Clock, Mail, MapPin, Phone } from "lucide-react"

export default function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telefoonnummer: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const phoneInvalid = formData.telefoonnummer !== "" && !/^[0-9+\s\-]*$/.test(formData.telefoonnummer)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://formspree.io/f/mldbdevb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast({
          title: "Bericht verzonden",
          description: `Bedankt ${formData.name}, uw bericht is succesvol verzonden.`,
          variant: "success",
        })
        setFormData({ name: "", email: "", telefoonnummer: "", message: "" })
      } else {
        toast({
          title: "Fout",
          description: "Er ging iets mis bij het verzenden.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({ title: "Fout", description: "Netwerkprobleem of serverfout." })
    }

    setIsSubmitting(false)
  }

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Contact"
        crumbs={[{ href: "/", label: "Home" }, { label: "Contact" }]}
      />

      <Section>
        <div className="split">
          <div className="form-card">
            <Heading title="Neem contact met ons op" intro="Vul het formulier in en wij nemen zo snel mogelijk contact met u op" />
            <form onSubmit={handleSubmit} className="stack">
              <div className="field">
                <Label htmlFor="name">Naam</Label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="field">
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="field">
                <Label htmlFor="telefoonnummer">Telefoonnummer</Label>
                <Input
                  id="telefoonnummer"
                  name="telefoonnummer"
                  type="text"
                  inputMode="tel"
                  pattern="[0-9+\s\-]*"
                  value={formData.telefoonnummer}
                  onChange={handleChange}
                  aria-invalid={phoneInvalid}
                  aria-describedby="telefoonnummer-error"
                />
                {phoneInvalid ? (
                  <p id="telefoonnummer-error" className="field-error">
                    Voer een geldig telefoonnummer in (alleen cijfers, spaties, + of -).
                  </p>
                ) : null}
              </div>
              <div className="field">
                <Label htmlFor="message">Bericht</Label>
                <Textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} required />
              </div>
              <div className="actions">
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Verzenden..." : "Verzenden"}
                </Button>
              </div>
            </form>
          </div>

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
                      <i>Ons kantoor is enkel op afspraak geopend</i>
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
