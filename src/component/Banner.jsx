
import React from "react";
import {
  FaFacebookF,
  FaShieldAlt,
  FaGlobe,
  FaBolt,
  FaHeadset,
  FaCheckCircle,
  FaWhatsapp,
  FaArrowRight,
  FaChartLine,
  FaLock,
  FaUsers,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const Banner = () => {
  const features = [
    { icon: <FaShieldAlt />, text: "Verified Accounts" },
    { icon: <FaGlobe />, text: "Global Access" },
    { icon: <FaBolt />, text: "Fast Delivery" },
    { icon: <FaHeadset />, text: "24/7 Support" },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-[#030817] text-white">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-10 h-80 w-80 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute right-0 top-10 h-96 w-96 rounded-full bg-purple-600/20 blur-[130px]" />
        <div className="absolute bottom-0 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-indigo-600/10 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)",
            backgroundSize: "45px 45px",
            maskImage:
              "linear-gradient(to bottom, black, transparent 90%)",
          }}
        />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-24">
        {/* Left Content */}
        <div className="relative z-10">
          {/* Trust Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-500/10 px-3.5 py-2 text-xs font-semibold tracking-wide text-blue-200 shadow-[0_0_25px_rgba(59,130,246,0.08)]">
            <FaShieldAlt className="text-blue-400" />
            Verified · Secure · Trusted
            <HiSparkles className="text-purple-400" />
          </div>

          {/* Heading */}
          <h2 className="max-w-2xl text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-[54px]">
            Facebook Business Manager{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              Solutions
            </span>{" "}
            for Your Business Growth
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
            Get verified and secure Facebook Business Manager setup,
            access, and management services for your advertising and
            business growth.
          </p>

          {/* Feature List */}
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3">
            {features.map((feature) => (
              <div
                key={feature.text}
                className="flex items-center gap-2 text-xs font-medium text-slate-300 sm:text-sm"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-blue-400/20 bg-blue-500/10 text-blue-300">
                  {feature.icon}
                </span>
                {feature.text}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="/bm-solutions"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-500 px-6 py-3.5 text-sm font-bold text-white shadow-[0_0_25px_rgba(168,85,247,0.25)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_35px_rgba(168,85,247,0.45)]"
            >
              Explore BM Solutions
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="https://wa.me/8801831591975"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-600/80 bg-slate-900/60 px-5 py-3.5 text-sm font-semibold text-white transition hover:border-emerald-400/60 hover:bg-emerald-500/10"
            >
              <FaWhatsapp className="text-lg text-emerald-400" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Small Trust Note */}
          <div className="mt-6 flex items-center gap-2 text-xs text-slate-400">
            <FaCheckCircle className="text-emerald-400" />
            Professional Support · Transparent Pricing · Global Service
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          {/* Glow */}
          <div className="absolute inset-10 rounded-full bg-blue-600/20 blur-[80px]" />
          <div className="absolute -right-2 top-10 h-32 w-32 rounded-full bg-purple-600/20 blur-[60px]" />

          {/* Floating Facebook Icon */}
          <div className="absolute -right-1 top-4 z-20 flex h-16 w-16 rotate-6 items-center justify-center rounded-2xl border border-blue-300/30 bg-gradient-to-br from-blue-500 to-blue-800 text-4xl text-white shadow-[0_0_35px_rgba(59,130,246,0.35)] sm:right-3 sm:h-20 sm:w-20 sm:text-5xl">
            <FaFacebookF />
          </div>

          {/* Floating Shield */}
          <div className="absolute -left-1 top-24 z-20 flex h-12 w-12 -rotate-12 items-center justify-center rounded-xl border border-cyan-300/20 bg-[#0b1c3c] text-2xl text-cyan-300 shadow-lg sm:-left-3 sm:h-14 sm:w-14">
            <FaShieldAlt />
          </div>

          {/* Main Dashboard */}
          <div className="relative mx-4 mt-12 rounded-2xl border border-blue-400/30 bg-gradient-to-br from-[#101e40]/95 via-[#08152f]/95 to-[#080d21]/95 p-4 shadow-[0_20px_80px_rgba(0,0,0,0.5),0_0_45px_rgba(37,99,235,0.12)] sm:mx-7 sm:mt-14 sm:rounded-3xl sm:p-6">
            {/* Window Header */}
            <div className="flex items-center justify-between border-b border-blue-400/15 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/15 text-lg text-blue-400">
                  <FaChartLine />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">
                    Business Dashboard
                  </p>
                  <p className="mt-0.5 text-[10px] text-slate-400">
                    Business management overview
                  </p>
                </div>
              </div>

              <span className="flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-semibold text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Secure
              </span>
            </div>

            {/* Dashboard Body */}
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-blue-400/20 bg-blue-500/[0.07] p-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    Business Assets
                  </span>
                  <FaUsers className="text-blue-400" />
                </div>
                <p className="mt-3 text-xl font-bold text-white sm:text-2xl">
                  BM Solutions
                </p>
                <p className="mt-1 text-[10px] text-slate-400">
                  Management & access
                </p>
              </div>

              <div className="rounded-xl border border-purple-400/20 bg-purple-500/[0.07] p-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    Account Security
                  </span>
                  <FaLock className="text-purple-400" />
                </div>
                <p className="mt-3 text-xl font-bold text-white sm:text-2xl">
                  Protected
                </p>
                <p className="mt-1 text-[10px] text-slate-400">
                  Security-focused setup
                </p>
              </div>
            </div>

            {/* Activity Panel */}
            <div className="mt-4 rounded-xl border border-blue-400/15 bg-[#050d20]/80 p-4">
              <div className="flex items-center justify-between gap-2">
                <p className="text-xs font-bold text-white sm:text-sm">
                  Our Business Solutions
                </p>
                <span className="text-[10px] text-blue-300">
                  Explore services
                </span>
              </div>

              <div className="mt-4 space-y-3">
                {[
                  {
                    icon: <FaShieldAlt />,
                    title: "BM Verification Guidance",
                    desc: "Requirements and setup assistance",
                    color: "text-blue-400",
                    width: "w-[90%]",
                  },
                  {
                    icon: <FaUsers />,
                    title: "Business Asset Management",
                    desc: "Organized business asset solutions",
                    color: "text-purple-400",
                    width: "w-[75%]",
                  },
                  {
                    icon: <FaChartLine />,
                    title: "Growth & Support",
                    desc: "Practical guidance for your business",
                    color: "text-cyan-400",
                    width: "w-[85%]",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.025] p-3"
                  >
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-lg ${item.color}`}
                    >
                      {item.icon}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="truncate text-xs font-semibold text-slate-200 sm:text-sm">
                        {item.title}
                      </p>
                      <p className="mt-1 truncate text-[10px] text-slate-400">
                        {item.desc}
                      </p>
                      <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-slate-700/70">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 ${item.width}`}
                        />
                      </div>
                    </div>

                    <FaCheckCircle className="shrink-0 text-sm text-emerald-400" />
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Label */}
            <div className="mt-4 flex items-center justify-between gap-3 rounded-xl border border-purple-400/15 bg-purple-500/[0.06] px-3 py-3 sm:px-4">
              <div className="flex items-center gap-2">
                <HiSparkles className="text-xl text-purple-400" />
                <div>
                  <p className="text-xs font-bold text-white">
                    FBMVerified
                  </p>
                  <p className="mt-0.5 text-[10px] text-slate-400">
                    Your business, your growth
                  </p>
                </div>
              </div>

              <a
                href="/bm-solutions"
                className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-purple-300 transition hover:text-white"
              >
                View Services <FaArrowRight />
              </a>
            </div>
          </div>

          {/* Floating Bottom Badge */}
          <div className="relative z-20 mx-auto -mt-3 flex w-fit items-center gap-2 rounded-full border border-blue-400/25 bg-[#0b1730]/95 px-4 py-2.5 shadow-xl backdrop-blur-xl">
            <FaShieldAlt className="text-blue-400" />
            <span className="text-xs font-semibold text-slate-200">
              Business Solutions for Global Brands
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
