"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ForecastPage() {
  const [crop, setCrop] = useState("");
  const [district, setDistrict] = useState("");
  const [forecastType, setForecastType] = useState("daily");
  const [selectedDate, setSelectedDate] = useState("");
  const [result, setResult] = useState<any>(null);
  const [plotUrl, setPlotUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("/api/price-predictions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          crop,
          district,
          state: "Maharashtra",
          type: forecastType,
          date: selectedDate,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setResult(data);
        setPlotUrl(data.plotUrl || null);
      } else {
        setResult({ error: data.error });
        setPlotUrl(null);
      }
    } catch (err) {
      console.error(err);
      setResult({ error: "Something went wrong" });
      setPlotUrl(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader><CardTitle>Crop Price Forecast</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          {/* Crop */}
          <div>
            <Label>Crop</Label>
            <Select onValueChange={setCrop}>
              <SelectTrigger><SelectValue placeholder="Select crop" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="Wheat">Wheat</SelectItem>
                <SelectItem value="Rice">Rice</SelectItem>
                <SelectItem value="Sugarcane">Sugarcane</SelectItem>
                <SelectItem value="Soybean">Soybean</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* District */}
          <div>
            <Label>District</Label>
            <Select onValueChange={setDistrict}>
              <SelectTrigger><SelectValue placeholder="Select district" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="Pune">Pune</SelectItem>
                <SelectItem value="Nagpur">Nagpur</SelectItem>
                <SelectItem value="Nashik">Nashik</SelectItem>
                <SelectItem value="Aurangabad">Aurangabad</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Date Picker */}
          <div>
            <Label>Select Date (Optional)</Label>
            <Input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
          </div>

          {/* Forecast Type */}
          <div>
            <Label>Forecast Type</Label>
            <Select onValueChange={setForecastType} defaultValue="daily">
              <SelectTrigger><SelectValue placeholder="Select forecast type" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="daily">Daily Forecast</SelectItem>
                <SelectItem value="weekly">Weekly Forecast</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button onClick={handleSubmit} disabled={loading}>
            {loading ? "Loading..." : "Get Forecast"}
          </Button>
        </CardContent>
      </Card>

      {/* Result + Plot */}
      {result && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader><CardTitle>Predicted Price</CardTitle></CardHeader>
            <CardContent>
              {result.error ? (
                <p className="text-red-500">{result.error}</p>
              ) : (
                <div className="space-y-2">
                  <p><strong>Date:</strong> {result.date}</p>
                  <p><strong>Predicted:</strong> {result.predicted}</p>
                  <p><strong>Lower Bound:</strong> {result.lower_bound}</p>
                  <p><strong>Upper Bound:</strong> {result.upper_bound}</p>
                </div>
              )}
            </CardContent>
          </Card>

          {plotUrl && (
            <Card>
              <CardHeader><CardTitle>Interactive Plot</CardTitle></CardHeader>
              <CardContent>
                <iframe src={plotUrl} width="100%" height={400} />
              </CardContent>
            </Card>
          )}
        </div>
      )}
    </div>
  );
}
