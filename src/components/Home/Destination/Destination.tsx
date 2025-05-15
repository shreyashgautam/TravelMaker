// components/demos/focus-cards-demo.tsx
import { FocusCards } from "@/components/ui/focus-cards";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "London",
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      totalTravellers: 200,
    },
    {
      title: "New York, America",
      src: "https://hips.hearstapps.com/hmg-prod/images/new-york-city-downtown-skyline-aerial-view-seen-royalty-free-image-1703880417.jpg?crop=1.00xw:0.750xh;0,0.161xh",
      totalTravellers: 180,
    },
    {
      title: "Maldives",
      src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      totalTravellers: 160,
    },
    {
      title: "Paris, France",
      src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
      totalTravellers: 170,
    },
    {
      title: "Tokyo, Japan",
      src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
      totalTravellers: 140,
    },
    {
      title: "Sydney, Australia",
      src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80",
      totalTravellers: 150,
    },
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto mb-10">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-black via-red-500 to-black text-transparent bg-clip-text">
          Top Searches
        </h2>
        <div
          className="h-1 w-24 bg-red-500 mt-2 rounded transition-transform duration-300 ease-in-out origin-left hover:scale-x-110"
          aria-hidden="true"
        />
      </div>
      <FocusCards cards={cards} />
    </section>
  );
}
