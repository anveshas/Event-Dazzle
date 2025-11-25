import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  const { eventId, title, price } = await req.json();

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    success_url: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/cancel`,
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: { name: title },
          unit_amount: price * 100,
        },
        quantity: 1,
      },
    ],
    metadata: { eventId },
  });

  return Response.json({ url: session.url });
}
