"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { useState } from "react"
import { Mail, Phone, MapPin, Clock, Facebook, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Bericht verzonden",
        description: `Bedankt ${formData.name}, uw bericht is succesvol verzonden. We nemen zo snel mogelijk contact met u op.`,
      })
      setFormData({
        name: "",
        email: "",
        message: "",
      })
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <>
      {/* Page Header */}
      <section className="page-header py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Contact</h1>
          <div className="flex items-center text-sm text-white/80 mt-4">
            <Link href="/" className="hover:underline text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>Contact</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Neem contact met mij op</CardTitle>
                  <CardDescription>Vul het formulier in en ik neem zo snel mogelijk contact met u op.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Naam</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Bericht</Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting}>
                      {isSubmitting ? "Verzenden..." : "Verzenden"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contactgegevens</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary mr-3 mt-1" />
                    <div>
                      <h3 className="font-bold">Adres</h3>
                      <p>Financieel en Fiscaal Evenwicht</p>
                      <p>Spoorstraat 35</p>
                      <p>9636 AS Zuidbroek</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-primary mr-3 mt-1" />
                    <div>
                      <h3 className="font-bold">Telefoon</h3>
                      <p>
                        <a href="tel:+31651740538" className="hover:underline">
                          +316 517 405 38
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-primary mr-3 mt-1" />
                    <div>
                      <h3 className="font-bold">E-mail</h3>
                      <p>
                        <a href="mailto:info@financieelevenwicht.nl" className="hover:underline">
                          info@financieelevenwicht.nl
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-primary mr-3 mt-1" />
                    <div>
                      <h3 className="font-bold">Openingstijden</h3>
                      <p>
                        <strong>Maandag - Vrijdag:</strong> 09:00 - 18:00
                      </p>
                      <p>
                        <strong>Zaterdag:</strong> 10:00 - 14:00
                      </p>
                      <p>
                        <strong>Zondag:</strong> Gesloten
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Social Media</h2>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/financieelevenwicht"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-muted rounded-full hover:bg-muted/80 transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/financieelevenwicht"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-muted rounded-full hover:bg-muted/80 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <Card className="bg-primary text-white">
                <CardHeader>
                  <CardTitle>Direct contact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Heeft u een dringende vraag? Bel mij direct op:</p>
                  <p className="text-xl font-bold mt-2">
                    <a href="tel:+31651740538" className="hover:underline">
                      +316 517 405 38
                    </a>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
