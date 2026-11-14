
import React from "react";
import { Helmet } from "react-helmet-async";
import {
  FaUnlockAlt,
  FaMobileAlt,
  FaExchangeAlt,
  FaRocket,
  FaCheckCircle,
  FaShieldAlt,
  FaClock,
} from "react-icons/fa";
import { MdVerified, MdSecurity } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";

const About = () => {
  const features = [
    {
      icon: <FaUnlockAlt />,
      title: "All Features Unlocked",
      description:
        "You get access to All Features Unlocked with FBM Verified, giving you the full range of tools and features you need to expertly manage your Facebook advertising.",
      color: "from-blue-500 to-cyan-400",
      glow: "group-hover:shadow-cyan-500/20",
    },
    {
      icon: <MdVerified />,
      title: "Real Documents Verified",
      description:
        "At FBM Verified, we offer Facebook Business Manager accounts that include the Real Documents Verified feature, providing you with a great level of authenticity and trust for your business operations.",
      color: "from-purple-500 to-pink-500",
      glow: "group-hover:shadow-purple-500/20",
    },
    {
      icon: <FaMobileAlt />,
      title: "Number Verified",
      description:
        "FBM Verified, all our Facebook Business Manager accounts come with the Number Verified feature, providing an additional layer of security and trust for your account.",
      color: "from-green-500 to-emerald-400",
      glow: "group-hover:shadow-green-500/20",
    },
    {
      icon: <FaExchangeAlt />,
      title: "7 Days Replacement Guarantee",
      description:
        "At FBM Verified, we stand behind the quality of our products and offer a 7-Day Replacement Guarantee for your peace of mind.",
      color: "from-orange-500 to-red-500",
      glow: "group-hover:shadow-orange-500/20",
    },
    {
      icon: <GiTakeMyMoney />,
      title: "Spending Limit $50-unlimited",
      description:
        "At FBM Verified, we offer Facebook Business Manager accounts with flexible spending limits ranging from $50 to Unlimited.",
      color: "from-yellow-400 to-amber-500",
      glow: "group-hover:shadow-yellow-500/20",
    },
    {
      icon: <FaRocket />,
      title: "Instant Delivery",
      description:
        "FBM Verified prides itself on offering instant delivery for all our products, ensuring you can start utilizing your new Facebook Business Manager or other digital assets without delay.",
      color: "from-indigo-500 to-blue-500",
      glow: "group-hover:shadow-blue-500/20",
    },
  ];

  const stats = [
    {
      icon: <MdVerified />,
      value: "10,000+",
      label: "Happy Customers",
      color: "from-cyan-400 to-blue-500",
    },
    {
      icon: <FaShieldAlt />,
      value: "100%",
      label: "Verified Accounts",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <FaClock />,
      value: "24/7",
      label: "Customer Support",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: <GiTakeMyMoney />,
      value: "$50-∞",
      label: "Spending Limits",
      color: "from-orange-400 to-amber-500",
    },
  ];

  const benefits = [
    {
      icon: <MdSecurity />,
      title: "Secure & Verified",
      description: "Account verification and security features.",
      color: "from-cyan-400 to-blue-500",
    },
    {
      icon: <FaRocket />,
      title: "Instant Access",
      description: "Get access to your purchased products.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <FaExchangeAlt />,
      title: "7-Day Replacement",
      description: "Replacement support under our guarantee.",
      color: "from-orange-400 to-red-500",
    },
  ];

  return (
    <>
      <Helmet>
        <title>About FBM Verified | Facebook Business Manager Solutions</title>

        <meta
          name="description"
          content="Learn about FBM Verified and explore our Facebook Business Manager solutions, account features, verification options, spending limits and customer support."
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://fbmverified.com/about"
        />

        <meta
          property="og:title"
          content="About FBM Verified | Business Manager Solutions"
        />

        <meta
          property="og:description"
          content="Discover FBM Verified features, Facebook Business Manager solutions and available services."
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://fbmverified.com/about"
        />
        <meta property="og:site_name" content="FBM Verified" />
      </Helmet>

      <section className="relative min-h-screen overflow-hidden bg-[#030916] px-4 py-16 text-white md:px-8 md:py-24">

        {/* Background Glow */}
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 top-80 h-96 w-96 rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-cyan-500/5 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl">

          {/* Header */}
          <div className="mb-14 text-center md:mb-16">

            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-[#07152d] px-5 py-2.5 shadow-lg shadow-cyan-900/10">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />

              <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-sm font-bold uppercase tracking-[3px] text-transparent">
                Why Choose Us
              </span>
            </div>

            <h1 className="text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl">
              <span className="text-white">About </span>
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                FBM Verified
              </span>

              <br />

              <span className="mt-2 block text-2xl font-bold text-white md:text-4xl">
                Facebook Business Manager Solutions
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
              We provide Facebook Business Manager solutions with
              premium features, flexible spending limits and dedicated
              customer support.
            </p>

            <div className="mx-auto mt-7 h-1 w-28 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500" />
          </div>

          {/* Stats */}
          <div className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-4">

            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-blue-400/15 bg-gradient-to-br from-[#0b1b38] to-[#07152d] p-5 text-center shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40"
              >
                <div
                  className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${stat.color} text-2xl text-white shadow-lg transition duration-300 group-hover:scale-110`}
                >
                  {stat.icon}
                </div>

                <h3 className="text-2xl font-extrabold text-white md:text-3xl">
                  {stat.value}
                </h3>

                <p className="mt-2 text-xs font-medium text-slate-400 md:text-sm">
                  {stat.label}
                </p>

                <div
                  className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${stat.color} transition-all duration-500 group-hover:w-full`}
                />
              </div>
            ))}

          </div>

          {/* Features Heading */}
          <div className="mb-9 text-center">

            <span className="text-sm font-bold uppercase tracking-[3px] text-cyan-400">
              Our Advantages
            </span>

            <h2 className="mt-3 text-2xl font-extrabold text-white md:text-3xl">
              Features That Make Us{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
                Different
              </span>
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
              Explore the features and benefits available with FBM Verified.
            </p>

          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl border border-blue-400/15 bg-gradient-to-br from-[#0b1b38] to-[#071329] p-[1px] shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-2 hover:border-transparent hover:shadow-2xl ${feature.glow}`}
              >
                <div className="relative flex h-full flex-col items-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#0b1b38] to-[#071329] px-6 py-9 text-center md:px-8">

                  {/* Decorative Glow */}
                  <div
                    className={`absolute -right-12 -top-12 h-36 w-36 rounded-full bg-gradient-to-br ${feature.color} opacity-[0.08] blur-3xl transition duration-500 group-hover:opacity-25`}
                  />

                  {/* Icon */}
                  <div
                    className={`relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.color} text-3xl text-white shadow-lg transition duration-300 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    {feature.icon}
                  </div>

                  {/* Title */}
                  <h2 className="mb-4 text-xl font-bold text-white transition duration-300 group-hover:text-cyan-300">
                    {feature.title}
                  </h2>

                  {/* Description */}
                  <p className="flex-grow text-sm leading-7 text-slate-400">
                    {feature.description}
                  </p>

                  {/* Check */}
                  <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-slate-400 transition duration-300 group-hover:text-cyan-300">
                    <FaCheckCircle className="text-cyan-400" />
                    <span>FBM Verified Feature</span>
                  </div>

                  {/* Bottom Gradient */}
                  <div
                    className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${feature.color} opacity-50 transition duration-300 group-hover:h-1.5 group-hover:opacity-100`}
                  />

                </div>
              </div>
            ))}

          </div>

          {/* Why Choose FBM Verified */}
          <div className="mt-20 border-t border-blue-400/15 pt-14">

            <div className="mb-10 text-center">
              <span className="text-sm font-bold uppercase tracking-[3px] text-cyan-400">
                Your Business Partner
              </span>

              <h2 className="mt-3 text-2xl font-extrabold text-white md:text-3xl">
                Why Choose{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  FBM Verified?
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">

              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group rounded-2xl border border-blue-400/15 bg-[#07152d] p-6 text-center transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-[#0a1c38]"
                >
                  <div
                    className={`mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${benefit.color} text-2xl text-white shadow-lg transition duration-300 group-hover:scale-110`}
                  >
                    {benefit.icon}
                  </div>

                  <h3 className="mb-3 font-bold text-white transition group-hover:text-cyan-300">
                    {benefit.title}
                  </h3>

                  <p className="text-sm leading-6 text-slate-400">
                    {benefit.description}
                  </p>
                </div>
              ))}

            </div>

            {/* Worldwide */}
            <div className="mt-12 rounded-2xl border border-blue-400/15 bg-gradient-to-r from-[#0b1b38] via-[#101b3b] to-[#170f35] px-5 py-8 text-center shadow-xl shadow-black/20 md:px-10">

              <h3 className="mb-4 text-lg font-bold text-white md:text-xl">
                Serving Customers Worldwide
              </h3>

              <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-slate-300">
                <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2">
                  🇺🇸 USA
                </span>

                <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2">
                  🇨🇦 Canada
                </span>

                <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2">
                  🇳🇬 Nigeria
                </span>

                <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2">
                  🇦🇺 Australia
                </span>
              </div>

            </div>

            <p className="mt-10 text-center text-xs text-slate-600">
              © 2026 FBM Verified. All rights reserved.
            </p>

          </div>

        </div>
      </section>
    </>
  );
};

export default About;
