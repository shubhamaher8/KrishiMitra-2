import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, Brain, TrendingUp, Shield, Leaf, Users, Award, Sprout, Sun, Droplets, Wind } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-8 h-8 text-accent/20 animate-float">
          <Sprout className="w-full h-full" />
        </div>
        <div
          className="absolute top-40 right-20 w-6 h-6 text-accent-blue/20 animate-float"
          style={{ animationDelay: "1s" }}
        >
          <Sun className="w-full h-full" />
        </div>
        <div className="absolute top-60 left-1/4 w-5 h-5 text-accent/15 animate-float" style={{ animationDelay: "2s" }}>
          <Droplets className="w-full h-full" />
        </div>
        <div
          className="absolute bottom-40 right-1/3 w-7 h-7 text-accent-blue/15 animate-float"
          style={{ animationDelay: "0.5s" }}
        >
          <Wind className="w-full h-full" />
        </div>
        <div className="absolute bottom-20 left-10 w-10 h-10 text-accent/10 animate-grow">
          <Leaf className="w-full h-full" />
        </div>
      </div>

      <Header />

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
                AI-Powered Agriculture
                <span className="block bg-gradient-to-r from-accent to-accent-blue bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Revolutionize your farming with intelligent crop recommendations, accurate price predictions, and
                instant disease detection powered by advanced AI technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  asChild
                  className="text-lg px-8 py-4 bg-gradient-to-r from-accent via-accent-blue to-accent hover:from-accent/90 hover:via-accent-blue/90 hover:to-accent/90 transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-2xl border-0 text-white font-semibold"
                >
                  <Link href="/register">
                    Get Started Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="text-lg px-8 py-4 bg-transparent hover:bg-black hover:text-white border-accent-blue/30 hover:border-black transition-all duration-300 transform hover:scale-105 font-semibold"
                >
                  <Link href="/explore">Explore Features</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Enhanced background decoration */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-accent/5 to-accent-blue/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-accent-blue/3 rounded-full blur-2xl animate-float"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-accent/3 rounded-full blur-2xl animate-grow"></div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-br from-muted/30 to-accent-blue/5">
          <div className="container px-4">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Three Powerful AI Features</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our advanced AI algorithms help you make informed decisions at every stage of your farming journey.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Crop Recommendations */}
              <Card className="group hover:shadow-2xl transition-all duration-500 animate-slide-in-left border-0 bg-gradient-to-br from-card to-accent/5 hover:from-accent/5 hover:to-accent/10 transform hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-accent/20 to-accent-blue/20 rounded-2xl flex items-center justify-center group-hover:from-accent/30 group-hover:to-accent-blue/30 transition-all duration-300 animate-pulse-green">
                    <Brain className="h-10 w-10 text-accent animate-wave" />
                  </div>
                  <CardTitle className="text-xl font-bold">Smart Crop Recommendations</CardTitle>
                  <CardDescription className="text-base">
                    Get personalized crop suggestions based on soil conditions, climate data, and market trends.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <ul className="text-sm text-muted-foreground space-y-3 mb-8">
                    <li className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      Soil analysis integration
                    </li>
                    <li className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-accent-blue rounded-full"></div>
                      Weather pattern analysis
                    </li>
                    <li className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      Market demand insights
                    </li>
                    <li className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-accent-blue rounded-full"></div>
                      Seasonal optimization
                    </li>
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent hover:bg-accent/10 border-accent/30 hover:border-accent transition-all duration-300 transform hover:scale-105"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              {/* Price Predictions */}
              <Card
                className="group hover:shadow-2xl transition-all duration-500 animate-slide-in-left border-0 bg-gradient-to-br from-card to-accent-blue/5 hover:from-accent-blue/5 hover:to-accent-blue/10 transform hover:scale-105"
                style={{ animationDelay: "0.1s" }}
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-accent-blue/20 to-accent/20 rounded-2xl flex items-center justify-center group-hover:from-accent-blue/30 group-hover:to-accent/30 transition-all duration-300 animate-pulse-green"
                    style={{ animationDelay: "0.5s" }}
                  >
                    <TrendingUp className="h-10 w-10 text-accent-blue animate-wave" />
                  </div>
                  <CardTitle className="text-xl font-bold">Price Prediction</CardTitle>
                  <CardDescription className="text-base">
                    Forecast crop prices using historical data and market analysis to maximize your profits.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <ul className="text-sm text-muted-foreground space-y-3 mb-8">
                    <li className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-accent-blue rounded-full"></div>
                      Historical trend analysis
                    </li>
                    <li className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      Market volatility tracking
                    </li>
                    <li className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-accent-blue rounded-full"></div>
                      Seasonal price patterns
                    </li>
                    <li className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      Export/import insights
                    </li>
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent hover:bg-accent-blue/10 border-accent-blue/30 hover:border-accent-blue transition-all duration-300 transform hover:scale-105"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              {/* Disease Detection */}
              <Card
                className="group hover:shadow-2xl transition-all duration-500 animate-slide-in-left border-0 bg-gradient-to-br from-card to-accent/5 hover:from-accent/5 hover:to-accent/10 transform hover:scale-105"
                style={{ animationDelay: "0.2s" }}
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-accent/20 to-accent-blue/20 rounded-2xl flex items-center justify-center group-hover:from-accent/30 group-hover:to-accent-blue/30 transition-all duration-300 animate-pulse-green"
                    style={{ animationDelay: "1s" }}
                  >
                    <Shield className="h-10 w-10 text-accent animate-wave" />
                  </div>
                  <CardTitle className="text-xl font-bold">Disease Detection</CardTitle>
                  <CardDescription className="text-base">
                    Instantly identify crop diseases through image analysis and get treatment recommendations.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <ul className="text-sm text-muted-foreground space-y-3 mb-8">
                    <li className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      Image-based diagnosis
                    </li>
                    <li className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-accent-blue rounded-full"></div>
                      Treatment suggestions
                    </li>
                    <li className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      Prevention strategies
                    </li>
                    <li className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-accent-blue rounded-full"></div>
                      Expert consultation
                    </li>
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent hover:bg-accent/10 border-accent/30 hover:border-accent transition-all duration-300 transform hover:scale-105"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Enhanced Stats Section */}
        <section className="py-20 bg-gradient-to-r from-accent/5 to-accent-blue/5">
          <div className="container px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
              <div className="animate-fade-in-up group">
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-accent to-accent-blue bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  10K+
                </div>
                <div className="text-sm font-medium text-muted-foreground">Active Farmers</div>
              </div>
              <div className="animate-fade-in-up group" style={{ animationDelay: "0.1s" }}>
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-accent-blue to-accent bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  95%
                </div>
                <div className="text-sm font-medium text-muted-foreground">Accuracy Rate</div>
              </div>
              <div className="animate-fade-in-up group" style={{ animationDelay: "0.2s" }}>
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-accent to-accent-blue bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  50+
                </div>
                <div className="text-sm font-medium text-muted-foreground">Crop Types</div>
              </div>
              <div className="animate-fade-in-up group" style={{ animationDelay: "0.3s" }}>
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-accent-blue to-accent bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  24/7
                </div>
                <div className="text-sm font-medium text-muted-foreground">AI Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-br from-muted/30 to-accent/5">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose KrishiMitra 2.0?</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Join thousands of farmers who have transformed their agricultural practices with our AI solutions.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center animate-fade-in-up group">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-accent/20 to-accent-blue/20 rounded-2xl flex items-center justify-center group-hover:from-accent/30 group-hover:to-accent-blue/30 transition-all duration-300 transform group-hover:scale-110">
                    <Leaf className="h-10 w-10 text-accent animate-wave" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Sustainable Farming</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Promote eco-friendly practices with AI-driven insights that optimize resource usage and reduce
                    environmental impact.
                  </p>
                </div>

                <div className="text-center animate-fade-in-up group" style={{ animationDelay: "0.1s" }}>
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-accent-blue/20 to-accent/20 rounded-2xl flex items-center justify-center group-hover:from-accent-blue/30 group-hover:to-accent/30 transition-all duration-300 transform group-hover:scale-110">
                    <Users className="h-10 w-10 text-accent-blue animate-wave" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Community Support</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Connect with fellow farmers, share experiences, and learn from a growing community of agricultural
                    innovators.
                  </p>
                </div>

                <div className="text-center animate-fade-in-up group" style={{ animationDelay: "0.2s" }}>
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-accent/20 to-accent-blue/20 rounded-2xl flex items-center justify-center group-hover:from-accent/30 group-hover:to-accent-blue/30 transition-all duration-300 transform group-hover:scale-110">
                    <Award className="h-10 w-10 text-accent animate-wave" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Proven Results</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Increase your crop yield by up to 30% and reduce losses with our scientifically-backed AI
                    recommendations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-accent/10 to-accent-blue/10">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Transform Your Farming?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join the agricultural revolution today. Get started with KrishiMitra 2.0 and experience the power of AI
                in farming.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  asChild
                  className="text-lg px-8 py-4 bg-gradient-to-r from-accent via-accent-blue to-accent hover:from-accent/90 hover:via-accent-blue/90 hover:to-accent/90 transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-2xl border-0 text-white font-semibold"
                >
                  <Link href="/register">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="text-lg px-8 py-4 bg-transparent hover:bg-black hover:text-white border-accent-blue/30 hover:border-black transition-all duration-300 transform hover:scale-105 font-semibold"
                >
                  <Link href="/contact">Contact Sales</Link>
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
