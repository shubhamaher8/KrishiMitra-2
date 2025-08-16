"use client";

import { useState, useEffect } from "react";
import { MapPin, Calendar } from "lucide-react";

type WelcomeSectionProps = {
  userName: string;
};

export default function WelcomeSection({ userName }: WelcomeSectionProps) {
  const [currentDate, setCurrentDate] = useState("");
  const [location, setLocation] = useState("Fetching location...");

  useEffect(() => {
    // Dynamic Date
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    setCurrentDate(date.toLocaleDateString("en-US", options));

    // Dynamic Location using Geolocation API
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const res = await fetch(
              `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
            );
            const data = await res.json();
            setLocation(`${data.address.state || ""}, ${data.address.country || ""}`);
          } catch (err) {
            setLocation("Unknown location");
          }
        },
        () => setLocation("Location permission denied")
      );
    } else {
      setLocation("Geolocation not supported");
    }
  }, []);

  return (
    <div className="mb-8 animate-fade-in-up">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-3xl font-bold">
            Welcome back,{" "}
            <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
              {userName}!
            </span>
          </h1>
          <p className="text-muted-foreground">Here's what's happening with your farm today.</p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>{location}</span>
          <Calendar className="h-4 w-4 ml-4" />
          <span>{currentDate}</span>
        </div>
      </div>
    </div>
  );
}
