import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const VerifyProblems = () => {
    const [openFaq, setOpenFaq] = useState(null);
    const [openProblem, setOpenProblem] = useState(null);

    const problems = [
        {
            number: "01",
            icon: "🚫",
            title: "Verification Option Is Not Showing",
            description:
                "One common issue is not seeing a business verification option inside the Meta business settings.",
            causes: [
                "The available verification flow may depend on the business and account.",
                "The business may not currently have access to a particular verification feature.",
                "Business information may not be completely configured.",
                "The location or account setup can affect available options.",
            ],
            solution:
                "First review your Business Portfolio information and security settings. Check the current verification options available inside your Meta business account rather than relying on an old interface or tutorial.",
        },
        {
            number: "02",
            icon: "📄",
            title: "Business Document Rejected",
            description:
                "A submitted business document may be rejected during the review process.",
            causes: [
                "The document may be unclear or incomplete.",
                "Business information may not correspond with the submitted document.",
                "The document may not be an accepted type for the particular verification flow.",
                "The document may be outdated or otherwise unsuitable.",
            ],
            solution:
                "Review the reason provided by Meta, then submit legitimate, readable documentation that accurately represents the relevant business. Do not alter or manipulate documents to make information match.",
        },
        {
            number: "03",
            icon: "⚠️",
            title: "Business Information Mismatch",
            description:
                "Differences between business information and supporting records can create verification problems.",
            causes: [
                "Different business name spellings.",
                "Incorrect address information.",
                "Old business details.",
                "Inconsistent contact information.",
                "Information that does not correspond with legitimate business records.",
            ],
            solution:
                "Review the business name, address, phone number, website, and other submitted details. Correct inaccurate information and make sure your legitimate business records are consistent before continuing.",
        },
        {
            number: "04",
            icon: "🌐",
            title: "Domain Verification Problem",
            description:
                "Domain verification can fail when the website owner has not correctly configured the selected verification method.",
            causes: [
                "DNS record was added incorrectly.",
                "Changes have not propagated yet.",
                "The wrong domain was configured.",
                "The user does not actually control the domain.",
                "Website or DNS configuration has conflicting settings.",
            ],
            solution:
                "Confirm that you control the domain, then carefully follow the domain verification method shown in your Meta account. If using DNS verification, check the DNS record with your domain provider and allow time for changes to propagate.",
        },
        {
            number: "05",
            icon: "📱",
            title: "Phone or Email Confirmation Issue",
            description:
                "Some business setups may require confirmation of contact information.",
            causes: [
                "Incorrect phone number or email.",
                "Verification code expired.",
                "Code was entered incorrectly.",
                "Email went to spam or another folder.",
                "Temporary delivery issue.",
            ],
            solution:
                "Confirm that the contact details are correct and accessible. Request a new code when available and check spam or junk folders for email verification messages.",
        },
        {
            number: "06",
            icon: "⏳",
            title: "Verification Review Is Taking Too Long",
            description:
                "Business verification reviews may take time, and processing time can vary.",
            causes: [
                "Additional review may be required.",
                "Submitted information may need further checking.",
                "High review volume can affect processing.",
                "The account may require additional action.",
            ],
            solution:
                "Check the current status inside your Meta business account and follow any instructions or requests shown there. Avoid repeatedly submitting different information without understanding the reason for the review.",
        },
        {
            number: "07",
            icon: "❌",
            title: "Verification Failed",
            description:
                "A verification attempt can fail when the submitted information does not satisfy the applicable verification requirements.",
            causes: [
                "Incorrect business information.",
                "Unsupported or unsuitable documentation.",
                "Information inconsistency.",
                "Business details could not be sufficiently established.",
                "The verification flow may have additional eligibility requirements.",
            ],
            solution:
                "Read the review result carefully, identify the specific issue, correct inaccurate information, and use the official review or appeal options available to your account where applicable.",
        },
        {
            number: "08",
            icon: "🔐",
            title: "Security or Admin Access Problem",
            description:
                "Account security issues can interfere with managing a Business Portfolio and its verification process.",
            causes: [
                "Administrator access is not configured correctly.",
                "Two-factor authentication requirements are not satisfied.",
                "An administrator account has security restrictions.",
                "Too many unnecessary people have business access.",
            ],
            solution:
                "Review your business administrators, enable appropriate security features, and make sure only trusted people have the necessary access to your business assets.",
        },
    ];

    const quickSolutions = [
        {
            icon: "🔎",
            title: "Check Business Information",
            text: "Review your business name, address and contact details for accuracy.",
        },
        {
            icon: "📑",
            title: "Review Documents",
            text: "Use genuine, valid and readable business documentation when requested.",
        },
        {
            icon: "🌍",
            title: "Check Your Domain",
            text: "Make sure the domain is under your legitimate control and configured correctly.",
        },
        {
            icon: "🔒",
            title: "Secure Your Account",
            text: "Review admin access and enable appropriate account security.",
        },
    ];

    const faqs = [
        {
            question: "Why can't I see the Facebook Business verification option?",
            answer:
                "The verification options available in Meta Business settings can depend on the business, account, location, products, features, and current eligibility. Review the options currently displayed in your Business Portfolio rather than relying on an older tutorial.",
        },
        {
            question: "Why was my Facebook Business verification rejected?",
            answer:
                "A verification attempt can be unsuccessful for several reasons, including inaccurate information, unsuitable documentation, inconsistent business details, or other requirements applicable to the specific verification flow. Check the message provided by Meta for the reason and follow the available review process.",
        },
        {
            question: "How can I fix a business document rejection?",
            answer:
                "Check whether the document is legitimate, readable, complete, current where applicable, and associated with the relevant business. Correct any inaccurate business information and follow the submission instructions shown by Meta.",
        },
        {
            question: "How do I fix a domain verification problem?",
            answer:
                "Make sure you control the domain and use one of the domain verification methods provided in your Meta business settings. If using DNS verification, confirm that the required DNS record was entered correctly and allow time for DNS changes to propagate.",
        },
        {
            question: "What should I do if business information does not match?",
            answer:
                "Review all relevant business details and legitimate records. Correct inaccurate information instead of attempting to manipulate documents or create information that is not genuine.",
        },
        {
            question: "Can I use someone else's business documents?",
            answer:
                "No. You should only use legitimate documentation associated with the relevant business. Using another person's or another company's documents can create serious verification and account problems.",
        },
        {
            question: "Can I guarantee Facebook Business verification?",
            answer:
                "No legitimate service can guarantee that Meta will approve a particular business verification request. Approval depends on Meta's applicable requirements and review process.",
        },
    ];

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline:
            "Facebook Business Manager Verification Problems & Solutions",
        description:
            "Troubleshoot common Facebook Business Manager verification problems including missing verification options, rejected documents, business information mismatch, domain issues, pending reviews and failed verification.",
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
                "https://www.fbmverified.com/facebook-business-manager-verification-problems",
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
                    Facebook Business Manager Verification Problems & Solutions
                </title>

                <meta
                    name="description"
                    content="Having Facebook Business Manager verification problems? Learn how to troubleshoot missing verification options, rejected documents, business information mismatch, domain issues, pending reviews and failed verification."
                />

                <meta
                    name="keywords"
                    content="Facebook Business Manager verification problems, Facebook business verification problems, Facebook BM verification failed, business verification rejected, Facebook verification option missing, Meta business verification issues, Facebook business verification troubleshooting"
                />

                <link
                    rel="canonical"
                    href="https://www.fbmverified.com/facebook-business-manager-verification-problems"
                />

                <meta name="robots" content="index, follow" />

                {/* ================= OPEN GRAPH ================= */}

                <meta
                    property="og:title"
                    content="Facebook Business Manager Verification Problems & Solutions"
                />

                <meta
                    property="og:description"
                    content="Troubleshoot common Facebook Business verification problems including rejected documents, missing verification options, domain issues and failed verification."
                />

                <meta
                    property="og:url"
                    content="https://www.fbmverified.com/facebook-business-manager-verification-problems"
                />

                <meta property="og:type" content="article" />
                <meta property="og:site_name" content="FBM Verified" />

                {/* ================= TWITTER ================= */}

                <meta name="twitter:card" content="summary_large_image" />

                <meta
                    name="twitter:title"
                    content="Facebook Business Manager Verification Problems & Solutions"
                />

                <meta
                    name="twitter:description"
                    content="Find practical solutions for common Facebook Business Manager verification problems."
                />

                {/* ================= SCHEMA ================= */}

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

                        <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-pink-400 blur-3xl" />

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
                                    Problems & Solutions
                                </li>
                            </ol>
                        </nav>

                        {/* Badge */}

                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                            <span className="h-2 w-2 rounded-full bg-yellow-300" />
                            Troubleshooting Guide
                        </div>

                        <div className="max-w-4xl">

                            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                                Facebook Business Manager Verification Problems & Solutions
                            </h1>

                            <p className="mt-6 max-w-3xl text-lg leading-8 text-purple-100 sm:text-xl">
                                Having trouble with Facebook Business
                                verification? Find practical ways to
                                troubleshoot missing verification options,
                                rejected documents, information mismatches,
                                domain issues, pending reviews and failed
                                verification.
                            </p>

                            <div className="mt-8 flex flex-col gap-4 sm:flex-row">

                                <a
                                    href="#problems"
                                    className="rounded-xl bg-white px-6 py-3.5 text-center font-bold text-[#601e52] shadow-lg transition hover:-translate-y-0.5 hover:bg-purple-50"
                                >
                                    Find Your Problem
                                </a>

                                <a
                                    href="#faq"
                                    className="rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-center font-bold text-white backdrop-blur transition hover:bg-white/20"
                                >
                                    View FAQ
                                </a>

                            </div>

                        </div>
                    </div>
                </section>

                {/* =====================================================
                    QUICK SOLUTIONS
                ====================================================== */}

                <section className="relative z-10 mx-auto -mt-8 max-w-6xl px-4 sm:px-6 lg:px-8">

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                        {quickSolutions.map((item) => (
                            <div
                                key={item.title}
                                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg"
                            >

                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 text-xl">
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
                                    Troubleshooting
                                </span>

                                <h2 className="mt-3 text-3xl font-bold text-slate-900">
                                    Why Does Facebook Business Verification Have Problems?
                                </h2>

                                <p className="mt-5 leading-8 text-slate-600">
                                    Business verification issues can happen for
                                    different reasons. Meta's verification
                                    interface and requirements can also change,
                                    so an old tutorial may not exactly match
                                    what you currently see in your account.
                                </p>

                                <p className="mt-4 leading-8 text-slate-600">
                                    The safest approach is to use accurate
                                    business information, legitimate
                                    documentation, a consistent online
                                    presence, and the official verification
                                    and review options available in your Meta
                                    business account.
                                </p>

                                <div className="mt-7 rounded-xl border-l-4 border-[#601e52] bg-purple-50 p-5">

                                    <p className="font-bold text-slate-900">
                                        Important
                                    </p>

                                    <p className="mt-1 leading-7 text-slate-600">
                                        There is no legitimate method that can
                                        guarantee Meta approval or bypass its
                                        verification process.
                                    </p>

                                </div>

                            </section>

                            {/* =================================================
                                PROBLEMS
                            ================================================== */}

                            <section
                                id="problems"
                                className="scroll-mt-24 mt-8"
                            >

                                <div className="mb-6">

                                    <span className="text-sm font-bold uppercase tracking-wider text-[#601e52]">
                                        Problem → Solution
                                    </span>

                                    <h2 className="mt-2 text-3xl font-bold text-slate-900">
                                        Common Facebook Business Verification Problems
                                    </h2>

                                    <p className="mt-3 leading-7 text-slate-600">
                                        Select a problem below to see possible
                                        causes and practical troubleshooting
                                        steps.
                                    </p>

                                </div>

                                <div className="space-y-4">

                                    {problems.map((problem, index) => {
                                        const isOpen =
                                            openProblem === index;

                                        return (
                                            <div
                                                key={problem.title}
                                                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                                            >

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setOpenProblem(
                                                            isOpen
                                                                ? null
                                                                : index
                                                        )
                                                    }
                                                    className="flex w-full items-center gap-4 p-5 text-left transition hover:bg-slate-50 sm:p-6"
                                                    aria-expanded={isOpen}
                                                >

                                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-2xl">
                                                        {problem.icon}
                                                    </div>

                                                    <div className="min-w-0 flex-1">

                                                        <div className="mb-1 text-xs font-extrabold uppercase tracking-wider text-[#601e52]">
                                                            Problem {problem.number}
                                                        </div>

                                                        <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                                                            {problem.title}
                                                        </h3>

                                                    </div>

                                                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-purple-100 text-xl font-medium text-[#601e52]">
                                                        {isOpen ? "−" : "+"}
                                                    </span>

                                                </button>

                                                {isOpen && (
                                                    <div className="border-t border-slate-200 px-5 pb-6 pt-5 sm:px-6">

                                                        <p className="leading-7 text-slate-600">
                                                            {problem.description}
                                                        </p>

                                                        <div className="mt-6">

                                                            <h4 className="font-bold text-slate-900">
                                                                Possible Causes
                                                            </h4>

                                                            <div className="mt-3 space-y-2">

                                                                {problem.causes.map(
                                                                    (cause) => (
                                                                        <div
                                                                            key={cause}
                                                                            className="flex items-start gap-3"
                                                                        >

                                                                            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#601e52]" />

                                                                            <p className="text-sm leading-6 text-slate-600">
                                                                                {cause}
                                                                            </p>

                                                                        </div>
                                                                    )
                                                                )}

                                                            </div>

                                                        </div>

                                                        <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-5">

                                                            <div className="flex gap-3">

                                                                <span className="text-xl">
                                                                    💡
                                                                </span>

                                                                <div>

                                                                    <h4 className="font-bold text-slate-900">
                                                                        What You Can Do
                                                                    </h4>

                                                                    <p className="mt-1 text-sm leading-7 text-slate-600">
                                                                        {problem.solution}
                                                                    </p>

                                                                </div>

                                                            </div>

                                                        </div>

                                                    </div>
                                                )}

                                            </div>
                                        );
                                    })}

                                </div>

                            </section>

                            {/* =================================================
                                STEP BY STEP
                            ================================================== */}

                            <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

                                <span className="text-sm font-bold uppercase tracking-wider text-[#601e52]">
                                    Troubleshooting Process
                                </span>

                                <h2 className="mt-2 text-3xl font-bold text-slate-900">
                                    What to Check Before Trying Again
                                </h2>

                                <div className="mt-8 space-y-6">

                                    {[
                                        {
                                            number: "01",
                                            title: "Review Your Business Information",
                                            text: "Check your business name, address, contact details and other information for accuracy.",
                                        },
                                        {
                                            number: "02",
                                            title: "Review Your Documents",
                                            text: "If documents are requested, make sure they are legitimate, readable, complete and relevant.",
                                        },
                                        {
                                            number: "03",
                                            title: "Check Your Website",
                                            text: "Make sure your website clearly represents the same legitimate business and contains accurate information.",
                                        },
                                        {
                                            number: "04",
                                            title: "Check Domain Configuration",
                                            text: "If domain verification is involved, confirm that you control the domain and have correctly followed the available verification method.",
                                        },
                                        {
                                            number: "05",
                                            title: "Review Account Security",
                                            text: "Check administrator access and enable available security features such as two-factor authentication.",
                                        },
                                        {
                                            number: "06",
                                            title: "Use the Official Review Process",
                                            text: "If verification fails, review the reason shown by Meta and use the official review or appeal options available to your account.",
                                        },
                                    ].map((step) => (
                                        <div
                                            key={step.number}
                                            className="flex gap-5"
                                        >

                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#601e52] text-sm font-extrabold text-white">
                                                {step.number}
                                            </div>

                                            <div>

                                                <h3 className="text-lg font-bold text-slate-900">
                                                    {step.title}
                                                </h3>

                                                <p className="mt-2 leading-7 text-slate-600">
                                                    {step.text}
                                                </p>

                                            </div>

                                        </div>
                                    ))}

                                </div>

                            </section>

                            {/* =================================================
                                DON'T DO
                            ================================================== */}

                            <section className="mt-8 rounded-2xl border border-red-100 bg-white p-6 shadow-sm sm:p-8">

                                <span className="text-sm font-bold uppercase tracking-wider text-red-600">
                                    Avoid These
                                </span>

                                <h2 className="mt-2 text-3xl font-bold text-slate-900">
                                    Things You Should Never Do
                                </h2>

                                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                                    {[
                                        "Do not use fake business documents.",
                                        "Do not alter official documents.",
                                        "Do not use another company's identity.",
                                        "Do not submit misleading business information.",
                                        "Do not attempt to bypass Meta's verification process.",
                                        "Do not trust services claiming guaranteed approval.",
                                    ].map((item) => (
                                        <div
                                            key={item}
                                            className="flex items-start gap-3 rounded-xl bg-red-50 p-4"
                                        >

                                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-100 font-bold text-red-600">
                                                ×
                                            </span>

                                            <p className="text-sm leading-6 text-slate-600">
                                                {item}
                                            </p>

                                        </div>
                                    ))}

                                </div>

                            </section>

                            {/* =================================================
                                RELATED GUIDES
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
                                            Read the main Business Manager
                                            verification guide.
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
                                            Learn about preparation and the
                                            verification process.
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
                                            Check business information,
                                            documents, website and security
                                            requirements.
                                        </p>

                                    </a>

                                    <a
                                        href="/domain-verification-facebook-business-manager"
                                        className="group rounded-xl border border-slate-200 p-5 transition hover:-translate-y-1 hover:border-purple-300 hover:bg-purple-50"
                                    >

                                        <h3 className="font-bold text-slate-900 group-hover:text-[#601e52]">
                                            Domain Verification Guide →
                                        </h3>

                                        <p className="mt-2 text-sm leading-6 text-slate-500">
                                            Learn about Facebook Business domain
                                            verification.
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
                                    Facebook Business Verification Problems FAQ
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
                                            href="#problems"
                                            className="block rounded-lg px-3 py-2.5 text-sm text-slate-600 transition hover:bg-purple-50 hover:text-[#601e52]"
                                        >
                                            Common Problems
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

                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100 text-xl">
                                        💡
                                    </div>

                                    <h2 className="mt-4 text-xl font-bold text-slate-900">
                                        Quick Tip
                                    </h2>

                                    <p className="mt-2 text-sm leading-6 text-slate-600">
                                        Always check the exact message shown in
                                        your Meta business account before
                                        changing your business information or
                                        submitting documents again.
                                    </p>

                                    <a
                                        href="#problems"
                                        className="mt-5 block rounded-xl bg-[#601e52] px-4 py-3 text-center font-bold text-white transition hover:bg-[#4e1843]"
                                    >
                                        Troubleshoot Now
                                    </a>

                                </div>

                                <div className="rounded-2xl bg-gradient-to-br from-[#601e52] to-[#35102e] p-6 text-white shadow-lg">

                                    <div className="text-3xl">
                                        📋
                                    </div>

                                    <h2 className="mt-4 text-xl font-bold">
                                        Check Requirements
                                    </h2>

                                    <p className="mt-2 text-sm leading-6 text-purple-100">
                                        Review the business verification
                                        requirements before trying again.
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
                            <strong>Disclaimer:</strong> FBM Verified is an
                            independent informational website and is not
                            affiliated with, endorsed by, or officially
                            connected with Meta Platforms, Inc. Facebook and
                            Meta are trademarks of their respective owners.
                            Verification requirements, eligibility and
                            interfaces may change over time.
                        </p>

                    </div>

                </section>

            </main>
        </>
    );
};

export default VerifyProblems;