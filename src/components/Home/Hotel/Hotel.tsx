"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import { toast, Toaster } from "sonner";

const hotels = [
  {
    name: "Grand Royal Hotel",
    place: "New York, USA",
    pricePerNight: 220,
    rating: 4.5,
    reviews: 4500,
    imageSrc:
      "https://images.unsplash.com/photo-1560347876-aeef00ee58a1?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Sunset Paradise",
    place: "Maldives",
    pricePerNight: 350,
    rating: 4.7,
    reviews: 3720,
    imageSrc:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "City Lights Hotel",
    place: "Tokyo, Japan",
    pricePerNight: 180,
    rating: 4.3,
    reviews: 2890,
    imageSrc:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  },
  
];
// ... rest of your code unchanged

export default function Hotel() {
    const [likedHotels, setLikedHotels] = useState<number[]>([]);
  
    const toggleLike = (index: number) => {
      setLikedHotels((prev) => {
        const isLiked = prev.includes(index);
        if (isLiked) {
          return prev.filter((i) => i !== index);
        } else {
          toast.success(`${hotels[index].name} added to wishlist!`);
          return [...prev, index];
        }
      });
    };
  
    return (
      <section className="max-w-7xl mx-auto p-6">
        <Toaster position="top-right" />
        
        {/* Heading with black text and 50% width red underline */}
        <h2 className="text-3xl font-bold text-black relative inline-block mb-8 cursor-default">
          Recommended Hotels
          <span className="absolute left-0 -bottom-1 w-1/2 h-[2px] bg-red-500 rounded" />
        </h2>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel, i) => (
            <div
              key={hotel.name}
              className="bg-white rounded-lg overflow-hidden relative cursor-pointer hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image and heart */}
              <div className="relative">
                <img
                  src={hotel.imageSrc}
                  alt={hotel.name}
                  className="w-full h-56 object-cover"
                  loading="lazy"
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleLike(i);
                  }}
                  aria-label={`Like ${hotel.name}`}
                  className="absolute top-3 right-3 bg-white bg-opacity-90 rounded-full p-2 shadow-md hover:bg-opacity-100 transition"
                >
                  <Heart
                    className={`w-6 h-6 transition-colors duration-300 ${
                      likedHotels.includes(i)
                        ? "fill-red-500 stroke-red-500"
                        : "stroke-gray-600"
                    }`}
                  />
                </button>
              </div>
  
              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{hotel.name}</h3>
                <p className="text-sm text-gray-600">{hotel.place}</p>
                <p className="text-sm font-medium text-gray-900 mt-1">
                  Starting from ${hotel.pricePerNight}{" "}
                  <span className="font-normal text-gray-500">/ night</span>
                </p>
  
                {/* Rating & reviews */}
                <div className="flex items-center gap-3 mt-3">
                  <div className="bg-green-600 text-white text-sm font-semibold px-2 py-1 rounded-md flex items-center gap-1 min-w-[48px] justify-center">
                    {hotel.rating.toFixed(1)}
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.164c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.922-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.196-1.54-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.034 9.384c-.783-.57-.38-1.81.588-1.81h4.164a1 1 0 00.95-.69l1.286-3.957z" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">
                    {hotel.reviews.toLocaleString()} reviews
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  