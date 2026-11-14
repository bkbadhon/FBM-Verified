import React from "react";
import { Helmet } from "react-helmet-async";
import { FaShieldAlt, FaFileContract, FaEnvelope } from "react-icons/fa";

const SITE_URL = "https://fbmverified.com";

const TermsAndConditions = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | FBM Verified</title>
        <meta
          name="description"
          content="Read the Terms & Conditions of FBM Verified. Learn about our service guidelines, payment policies, user responsibilities, and limitation of liability."
        />
        <link rel="canonical" href={`${SITE_URL}/terms`} />
        <meta property="og:title" content="Terms & Conditions | FBM Verified" />
        <meta
          property="og:description"
          content="Review the official Terms & Conditions for using FBM Verified services."
        />
        <meta property="og:url" content={`${SITE_URL}/terms`} />
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
                  Legal Framework
                </div>
                <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
                  Terms & Conditions
                </h1>
                <p className="mt-2 text-sm text-gray-300 sm:text-base">
                  Please read these terms and conditions carefully before using our services. By using our website, you agree to these terms.
                </p>
              </div>

              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-blue-400/30 bg-blue-500/15 text-2xl text-blue-400 shadow-lg shadow-blue-900/30">
                <FaFileContract />
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
                <h2>Introduction</h2>
              </div>
              <p className="text-gray-400">
                These Terms & Conditions govern your use of our website and services. By accessing or using our services, you agree to be bound by these terms. If you disagree with any part of the terms, you may not access our services.
              </p>
            </section>

            <hr className="border-blue-400/10" />

            {/* Section 2 */}
            <section className="space-y-3">
              <div className="flex items-center gap-3 text-white font-bold text-lg">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 border border-blue-400/20 text-sm">
                  2
                </span>
                <h2>Services</h2>
              </div>
              <p className="text-gray-400">
                We provide Facebook Business Manager solutions, including verification, BM account setup, page setup, domain verification, WhatsApp API, and related support services. All services are subject to availability and adherence to digital platform guidelines.
              </p>
            </section>

            <hr className="border-blue-400/10" />

            {/* Section 3 */}
            <section className="space-y-3">
              <div className="flex items-center gap-3 text-white font-bold text-lg">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 border border-blue-400/20 text-sm">
                  3
                </span>
                <h2>User Responsibilities</h2>
              </div>
              <p className="text-gray-400">
                You agree to provide accurate information and not use our services for any illegal or unauthorized purpose. You are solely responsible for maintaining the security of your accounts once hand-off delivery is completed.
              </p>
            </section>

            <hr className="border-blue-400/10" />

            {/* Section 4 */}
            <section className="space-y-3">
              <div className="flex items-center gap-3 text-white font-bold text-lg">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 border border-blue-400/20 text-sm">
                  4
                </span>
                <h2>Payment & Refund</h2>
              </div>
              <p className="text-gray-400">
                All payments are non-refundable unless otherwise stated. We will not be responsible for delays caused by third-party platforms (Meta, WhatsApp, etc.) or improper setup done on the client's end after full transfer.
              </p>
            </section>

            <hr className="border-blue-400/10" />

            {/* Section 5 */}
            <section className="space-y-3">
              <div className="flex items-center gap-3 text-white font-bold text-lg">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 border border-blue-400/20 text-sm">
                  5
                </span>
                <h2>Limitation of Liability</h2>
              </div>
              <p className="text-gray-400">
                We are not liable for any direct, indirect, or consequential damages resulting from the use of our services or changes in third-party platform policy regulations.
              </p>
            </section>

            <hr className="border-blue-400/10" />

            {/* Contact Information */}
            <section className="space-y-3">
              <div className="flex items-center gap-3 text-white font-bold text-lg">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 border border-blue-400/20 text-sm">
                  6
                </span>
                <h2>Questions & Support</h2>
              </div>
              <p className="text-gray-400">
                If you have any questions regarding these Terms & Conditions, please contact us at:
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

export default TermsAndConditions;