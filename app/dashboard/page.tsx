"use client"

import type React from "react"

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  Brain,
  TrendingUp,
  Shield,
  Camera,
  Upload,
  MapPin,
  Calendar,
  Thermometer,
  Droplets,
  Sun,
  Wind,
  BarChart3,
  AlertTriangle,
  CheckCircle,
  Clock,
  Leaf,
  DollarSign,
  Target,
  Sprout,
} from "lucide-react"
import Crop_Recommendation from "@/components/get-recommendations"

import DiseaseDetection from "@/components/disease-detection"

import RecentActivity from "@/components/Recents";
import WelcomeSection from "@/components/welcomeSection";


export default function DashboardPage() {
  const [selectedLocation, setSelectedLocation] = useState("")
  const [selectedCrop, setSelectedCrop] = useState("")
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleTakePhoto = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" }, // Use back camera on mobile
      })

      // Create video element to show camera feed
      const video = document.createElement("video")
      video.srcObject = stream
      video.play()

      // Create canvas to capture photo
      const canvas = document.createElement("canvas")
      const context = canvas.getContext("2d")

      // Wait for video to load
      video.onloadedmetadata = () => {
        canvas.width = video.videoWidth
        canvas.height = video.videoHeight

        // Capture frame after 3 seconds (you can modify this)
        setTimeout(() => {
          if (context) {
            context.drawImage(video, 0, 0)
            const imageDataUrl = canvas.toDataURL("image/jpeg")
            setUploadedImage(imageDataUrl)
          }

          // Stop camera stream
          stream.getTracks().forEach((track) => track.stop())
        }, 3000)
      }
    } catch (error) {
      console.error("Error accessing camera:", error)
      // Fallback to file input if camera access fails
      document.getElementById("image-upload")?.click()
    }
  }
  const [weather, setWeather] = useState<any>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;
      const res = await fetch(`/api/weather?lat=${latitude}&lon=${longitude}`);
      const json = await res.json();
      if (json.success) setWeather(json.data);
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {/* Floating farming elements */}
        <div className="absolute top-20 left-10 w-8 h-8 text-green-500/30 animate-float">
          <Sprout className="w-full h-full" />
        </div>
        <div
          className="absolute top-40 right-20 w-6 h-6 text-yellow-400/40 animate-float"
          style={{ animationDelay: "1s" }}
        >
          <Sun className="w-full h-full" />
        </div>
        <div
          className="absolute top-60 left-1/4 w-5 h-5 text-blue-400/30 animate-float"
          style={{ animationDelay: "2s" }}
        >
          <Droplets className="w-full h-full" />
        </div>
        <div
          className="absolute bottom-40 right-1/3 w-7 h-7 text-green-400/25 animate-float"
          style={{ animationDelay: "0.5s" }}
        >
          <Wind className="w-full h-full" />
        </div>
        <div className="absolute bottom-20 left-10 w-10 h-10 text-green-600/20 animate-grow">
          <Leaf className="w-full h-full" />
        </div>

        {/* Additional farming animations */}
        <div
          className="absolute top-1/3 left-1/2 w-6 h-6 text-green-500/25 animate-bounce"
          style={{ animationDelay: "3s" }}
        >
          <Sprout className="w-full h-full" />
        </div>
        <div
          className="absolute bottom-1/3 right-10 w-8 h-8 text-yellow-500/30 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        >
          <Sun className="w-full h-full" />
        </div>
        <div
          className="absolute top-1/2 right-1/4 w-4 h-4 text-blue-500/35 animate-ping"
          style={{ animationDelay: "2.5s" }}
        >
          <Droplets className="w-full h-full" />
        </div>

        {/* Animated background gradients */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-400/3 rounded-full blur-2xl animate-float"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-green-500/3 to-green-400/3 rounded-full blur-3xl animate-spin-slow"></div>
        </div>
      </div>

      <Header />

      <main className="flex-1 bg-muted/30 pt-20">
        <div className="container px-4 py-8">
          {/* Welcome Section */}
          {/* <div className="mb-8 animate-fade-in-up">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold">
                  Welcome back,{" "}
                  <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                    John!
                  </span>
                </h1>
                <p className="text-muted-foreground">Here's what's happening with your farm today.</p>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Punjab, India</span>
                <Calendar className="h-4 w-4 ml-4" />
                <span>Dec 13, 2024</span>
              </div>
            </div>
          </div> */}

          <WelcomeSection />

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 animate-slide-in-left">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Farm Area</p>
                    <p className="text-2xl font-bold">25 acres</p>
                  </div>
                  <Target className="h-8 w-8 text-accent" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Active Crops</p>
                    <p className="text-2xl font-bold">3 types</p>
                  </div>
                  <Leaf className="h-8 w-8 text-accent" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Est. Revenue</p>
                    <p className="text-2xl font-bold">₹8.5L</p>
                  </div>
                  <DollarSign className="h-8 w-8 text-accent" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">AI Insights</p>
                    <p className="text-2xl font-bold">12 new</p>
                  </div>
                  <Brain className="h-8 w-8 text-accent" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Weather Widget */}
         <Card>
  <CardHeader>
    <CardTitle className="flex items-center space-x-2">
      <Sun className="h-5 w-5 text-accent" />
      <span>Current Weather</span>
    </CardTitle>
  </CardHeader>
  <CardContent>
    {weather ? (
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="text-center">
          <Sun className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
          <p className="text-2xl font-bold">{weather.temperature}°C</p>
          <p className="text-sm text-muted-foreground">Current Temp</p>
        </div>
        <div className="text-center">
          <Droplets className="h-6 w-6 text-blue-500 mx-auto mb-2" />
          <p className="text-lg font-semibold">—</p>
          <p className="text-sm text-muted-foreground">Humidity</p>
        </div>
        <div className="text-center">
          <Wind className="h-6 w-6 text-gray-500 mx-auto mb-2" />
          <p className="text-lg font-semibold">—</p>
          <p className="text-sm text-muted-foreground">Wind Speed</p>
        </div>
        {/* <div className="text-center">
          <Thermometer className="h-6 w-6 text-red-500 mx-auto mb-2" />
          <p className="text-lg font-semibold">Feels like</p>
          <p className="text-sm text-muted-foreground">N/A</p>
        </div> */}
        <div className="text-center">
          <Droplets className="h-6 w-6 text-blue-600 mx-auto mb-2" />
          <p className="text-lg font-semibold">—</p>
          <p className="text-sm text-muted-foreground">Rain chance</p>
        </div>
      </div>
    ) : (
      <p>Loading weather...</p>
    )} 
   </CardContent>

   
