import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const BMVerification = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "What is Facebook Business Manager verification?",
      answer:
        "Facebook Business Manager verification is a business authentication process that may be required for certain Meta business features, products, advertising activities, or access levels. The exact verification requirements can vary depending on the business and the features being used.",
    },
    {
      question: "What documents may be required for business verification?",
      answer:
        "Depending on the business and verification flow, Meta may request documents or information that establish the legal identity and legitimacy of the business. Business information should be accurate and consistent with official records.",
    },
    {
      question: "Do I need a website for Business Manager verification?",
      answer:
        "A website or domain can be useful for establishing a consistent online business presence, but requirements can vary. When a website is used, make sure the business name and contact information are consistent with your legitimate business details.",
    },
    {
      question: "Why is the verification option not showing?",
      answer:
        "The availability of business verification can depend on the business account, features being used, account status, and Meta's current eligibility requirements. Check your Business Portfolio settings and make sure your business information is complete and accurate.",
    },
    {
      question: "How long does Facebook business verification take?",
      answer:
        "Processing time can vary. Reviews may be completed quickly in some cases, while additional information or review may be required in others. Avoid submitting inconsistent or inaccurate information during the process.",
    },
    {
      question: "Can I verify a Business Manager without a real business?",
      answer:
        "Business verification should be completed using accurate information about a legitimate business. You should not use fake documents, another person's identity, misleading business information, or methods intended to bypass Meta's verification systems.",
    },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Facebook Business Manager Verification: Complete Guide",
    description:
      "Learn what Facebook Business Manager verification is, what information may be required, how to prepare your business details, and how to troubleshoot common verification issues.",
    author: {
      "@type": "Organization",
      name: "FBM Verified",
    },
    publisher: {
      "@type": "Organization",
      name: "FBM Verified",
      url: "https://www.fbmverified.com/",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://www.fbmverified.com/facebook-business-manager-verification",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <Helmet>
        {/* Primary SEO */}
        <title>
          Facebook Business Manager Verification | Complete Guide
        </title>

        <meta
          name="description"
          content="Learn how Facebook Business Manager verification works, what business information may be required, how to prepare for verification, and how to solve common verification problems."
        />

        <meta
          name="keywords"
          content="Facebook Business Manager verification, Facebook business verification, Business Manager verification, Meta business verification, verified Business Manager, Facebook BM verification"
        />

        <link
          rel="canonical"
          href="https://www.fbmverified.com/facebook-business-manager-verification"
        />

        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Facebook Business Manager Verification | Complete Guide"
        />
        <meta
          property="og:description"
          content="A complete guide to Facebook Business Manager verification, requirements, preparation, and common verification problems."
        />
        <meta
          property="og:url"
          content="https://www.fbmverified.com/facebook-business-manager-verification"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:site_name"
          content="FBM Verified"
        />

        {/* Twitter */}
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          name="twitter:title"
          content="Facebook Business Manager Verification | Complete Guide"
        />
        <meta
          name="twitter:description"
          content="Learn how to prepare for Facebook Business Manager verification and understand common verification issues."
        />

        {/* Schema */}
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <main className="min-h-screen bg-slate-50 text-slate-800">
        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#601e52] via-[#762764] to-[#34102d]">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-purple-400 blur-3xl" />
            <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-pink-400 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="max-w-4xl">
              {/* Breadcrumb */}
              <nav
                aria-label="Breadcrumb"
                className="mb-7 text-sm text-purple-200"
              >
                <ol className="flex flex-wrap items-center gap-2">
                  <li>
                    <a
                      href="/"
                      className="transition hover:text-white"
                    >
                      Home
                    </a>
                  </li>
                  <li>/</li>
                  <li className="text-white">
                    Business Manager Verification
                  </li>
                </ol>
              </nav>

              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                Business Verification Guide
              </div>

              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Facebook Business Manager Verification
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-purple-100 sm:text-xl">
                Learn what Business Manager verification is, how to prepare
                your business information, what documents may be requested,
                and how to handle common verification problems.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#verification-process"
                  className="rounded-xl bg-white px-6 py-3.5 text-center font-bold text-[#601e52] shadow-lg transition hover:-translate-y-0.5 hover:bg-purple-50"
                >
                  Learn Verification Process
                </a>

                <a
                  href="#requirements"
                  className="rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-center font-bold text-white backdrop-blur transition hover:bg-white/20"
                >
                  View Requirements
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ================= QUICK INTRO ================= */}
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
            <article>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <span className="text-sm font-bold uppercase tracking-wider text-[#601e52]">
                  Updated Guide
                </span>

                <h2 className="mt-3 text-3xl font-bold text-slate-900">
                  What Is Facebook Business Manager Verification?
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Facebook Business Manager, now commonly managed through
                  Meta's business tools, provides businesses with tools for
                  managing Pages, advertising assets, people, permissions,
                  and other business resources.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  Business verification is a process used by Meta to establish
                  information about a business. Depending on the business,
                  account status, products, and features being used, Meta may
                  request additional business information or documentation.
                </p>

                <div className="mt-7 rounded-xl border-l-4 border-[#601e52] bg-purple-50 p-5">
                  <p className="font-semibold text-slate-900">
                    Important:
                  </p>
                  <p className="mt-1 leading-7 text-slate-600">
                    Verification should always use genuine business
                    information and legitimate supporting documents. Never
                    submit false information or documents.
                  </p>
                </div>
              </div>

              {/* ================= TOC ================= */}
              <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900">
                  Table of Contents
                </h2>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {[
                    ["#why-verification", "Why Business Verification Matters"],
                    ["#requirements", "Verification Requirements"],
                    ["#prepare", "How to Prepare"],
                    ["#verification-process", "Verification Process"],
                    ["#common-problems", "Common Problems"],
                    ["#best-practices", "Best Practices"],
                    ["#faq", "Frequently Asked Questions"],
                  ].map(([href, label]) => (
                    <a
                      key={href}
                      href={href}
                      className="rounded-lg bg-slate-50 px-4 py-3 font-medium text-slate-700 transition hover:bg-purple-50 hover:text-[#601e52]"
                    >
                      → {label}
                    </a>
                  ))}
                </div>
              </div>

              {/* ================= WHY ================= */}
              <section
                id="why-verification"
                className="scroll-mt-24 mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
              >
                <h2 className="text-3xl font-bold text-slate-900">
                  Why Is Business Manager Verification Important?
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Business verification can help establish the legitimacy and
                  identity of a business within Meta's business ecosystem.
                  Some business features may have additional eligibility or
                  verification requirements.
                </p>

                <div className="mt-7 grid gap-5 md:grid-cols-3">
                  {[
                    {
                      icon: "✓",
                      title: "Business Identity",
                      text: "Helps establish consistent business information.",
                    },
                    {
                      icon: "🛡",
                      title: "Trust & Security",
                      text: "Supports a more reliable business presence.",
                    },
                    {
                      icon: "⚙",
                      title: "Business Features",
                      text: "Some Meta features may require additional verification.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-xl border border-slate-200 p-5"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 text-xl">
                        {item.icon}
                      </div>

                      <h3 className="mt-4 font-bold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ================= REQUIREMENTS ================= */}
              <section
                id="requirements"
                className="scroll-mt-24 mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
              >
                <h2 className="text-3xl font-bold text-slate-900">
                  Facebook Business Verification Requirements
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Requirements can vary depending on your business and the
                  Meta products or features involved. Before starting,
                  organize your legitimate business information carefully.
                </p>

                <div className="mt-7 space-y-4">
                  {[
                    {
                      number: "01",
                      title: "Legal Business Name",
                      text: "Use the genuine legal or registered business name where applicable.",
                    },
                    {
                      number: "02",
                      title: "Business Address",
                      text: "Keep the business address accurate and consistent with your legitimate business records.",
                    },
                    {
                      number: "03",
                      title: "Business Contact Details",
                      text: "Use business contact information that you can legitimately access and verify.",
                    },
                    {
                      number: "04",
                      title: "Supporting Documentation",
                      text: "If Meta requests documents, provide valid documents that genuinely belong to the business.",
                    },
                    {
                      number: "05",
                      title: "Website & Domain",
                      text: "A professional website and verified domain can help maintain consistent business information where relevant.",
                    },
                  ].map((item) => (
                    <div
                      key={item.number}
                      className="flex gap-4 rounded-xl bg-slate-50 p-5"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#601e52] text-sm font-bold text-white">
                        {item.number}
                      </div>

                      <div>
                        <h3 className="font-bold text-slate-900">
                          {item.title}
                        </h3>
                        <p className="mt-1 leading-7 text-slate-600">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ================= PREPARE ================= */}
              <section
                id="prepare"
                className="scroll-mt-24 mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
              >
                <h2 className="text-3xl font-bold text-slate-900">
                  How to Prepare for Business Verification
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Good preparation can reduce avoidable mistakes. Before
                  submitting a verification request, review your business
                  information from top to bottom.
                </p>

                <div className="mt-7 space-y-3">
                  {[
                    "Check that your business information is accurate.",
                    "Make sure your website contains consistent business information.",
                    "Use a business email address when appropriate.",
                    "Review your business address and contact details.",
                    "Prepare legitimate supporting documents if requested.",
                    "Make sure your documents are readable and current.",
                    "Enable appropriate account security measures.",
                    "Avoid submitting duplicate or inconsistent information.",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-700">
                        ✓
                      </span>

                      <p className="leading-7 text-slate-600">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ================= PROCESS ================= */}
              <section
                id="verification-process"
                className="scroll-mt-24 mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
              >
                <h2 className="text-3xl font-bold text-slate-900">
                  Facebook Business Manager Verification Process
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Meta's interface and eligibility requirements can change.
                  The following is a general preparation and verification
                  workflow rather than a guarantee that every account will
                  see exactly the same options.
                </p>

                <div className="relative mt-8 space-y-7">
                  {[
                    {
                      step: "1",
                      title: "Open Your Business Settings",
                      text: "Sign in to the appropriate Meta business account and open the relevant business settings.",
                    },
                    {
                      step: "2",
                      title: "Review Business Information",
                      text: "Check your business name, address, contact details, website, and other available business information.",
                    },
                    {
                      step: "3",
                      title: "Check Verification Availability",
                      text: "Look for the relevant business verification or security section available to your account.",
                    },
                    {
                      step: "4",
                      title: "Submit Accurate Information",
                      text: "If verification is available, provide truthful information that matches your legitimate business records.",
                    },
                    {
                      step: "5",
                      title: "Complete Any Requested Checks",
                      text: "Meta may request additional confirmation, documents, or other verification steps.",
                    },
                    {
                      step: "6",
                      title: "Monitor the Review",
                      text: "Check your business account for updates or requests for additional information.",
                    },
                  ].map((item) => (
                    <div
                      key={item.step}
                      className="flex gap-5"
                    >
                      <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#601e52] font-bold text-white">
                        {item.step}
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-slate-900">
                          {item.title}
                        </h3>

                        <p className="mt-1 leading-7 text-slate-600">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ================= COMMON PROBLEMS ================= */}
              <section
                id="common-problems"
                className="scroll-mt-24 mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
              >
                <h2 className="text-3xl font-bold text-slate-900">
                  Common Business Manager Verification Problems
                </h2>

                <div className="mt-7 grid gap-5 sm:grid-cols-2">
                  {[
                    {
                      title: "Verification Option Not Available",
                      text: "Eligibility and available business features can vary. Review your business information and account settings.",
                    },
                    {
                      title: "Business Information Mismatch",
                      text: "Inconsistent names, addresses, websites, or documents can create verification problems.",
                    },
                    {
                      title: "Document Rejected",
                      text: "Make sure requested documents are legitimate, readable, current, and relevant to the business.",
                    },
                    {
                      title: "Domain Verification Issues",
                      text: "Check that your domain is correctly configured and that you control the website.",
                    },
                    {
                      title: "Review Taking Longer",
                      text: "Some reviews require additional processing. Check your account for requests or status updates.",
                    },
                    {
                      title: "Verification Failed",
                      text: "Review the reason provided by Meta and correct inaccurate or incomplete business information before trying again.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-xl border border-slate-200 p-5 transition hover:-translate-y-1 hover:shadow-md"
                    >
                      <h3 className="font-bold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ================= BEST PRACTICES ================= */}
              <section
                id="best-practices"
                className="scroll-mt-24 mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
              >
                <h2 className="text-3xl font-bold text-slate-900">
                  Best Practices for Business Verification
                </h2>

                <div className="mt-6 overflow-hidden rounded-xl border border-slate-200">
                  <div className="grid grid-cols-2 bg-slate-100 px-4 py-3 text-sm font-bold text-slate-900">
                    <div>Do</div>
                    <div>Avoid</div>
                  </div>

                  {[
                    [
                      "Use accurate business information",
                      "Using fake business information",
                    ],
                    [
                      "Use legitimate documents",
                      "Submitting altered documents",
                    ],
                    [
                      "Keep website information consistent",
                      "Using unrelated business details",
                    ],
                    [
                      "Maintain account security",
                      "Sharing account credentials",
                    ],
                    [
                      "Follow Meta policies",
                      "Trying to bypass verification systems",
                    ],
                  ].map(([good, bad]) => (
                    <div
                      key={good}
                      className="grid grid-cols-2 border-t border-slate-200 px-4 py-4 text-sm"
                    >
                      <div className="pr-3 text-green-700">
                        ✓ {good}
                      </div>

                      <div className="text-red-600">
                        ✕ {bad}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ================= RELATED PAGES ================= */}
              <section className="mt-8 rounded-2xl bg-[#601e52] p-6 text-white shadow-lg sm:p-8">
                <h2 className="text-2xl font-bold">
                  Continue Learning
                </h2>

                <p className="mt-2 text-purple-100">
                  Explore our other Facebook Business verification guides.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <a
                    href="/facebook-business-verification-requirements"
                    className="rounded-xl bg-white/10 p-4 transition hover:bg-white/20"
                  >
                    <span className="font-bold">
                      Business Verification Requirements →
                    </span>
                  </a>

                  <a
                    href="/facebook-business-manager-verification-problems"
                    className="rounded-xl bg-white/10 p-4 transition hover:bg-white/20"
                  >
                    <span className="font-bold">
                      Verification Problems & Solutions →
                    </span>
                  </a>

                  <a
                    href="/domain-verification-facebook-business-manager"
                    className="rounded-xl bg-white/10 p-4 transition hover:bg-white/20"
                  >
                    <span className="font-bold">
                      Domain Verification Guide →
                    </span>
                  </a>

                  <a
                    href="/verified-business-manager-guide"
                    className="rounded-xl bg-white/10 p-4 transition hover:bg-white/20"
                  >
                    <span className="font-bold">
                      Verified Business Manager Guide →
                    </span>
                  </a>
                </div>
              </section>

              {/* ================= FAQ ================= */}
              <section
                id="faq"
                className="scroll-mt-24 mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
              >
                <div className="mb-7">
                  <span className="text-sm font-bold uppercase tracking-wider text-[#601e52]">
                    FAQ
                  </span>

                  <h2 className="mt-2 text-3xl font-bold text-slate-900">
                    Frequently Asked Questions
                  </h2>
                </div>

                <div className="space-y-3">
                  {faqs.map((faq, index) => {
                    const isOpen = openFaq === index;

                    return (
                      <div
                        key={faq.question}
                        className="overflow-hidden rounded-xl border border-slate-200"
                      >
                        <button
                          type="button"
                          onClick={() =>
                            setOpenFaq(isOpen ? null : index)
                          }
                          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-slate-900"
                          aria-expanded={isOpen}
                        >
                          <span>{faq.question}</span>

                          <span className="text-xl text-[#601e52]">
                            {isOpen ? "−" : "+"}
                          </span>
                        </button>

                        {isOpen && (
                          <div className="border-t border-slate-200 bg-slate-50 px-5 py-4">
                            <p className="leading-7 text-slate-600">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            </article>

            {/* ================= SIDEBAR ================= */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-5">
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="font-bold text-slate-900">
                    On This Page
                  </h3>

                  <nav className="mt-4 space-y-2 text-sm">
                    {[
                      ["#why-verification", "Why Verification?"],
                      ["#requirements", "Requirements"],
                      ["#prepare", "Preparation"],
                      ["#verification-process", "Verification Process"],
                      ["#common-problems", "Common Problems"],
                      ["#best-practices", "Best Practices"],
                      ["#faq", "FAQ"],
                    ].map(([href, label]) => (
                      <a
                        key={href}
                        href={href}
                        className="block rounded-lg px-3 py-2 text-slate-600 hover:bg-purple-50 hover:text-[#601e52]"
                      >
                        {label}
                      </a>
                    ))}
                  </nav>
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-[#601e52] to-[#34102d] p-6 text-white shadow-lg">
                  <div className="text-3xl">🛡️</div>

                  <h3 className="mt-4 text-xl font-bold">
                    Need Help?
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-purple-100">
                    Make sure your business information and documents are
                    accurate before starting the verification process.
                  </p>

                  <a
                    href="/"
                    className="mt-5 block rounded-xl bg-white px-4 py-3 text-center font-bold text-[#601e52] transition hover:bg-purple-50"
                  >
                    Back to Home
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* ================= DISCLAIMER ================= */}
        <section className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-8 text-center sm:px-6 lg:px-8">
            <p className="text-sm leading-6 text-slate-500">
              <strong>Disclaimer:</strong> This website is an independent
              informational resource and is not affiliated with, endorsed
              by, or officially connected with Meta Platforms, Inc. Facebook
              and Meta are trademarks of their respective owners. Meta's
              interface, requirements, and eligibility criteria may change
              over time.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default BMVerification;