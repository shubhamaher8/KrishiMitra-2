import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  Brain,
  TrendingUp,
  Shield,
  ArrowRight,
  CheckCircle,
  Camera,
  BarChart3,
  Smartphone,
  Cloud,
  Zap,
} from "lucide-react"

export default function ExplorePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 lg:py-32">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
              <Badge variant="secondary" className="mb-4">
                AI-Powered Features
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
                Explore Our
                <span className="block text-accent">AI Solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Discover how our three core AI features can revolutionize your farming practices and boost your
                agricultural success.
              </p>
            </div>
          </div>
        </section>

        {/* Feature 1: Crop Recommendations */}
        <section className="py-20 bg-muted/30">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="animate-slide-in-left">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Brain className="h-6 w-6 text-accent" />
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold">Smart Crop Recommendations</h2>
                  </div>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    Our AI analyzes multiple data points including soil composition, weather patterns, market trends,
                    and historical yield data to recommend the most suitable crops for your specific conditions.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">Soil Analysis Integration</h3>
                        <p className="text-sm text-muted-foreground">
                          Connect with soil testing labs or use our mobile app to input soil data for precise
                          recommendations.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">Climate Optimization</h3>
                        <p className="text-sm text-muted-foreground">
                          Real-time weather data and climate predictions ensure your crops thrive in current conditions.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">Market Intelligence</h3>
                        <p className="text-sm text-muted-foreground">
                          Consider market demand and pricing trends to maximize profitability of your crop selection.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button size="lg" asChild>
                    <Link href="/dashboard">
                      Try Crop Recommendations
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>

                <div className="animate-fade-in-up">
                  <Card className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">Recommended Crops</h3>
                        <Badge variant="secondary">Based on your location</Badge>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-accent/5 rounded-lg">
                          <div>
                            <div className="font-medium">Wheat (Winter)</div>
                            <div className="text-sm text-muted-foreground">95% compatibility</div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium text-accent">High Profit</div>
                            <div className="text-xs text-muted-foreground">₹45,000/acre</div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                          <div>
                            <div className="font-medium">Mustard</div>
                            <div className="text-sm text-muted-foreground">88% compatibility</div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium">Medium Profit</div>
                            <div className="text-xs text-muted-foreground">₹32,000/acre</div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                          <div>
                            <div className="font-medium">Barley</div>
                            <div className="text-sm text-muted-foreground">82% compatibility</div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium">Stable Profit</div>
                            <div className="text-xs text-muted-foreground">₹28,000/acre</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature 2: Price Predictions */}
        <section className="py-20">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="animate-fade-in-up lg:order-2">
                  <Card className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">Price Forecast</h3>
                        <Badge variant="secondary">Next 6 months</Badge>
                      </div>
                      <div className="h-48 bg-gradient-to-r from-accent/10 to-accent/5 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <BarChart3 className="h-12 w-12 text-accent mx-auto mb-2" />
                          <p className="text-sm text-muted-foreground">Interactive Price Chart</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-3 bg-accent/5 rounded-lg">
                          <div className="text-lg font-bold text-accent">₹2,450</div>
                          <div className="text-xs text-muted-foreground">Current Price/quintal</div>
                        </div>
                        <div className="text-center p-3 bg-muted/50 rounded-lg">
                          <div className="text-lg font-bold">₹2,680</div>
                          <div className="text-xs text-muted-foreground">Predicted (3 months)</div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="animate-slide-in-left lg:order-1">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-accent" />
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold">Price Prediction</h2>
                  </div>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    Make informed selling decisions with our advanced price prediction models that analyze historical
                    trends, market dynamics, and external factors affecting crop prices.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">Historical Analysis</h3>
                        <p className="text-sm text-muted-foreground">
                          Analyze 10+ years of price data to identify patterns and seasonal trends.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">Market Factors</h3>
                        <p className="text-sm text-muted-foreground">
                          Consider supply-demand dynamics, export policies, and global market conditions.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">Timing Optimization</h3>
                        <p className="text-sm text-muted-foreground">
                          Get alerts for optimal selling times to maximize your profits.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button size="lg" asChild>
                    <Link href="/dashboard">
                      View Price Predictions
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature 3: Disease Detection */}
        <section className="py-20 bg-muted/30">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="animate-slide-in-left">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Shield className="h-6 w-6 text-accent" />
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold">Disease Detection</h2>
                  </div>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    Protect your crops with instant disease identification using computer vision. Simply take a photo
                    and get immediate diagnosis with treatment recommendations.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">Instant Diagnosis</h3>
                        <p className="text-sm text-muted-foreground">
                          AI-powered image analysis provides results in seconds with 95%+ accuracy.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">Treatment Plans</h3>
                        <p className="text-sm text-muted-foreground">
                          Get detailed treatment recommendations including organic and chemical options.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">Prevention Tips</h3>
                        <p className="text-sm text-muted-foreground">
                          Learn how to prevent future occurrences with expert agricultural advice.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button size="lg" asChild>
                    <Link href="/dashboard">
                      Try Disease Detection
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>

                <div className="animate-fade-in-up">
                  <Card className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">Disease Analysis</h3>
                        <Badge variant="secondary">AI Powered</Badge>
                      </div>
                      <div className="h-48 bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg flex items-center justify-center border-2 border-dashed border-accent/20">
                        <div className="text-center">
                          <Camera className="h-12 w-12 text-accent mx-auto mb-2" />
                          <p className="text-sm text-muted-foreground mb-2">Upload crop image</p>
                          <Button variant="outline" size="sm">
                            Take Photo
                          </Button>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Leaf Blight</span>
                          <span className="text-destructive">High Risk</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span>Powdery Mildew</span>
                          <span className="text-yellow-600">Medium Risk</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span>Root Rot</span>
                          <span className="text-accent">Low Risk</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-20">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Powered by Advanced Technology</h2>
              <p className="text-xl text-muted-foreground">
                Our platform leverages cutting-edge AI and machine learning technologies to deliver accurate, reliable
                results for modern agriculture.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center animate-fade-in-up">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                  <Smartphone className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Mobile First</h3>
                <p className="text-sm text-muted-foreground">
                  Access all features on your smartphone with our responsive, mobile-optimized interface.
                </p>
              </div>

              <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                  <Cloud className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Cloud Computing</h3>
                <p className="text-sm text-muted-foreground">
                  Scalable cloud infrastructure ensures fast processing and reliable access to your data.
                </p>
              </div>

              <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                  <Zap className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Real-time Processing</h3>
                <p className="text-sm text-muted-foreground">
                  Get instant results with our optimized AI models that process data in real-time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Experience AI Agriculture?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of farmers who are already using KrishiMitra 2.0 to improve their crop yields and
                profits.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="text-lg px-8">
                  <Link href="/register">
                    Start Your Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-lg px-8 bg-transparent">
                  <Link href="/dashboard">View Dashboard</Link>
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
