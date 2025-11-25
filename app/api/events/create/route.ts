import { geocodeAddress } from "@/lib/geoCoder";
import Event from "@/lib/database/models/event.model";
import { connectToDatabase } from "@/lib/database";

export async function POST(req: Request) {
  try {
    await connectToDatabase();

    const body = await req.json();

    const { title, description, price, date, category, imageUrl, location, organizer } = body;

    // Convert address → lat/lng
    const coordinates = await geocodeAddress(location);

    const event = await Event.create({
      title,
      description,
      price,
      date,
      category,
      imageUrl,
      location,
      coordinates,
      organizer,
    });

    return Response.json(event, { status: 201 });
  } catch (e) {
    console.log("Create event error", e);
    return Response.json({ error: "Failed" }, { status: 500 });
  }
}
