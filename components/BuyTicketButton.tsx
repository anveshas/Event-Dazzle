"use client";

export default function BuyTicketButton({ event }) {
  const checkout = async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify({
        eventId: event._id,
        title: event.title,
        price: event.price,
      }),
    });

    const { url } = await res.json();
    window.location.href = url;
  };

  return (
    <button
      onClick={checkout}
      className="bg-green-600 text-white px-4 py-2 rounded"
    >
      Buy Ticket
    </button>
  );
}
