import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const DomainVerify = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const methods = [
        {
            number: "01",
            icon: "🧩",
            title: "DNS TXT Verification",
            description:
                "Add the verification TXT record provided by Meta to your domain's DNS settings. This is commonly managed through your domain registrar or DNS provider.",
            steps: [
                "Open the domain verification section in your Meta business settings.",
                "Select the domain you want to verify.",
                "Choose the DNS TXT verification method if it is available.",
                "Copy the TXT value provided by Meta.",
                "Open your domain's DNS management panel.",
                "Create a TXT record using the value provided by Meta.",
                "Save the DNS record and wait for DNS changes to propagate.",
                "Return to Meta and select the verification option.",
            ],
        },
        {
            number: "02",
            icon: "🏷️",
            title: "Meta-Tag Verification",
            description:
                "If this method is available for your setup, you can add the verification meta-tag supplied by Meta to the head section of your website.",
            steps: [
                "Open the domain verification settings in your Meta business account.",
                "Select the meta-tag verification method.",
                "Copy the complete meta-tag provided by Meta.",
                "Open the HTML head section of your website.",
                "Paste the meta-tag inside the <head> section.",
                "Publish the website changes.",
                "Make sure the website is publicly accessible.",
                "Return to Meta and complete the verification step.",
            ],
        },
        {
            number: "03",
            icon: "📄",
            title: "HTML File Upload",
            description:
                "Some verification setups may provide an HTML file that can be uploaded to your website's root directory.",
            steps: [
                "Open the domain verification settings.",
                "Choose the HTML file verification method if available.",
                "Download the verification file provided by Meta.",
                "Upload the file to the required root directory of your website.",
                "Confirm that the file can be accessed publicly.",
                "Do not rename or modify the verification file.",
                "Return to Meta and complete the verification process.",
            ],
        },
    ];

    const checklist = [
        "You own or legitimately control the domain.",
        "The domain is correctly entered in Meta Business settings.",
        "Your website is publicly accessible.",
        "The DNS record or verification code is copied exactly.",
        "There are no unnecessary changes to the verification value.",
        "DNS changes have had enough time to propagate.",
        "The verification method matches the instructions shown in your account.",
        "You have administrator access to the relevant business settings.",
    ];

    const problems = [
        {
            icon: "⏳",
            title: "DNS TXT Record Not Detected",
            text:
                "DNS changes may take time to propagate. Check that the TXT record was added to the correct domain and DNS zone and that the value matches the one provided by Meta.",
        },
        {
            icon: "❌",
            title: "Verification Failed",
            text:
                "Review the selected verification method and make sure the domain, DNS record, meta-tag, or HTML file has been configured exactly according to the instructions displayed in your Meta account.",
        },
        {
            icon: "🌐",
            title: "Wrong Domain",
            text:
                "Make sure you are verifying the exact domain that you legitimately control. Check for spelling mistakes and unnecessary prefixes or subdomains.",
        },
        {
            icon: "🔄",
            title: "Website Changes Not Detected",
            text:
                "If you use a meta-tag or HTML file, make sure the latest website version is deployed and publicly accessible. Check caching or CDN configuration if applicable.",
        },
        {
            icon: "🔐",
            title: "No Access to DNS",
            text:
                "If you cannot edit DNS records, contact the person or provider responsible for your domain's DNS management. You need legitimate control over the domain to complete DNS-based verification.",
        },
        {
            icon: "⚠️",
            title: "Multiple DNS Records",
            text:
                "Review your DNS zone carefully. Avoid deleting unrelated records. Only add or change the record required by the verification instructions.",
        },
    ];

    const faqs = [
        {
            question: "What is domain verification in Facebook Business Manager?",
            answer:
                "Domain verification is a process used by Meta to establish that a business or account has control over a particular domain. The available verification methods can vary depending on the business setup and current Meta interface.",
        },
        {
            question: "How do I verify my domain with DNS?",
            answer:
                "When DNS verification is available, Meta provides a TXT value that you add to your domain's DNS settings. After the DNS change has propagated, you return to Meta and complete the verification step.",
        },
        {
            question: "How long does DNS domain verification take?",
            answer:
                "DNS changes are not always visible immediately. The time can vary depending on DNS caching and provider configuration. If Meta does not detect the record immediately, verify the record and allow additional time for propagation.",
        },
        {
            question: "Can I verify a domain without a website?",
            answer:
                "DNS-based verification can establish control of a domain without requiring a particular website page to contain the verification code. However, the exact options available depend on your Meta business setup.",
        },
        {
            question: "Can I verify someone else's domain?",
            answer:
                "You should only verify domains that you legitimately own or control. Do not attempt to verify a domain belonging to another person or business without authorization.",
        },
        {
            question: "Why is my Meta domain verification not working?",
            answer:
                "Common causes include an incorrect TXT record, DNS propagation delay, incorrect domain selection, a missing meta-tag, an unpublished website change, or using a verification method that is not configured correctly.",
        },
        {
            question: "Can I verify multiple domains?",
            answer:
                "The domains and assets available to your business depend on your Meta Business setup and permissions. If multiple domains are supported in your account, manage each domain through the appropriate business settings.",
        },
    ];

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline:
            "Domain Verification for Facebook Business Manager: Complete Guide",
        description:
            "Learn how domain verification works with Facebook Business Manager, including DNS TXT, meta-tag, HTML file verification, troubleshooting and preparation.",
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
                "https://www.fbmverified.com/domain-verification-facebook-business-manager",
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
                {/* =========================
                    BASIC SEO
                ========================== */}

                <title>
                    Domain Verification for Facebook Business Manager | Complete Guide
                </title>

                <meta
                    name="description"
                    content="Learn how to verify a domain with Facebook Business Manager using DNS TXT, meta-tag or HTML file methods. Includes setup steps, troubleshooting and FAQ."
                />

                <meta
                    name="keywords"
                    content="domain verification Facebook Business Manager, Facebook domain verification, Meta domain verification, verify domain Facebook Business Manager, Facebook BM domain verification, DNS TXT domain verification, Meta domain verification guide"
                />

                <link
                    rel="canonical"
                    href="https://www.fbmverified.com/domain-verification-facebook-business-manager"
                />

                <meta name="robots" content="index, follow" />

                {/* =========================
                    OPEN GRAPH
                ========================== */}

                <meta
                    property="og:title"
                    content="Domain Verification for Facebook Business Manager"
                />

                <meta
                    property="og:description"
                    content="Complete guide to Facebook Business Manager domain verification using DNS TXT, meta-tag and HTML file methods."
                />

                <meta
                    property="og:url"
                    content="https://www.fbmverified.com/domain-verification-facebook-business-manager"
                />

                <meta property="og:type" content="article" />

                <meta
                    property="og:site_name"
                    content="FBM Verified"
                />

                {/* =========================
                    TWITTER
                ========================== */}

                <meta name="twitter:card" content="summary_large_image" />

                <meta
                    name="twitter:title"
                    content="Domain Verification for Facebook Business Manager"
                />

                <meta
                    name="twitter:description"
                    content="Learn how to verify your domain with Facebook Business Manager using available verification methods."
                />

                {/* =========================
                    STRUCTURED DATA
                ========================== */}

                <script type="application/ld+json">
                    {JSON.stringify(articleSchema)}
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

                        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-purple-400 blur-3xl" />

                        <div className="absolute right-0 top-10 h-96 w-96 rounded-full bg-pink-400 blur-3xl" />

                        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-indigo-400 blur-3xl" />

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

                                <li>
                                    <a
                                        href="/facebook-business-manager-verification"
                                        className="transition hover:text-white"
                                    >
                                        Business Verification
                                    </a>
                                </li>

                                <li>/</li>

                                <li className="text-white">
                                    Domain Verification
                                </li>

                            </ol>
                        </nav>

                        {/* Badge */}

                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">

                            <span className="h-2 w-2 rounded-full bg-green-400" />

                            Domain Verification Guide

                        </div>

                        <div className="max-w-4xl">

                            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                                Domain Verification for Facebook Business Manager
                            </h1>

                            <p className="mt-6 max-w-3xl text-lg leading-8 text-purple-100 sm:text-xl">
                                Learn how domain verification works, how to
                                prepare your domain, and how available DNS,
                                meta-tag, or HTML verification methods can be
                                configured.
                            </p>

                            <div className="mt-8 flex flex-col gap-4 sm:flex-row">

                                <a
                                    href="#methods"
                                    className="rounded-xl bg-white px-6 py-3.5 text-center font-bold text-[#601e52] shadow-lg transition hover:-translate-y-0.5 hover:bg-purple-50"
                                >
                                    View Verification Methods
                                </a>

                                <a
                                    href="#troubleshooting"
                                    className="rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-center font-bold text-white backdrop-blur transition hover:bg-white/20"
                                >
                                    Troubleshooting
                                </a>

                            </div>

                        </div>

                    </div>

                </section>

                {/* =====================================================
                    QUICK CARDS
                ====================================================== */}

                <section className="relative z-10 mx-auto -mt-8 max-w-6xl px-4 sm:px-6 lg:px-8">

                    <div className="grid gap-4 sm:grid-cols-3">

                        {[
                            {
                                icon: "🧩",
                                title: "DNS TXT",
                                text: "Add the verification TXT record to your DNS.",
                            },
                            {
                                icon: "🏷️",
                                title: "Meta Tag",
                                text: "Add the provided verification tag to your website.",
                            },
                            {
                                icon: "📄",
                                title: "HTML File",
                                text: "Upload the verification file when available.",
                            },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg"
                            >

                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-2xl">
                                    {item.icon}
                                </div>

                                <h2 className="mt-4 font-bold text-slate-900">
                                    {item.title}
                                </h2>

                                <p className="mt-2 text-sm leading-6 text-slate-500">
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

                            {/* INTRO */}

                            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

                                <span className="text-sm font-bold uppercase tracking-wider text-[#601e52]">
                                    Getting Started
                                </span>

                                <h2 className="mt-3 text-3xl font-bold text-slate-900">
                                    What Is Facebook Domain Verification?
                                </h2>

                                <p className="mt-5 leading-8 text-slate-600">
                                    Domain verification is a way to establish
                                    that a business or account has legitimate
                                    control over a particular domain. Depending
                                    on your Meta business setup, different
                                    verification methods may be available.
                                </p>

                                <p className="mt-4 leading-8 text-slate-600">
                                    The most important step is to use a domain
                                    that you legitimately control and follow
                                    the verification instructions currently
                                    displayed in your Meta business settings.
                                </p>

                                <div className="mt-7 rounded-xl border-l-4 border-[#601e52] bg-purple-50 p-5">

                                    <p className="font-bold text-slate-900">
                                        Important
                                    </p>

                                    <p className="mt-1 leading-7 text-slate-600">
                                        Meta's interface, requirements, and
                                        available verification options can
                                        change. The options shown in your own
                                        Business account should be treated as
                                        the current instructions.
                                    </p>

                                </div>

                            </section>

                            {/* =================================================
                                PREPARATION
                            ================================================== */}

                            <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

                                <span className="text-sm font-bold uppercase tracking-wider text-[#601e52]">
                                    Preparation
                                </span>

                                <h2 className="mt-2 text-3xl font-bold text-slate-900">
                                    Before You Verify Your Domain
                                </h2>

                                <p className="mt-4 leading-7 text-slate-600">
                                    Complete these checks before attempting
                                    domain verification.
                                </p>

                                <div className="mt-7 grid gap-3 sm:grid-cols-2">

                                    {checklist.map((item, index) => (
                                        <div
                                            key={item}
                                            className="flex items-start gap-3 rounded-xl border border-slate-200 p-4"
                                        >

                                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-700">
                                                {index + 1}
                                            </span>

                                            <p className="text-sm leading-6 text-slate-600">
                                                {item}
                                            </p>

                                        </div>
                                    ))}

                                </div>

                            </section>

                            {/* =================================================
                                METHODS
                            ================================================== */}

                            <section
                                id="methods"
                                className="scroll-mt-24 mt-8"
                            >

                                <div className="mb-6">

                                    <span className="text-sm font-bold uppercase tracking-wider text-[#601e52]">
                                        Verification Methods
                                    </span>

                                    <h2 className="mt-2 text-3xl font-bold text-slate-900">
                                        How to Verify a Domain with Meta
                                    </h2>

                                    <p className="mt-3 leading-7 text-slate-600">
                                        The exact methods available depend on
                                        your current Meta business setup.
                                    </p>

                                </div>

                                <div className="space-y-5">

                                    {methods.map((method) => (
                                        <div
                                            key={method.number}
                                            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
                                        >

                                            <div className="flex flex-col gap-5 sm:flex-row">

                                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-purple-100 text-2xl">
                                                    {method.icon}
                                                </div>

                                                <div className="flex-1">

                                                    <div className="text-xs font-extrabold uppercase tracking-wider text-[#601e52]">
                                                        Method {method.number}
                                                    </div>

                                                    <h3 className="mt-1 text-2xl font-bold text-slate-900">
                                                        {method.title}
                                                    </h3>

                                                    <p className="mt-3 leading-7 text-slate-600">
                                                        {method.description}
                                                    </p>

                                                </div>

                                            </div>

                                            <div className="mt-7">

                                                <h4 className="font-bold text-slate-900">
                                                    Step-by-Step
                                                </h4>

                                                <div className="mt-4 space-y-3">

                                                    {method.steps.map(
                                                        (step, index) => (
                                                            <div
                                                                key={step}
                                                                className="flex gap-3"
                                                            >

                                                                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-[#601e52]">
                                                                    {index + 1}
                                                                </span>

                                                                <p className="text-sm leading-6 text-slate-600">
                                                                    {step}
                                                                </p>

                                                            </div>
                                                        )
                                                    )}

                                                </div>

                                            </div>

                                        </div>
                                    ))}

                                </div>

                            </section>

                            {/* =================================================
                                DNS GUIDE
                            ================================================== */}

                            <section className="mt-8 overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white shadow-xl sm:p-8">

                                <span className="text-sm font-bold uppercase tracking-wider text-purple-300">
                                    DNS TXT
                                </span>

                                <h2 className="mt-2 text-3xl font-bold">
                                    DNS TXT Verification Explained
                                </h2>

                                <p className="mt-4 leading-8 text-slate-300">
                                    With DNS verification, a TXT record supplied
                                    by Meta is added to the DNS configuration of
                                    your domain. Your domain provider or DNS
                                    provider is normally where this record is
                                    managed.
                                </p>

                                <div className="mt-7 grid gap-4 sm:grid-cols-3">

                                    {[
                                        {
                                            title: "Get Record",
                                            text: "Copy the TXT value provided in your Meta business settings.",
                                        },
                                        {
                                            title: "Add DNS",
                                            text: "Create the TXT record in the correct DNS zone.",
                                        },
                                        {
                                            title: "Verify",
                                            text: "Return to Meta after the record is available and complete verification.",
                                        },
                                    ].map((item, index) => (
                                        <div
                                            key={item.title}
                                            className="rounded-xl border border-white/10 bg-white/5 p-5"
                                        >

                                            <div className="text-sm font-bold text-purple-300">
                                                STEP {index + 1}
                                            </div>

                                            <h3 className="mt-2 font-bold">
                                                {item.title}
                                            </h3>

                                            <p className="mt-2 text-sm leading-6 text-slate-300">
                                                {item.text}
                                            </p>

                                        </div>
                                    ))}

                                </div>

                            </section>

                            {/* =================================================
                                TROUBLESHOOTING
                            ================================================== */}

                            <section
                                id="troubleshooting"
                                className="scroll-mt-24 mt-8"
                            >

                                <div className="mb-6">

                                    <span className="text-sm font-bold uppercase tracking-wider text-[#601e52]">
                                        Troubleshooting
                                    </span>

                                    <h2 className="mt-2 text-3xl font-bold text-slate-900">
                                        Common Domain Verification Problems
                                    </h2>

                                </div>

                                <div className="grid gap-4 sm:grid-cols-2">

                                    {problems.map((problem) => (
                                        <div
                                            key={problem.title}
                                            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                                        >

                                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-2xl">
                                                {problem.icon}
                                            </div>

                                            <h3 className="mt-5 text-lg font-bold text-slate-900">
                                                {problem.title}
                                            </h3>

                                            <p className="mt-2 text-sm leading-7 text-slate-600">
                                                {problem.text}
                                            </p>

                                        </div>
                                    ))}

                                </div>

                            </section>

                            {/* =================================================
                                DNS MISTAKES
                            ================================================== */}

                            <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

                                <span className="text-sm font-bold uppercase tracking-wider text-[#601e52]">
                                    DNS Tips
                                </span>

                                <h2 className="mt-2 text-3xl font-bold text-slate-900">
                                    Common DNS Verification Mistakes
                                </h2>

                                <div className="mt-7 space-y-4">

                                    {[
                                        {
                                            title: "Adding the TXT record to the wrong domain",
                                            text: "Make sure the record is added to the DNS zone for the domain you are actually verifying.",
                                        },
                                        {
                                            title: "Copying the TXT value incorrectly",
                                            text: "Copy the value exactly as provided. Avoid accidentally adding extra characters or removing required content.",
                                        },
                                        {
                                            title: "Expecting instant DNS updates",
                                            text: "DNS changes can take time to become visible because of caching and propagation.",
                                        },
                                        {
                                            title: "Deleting unrelated DNS records",
                                            text: "Do not remove existing DNS records simply because Meta verification is not working. Only change records you understand.",
                                        },
                                    ].map((item, index) => (
                                        <div
                                            key={item.title}
                                            className="flex gap-4 rounded-xl bg-slate-50 p-5"
                                        >

                                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-purple-100 font-bold text-[#601e52]">
                                                {index + 1}
                                            </span>

                                            <div>

                                                <h3 className="font-bold text-slate-900">
                                                    {item.title}
                                                </h3>

                                                <p className="mt-1 text-sm leading-6 text-slate-600">
                                                    {item.text}
                                                </p>

                                            </div>

                                        </div>
                                    ))}

                                </div>

                            </section>

                            {/* =================================================
                                SECURITY
                            ================================================== */}

                            <section className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-6 sm:p-8">

                                <div className="flex gap-4">

                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-xl">
                                        🔐
                                    </div>

                                    <div>

                                        <h2 className="text-2xl font-bold text-slate-900">
                                            Only Verify Domains You Control
                                        </h2>

                                        <p className="mt-3 leading-7 text-slate-600">
                                            Domain verification should only be
                                            performed for domains that you
                                            legitimately own or control.
                                            Never attempt to verify another
                                            company's domain without proper
                                            authorization.
                                        </p>

                                    </div>

                                </div>

                            </section>

                            {/* =================================================
                                RELATED PAGES
                            ================================================== */}

                            <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

                                <span className="text-sm font-bold uppercase tracking-wider text-[#601e52]">
                                    Related Guides
                                </span>

                                <h2 className="mt-2 text-3xl font-bold text-slate-900">
                                    More Facebook Business Verification Guides
                                </h2>

                                <div className="mt-6 grid gap-4 sm:grid-cols-2">

                                    <a
                                        href="/facebook-business-manager-verification"
                                        className="group rounded-xl border border-slate-200 p-5 transition hover:-translate-y-1 hover:border-purple-300 hover:bg-purple-50"
                                    >
                                        <h3 className="font-bold text-slate-900 group-hover:text-[#601e52]">
                                            Facebook Business Manager Verification →
                                        </h3>

                                        <p className="mt-2 text-sm leading-6 text-slate-500">
                                            Read the main verification guide.
                                        </p>
                                    </a>

                                    <a
                                        href="/facebook-business-verification-requirements"
                                        className="group rounded-xl border border-slate-200 p-5 transition hover:-translate-y-1 hover:border-purple-300 hover:bg-purple-50"
                                    >
                                        <h3 className="font-bold text-slate-900 group-hover:text-[#601e52]">
                                            Verification Requirements →
                                        </h3>

                                        <p className="mt-2 text-sm leading-6 text-slate-500">
                                            Review business and document
                                            requirements.
                                        </p>
                                    </a>

                                    <a
                                        href="/facebook-business-manager-verification-problems"
                                        className="group rounded-xl border border-slate-200 p-5 transition hover:-translate-y-1 hover:border-purple-300 hover:bg-purple-50"
                                    >
                                        <h3 className="font-bold text-slate-900 group-hover:text-[#601e52]">
                                            Verification Problems →
                                        </h3>

                                        <p className="mt-2 text-sm leading-6 text-slate-500">
                                            Troubleshoot common verification
                                            problems.
                                        </p>
                                    </a>

                                    <a
                                        href="/verified-business-manager-guide"
                                        className="group rounded-xl border border-slate-200 p-5 transition hover:-translate-y-1 hover:border-purple-300 hover:bg-purple-50"
                                    >
                                        <h3 className="font-bold text-slate-900 group-hover:text-[#601e52]">
                                            Verified Business Manager Guide →
                                        </h3>

                                        <p className="mt-2 text-sm leading-6 text-slate-500">
                                            Explore the complete practical
                                            guide.
                                        </p>
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
                                    Facebook Domain Verification FAQ
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
                                                        setOpenFaq(
                                                            isOpen
                                                                ? null
                                                                : index
                                                        )
                                                    }
                                                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-semibold text-slate-900 transition hover:bg-slate-50"
                                                    aria-expanded={isOpen}
                                                >

                                                    <span>
                                                        {faq.question}
                                                    </span>

                                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-100 text-lg text-[#601e52]">
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

                                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

                                    <h2 className="font-bold text-slate-900">
                                        On This Page
                                    </h2>

                                    <nav className="mt-4 space-y-1">

                                        <a
                                            href="#methods"
                                            className="block rounded-lg px-3 py-2.5 text-sm text-slate-600 transition hover:bg-purple-50 hover:text-[#601e52]"
                                        >
                                            Verification Methods
                                        </a>

                                        <a
                                            href="#troubleshooting"
                                            className="block rounded-lg px-3 py-2.5 text-sm text-slate-600 transition hover:bg-purple-50 hover:text-[#601e52]"
                                        >
                                            Troubleshooting
                                        </a>

                                        <a
                                            href="#faq"
                                            className="block rounded-lg px-3 py-2.5 text-sm text-slate-600 transition hover:bg-purple-50 hover:text-[#601e52]"
                                        >
                                            FAQ
                                        </a>

                                    </nav>

                                </div>

                                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-xl">
                                        🌐
                                    </div>

                                    <h2 className="mt-4 text-xl font-bold text-slate-900">
                                        Domain Checklist
                                    </h2>

                                    <p className="mt-2 text-sm leading-6 text-slate-600">
                                        Make sure you control the domain and
                                        have access to its DNS or website
                                        configuration before starting.
                                    </p>

                                    <a
                                        href="#methods"
                                        className="mt-5 block rounded-xl bg-[#601e52] px-4 py-3 text-center font-bold text-white transition hover:bg-[#4e1843]"
                                    >
                                        View Methods
                                    </a>

                                </div>

                                <div className="rounded-2xl bg-gradient-to-br from-[#601e52] to-[#35102e] p-6 text-white shadow-lg">

                                    <div className="text-3xl">
                                        📋
                                    </div>

                                    <h2 className="mt-4 text-xl font-bold">
                                        Need More Help?
                                    </h2>

                                    <p className="mt-2 text-sm leading-6 text-purple-100">
                                        Check the common Business Manager
                                        verification problems and solutions.
                                    </p>

                                    <a
                                        href="/facebook-business-manager-verification-problems"
                                        className="mt-5 block rounded-xl bg-white px-4 py-3 text-center font-bold text-[#601e52] transition hover:bg-purple-50"
                                    >
                                        View Problems
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
                            <strong>Disclaimer:</strong> FBM Verified is an
                            independent informational website and is not
                            affiliated with, endorsed by, or officially
                            connected with Meta Platforms, Inc. Facebook and
                            Meta are trademarks of their respective owners.
                            Domain verification methods, requirements and
                            interfaces may change over time.
                        </p>

                    </div>

                </section>

            </main>
        </>
    );
};

export default DomainVerify;