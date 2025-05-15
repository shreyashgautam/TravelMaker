"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "This product changed my life! Highly recommend to everyone.",
    name: "Jane Doe",
    designation: "CEO, Company Inc.",
    src: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote: "Exceptional service and amazing support throughout.",
    name: "John Smith",
    designation: "Marketing Manager",
    src: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote: "The best experience I ever had with a software product.",
    name: "Alice Johnson",
    designation: "Freelancer",
    src: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
  }),
};

export default function ClientReviewSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-red-50 via-white to-red-50">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-3 relative inline-block">
          Testimonials
          <span className="block absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 rounded-full bg-red-500"></span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Hear from our happy customers who experienced the difference.
        </p>
      </div>

      <div className="grid gap-12 max-w-6xl mx-auto md:grid-cols-3">
        {testimonials.map(({ quote, name, designation, src }, i) => (
          <motion.div
            key={name}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            className="relative bg-white rounded-3xl p-8 shadow-xl border border-red-200 flex flex-col justify-between group cursor-pointer"
          >
            {/* Large faded quote mark behind */}
            <span className="absolute -top-10 -left-6 text-red-100 text-[6rem] font-serif select-none pointer-events-none opacity-20">
              &ldquo;
            </span>

            <p className="text-gray-800 text-lg leading-relaxed mb-8 z-10 relative font-serif">
              {quote}
            </p>

            <div className="flex items-center gap-5 z-10 relative">
              <img
                src={src}
                alt={`${name} avatar`}
                className="w-16 h-16 rounded-full border-4 border-red-500 shadow-md object-cover"
              />
              <div>
                <h3 className="text-red-600 font-semibold text-lg">{name}</h3>
                <p className="text-gray-500 text-sm tracking-wide">{designation}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
