import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const BMGuide = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "What is a verified Business Manager?",
      answer:
        "A verified Business Manager is a Meta business account that has completed an applicable business verification process. Verification availability and requirements can vary depending on the business, account, products, and features being used.",
    },
    {
      question: "Is Business Manager verification the same as Facebook Page verification?",
      answer:
        "No. Business verification and Page verification are different processes. Business verification is related to establishing information about a business, while Page verification or other account-level verification can have different purposes and eligibility requirements.",
    },
    {
      question: "What should I check before starting Business Manager verification?",
      answer:
        "Review your business name, address, contact details, website, domain ownership, account security, and any legitimate business documents that may be requested. Keeping information consistent can help avoid unnecessary problems.",
    },
    {
      question: "Why should my website information match my business information?",
      answer:
        "Consistent information across your website and business records makes it easier to maintain a clear and credible business identity. Avoid using unrelated or misleading business information.",
    },
    {
      question: "Can I use someone else's business documents?",
      answer:
        "No. Business verification should be completed using accurate information and legitimate documents belonging to the relevant business. Using another business's documents or false information can create serious account and compliance problems.",
    },
    {
      question: "What happens if my verification request is rejected?",
      answer:
        "Review the reason provided by Meta, identify any inaccurate or incomplete information, correct legitimate issues, and follow the available review or appeal process shown in your account.",
    },
  ];

  const guideSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Verified Business Manager Guide: Complete Verification Guide",
    description:
      "A practical guide to Business Manager verification, preparation, account security, business information, domain setup, common problems, and best practices.",
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
        "https://www.fbmverified.com/verified-business-manager-guide",
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

  const checklist = [
    "Use accurate business information",
    "Keep your business name consistent",
    "Check your business address",
    "Use legitimate business contact details",
    "Make sure your website represents the same business",
    "Confirm that you control your business domain",
    "Prepare legitimate supporting documents",
    "Review document quality and readability",
    "Secure your Meta account with appropriate security settings",
    "Review the current verification options available to your account",
  ];

  return (
    <>
      <Helmet>
        {/* ================= PRIMARY SEO ================= */}

        <title>
          Verified Business Manager Guide | Facebook BM Verification Guide
        </title>

        <meta
          name="description"
          content="Complete verified Business Manager guide covering verification preparation, business information, documents, domain setup, account security, common problems, and best practices."
        />

        <meta
          name="keywords"
          content="verified business manager, Business Manager guide, Facebook Business Manager guide, BM verification guide, Facebook BM verification, Meta business verification guide, verified BM"
        />

        <link
          rel="canonical"
          href="https://www.fbmverified.com/verified-business-manager-guide"
        />

        <meta name="robots" content="index, follow" />

        {/* ================= OPEN GRAPH ================= */}

        <meta
          property="og:title"
          content="Verified Business Manager Guide | Complete Guide"
        />

        <meta
          property="og:description"
          content="Learn how to prepare for Business Manager verification, organize business information, improve account security, and troubleshoot common issues."
        />

        <meta
          property="og:url"
          content="https://www.fbmverified.com/verified-business-manager-guide"
        />

        <meta property="og:type" content="article" />

        <meta
          property="og:site_name"
          content="FBM Verified"
        />

        {/* ================= TWITTER ================= */}

        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Verified Business Manager Guide"
        />

        <meta
          name="twitter:description"
          content="A practical guide to Business Manager verification, preparation, security, documents, domains, and common problems."
        />

        {/* ================= STRUCTURED DATA ================= */}

        <script type="application/ld+json">
          {JSON.stringify(guideSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <main className="min-h-screen bg-slate-50 text-slate-800">

        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative overflow-hidden bg-gradient-to-br from-[#601e52] via-[#762764] to-[#32102d]">

          <div className="absolute inset-0 opacity-20">
            <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-purple-400 blur-3xl" />

            <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-pink-400 blur-3xl" />

            <div className="absolute bottom-0 left-1/2 h-64 w-64 rounded-full bg-indigo-400 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">

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
                  Verified Business Manager Guide
                </li>
              </ol>
            </nav>

            {/* Badge */}

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-green-400" />

              Complete BM Verification Guide
            </div>

            <div className="max-w-4xl">

              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Verified Business Manager Guide
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-purple-100 sm:text-xl">
                A practical guide to preparing your Business Manager for
                verification, organizing business information, improving
                account security, and avoiding common verification mistakes.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">

                <a
                  href="#checklist"
                  className="rounded-xl bg-white px-6 py-3.5 text-center font-bold text-[#601e52] shadow-lg transition hover:-translate-y-0.5 hover:bg-purple-50"
                >
                  View Checklist
                </a>

                <a
                  href="#guide"
                  className="rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-center font-bold text-white backdrop-blur transition hover:bg-white/20"
                >
                  Read Full Guide
                </a>

              </div>

            </div>
          </div>
        </section>

        {/* =====================================================
            QUICK STATS
        ====================================================== */}

        <section className="relative z-10 mx-auto -mt-8 max-w-6xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                icon: "01",
                title: "Prepare",
                text: "Organize business information",
              },
              {
                icon: "02",
                title: "Review",
                text: "Check consistency",
              },
              {
                icon: "03",
                title: "Secure",
                text: "Protect your account",
              },
              {
                icon: "04",
                title: "Verify",
                text: "Follow the available process",
              },
            ].map((item) => (
              <div
                key={item.icon}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-sm font-extrabold text-[#601e52]">
                  {item.icon}
                </div>

                <h2 className="mt-4 font-bold text-slate-900">
                  {item.title}
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  {item.text}
                </p>
              </div>
            ))}

          </div>
        </section>

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

          <div className="grid gap-8 lg:grid-cols-[1fr_320px]">

            <article>

              {/* =================================================
                  INTRO
              ================================================== */}

              <section
                id="guide"
                className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
              >

                <span className="text-sm font-bold uppercase tracking-wider text-[#601e52]">
                  Complete Guide
                </span>

                <h2 className="mt-3 text-3xl font-bold text-slate-900">
                  What Does a Verified Business Manager Mean?
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Business Manager is part of Meta's business ecosystem and
                  can be used to organize business assets, Pages, advertising
                  resources, people, permissions, and other business
                  activities.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  Business verification is a process through which Meta may
                  establish information about a business. The exact
                  verification flow and eligibility can differ between
                  businesses and can change over time.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  This guide focuses on legitimate preparation. It does not
                  recommend fake documents, misleading information, account
                  manipulation, or attempts to bypass Meta's systems.
                </p>

              </section>

              {/* =================================================
                  WHAT IS DIFFERENCE
              ================================================== */}

              <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

                <h2 className="text-3xl font-bold text-slate-900">
                  Business Verification vs Page Verification
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  These terms are sometimes confused, but they can refer to
                  different processes.
                </p>

                <div className="mt-7 overflow-hidden rounded-xl border border-slate-200">

                  <div className="grid grid-cols-2 bg-slate-100 px-4 py-4 text-sm font-bold text-slate-900 sm:grid-cols-3">

                    <div>Feature</div>
                    <div>Business Verification</div>
                    <div className="hidden sm:block">
                      Page / Other Verification
                    </div>

                  </div>

                  {[
                    [
                      "Main focus",
                      "Business identity",
                      "Page/account identity or eligibility",
                    ],
                    [
                      "Business details",
                      "Important",
                      "May differ",
                    ],
                    [
                      "Documents",
                      "May be requested",
                      "Depends on the process",
                    ],
                    [
                      "Eligibility",
                      "Can vary",
                      "Can vary",
                    ],
                  ].map((row) => (
                    <div
                      key={row[0]}
                      className="grid grid-cols-2 border-t border-slate-200 px-4 py-4 text-sm sm:grid-cols-3"
                    >
                      <div className="font-semibold text-slate-900">
                        {row[0]}
                      </div>

                      <div className="text-slate-600">
                        {row[1]}
                      </div>

                      <div className="hidden text-slate-600 sm:block">
                        {row[2]}
                      </div>
                    </div>
                  ))}

                </div>

              </section>

              {/* =================================================
                  CHECKLIST
              ================================================== */}

              <section
                id="checklist"
                className="scroll-mt-24 mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
              >

                <span className="text-sm font-bold uppercase tracking-wider text-[#601e52]">
                  Preparation
                </span>

                <h2 className="mt-2 text-3xl font-bold text-slate-900">
                  Business Manager Verification Checklist
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  Use this checklist before starting any applicable
                  verification process.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">

                  {checklist.map((item, index) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-slate-200 p-4 transition hover:border-purple-200 hover:bg-purple-50/50"
                    >

                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-700">
                        ✓
                      </span>

                      <div>
                        <span className="mr-2 text-xs font-bold text-[#601e52]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="text-sm font-medium leading-6 text-slate-700">
                          {item}
                        </span>
                      </div>

                    </div>
                  ))}

                </div>

              </section>

              {/* =================================================
                  STEP BY STEP
              ================================================== */}

              <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

                <h2 className="text-3xl font-bold text-slate-900">
                  Step-by-Step Business Manager Preparation
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  Before submitting any verification request, work through
                  these preparation steps.
                </p>

                <div className="mt-8 space-y-8">

                  {[
                    {
                      number: "01",
                      title: "Review Your Business Identity",
                      text:
                        "Check your business name, address, contact information, website, and other business details. Use information that genuinely represents your business.",
                    },
                    {
                      number: "02",
                      title: "Check Your Website",
                      text:
                        "Your website should clearly represent the business. Review your About, Contact, Privacy Policy, and other important business information.",
                    },
                    {
                      number: "03",
                      title: "Review Your Domain",
                      text:
                        "Make sure you control the domain associated with your business. If domain verification is relevant to your setup, use an available official verification method.",
                    },
                    {
                      number: "04",
                      title: "Prepare Supporting Documents",
                      text:
                        "If Meta asks for supporting documents, provide legitimate documents that belong to the relevant business and are clear enough to review.",
                    },
                    {
                      number: "05",
                      title: "Secure Your Account",
                      text:
                        "Review login security, administrator access, recovery information, and two-factor authentication where available and appropriate.",
                    },
                    {
                      number: "06",
                      title: "Review Before Submission",
                      text:
                        "Double-check every field before submitting. Avoid inconsistent business names, addresses, websites, or documentation.",
                    },
                  ].map((item) => (
                    <div
                      key={item.number}
                      className="flex gap-5"
                    >

                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#601e52] font-extrabold text-white">
                        {item.number}
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-slate-900">
                          {item.title}
                        </h3>

                        <p className="mt-2 leading-7 text-slate-600">
                          {item.text}
                        </p>
                      </div>

                    </div>
                  ))}

                </div>

              </section>

              {/* =================================================
                  BUSINESS INFORMATION
              ================================================== */}

              <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

                <h2 className="text-3xl font-bold text-slate-900">
                  Keep Your Business Information Consistent
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  One of the most important preparation steps is maintaining
                  consistent and accurate information across your legitimate
                  business presence.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  {[
                    {
                      title: "Business Name",
                      text:
                        "Use the correct business name and avoid unnecessary variations.",
                    },
                    {
                      title: "Business Address",
                      text:
                        "Use an accurate business address where applicable.",
                    },
                    {
                      title: "Website",
                      text:
                        "Make sure your website clearly represents the same business.",
                    },
                    {
                      title: "Contact Information",
                      text:
                        "Use legitimate contact details that you can access.",
                    },
                    {
                      title: "Documents",
                      text:
                        "Supporting documents should correspond to the relevant business.",
                    },
                    {
                      title: "Domain",
                      text:
                        "Make sure you have control of your business domain.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-xl bg-slate-50 p-5"
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

              {/* =================================================
                  SECURITY
              ================================================== */}

              <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

                <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-purple-100 text-2xl">
                    🛡️
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-slate-900">
                      Business Manager Security Checklist
                    </h2>

                    <p className="mt-2 leading-7 text-slate-600">
                      Good security practices are important for protecting
                      your business assets and administrator access.
                    </p>
                  </div>

                </div>

                <div className="mt-7 space-y-3">

                  {[
                    "Use a strong and unique password.",
                    "Enable two-factor authentication where available.",
                    "Review people who have access to business assets.",
                    "Remove unnecessary administrator access.",
                    "Review connected applications and integrations.",
                    "Do not share account passwords.",
                    "Be careful with suspicious verification messages and links.",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-lg bg-slate-50 p-4"
                    >
                      <span className="text-green-600">✓</span>

                      <p className="text-sm leading-6 text-slate-600">
                        {item}
                      </p>
                    </div>
                  ))}

                </div>

              </section>

              {/* =================================================
                  COMMON MISTAKES
              ================================================== */}

              <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

                <h2 className="text-3xl font-bold text-slate-900">
                  Common Business Manager Verification Mistakes
                </h2>

                <div className="mt-7 space-y-4">

                  {[
                    {
                      title: "Inconsistent Business Information",
                      text:
                        "Using different business names, addresses, or contact details across your business presence can create confusion.",
                    },
                    {
                      title: "Poor Quality Documents",
                      text:
                        "Blurry, incomplete, outdated, or irrelevant documents may not provide enough information for review.",
                    },
                    {
                      title: "Fake or Altered Information",
                      text:
                        "Never create, edit, or submit false documents or misleading business information.",
                    },
                    {
                      title: "Ignoring Account Security",
                      text:
                        "Weak administrator security can expose your business assets to unauthorized access.",
                    },
                    {
                      title: "Expecting Guaranteed Approval",
                      text:
                        "No legitimate guide or service can guarantee that Meta will approve every business verification request.",
                    },
                  ].map((item, index) => (
                    <div
                      key={item.title}
                      className="flex gap-4 rounded-xl border border-red-100 bg-red-50/50 p-5"
                    >

                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-100 font-bold text-red-600">
                        !
                      </div>

                      <div>
                        <h3 className="font-bold text-slate-900">
                          {index + 1}. {item.title}
                        </h3>

                        <p className="mt-2 leading-7 text-slate-600">
                          {item.text}
                        </p>
                      </div>

                    </div>
                  ))}

                </div>

              </section>

              {/* =================================================
                  AFTER REJECTION
              ================================================== */}

              <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

                <h2 className="text-3xl font-bold text-slate-900">
                  What to Do If Business Verification Is Rejected
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  A rejection does not mean you should immediately submit
                  random information again. First understand what went wrong.
                </p>

                <div className="mt-7 grid gap-4">

                  {[
                    "Read the rejection or review message carefully.",
                    "Identify whether business information is incomplete or inconsistent.",
                    "Check your website and domain information.",
                    "Review the documents you submitted, if applicable.",
                    "Correct legitimate issues before submitting again.",
                    "Use the official review or appeal option available to your account.",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-4 rounded-xl bg-slate-50 p-4"
                    >

                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#601e52] text-sm font-bold text-white">
                        {index + 1}
                      </span>

                      <p className="leading-7 text-slate-600">
                        {item}
                      </p>

                    </div>
                  ))}

                </div>

              </section>

              {/* =================================================
                  RELATED GUIDES
              ================================================== */}

              <section className="mt-8 rounded-2xl bg-gradient-to-br from-[#601e52] to-[#35102e] p-6 text-white shadow-xl sm:p-8">

                <span className="text-sm font-bold uppercase tracking-wider text-purple-200">
                  More Guides
                </span>

                <h2 className="mt-2 text-3xl font-bold">
                  Explore More Business Verification Resources
                </h2>

                <p className="mt-3 max-w-2xl leading-7 text-purple-100">
                  Learn more about Business Manager verification requirements,
                  domain verification, and common verification problems.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">

                  <a
                    href="/facebook-business-manager-verification"
                    className="rounded-xl bg-white/10 p-4 font-semibold transition hover:bg-white/20"
                  >
                    Facebook Business Manager Verification →
                  </a>

                  <a
                    href="/facebook-business-verification-requirements"
                    className="rounded-xl bg-white/10 p-4 font-semibold transition hover:bg-white/20"
                  >
                    Business Verification Requirements →
                  </a>

                  <a
                    href="/facebook-business-manager-verification-problems"
                    className="rounded-xl bg-white/10 p-4 font-semibold transition hover:bg-white/20"
                  >
                    Verification Problems & Solutions →
                  </a>

                  <a
                    href="/domain-verification-facebook-business-manager"
                    className="rounded-xl bg-white/10 p-4 font-semibold transition hover:bg-white/20"
                  >
                    Domain Verification Guide →
                  </a>

                </div>

              </section>

              {/* =================================================
                  FAQ
              ================================================== */}

              <section
                id="faq"
                className="scroll-mt-24 mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
              >

                <span className="text-sm font-bold uppercase tracking-wider text-[#601e52]">
                  FAQ
                </span>

                <h2 className="mt-2 text-3xl font-bold text-slate-900">
                  Frequently Asked Questions
                </h2>

                <div className="mt-7 space-y-3">

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
                          className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-semibold text-slate-900 transition hover:bg-slate-50"
                          aria-expanded={isOpen}
                        >

                          <span>{faq.question}</span>

                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-purple-100 text-lg text-[#601e52]">
                            {isOpen ? "−" : "+"}
                          </span>

                        </button>

                        {isOpen && (
                          <div className="border-t border-slate-200 bg-slate-50 px-5 py-5">
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

            {/* =================================================
                SIDEBAR
            ================================================== */}

            <aside className="hidden lg:block">

              <div className="sticky top-24 space-y-5">

                {/* Navigation */}

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

                  <h2 className="font-bold text-slate-900">
                    Guide Navigation
                  </h2>

                  <nav className="mt-4 space-y-1">

                    {[
                      ["#guide", "What Is Verified BM?"],
                      ["#checklist", "Verification Checklist"],
                      ["#faq", "Frequently Asked Questions"],
                    ].map(([href, label]) => (
                      <a
                        key={href}
                        href={href}
                        className="block rounded-lg px-3 py-2.5 text-sm text-slate-600 transition hover:bg-purple-50 hover:text-[#601e52]"
                      >
                        {label}
                      </a>
                    ))}

                  </nav>

                </div>

                {/* Checklist Card */}

                <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-xl">
                    ✓
                  </div>

                  <h2 className="mt-4 text-xl font-bold text-slate-900">
                    Quick Reminder
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Always use genuine business information and legitimate
                    documents when completing a verification process.
                  </p>

                </div>

                {/* CTA */}

                <div className="rounded-2xl bg-gradient-to-br from-[#601e52] to-[#35102e] p-6 text-white shadow-lg">

                  <div className="text-3xl">
                    📘
                  </div>

                  <h2 className="mt-4 text-xl font-bold">
                    Need More Information?
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-purple-100">
                    Check our detailed Business Manager verification
                    requirements guide.
                  </p>

                  <a
                    href="/facebook-business-verification-requirements"
                    className="mt-5 block rounded-xl bg-white px-4 py-3 text-center font-bold text-[#601e52] transition hover:bg-purple-50"
                  >
                    View Requirements
                  </a>

                </div>

              </div>

            </aside>

          </div>
        </section>

        {/* =====================================================
            DISCLAIMER
        ====================================================== */}

        <section className="border-t border-slate-200 bg-white">

          <div className="mx-auto max-w-7xl px-4 py-8 text-center sm:px-6 lg:px-8">

            <p className="text-sm leading-6 text-slate-500">
              <strong>Disclaimer:</strong> This website is an independent
              informational resource and is not affiliated with, endorsed by,
              or officially connected with Meta Platforms, Inc. Facebook and
              Meta are trademarks of their respective owners. Meta's products,
              interface, eligibility requirements, and verification processes
              may change over time.
            </p>

          </div>

        </section>

      </main>
    </>
  );
};

export default BMGuide;