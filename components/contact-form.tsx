"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Heading from "@/components/heading"
import { useToast } from "@/hooks/use-toast"

const FORM_ENDPOINT = "https://formspree.io/f/mldbdevb"

export default function ContactForm() {
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
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
    } catch {
      toast({ title: "Fout", description: "Netwerkprobleem of serverfout.", variant: "destructive" })
    }

    setIsSubmitting(false)
  }

  return (
    <div className="form-card">
      <Heading title="Neem contact met ons op" intro="Vul het formulier in en wij nemen zo snel mogelijk contact met u op." />
      <form onSubmit={handleSubmit} className="stack">
        <div className="field">
          <Label htmlFor="name">Naam</Label>
          <Input id="name" name="name" autoComplete="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="field">
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="field">
          <Label htmlFor="telefoonnummer">Telefoonnummer</Label>
          <Input
            id="telefoonnummer"
            name="telefoonnummer"
            type="text"
            inputMode="tel"
            autoComplete="tel"
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
  )
}
