import React from "react";
import { Helmet } from "react-helmet-async";
import { FaShieldAlt, FaLock, FaUserShield, FaDatabase, FaEnvelope } from "react-icons/fa";

const SITE_URL = "https://fbmverified.com";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | FBM Verified</title>
        <meta
          name="description"
          content="Read the Privacy Policy of FBM Verified. Learn how we collect, use, and protect your personal and business information."
        />
        <link rel="canonical" href={`${SITE_URL}/privacy`} />
        <meta property="og:title" content="Privacy Policy | FBM Verified" />
        <meta
          property="og:description"
          content="Learn how FBM Verified collects, uses, and safeguards your data securely."
        />
        <meta property="og:url" content={`${SITE_URL}/privacy`} />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="relative min-h-screen overflow-hidden bg-[#030916] px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-8">
        {/* Background glow effects */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-80 w-[700px] max-w-full -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]"
        />

        <div className="relative mx-auto max-w-4xl">
          {/* Header Banner */}
          <header className="relative mb-10 overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-br from-[#0b1b3b] via-[#071329] to-[#100b2b] p-8 sm:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-60 w-60 rounded-full bg-blue-500/15 blur-[80px]"
            />

            <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold text-blue-300">
                  <FaShieldAlt />
                  Our Commitment
                </div>
                <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
                  Privacy Policy
                </h1>
                <p className="mt-2 text-sm text-gray-300 sm:text-base">
                  Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information.
                </p>
              </div>

              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-blue-400/30 bg-blue-500/15 text-2xl text-blue-400 shadow-lg shadow-blue-900/30">
                <FaLock />
              </div>
            </div>
          </header>

          {/* Content Box */}
          <div className="rounded-3xl border border-blue-400/20 bg-[#07152d]/80 p-6 sm:p-10 shadow-xl backdrop-blur-md space-y-8 text-gray-300 text-sm sm:text-base leading-relaxed">
            
            {/* Section 1 */}
            <section className="space-y-3">
              <div className="flex items-center gap-3 text-white font-bold text-lg">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 border border-blue-400/20 text-sm">
                  1
                </span>
                <h2>Information We Collect</h2>
              </div>
              <p className="text-gray-400">
                When you visit our website, purchase our Facebook Business Manager solutions, or interact with our services, we may collect the following types of information:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li><strong className="text-white">Personal Information:</strong> Name, email address, phone number, etc.</li>
                <li><strong className="text-white">Business Information:</strong> Facebook Business Manager information, verification data, website details, etc.</li>
                <li><strong className="text-white">Usage Data:</strong> Pages visited, services used, device details, and related analytical data.</li>
              </ul>
            </section>

            <hr className="border-blue-400/10" />

            {/* Section 2 */}
            <section className="space-y-3">
              <div className="flex items-center gap-3 text-white font-bold text-lg">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 border border-blue-400/20 text-sm">
                  2
                </span>
                <h2>How We Use Your Information</h2>
              </div>
              <p className="text-gray-400">
                We utilize the collected information for various professional purposes to ensure high-quality service delivery:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>To provide and manage accurate Business Manager setup and configuration.</li>
                <li>To communicate with you regarding your orders, support requests, and updates.</li>
                <li>To ensure security, prevent fraud, and maintain compliance.</li>
              </ul>
            </section>

            <hr className="border-blue-400/10" />

            {/* Section 3 */}
            <section className="space-y-3">
              <div className="flex items-center gap-3 text-white font-bold text-lg">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 border border-blue-400/20 text-sm">
                  3
                </span>
                <h2>Data Protection</h2>
              </div>
              <p className="text-gray-400">
                We use industry-standard security measures to protect your data. We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties, ensuring complete confidentiality for your business assets.
              </p>
            </section>

            <hr className="border-blue-400/10" />

            {/* Section 4 */}
            <section className="space-y-3">
              <div className="flex items-center gap-3 text-white font-bold text-lg">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 border border-blue-400/20 text-sm">
                  4
                </span>
                <h2>Your Rights</h2>
              </div>
              <p className="text-gray-400">
                You have full control over your personal data. You can request access, correction, or deletion of your stored information at any time by getting in touch with our support desk.
              </p>
            </section>

            <hr className="border-blue-400/10" />

            {/* Section 5 */}
            <section className="space-y-3">
              <div className="flex items-center gap-3 text-white font-bold text-lg">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 border border-blue-400/20 text-sm">
                  5
                </span>
                <h2>Contact Us</h2>
              </div>
              <p className="text-gray-400">
                If you have any questions regarding this Privacy Policy, please feel free to reach out to us directly:
              </p>
              <div className="inline-flex items-center gap-2 rounded-xl border border-blue-400/20 bg-blue-500/10 px-4 py-3 text-blue-300 font-medium">
                <FaEnvelope className="text-blue-400" />
                <span>support@fbmverified.com</span>
              </div>
            </section>

          </div>
        </div>
      </main>
    </>
  );
};

export default Privacy;