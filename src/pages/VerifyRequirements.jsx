import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const VerifyRequirements = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const faqs = [
        {
            question: "What are the requirements for Facebook Business verification?",
            answer:
                "Requirements can vary depending on the business, account, products, and features being used. In general, you should have accurate business information, legitimate contact details, a consistent online business presence, and valid supporting documentation if Meta requests it.",
        },
        {
            question: "What documents may be required for business verification?",
            answer:
                "Meta may request documentation that helps establish the identity or legitimacy of the relevant business. The exact documents can vary. Always submit genuine, valid, readable documents that belong to the business.",
        },
        {
            question: "Does my business name need to match my documents?",
            answer:
                "Business information should be accurate and consistent with your legitimate business records. Avoid unnecessary variations or misleading information when entering your business details.",
        },
        {
            question: "Do I need a website for Facebook Business verification?",
            answer:
                "A website may be useful for establishing a consistent online business presence, although requirements can vary. If you use a website, make sure it clearly represents your business and contains accurate business information.",
        },
        {
            question: "Is a domain required for Business Manager verification?",
            answer:
                "Domain requirements depend on the business setup and features involved. When domain verification is applicable, you should use a domain that you legitimately control and configure it using an available official verification method.",
        },
        {
            question: "Can I use fake documents for business verification?",
            answer:
                "No. You should never use fake, altered, stolen, or misleading documents. Business verification should be completed using truthful business information and legitimate supporting documentation.",
        },
        {
            question: "What should I do if my documents are rejected?",
            answer:
                "Review the reason provided by Meta, check that your information is accurate and consistent, make sure the documents are valid and readable, and use the official review or appeal process available to your account.",
        },
    ];

    const requirements = [
        {
            number: "01",
            icon: "🏢",
            title: "Accurate Business Name",
            text:
                "Use the correct business name associated with your legitimate business records. Avoid unnecessary spelling differences or misleading variations.",
        },
        {
            number: "02",
            icon: "📍",
            title: "Business Address",
            text:
                "Provide an accurate business address where applicable. Your business information should remain consistent across relevant records.",
        },
        {
            number: "03",
            icon: "📞",
            title: "Business Contact Details",
            text:
                "Use legitimate contact information that you can access and that is genuinely associated with your business.",
        },
        {
            number: "04",
            icon: "🌐",
            title: "Business Website",
            text:
                "A professional website can provide a clear online presence. Make sure the website represents the same legitimate business.",
        },
        {
            number: "05",
            icon: "🔗",
            title: "Business Domain",
            text:
                "When domain verification is relevant, use a domain that you legitimately control and configure the available verification method correctly.",
        },
        {
            number: "06",
            icon: "📄",
            title: "Supporting Documents",
            text:
                "If documents are requested, submit legitimate documents that correspond to the relevant business and contain information that can be reviewed.",
        },
        {
            number: "07",
            icon: "🔐",
            title: "Account Security",
            text:
                "Use appropriate security practices, protect administrator access, and enable available security features such as two-factor authentication.",
        },
        {
            number: "08",
            icon: "✓",
            title: "Consistent Information",
            text:
                "Review your business name, address, website, contact information, and documents for unnecessary inconsistencies before submitting information.",
        },
    ];

    const documentTips = [
        "Use genuine documents belonging to the relevant business.",
        "Make sure the document is clear and readable.",
        "Avoid submitting cropped or incomplete information.",
        "Check that important business details are visible.",
        "Do not alter or manipulate official documents.",
        "Use current and relevant documentation where applicable.",
        "Make sure the submitted information is consistent with your legitimate business details.",
        "Keep copies of documents you legitimately submitted for your own records.",
    ];

    const websiteChecklist = [
        "Business name is clearly displayed.",
        "Contact information is available.",
        "Business address is provided where appropriate.",
        "The website represents the same legitimate business.",
        "The website uses a professional domain.",
        "Important legal pages such as Privacy Policy are available.",
        "Business information is not misleading or contradictory.",
        "The website is accessible and functional.",
    ];

    const requirementSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline:
            "Facebook Business Verification Requirements: Complete Checklist",
        description:
            "Learn about Facebook Business verification requirements, business information, supporting documents, website and domain preparation, account security, and common mistakes.",
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
                "https://www.fbmverified.com/facebook-business-verification-requirements",
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
                {/* ================= SEO ================= */}

                <title>
                    Facebook Business Verification Requirements | Complete Checklist
                </title>

                <meta
                    name="description"
                    content="Learn the Facebook Business verification requirements, including business information, documents, website, domain, contact details, security, and verification preparation."
                />

                <meta
                    name="keywords"
                    content="Facebook business verification requirements, Facebook Business Manager verification requirements, business verification documents, Meta business verification requirements, Facebook BM requirements, business verification checklist"
                />

                <link
                    rel="canonical"
                    href="https://www.fbmverified.com/facebook-business-verification-requirements"
                />

                <meta name="robots" content="index, follow" />

                {/* ================= OPEN GRAPH ================= */}

                <meta
                    property="og:title"
                    content="Facebook Business Verification Requirements | Complete Checklist"
                />

                <meta
                    property="og:description"
                    content="Complete checklist for Facebook Business verification requirements, documents, business information, website, domain, and account security."
                />

                <meta
                    property="og:url"
                    content="https://www.fbmverified.com/facebook-business-verification-requirements"
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
                    content="Facebook Business Verification Requirements"
                />

                <meta
                    name="twitter:description"
                    content="Complete checklist for preparing your business for Facebook Business verification."
                />

                {/* ================= SCHEMA ================= */}

                <script type="application/ld+json">
                    {JSON.stringify(requirementSchema)}
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

                        <div className="absolute bottom-0 left-1/2 h-72 w-72 rounded-full bg-indigo-400 blur-3xl" />
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
                                        Business Manager Verification
                                    </a>
                                </li>

                                <li>/</li>

                                <li className="text-white">
                                    Requirements
                                </li>
                            </ol>
                        </nav>

                        {/* Badge */}

                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                            <span className="h-2 w-2 rounded-full bg-green-400" />
                            Verification Requirements Checklist
                        </div>

                        <div className="max-w-4xl">

                            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                                Facebook Business Verification Requirements
                            </h1>

                            <p className="mt-6 max-w-3xl text-lg leading-8 text-purple-100 sm:text-xl">
                                Understand the information, documents, website,
                                domain, and security considerations you should
                                review before starting a Facebook Business
                                verification process.
                            </p>

                            <div className="mt-8 flex flex-col gap-4 sm:flex-row">

                                <a
                                    href="#requirements"
                                    className="rounded-xl bg-white px-6 py-3.5 text-center font-bold text-[#601e52] shadow-lg transition hover:-translate-y-0.5 hover:bg-purple-50"
                                >
                                    View Requirements
                                </a>

                                <a
                                    href="#documents"
                                    className="rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-center font-bold text-white backdrop-blur transition hover:bg-white/20"
                                >
                                    Document Checklist
                                </a>

                            </div>

                        </div>
                    </div>
                </section>

                {/* =====================================================
                    QUICK CARDS
                ====================================================== */}

                <section className="relative z-10 mx-auto -mt-8 max-w-6xl px-4 sm:px-6 lg:px-8">

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                        {[
                            {
                                number: "01",
                                title: "Business",
                                text: "Accurate business identity",
                            },
                            {
                                number: "02",
                                title: "Documents",
                                text: "Legitimate supporting records",
                            },
                            {
                                number: "03",
                                title: "Website",
                                text: "Consistent online presence",
                            },
                            {
                                number: "04",
                                title: "Security",
                                text: "Protected administrator access",
                            },
                        ].map((item) => (
                            <div
                                key={item.number}
                                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg"
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-sm font-extrabold text-[#601e52]">
                                    {item.number}
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
                    CONTENT
                ====================================================== */}

                <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

                    <div className="grid gap-8 lg:grid-cols-[1fr_320px]">

                        <article>

                            {/* INTRO */}

                            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

                                <span className="text-sm font-bold uppercase tracking-wider text-[#601e52]">
                                    Before You Start
                                </span>

                                <h2 className="mt-3 text-3xl font-bold text-slate-900">
                                    What Do You Need for Facebook Business Verification?
                                </h2>

                                <p className="mt-5 leading-8 text-slate-600">
                                    Facebook Business verification requirements
                                    are not necessarily identical for every
                                    business. Meta may consider the business,
                                    account status, products, features, and
                                    other factors when determining what
                                    verification steps are available.
                                </p>

                                <p className="mt-4 leading-8 text-slate-600">
                                    The best approach is to make sure your
                                    business information is accurate,
                                    consistent, and supported by legitimate
                                    records before beginning the applicable
                                    verification process.
                                </p>

                                <div className="mt-7 rounded-xl border-l-4 border-[#601e52] bg-purple-50 p-5">

                                    <p className="font-bold text-slate-900">
                                        Important
                                    </p>

                                    <p className="mt-1 leading-7 text-slate-600">
                                        Requirements and available verification
                                        options can change. Always follow the
                                        current instructions shown inside your
                                        Meta business account.
                                    </p>

                                </div>

                            </section>

                            {/* =================================================
                                REQUIREMENTS
                            ================================================== */}

                            <section
                                id="requirements"
                                className="scroll-mt-24 mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
                            >

                                <span className="text-sm font-bold uppercase tracking-wider text-[#601e52]">
                                    Core Requirements
                                </span>

                                <h2 className="mt-2 text-3xl font-bold text-slate-900">
                                    Facebook Business Verification Checklist
                                </h2>

                                <p className="mt-4 leading-8 text-slate-600">
                                    Review each of the following areas before
                                    submitting business information.
                                </p>

                                <div className="mt-8 grid gap-5 sm:grid-cols-2">

                                    {requirements.map((item) => (
                                        <div
                                            key={item.number}
                                            className="group rounded-2xl border border-slate-200 p-5 transition duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-lg"
                                        >

                                            <div className="flex items-start justify-between gap-4">

                                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-2xl">
                                                    {item.icon}
                                                </div>

                                                <span className="text-xs font-extrabold text-[#601e52]">
                                                    {item.number}
                                                </span>

                                            </div>

                                            <h3 className="mt-5 text-lg font-bold text-slate-900">
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
                                BUSINESS INFO
                            ================================================== */}

                            <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

                                <h2 className="text-3xl font-bold text-slate-900">
                                    Business Information You Should Review
                                </h2>

                                <p className="mt-4 leading-8 text-slate-600">
                                    Before starting verification, review your
                                    business details carefully. Accurate and
                                    consistent information is important for
                                    maintaining a clear business identity.
                                </p>

                                <div className="mt-7 overflow-hidden rounded-xl border border-slate-200">

                                    <div className="grid grid-cols-2 bg-slate-100 px-4 py-4 text-sm font-bold text-slate-900">
                                        <div>Information</div>
                                        <div>What to Check</div>
                                    </div>

                                    {[
                                        [
                                            "Business Name",
                                            "Correct and consistent business name",
                                        ],
                                        [
                                            "Address",
                                            "Accurate business address",
                                        ],
                                        [
                                            "Phone",
                                            "Legitimate accessible contact number",
                                        ],
                                        [
                                            "Email",
                                            "Accessible business contact email",
                                        ],
                                        [
                                            "Website",
                                            "Website represents the same business",
                                        ],
                                        [
                                            "Domain",
                                            "You legitimately control the domain",
                                        ],
                                        [
                                            "Documents",
                                            "Valid and relevant supporting records",
                                        ],
                                    ].map((row) => (
                                        <div
                                            key={row[0]}
                                            className="grid grid-cols-2 border-t border-slate-200 px-4 py-4 text-sm"
                                        >
                                            <div className="font-semibold text-slate-900">
                                                {row[0]}
                                            </div>

                                            <div className="text-slate-600">
                                                {row[1]}
                                            </div>
                                        </div>
                                    ))}

                                </div>

                            </section>

                            {/* =================================================
                                DOCUMENTS
                            ================================================== */}

                            <section
                                id="documents"
                                className="scroll-mt-24 mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
                            >

                                <span className="text-sm font-bold uppercase tracking-wider text-[#601e52]">
                                    Documents
                                </span>

                                <h2 className="mt-2 text-3xl font-bold text-slate-900">
                                    Business Verification Document Checklist
                                </h2>

                                <p className="mt-4 leading-8 text-slate-600">
                                    Meta may request supporting documentation
                                    depending on the business and verification
                                    flow. The exact document types can vary.
                                </p>

                                <div className="mt-7 space-y-3">

                                    {documentTips.map((item, index) => (
                                        <div
                                            key={item}
                                            className="flex items-start gap-4 rounded-xl bg-slate-50 p-4"
                                        >

                                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-700">
                                                {index + 1}
                                            </span>

                                            <p className="leading-7 text-slate-600">
                                                {item}
                                            </p>

                                        </div>
                                    ))}

                                </div>

                                <div className="mt-7 rounded-xl border border-amber-200 bg-amber-50 p-5">

                                    <div className="flex gap-3">

                                        <span className="text-xl">
                                            ⚠️
                                        </span>

                                        <div>
                                            <h3 className="font-bold text-slate-900">
                                                Never use fake documents
                                            </h3>

                                            <p className="mt-1 text-sm leading-6 text-slate-600">
                                                Do not create, modify, purchase,
                                                borrow, or submit documents that
                                                do not legitimately belong to
                                                your business.
                                            </p>
                                        </div>

                                    </div>

                                </div>

                            </section>

                            {/* =================================================
                                WEBSITE
                            ================================================== */}

                            <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

                                <span className="text-sm font-bold uppercase tracking-wider text-[#601e52]">
                                    Website Preparation
                                </span>

                                <h2 className="mt-2 text-3xl font-bold text-slate-900">
                                    Website Checklist for Business Verification
                                </h2>

                                <p className="mt-4 leading-8 text-slate-600">
                                    If your website is part of your business
                                    presence, review the following items to
                                    make sure your website clearly represents
                                    your legitimate business.
                                </p>

                                <div className="mt-7 grid gap-3 sm:grid-cols-2">

                                    {websiteChecklist.map((item) => (
                                        <div
                                            key={item}
                                            className="flex items-start gap-3 rounded-xl border border-slate-200 p-4"
                                        >

                                            <span className="mt-0.5 text-green-600">
                                                ✓
                                            </span>

                                            <span className="text-sm leading-6 text-slate-600">
                                                {item}
                                            </span>

                                        </div>
                                    ))}

                                </div>

                            </section>

                            {/* =================================================
                                DOMAIN
                            ================================================== */}

                            <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

                                <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

                                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-purple-100 text-2xl">
                                        🌐
                                    </div>

                                    <div>

                                        <span className="text-sm font-bold uppercase tracking-wider text-[#601e52]">
                                            Domain
                                        </span>

                                        <h2 className="mt-1 text-3xl font-bold text-slate-900">
                                            Domain Verification Preparation
                                        </h2>

                                    </div>

                                </div>

                                <p className="mt-5 leading-8 text-slate-600">
                                    Domain verification can be relevant to
                                    certain Meta business setups and features.
                                    If domain verification is required or
                                    useful for your setup, make sure you
                                    genuinely control the domain.
                                </p>

                                <div className="mt-7 rounded-xl bg-slate-50 p-5">

                                    <h3 className="font-bold text-slate-900">
                                        Before verifying a domain
                                    </h3>

                                    <div className="mt-4 space-y-3">

                                        {[
                                            "Make sure the domain belongs to or is legitimately controlled by your business.",
                                            "Make sure the website is accessible.",
                                            "Check your DNS or website configuration before starting verification.",
                                            "Use an official verification method available to your Meta business account.",
                                            "Avoid using domains that you do not control.",
                                        ].map((item) => (
                                            <div
                                                key={item}
                                                className="flex gap-3"
                                            >
                                                <span className="text-[#601e52]">
                                                    →
                                                </span>

                                                <p className="text-sm leading-6 text-slate-600">
                                                    {item}
                                                </p>
                                            </div>
                                        ))}

                                    </div>

                                </div>

                            </section>

                            {/* =================================================
                                SECURITY
                            ================================================== */}

                            <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

                                <span className="text-sm font-bold uppercase tracking-wider text-[#601e52]">
                                    Security
                                </span>

                                <h2 className="mt-2 text-3xl font-bold text-slate-900">
                                    Business Manager Security Requirements
                                </h2>

                                <p className="mt-4 leading-8 text-slate-600">
                                    Verification is only one part of maintaining
                                    a secure business account. Review who has
                                    access to your business assets and keep
                                    administrator accounts protected.
                                </p>

                                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                                    {[
                                        {
                                            title: "Two-Factor Authentication",
                                            text: "Enable available two-factor authentication options where appropriate.",
                                        },
                                        {
                                            title: "Admin Access",
                                            text: "Review administrators and remove unnecessary access.",
                                        },
                                        {
                                            title: "Strong Passwords",
                                            text: "Use unique and secure passwords for administrator accounts.",
                                        },
                                        {
                                            title: "Connected Apps",
                                            text: "Review third-party applications and integrations connected to your business.",
                                        },
                                    ].map((item) => (
                                        <div
                                            key={item.title}
                                            className="rounded-xl border border-slate-200 p-5"
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
                                MISTAKES
                            ================================================== */}

                            <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

                                <h2 className="text-3xl font-bold text-slate-900">
                                    Common Verification Preparation Mistakes
                                </h2>

                                <div className="mt-7 space-y-4">

                                    {[
                                        "Entering business information that does not match legitimate records.",
                                        "Submitting documents that are unclear or incomplete.",
                                        "Using information belonging to another business.",
                                        "Using a website that contains unrelated or contradictory business information.",
                                        "Trying to bypass the verification process.",
                                        "Assuming that approval is guaranteed.",
                                    ].map((item, index) => (
                                        <div
                                            key={item}
                                            className="flex gap-4 rounded-xl border border-red-100 bg-red-50/50 p-4"
                                        >

                                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 font-bold text-red-600">
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
                                FINAL CHECKLIST
                            ================================================== */}

                            <section className="mt-8 overflow-hidden rounded-2xl bg-gradient-to-br from-[#601e52] to-[#35102e] p-6 text-white shadow-xl sm:p-8">

                                <span className="text-sm font-bold uppercase tracking-wider text-purple-200">
                                    Final Check
                                </span>

                                <h2 className="mt-2 text-3xl font-bold">
                                    Ready for Business Verification?
                                </h2>

                                <p className="mt-3 leading-7 text-purple-100">
                                    Before submitting information, go through
                                    this final checklist.
                                </p>

                                <div className="mt-7 grid gap-3 sm:grid-cols-2">

                                    {[
                                        "Business information is accurate",
                                        "Business name is consistent",
                                        "Address is correct",
                                        "Contact details are accessible",
                                        "Website represents the business",
                                        "Domain is under your control",
                                        "Documents are legitimate",
                                        "Account security is reviewed",
                                    ].map((item) => (
                                        <div
                                            key={item}
                                            className="flex items-center gap-3 rounded-xl bg-white/10 p-4 backdrop-blur"
                                        >

                                            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-sm font-bold text-[#601e52]">
                                                ✓
                                            </span>

                                            <span className="text-sm font-medium">
                                                {item}
                                            </span>

                                        </div>
                                    ))}

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
                                    Continue Your Business Verification Guide
                                </h2>

                                <div className="mt-6 grid gap-3 sm:grid-cols-2">

                                    <a
                                        href="/facebook-business-manager-verification"
                                        className="rounded-xl border border-slate-200 p-5 transition hover:border-purple-300 hover:bg-purple-50"
                                    >
                                        <h3 className="font-bold text-slate-900">
                                            Facebook Business Manager Verification →
                                        </h3>

                                        <p className="mt-2 text-sm text-slate-500">
                                            Read the complete verification guide.
                                        </p>
                                    </a>

                                    <a
                                        href="/verified-business-manager-guide"
                                        className="rounded-xl border border-slate-200 p-5 transition hover:border-purple-300 hover:bg-purple-50"
                                    >
                                        <h3 className="font-bold text-slate-900">
                                            Verified Business Manager Guide →
                                        </h3>

                                        <p className="mt-2 text-sm text-slate-500">
                                            Learn how to prepare and avoid common mistakes.
                                        </p>
                                    </a>

                                    <a
                                        href="/facebook-business-manager-verification-problems"
                                        className="rounded-xl border border-slate-200 p-5 transition hover:border-purple-300 hover:bg-purple-50"
                                    >
                                        <h3 className="font-bold text-slate-900">
                                            Verification Problems & Solutions →
                                        </h3>

                                        <p className="mt-2 text-sm text-slate-500">
                                            Troubleshoot common verification issues.
                                        </p>
                                    </a>

                                    <a
                                        href="/domain-verification-facebook-business-manager"
                                        className="rounded-xl border border-slate-200 p-5 transition hover:border-purple-300 hover:bg-purple-50"
                                    >
                                        <h3 className="font-bold text-slate-900">
                                            Domain Verification Guide →
                                        </h3>

                                        <p className="mt-2 text-sm text-slate-500">
                                            Learn about domain verification preparation.
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
                                    Facebook Business Verification FAQ
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

                                {/* Navigation */}

                                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

                                    <h2 className="font-bold text-slate-900">
                                        Requirements
                                    </h2>

                                    <nav className="mt-4 space-y-1">

                                        {[
                                            ["#requirements", "Core Requirements"],
                                            ["#documents", "Documents"],
                                            ["#faq", "FAQ"],
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

                                {/* Quick Card */}

                                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-xl">
                                        ✓
                                    </div>

                                    <h2 className="mt-4 text-xl font-bold text-slate-900">
                                        Quick Checklist
                                    </h2>

                                    <p className="mt-2 text-sm leading-6 text-slate-600">
                                        Accurate business information,
                                        legitimate documents, a consistent
                                        website, and good account security are
                                        important preparation steps.
                                    </p>

                                    <a
                                        href="#requirements"
                                        className="mt-5 block rounded-xl bg-[#601e52] px-4 py-3 text-center font-bold text-white transition hover:bg-[#4e1843]"
                                    >
                                        Check Requirements
                                    </a>

                                </div>

                                {/* Related */}

                                <div className="rounded-2xl bg-gradient-to-br from-[#601e52] to-[#35102e] p-6 text-white shadow-lg">

                                    <div className="text-3xl">
                                        📘
                                    </div>

                                    <h2 className="mt-4 text-xl font-bold">
                                        Complete Guide
                                    </h2>

                                    <p className="mt-2 text-sm leading-6 text-purple-100">
                                        Read the main Facebook Business Manager
                                        verification guide for the complete
                                        process.
                                    </p>

                                    <a
                                        href="/facebook-business-manager-verification"
                                        className="mt-5 block rounded-xl bg-white px-4 py-3 text-center font-bold text-[#601e52] transition hover:bg-purple-50"
                                    >
                                        Read Main Guide
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
                            <strong>Disclaimer:</strong> This website is an
                            independent informational resource and is not
                            affiliated with, endorsed by, or officially
                            connected with Meta Platforms, Inc. Facebook and
                            Meta are trademarks of their respective owners.
                            Requirements, eligibility criteria, and interfaces
                            may change over time.
                        </p>

                    </div>

                </section>

            </main>
        </>
    );
};

export default VerifyRequirements;