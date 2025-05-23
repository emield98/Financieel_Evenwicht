"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast, toast } from "@/hooks/use-toast";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Facebook, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telefoonnummer: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mldbdevb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Bericht verzonden",
          description: `Bedankt ${formData.name}, uw bericht is succesvol verzonden.`,
          variant: "success",
        });
        setFormData({ name: "", email: "", telefoonnummer: "", message: "" });
      } else {
        toast({
          title: "Fout",
          description: "Er ging iets mis bij het verzenden.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({ title: "Fout", description: "Netwerkprobleem of serverfout." });
    }

    setIsSubmitting(false);
  };

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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Form */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Neem contact met ons op</CardTitle>
                    <CardDescription>
                      Vul het formulier in en wij nemen zo snel mogelijk contact
                      met u op
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Naam</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
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
                        <Label htmlFor="telefoonnummer">Telefoonnummer</Label>
                        <Input
                          id="telefoonnummer"
                          name="telefoonnummer"
                          type="text"
                          inputMode="tel"
                          pattern="[0-9+\s\-]*"
                          value={formData.telefoonnummer}
                          onChange={handleChange}
                          aria-invalid={
                            formData.telefoonnummer !== "" &&
                            !/^[0-9+\s\-]*$/.test(formData.telefoonnummer)
                          }
                          aria-describedby="telefoonnummer-error"
                        />
                        {formData.telefoonnummer !== "" &&
                          !/^[0-9+\s\-]*$/.test(formData.telefoonnummer) && (
                            <p
                              id="telefoonnummer-error"
                              className="text-sm text-red-600 mt-1"
                            >
                              Voer een geldig telefoonnummer in (alleen cijfers,
                              spaties, + of -).
                            </p>
                          )}
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
                      <Button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/90"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Verzenden..." : "Verzenden"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-1">
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
                      <MapPin className="h-5 w-5 text-primary mr-3 mt-1" />
                      <div>
                        <h3 className="font-bold">Postbus</h3>
                        <p>Financieel en Fiscaal Evenwicht</p>
                        <p>Postbus 7</p>
                        <p>9620 AA Slochteren</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-primary mr-3 mt-1" />
                      <div>
                        <h3 className="font-bold">Telefoon</h3>
                        <p>
                          <a
                            href="tel:+31651740538"
                            className="hover:underline"
                          >
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
                          <a
                            href="mailto:financieel.evenwicht@home.nl"
                            className="hover:underline"
                          >
                            financieel.evenwicht@home.nl
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-primary mr-3 mt-1" />
                      <div>
                        <h3 className="font-bold">Openingstijden</h3>
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
                      </div>
                    </div>
                  </div>
                </div>

                <Card className="sm: bg-primary lg:bg-primary/70 text-white">
                  <CardHeader>
                    <CardTitle>Direct contact</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Liever meteen telefonisch contact? Bel ons op:</p>
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
        </div>
      </section>
    </>
  );
}
