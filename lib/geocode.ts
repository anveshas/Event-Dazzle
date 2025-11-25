export async function geocodeAddress(address: string) {
  const key = process.env.GOOGLE_MAPS_API_KEY;

  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
    address
  )}&key=${key}`;

  const res = await fetch(url);
  const data = await res.json();

  if (!data.results?.[0]) return null;

  const loc = data.results[0].geometry.location;

  return {
    lat: loc.lat,
    lng: loc.lng,
  };
}
