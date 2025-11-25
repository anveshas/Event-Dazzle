import Event from "@/lib/database/models/event.model";
import { connectToDatabase } from "@/lib/database";

export async function POST(req: Request) {
  try {
    await connectToDatabase();

    const { lat, lng, radiusKm } = await req.json();

    const events = await Event.aggregate([
      {
        $geoNear: {
          near: { type: "Point", coordinates: [lng, lat] },
          distanceField: "distance",
          maxDistance: radiusKm * 1000,
          spherical: true,
        },
      },
    ]);

    return Response.json(events);
  } catch (err) {
    return Response.json({ error: "Error searching events" }, { status: 500 });
  }
}
