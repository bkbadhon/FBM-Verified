
import React, { useState, useEffect } from "react";
import {
  FaStar,
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
  FaGlobe,
  FaShieldAlt,
  FaHeadset,
} from "react-icons/fa";
import { MdVerified } from "react-icons/md";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Md. Rahman",
      location: "Dhaka, Bangladesh",
      rating: 5,
      review:
        "Excellent service! I purchased a Facebook Business Manager Verified account and it's working perfectly. The spending limit is exactly as promised. Highly recommended!",
      date: "March 15, 2026",
      verified: true,
    },
    {
      id: 2,
      name: "Sarah Ahmed",
      location: "Chittagong, Bangladesh",
      rating: 5,
      review:
        "Best place to buy verified BM accounts. Got my account within 5 minutes of payment. Customer support is very responsive and helpful. 100% satisfied!",
      date: "March 12, 2026",
      verified: true,
    },
    {
      id: 3,
      name: "John Doe",
      location: "New York, USA",
      rating: 5,
      review:
        "I've tried multiple providers but FBM Verified is the best. The account is fully verified with documents and phone number. Will buy again!",
      date: "March 10, 2026",
      verified: true,
    },
    {
      id: 4,
      name: "Fatima Begum",
      location: "Sylhet, Bangladesh",
      rating: 5,
      review:
        "Amazing service! The 7-day replacement guarantee gave me confidence. The account is working great for my Facebook ads. Thank you FBM Verified!",
      date: "March 8, 2026",
      verified: true,
    },
    {
      id: 5,
      name: "David Chen",
      location: "Singapore",
      rating: 5,
      review:
        "Professional and trustworthy service. The WhatsApp API access was set up quickly. Their customer support is very helpful. Highly recommended!",
      date: "March 5, 2026",
      verified: true,
    },
    {
      id: 6,
      name: "Nusrat Jahan",
      location: "Rajshahi, Bangladesh",
      rating: 5,
      review:
        "Very happy with their service. Got a fully verified BM account with a $250 spending limit. The delivery was instant. Will recommend to everyone!",
      date: "March 3, 2026",
      verified: true,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={`h-4 w-4 ${
          index < rating ? "text-yellow-400" : "text-slate-600"
        }`}
      />
    ));

  const activeReview = testimonials[currentIndex];

  return (
    <section className="relative overflow-hidden bg-[#030916] px-4 py-20 md:px-8 md:py-28">

      {/* Background Effects */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-purple-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Section Header */}
        <div className="mb-14 text-center md:mb-16">

          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-blue-400/20 bg-blue-500/10 px-5 py-2">
            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
              Customer Testimonials
            </span>
          </div>

          <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
            Trusted By Clients,
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Powered By Results
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
            Discover what customers say about their experience with FBM
            Verified's Facebook Business Manager and WhatsApp API solutions.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-3">

          <div className="group rounded-2xl border border-blue-400/15 bg-gradient-to-br from-blue-500/10 to-[#07152d] p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-blue-400/40">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/15 text-xl text-blue-400">
              <FaShieldAlt />
            </div>
            <h3 className="font-bold text-white">Verified BM Solutions</h3>
            <p className="mt-2 text-sm text-slate-400">
              Facebook Business Manager solutions
            </p>
          </div>

          <div className="group rounded-2xl border border-purple-400/15 bg-gradient-to-br from-purple-500/10 to-[#07152d] p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-purple-400/40">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/15 text-xl text-purple-400">
              <FaGlobe />
            </div>
            <h3 className="font-bold text-white">Worldwide Service</h3>
            <p className="mt-2 text-sm text-slate-400">
              Serving clients across the globe
            </p>
          </div>

          <div className="group rounded-2xl border border-cyan-400/15 bg-gradient-to-br from-cyan-500/10 to-[#07152d] p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/15 text-xl text-cyan-400">
              <FaHeadset />
            </div>
            <h3 className="font-bold text-white">Customer Support</h3>
            <p className="mt-2 text-sm text-slate-400">
              Assistance throughout your experience
            </p>
          </div>

        </div>

        {/* Testimonial Carousel */}
        <div className="relative mx-auto max-w-4xl">

          <div className="absolute -inset-[1px] rounded-[28px] bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 opacity-50 blur-[1px]" />

          <div className="relative overflow-hidden rounded-[27px] border border-white/10 bg-gradient-to-br from-[#0b1b38] via-[#07152d] to-[#0a1023] px-6 py-10 shadow-2xl md:px-14 md:py-14">

            {/* Decorative Quote */}
            <div className="absolute right-8 top-7 text-7xl text-blue-400/10 md:right-12 md:top-8 md:text-9xl">
              <FaQuoteLeft />
            </div>

            <div className="relative z-10 flex flex-col items-center text-center">

              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                <FaQuoteLeft className="text-2xl text-cyan-400" />
              </div>

              {/* Stars */}
              <div className="mb-6 flex gap-1.5">
                {renderStars(activeReview.rating)}
              </div>

              {/* Review */}
              <p
                key={activeReview.id}
                className="min-h-[120px] max-w-3xl text-base leading-8 text-slate-200 transition-all duration-300 md:text-xl"
              >
                “{activeReview.review}”
              </p>

              {/* Divider */}
              <div className="my-8 h-px w-24 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

              {/* Customer */}
              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-cyan-400/50 bg-gradient-to-br from-blue-500 to-purple-600 text-lg font-bold text-white shadow-lg shadow-blue-500/20">
                  {activeReview.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase()}
                </div>

                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-white">
                      {activeReview.name}
                    </h3>

                    {activeReview.verified && (
                      <MdVerified
                        className="text-lg text-cyan-400"
                        title="Verified customer"
                      />
                    )}
                  </div>

                  <p className="mt-1 text-sm text-slate-400">
                    {activeReview.location}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    {activeReview.date}
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* Previous Button */}
          <button
            type="button"
            onClick={goToPrevious}
            aria-label="Previous testimonial"
            className="absolute -left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-blue-400/30 bg-[#10264a] text-white shadow-xl transition hover:scale-110 hover:bg-blue-600 sm:-left-5 sm:h-12 sm:w-12"
          >
            <FaChevronLeft />
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={goToNext}
            aria-label="Next testimonial"
            className="absolute -right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-purple-400/30 bg-[#10264a] text-white shadow-xl transition hover:scale-110 hover:bg-purple-600 sm:-right-5 sm:h-12 sm:w-12"
          >
            <FaChevronRight />
          </button>

        </div>

        {/* Dots */}
        <div className="mt-9 flex justify-center gap-2.5">
          {testimonials.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-current={currentIndex === index ? "true" : undefined}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "w-9 bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_12px_#0ea5e9]"
                  : "w-2.5 bg-slate-600 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>

        {/* Bottom Text */}
        <p className="mt-8 text-center text-sm text-slate-500">
          Your business growth matters to us.
          <span className="ml-1 font-semibold text-cyan-400">
            Thank you for choosing FBM Verified.
          </span>
        </p>

      </div>
    </section>
  );
};

export default Testimonial;