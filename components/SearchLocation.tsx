"use client";

import { useState } from "react";

export default function SearchLocation() {
  const [location, setLocation] = useState("");
  const [radius, setRadius] = useState(10);
  const [events, setEvents] = useState([]);

  async function geocode(address: string) {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
    );

    const data = await res.json();
    return data.results?.[0]?.geometry?.location;
  }

  async function searchEvents() {
    const coords = await geocode(location);
    if (!coords) return alert("Could not find location");

    const res = await fetch("/api/events/search", {
      method: "POST",
      body: JSON.stringify({
        lat: coords.lat,
        lng: coords.lng,
        radiusKm: radius,
      }),
    });

    const data = await res.json();
    setEvents(data);
  }

  return (
    <div className="flex flex-col space-y-3">
      <input
        className="border p-2"
        placeholder="Enter city / address"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <input
        type="number"
        className="border p-2"
        value={radius}
        onChange={(e) => setRadius(Number(e.target.value))}
        placeholder="Radius in km"
      />

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={searchEvents}
      >
        Search
      </button>

      <div className="mt-4 space-y-4">
        {events.map((e: any) => (
          <div
            key={e._id}
            className="border p-3 rounded shadow-sm bg-white"
          >
            <h3 className="font-bold">{e.title}</h3>
            <p>{e.location}</p>
            <p>{Math.round(e.distance)} meters away</p>
          </div>
        ))}
      </div>
    </div>
  );
}
