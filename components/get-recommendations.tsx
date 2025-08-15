"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Brain } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Crop_Recommendation() {
  const [formData, setFormData] = useState({
    N: "",
    P: "",
    K: "",
    temperature: "",
    humidity: "",
    ph: "",
    rainfall: "",
  })

  const [loading, setLoading] = useState(false)
  const [recommendations, setRecommendations] = useState<
    { name: string; probability: number }[]
  >([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setRecommendations([])

    try {
      const res = await fetch("/api/crop-recommendations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          N: parseFloat(formData.N),
          P: parseFloat(formData.P),
          K: parseFloat(formData.K),
          temperature: parseFloat(formData.temperature),
          humidity: parseFloat(formData.humidity),
          ph: parseFloat(formData.ph),
          rainfall: parseFloat(formData.rainfall),
        }),
      })

      const data = await res.json()
      if (data.success) {
        setRecommendations(data.data.predictions)
      } else {
        console.error("Error:", data.error)
      }
    } catch (err) {
      console.error("Request failed", err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-muted/30 py-8">
        <div className="container mx-auto px-4">
          {/* Use grid for side by side layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Form Card */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  Get Crop Recommendations
                </CardTitle>
                <CardDescription>Enter soil and weather parameters</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {[
                    { id: "N", label: "Nitrogen (N)" },
                    { id: "P", label: "Phosphorus (P)" },
                    { id: "K", label: "Potassium (K)" },
                    { id: "temperature", label: "Temperature (°C)" },
                    { id: "humidity", label: "Humidity (%)" },
                    { id: "ph", label: "pH" },
                    { id: "rainfall", label: "Rainfall (mm)" },
                  ].map((field) => (
                    <div key={field.id} className="flex flex-col">
                      <Label htmlFor={field.id} className="mb-1 font-medium text-gray-700">
                        {field.label}
                      </Label>
                      <input
                        id={field.id}
                        type="number"
                        step={field.id === "ph" ? "0.1" : "any"}
                        value={formData[field.id as keyof typeof formData]}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                        placeholder={`Enter ${field.label}`}
                        required
                      />
                    </div>
                  ))}

                  <Button
                    className="w-full flex items-center justify-center gap-2"
                    type="submit"
                    disabled={loading}
                  >
                    <Brain className="h-5 w-5" />
                    {loading ? "Processing..." : "Get Recommendations"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Recommendations Card */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  Top 3 Recommendations
                </CardTitle>
                <CardDescription>
                  Crop suitability based on input parameters
                </CardDescription>
              </CardHeader>
              <CardContent>
                {recommendations.length > 0 ? (
                  <div className="space-y-4">
                    {recommendations.map((rec, idx) => (
                      <div
                        key={idx}
                        className="p-4 border border-gray-200 rounded-md flex justify-between items-center bg-indigo-50"
                      >
                        <span className="text-lg font-medium text-gray-900">{rec.name}</span>
                        <span className="text-sm font-semibold text-indigo-700">{rec.probability}%</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No recommendations to display yet.</p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
