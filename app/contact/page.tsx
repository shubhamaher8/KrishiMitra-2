"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, HeadphonesIcon, Globe, ArrowRight } from "lucide-react"

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    category: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Contact form submitted:", formData)
    setIsLoading(false)

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      category: "",
      message: "",
    })

    alert("Thank you for your message! We'll get back to you soon.")
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "support@krishimitra.com",
      description: "Send us an email anytime",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 98765 43210",
      description: "Mon-Fri from 9am to 6pm",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "New Delhi, India",
      description: "Agricultural Technology Hub",
    },
    {
      icon: Clock,
      title: "Support Hours",
      details: "24/7 AI Support",
      description: "Human support: 9am-6pm IST",
    },
  ]

  const supportOptions = [
    {
      icon: MessageSquare,
      title: "General Inquiry",
      description: "Questions about our platform and services",
    },
    {
      icon: HeadphonesIcon,
      title: "Technical Support",
      description: "Help with using KrishiMitra features",
    },
    {
      icon: Globe,
      title: "Partnership",
      description: "Collaboration and business opportunities",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 lg:py-32">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
              <Badge variant="secondary" className="mb-4">
                Get In Touch
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
                We're Here to
                <span className="block text-accent">Help You</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Have questions about KrishiMitra 2.0? Need technical support? Want to partner with us? We'd love to hear
                from you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-20 bg-muted/30">
          <div className="container px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                      <info.icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                    <p className="text-accent font-medium mb-1">{info.details}</p>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form and Support Options */}
        <section className="py-20">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="animate-slide-in-left">
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-2xl">Send us a Message</CardTitle>
                      <CardDescription>
                        Fill out the form below and we'll get back to you as soon as possible.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Name and Email */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input
                              id="name"
                              placeholder="Your full name"
                              value={formData.name}
                              onChange={(e) => handleInputChange("name", e.target.value)}
                              required
                              className="h-11"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="your@email.com"
                              value={formData.email}
                              onChange={(e) => handleInputChange("email", e.target.value)}
                              required
                              className="h-11"
                            />
                          </div>
                        </div>

                        {/* Phone and Category */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input
                              id="phone"
                              type="tel"
                              placeholder="+91 98765 43210"
                              value={formData.phone}
                              onChange={(e) => handleInputChange("phone", e.target.value)}
                              className="h-11"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="category">Category</Label>
                            <Select onValueChange={(value) => handleInputChange("category", value)}>
                              <SelectTrigger className="h-11">
                                <SelectValue placeholder="Select category" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="general">General Inquiry</SelectItem>
                                <SelectItem value="technical">Technical Support</SelectItem>
                                <SelectItem value="partnership">Partnership</SelectItem>
                                <SelectItem value="feedback">Feedback</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        {/* Subject */}
                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject</Label>
                          <Input
                            id="subject"
                            placeholder="Brief description of your inquiry"
                            value={formData.subject}
                            onChange={(e) => handleInputChange("subject", e.target.value)}
                            required
                            className="h-11"
                          />
                        </div>

                        {/* Message */}
                        <div className="space-y-2">
                          <Label htmlFor="message">Message</Label>
                          <Textarea
                            id="message"
                            placeholder="Tell us more about your inquiry..."
                            value={formData.message}
                            onChange={(e) => handleInputChange("message", e.target.value)}
                            required
                            className="min-h-[120px] resize-none"
                          />
                        </div>

                        {/* Submit Button */}
                        <Button type="submit" className="w-full h-11" disabled={isLoading}>
                          {isLoading ? (
                            <div className="flex items-center space-x-2">
                              <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                              <span>Sending...</span>
                            </div>
                          ) : (
                            <div className="flex items-center space-x-2">
                              <Send className="h-4 w-4" />
                              <span>Send Message</span>
                            </div>
                          )}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>

                {/* Support Options */}
                <div className="animate-fade-in-up">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold mb-4">How Can We Help?</h2>
                      <p className="text-muted-foreground mb-6">
                        Choose the best way to get in touch based on your needs.
                      </p>
                    </div>

                    <div className="space-y-4">
                      {supportOptions.map((option, index) => (
                        <Card key={index} className="hover:shadow-md transition-shadow">
                          <CardContent className="p-6">
                            <div className="flex items-start space-x-4">
                              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                <option.icon className="h-6 w-6 text-accent" />
                              </div>
                              <div>
                                <h3 className="font-semibold mb-2">{option.title}</h3>
                                <p className="text-sm text-muted-foreground">{option.description}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    {/* FAQ Link */}
                    <Card className="border-accent/20 bg-accent/5">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold mb-1">Frequently Asked Questions</h3>
                            <p className="text-sm text-muted-foreground">Find quick answers to common questions</p>
                          </div>
                          <Button variant="outline" size="sm">
                            View FAQ
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Response Time */}
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="font-semibold mb-4">Response Times</h3>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-sm">General Inquiries</span>
                            <Badge variant="secondary">24-48 hours</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Technical Support</span>
                            <Badge variant="secondary">4-8 hours</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Urgent Issues</span>
                            <Badge className="bg-accent/20 text-accent">1-2 hours</Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Office Location */}
        <section className="py-20 bg-muted/30">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Visit Our Office</h2>
                <p className="text-xl text-muted-foreground">
                  Located in the heart of India's agricultural technology hub
                </p>
              </div>

              <Card className="overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  <div className="p-8">
                    <h3 className="text-xl font-semibold mb-4">KrishiMitra Headquarters</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Address</p>
                          <p className="text-sm text-muted-foreground">
                            Agricultural Technology Park
                            <br />
                            Sector 62, Noida
                            <br />
                            Uttar Pradesh 201309, India
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Clock className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Office Hours</p>
                          <p className="text-sm text-muted-foreground">
                            Monday - Friday: 9:00 AM - 6:00 PM
                            <br />
                            Saturday: 10:00 AM - 4:00 PM
                            <br />
                            Sunday: Closed
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Phone className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Phone</p>
                          <p className="text-sm text-muted-foreground">+91 98765 43210</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center p-8">
                    <div className="text-center">
                      <MapPin className="h-16 w-16 text-accent mx-auto mb-4" />
                      <p className="text-sm text-muted-foreground">Interactive Map</p>
                      <p className="text-xs text-muted-foreground mt-1">Coming Soon</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