</Card>


          {/* AI Features Tabs */}
          <Tabs defaultValue="recommendations" className="animate-fade-in-up">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="recommendations" className="flex items-center space-x-2">
                <Brain className="h-4 w-4" />
                <span>Crop Recommendations</span>
              </TabsTrigger>
              <TabsTrigger value="predictions" className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4" />
                <span>Price Predictions</span>
              </TabsTrigger>
              <TabsTrigger value="detection" className="flex items-center space-x-2">
                <Shield className="h-4 w-4" />
                <span>Disease Detection</span>
              </TabsTrigger>
            </TabsList>

            {/* Crop Recommendations Tab */}
            <TabsContent value="recommendations" className="space-y-6">
              <div className="grid lg:grid-cols-1 ">
                <Card>
                  <Crop_Recommendation />
                </Card>

              </div>
            </TabsContent>

            {/* Price Predictions Tab */}
            <TabsContent value="predictions" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Price Forecast</CardTitle>
                    <CardDescription>Select a crop to view price predictions</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="crop">Select Crop</Label>
                      <Select onValueChange={setSelectedCrop}>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose crop for prediction" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="wheat">Wheat</SelectItem>
                          <SelectItem value="rice">Rice</SelectItem>
                          <SelectItem value="corn">Corn</SelectItem>
                          <SelectItem value="cotton">Cotton</SelectItem>
                          <SelectItem value="sugarcane">Sugarcane</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="market">Market</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select market" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="local">Local Market</SelectItem>
                          <SelectItem value="mandi">Mandi</SelectItem>
                          <SelectItem value="export">Export Market</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button className="w-full">
                      <TrendingUp className="mr-2 h-4 w-4" />
                      Generate Forecast
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Wheat Price Trend</CardTitle>
                    <CardDescription>6-month price forecast</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 bg-accent/10 rounded-lg">
                          <p className="text-sm text-muted-foreground">Current Price</p>
                          <p className="text-2xl font-bold text-accent">₹2,450</p>
                          <p className="text-xs text-muted-foreground">per quintal</p>
                        </div>
                        <div className="text-center p-4 bg-muted/50 rounded-lg">
                          <p className="text-sm text-muted-foreground">Predicted (3M)</p>
                          <p className="text-2xl font-bold">₹2,680</p>
                          <p className="text-xs text-green-600">+9.4% ↗</p>
                        </div>
                      </div>

                      <div className="h-48 bg-gradient-to-r from-accent/10 to-accent/5 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <BarChart3 className="h-12 w-12 text-accent mx-auto mb-2" />
                          <p className="text-sm text-muted-foreground">Interactive Price Chart</p>
                          <p className="text-xs text-muted-foreground mt-1">Historical & Predicted Data</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Market Confidence</span>
                          <span className="text-accent font-medium">High (85%)</span>
                        </div>
                        <Progress value={85} className="h-2" />
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-medium">Key Factors:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Favorable weather conditions</li>
                          <li>• Increased export demand</li>
                          <li>• Government support policies</li>
                          <li>• Seasonal price patterns</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Disease Detection Tab */}
            <TabsContent value="detection" className="space-y-6">
              <div className="grid lg:grid-cols-1">
                <Card>
                 <DiseaseDetection />
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          {/* Recent Activity */}
          <Card >
          

            <RecentActivity />
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}