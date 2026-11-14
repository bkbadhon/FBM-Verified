
import React from "react";
import {
  FaShieldAlt,
  FaBolt,
  FaHeadset,
  FaUsers,
  FaCheckCircle,
  FaHandshake,
  FaChartLine,
  FaGlobe,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <FaShieldAlt />,
      title: "100% Secure Business Solutions",
      description:
        "We focus on account security, transparent processes, and reliable guidance.",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
    },
    {
      icon: <FaBolt />,
      title: "Fast & Secure Process",
      description:
        "Efficient communication and organized service from start to finish.",
      color: "text-amber-400",
      bg: "bg-amber-500/10",
    },
    {
      icon: <FaHeadset />,
      title: "Dedicated Support",
      description:
        "Get assistance and answers to your questions whenever you need help.",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
    },
    {
      icon: <FaHandshake />,
      title: "Professional Service",
      description:
        "Clear communication, honest guidance, and customer-focused solutions.",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
    },
    {
      icon: <FaChartLine />,
      title: "Competitive Pricing",
      description:
        "Explore service options with clear pricing for your business needs.",
      color: "text-pink-400",
      bg: "bg-pink-500/10",
    },
  ];

  const stats = [
    {
      icon: <FaUsers />,
      value: "500+",
      label: "Happy Clients",
      color: "text-blue-400",
    },
    {
      icon: <FaCheckCircle />,
      value: "100%",
      label: "Client Focus",
      color: "text-emerald-400",
    },
    {
      icon: <FaGlobe />,
      value: "Global",
      label: "Service Reach",
      color: "text-purple-400",
    },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-[#030817] text-white">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-purple-600/15 blur-[120px]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20">
        {/* Left Content */}
        <div>
          <div className="mb-4 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-fuchsia-400">
            <HiSparkles className="text-lg" />
            Why Choose FBMVerified?
          </div>

          <h2 className="max-w-xl text-3xl font-extrabold leading-tight sm:text-4xl">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              FBMVerified
            </span>
            ?
          </h2>

          <p className="mt-4 max-w-lg text-sm leading-7 text-slate-400">
            We help businesses explore Facebook Business Manager solutions
            through professional guidance, transparent pricing, and
            customer-focused support.
          </p>

          {/* Benefits */}
          <div className="mt-8 space-y-5">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="group flex gap-3.5">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/5 ${benefit.bg} text-lg ${benefit.color} transition duration-300 group-hover:scale-105`}
                >
                  {benefit.icon}
                </div>

                <div>
                  <h3 className="text-sm font-bold text-slate-100">
                    {benefit.title}
                  </h3>

                  <p className="mt-1 max-w-md text-xs leading-5 text-slate-400">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="/bm-solutions"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-500 px-6 py-3 text-sm font-bold text-white shadow-[0_0_25px_rgba(168,85,247,0.2)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]"
          >
            Explore Our Solutions
            <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* Right Stats */}
        <div className="relative">
          {/* Decorative Glow */}
          <div className="absolute inset-8 rounded-full bg-blue-600/15 blur-[70px]" />

          <div className="relative rounded-3xl border border-blue-400/20 bg-gradient-to-br from-[#101b35]/95 via-[#09142a]/95 to-[#080d20]/95 p-5 shadow-[0_20px_70px_rgba(0,0,0,0.3)] sm:p-7">
            {/* Card Header */}
            <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-5">
              <div>
                <p className="text-xs font-semibold text-blue-300">
                  FBMVERIFIED
                </p>

                <h3 className="mt-1 text-xl font-extrabold text-white">
                  Built Around Your Business
                </h3>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-400/20 bg-purple-500/10 text-2xl text-purple-400">
                <FaShieldAlt />
              </div>
            </div>

            {/* Stats Grid */}
            <div className="mt-5 grid grid-cols-2 gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.025] p-4 transition duration-300 hover:border-blue-400/30 hover:bg-blue-500/[0.05]"
                >
                  <div className={`text-xl ${stat.color}`}>
                    {stat.icon}
                  </div>

                  <p className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">
                    {stat.value}
                  </p>

                  <p className="mt-1 text-[11px] text-slate-400">
                    {stat.label}
                  </p>
                </div>
              ))}

              <div className="rounded-2xl border border-fuchsia-400/20 bg-gradient-to-br from-purple-500/10 to-fuchsia-500/5 p-4">
                <div className="text-xl text-fuchsia-400">
                  <FaHandshake />
                </div>

                <p className="mt-3 text-2xl font-extrabold text-white">
                  1:1
                </p>

                <p className="mt-1 text-[11px] text-slate-400">
                  Personalized Assistance
                </p>
              </div>
            </div>

            {/* Bottom Trust Panel */}
            <div className="mt-4 flex items-center gap-3 rounded-2xl border border-emerald-400/15 bg-emerald-500/[0.05] p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-lg text-emerald-400">
                <FaCheckCircle />
              </div>

              <div>
                <p className="text-sm font-bold text-slate-100">
                  Your Business Matters
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-400">
                  Clear communication and support throughout your journey.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Accent */}
          <div className="mx-auto mt-5 h-1 w-2/3 rounded-full bg-gradient-to-r from-transparent via-purple-500/60 to-transparent blur-[1px]" />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
