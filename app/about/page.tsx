import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Globe, Brain, TrendingUp, Shield, ArrowRight, CheckCircle, Heart, Lightbulb, Zap } from "lucide-react"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Dr. Rajesh Kumar",
      role: "CEO & Co-founder",
      expertise: "Agricultural Science",
      image: "/professional-indian-man-suit.png",
    },
    {
      name: "Priya Sharma",
      role: "CTO & Co-founder",
      expertise: "AI & Machine Learning",
      image: "/professional-indian-woman-tech.png",
    },
    {
      name: "Dr. Amit Patel",
      role: "Head of Research",
      expertise: "Crop Science",
      image: "/placeholder-qcqf0.png",
    },
    {
      name: "Neha Gupta",
      role: "Product Manager",
      expertise: "User Experience",
      image: "/professional-indian-woman-product-manager.png",
    },
  ]

  const achievements = [
    { number: "10,000+", label: "Active Farmers" },
    { number: "95%", label: "Accuracy Rate" },
    { number: "50+", label: "Crop Types" },
    { number: "15", label: "States Covered" },
  ]

  const values = [
    {
      icon: Heart,
      title: "Farmer-First Approach",
      description: "Every decision we make is centered around improving the lives and livelihoods of farmers.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously push the boundaries of agricultural technology to solve real-world problems.",
    },
    {
      icon: Globe,
      title: "Sustainability",
      description: "Promoting eco-friendly farming practices that protect our planet for future generations.",
    },
    {
      icon: Zap,
      title: "Accessibility",
      description: "Making advanced agricultural technology accessible to farmers of all scales and backgrounds.",
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
                About KrishiMitra 2.0
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
                Empowering Farmers with
                <span className="block text-accent">AI Technology</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                We're on a mission to revolutionize agriculture through artificial intelligence, helping farmers make
                smarter decisions and achieve better yields.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-muted/30">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="animate-slide-in-left">
                  <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Mission</h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    KrishiMitra 2.0 was born from a simple yet powerful vision: to bridge the gap between traditional
                    farming wisdom and cutting-edge artificial intelligence. We believe that every farmer, regardless of
                    their scale or location, deserves access to the best agricultural insights and recommendations.
                  </p>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    Our platform combines decades of agricultural research with advanced machine learning algorithms to
                    provide personalized crop recommendations, accurate price predictions, and instant disease detection
                    capabilities.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span>Increase crop yields by up to 30%</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span>Reduce farming risks through AI insights</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span>Promote sustainable farming practices</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span>Support farmers with 24/7 AI assistance</span>
                    </div>
                  </div>
                </div>

                <div className="animate-fade-in-up">
                  <div className="relative">
                    <img
                      src="/modern-tech-farm.png"
                      alt="Modern farming with technology"
                      className="rounded-lg shadow-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-20">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Impact</h2>
              <p className="text-xl text-muted-foreground">
                Numbers that reflect our commitment to transforming agriculture
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">{achievement.number}</div>
                  <div className="text-sm text-muted-foreground">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/30">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Values</h2>
              <p className="text-xl text-muted-foreground">The principles that guide everything we do</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                      <value.icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Meet Our Team</h2>
              <p className="text-xl text-muted-foreground">
                Passionate experts dedicated to revolutionizing agriculture
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  className="text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                    <p className="text-sm text-accent font-medium mb-2">{member.role}</p>
                    <p className="text-xs text-muted-foreground">{member.expertise}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-20 bg-muted/30">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Technology</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Advanced AI algorithms and machine learning models power our agricultural solutions
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="animate-fade-in-up">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                      <Brain className="h-8 w-8 text-accent" />
                    </div>
                    <CardTitle>Machine Learning</CardTitle>
                    <CardDescription>Advanced algorithms that learn from vast agricultural datasets</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Deep neural networks</li>
                      <li>• Predictive modeling</li>
                      <li>• Pattern recognition</li>
                      <li>• Continuous learning</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                      <TrendingUp className="h-8 w-8 text-accent" />
                    </div>
                    <CardTitle>Data Analytics</CardTitle>
                    <CardDescription>Comprehensive analysis of weather, soil, and market data</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Real-time data processing</li>
                      <li>• Statistical modeling</li>
                      <li>• Trend analysis</li>
                      <li>• Predictive insights</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                      <Shield className="h-8 w-8 text-accent" />
                    </div>
                    <CardTitle>Computer Vision</CardTitle>
                    <CardDescription>Image recognition for disease detection and crop monitoring</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Image classification</li>
                      <li>• Disease identification</li>
                      <li>• Crop health assessment</li>
                      <li>• Quality analysis</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Join Our Mission?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Be part of the agricultural revolution. Start using KrishiMitra 2.0 today and experience the future of
                farming.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="text-lg px-8">
                  <Link href="/register">
                    Get Started Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-lg px-8 bg-transparent">
                  <Link href="/contact">Contact Our Team</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
