import React, { useState } from 'react';
import { 
    FaChevronDown, 
    FaQuestionCircle, 
    FaShieldAlt, 
    FaRegCreditCard, 
    FaGlobe, 
    FaWhatsapp, 
    FaHeadset, 
    FaPaperPlane 
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FAQ = () => {
    // Complete FAQ Data for All Categories
    const faqData = [
        // General Questions
        {
            id: 1,
            category: 'General Questions',
            question: 'What is Facebook Business Manager (BM)?',
            answer: 'Facebook Business Manager is a Meta tool that allows businesses and agencies to securely manage their Facebook Pages, ad accounts, pixels, and team permissions in one centralized place without sharing personal login credentials.'
        },
        {
            id: 2,
            category: 'General Questions',
            question: 'Why should I buy a Facebook Business Manager Verified?',
            answer: 'Verified BM accounts have higher spending limits, lower chances of ad restrictions, immediate access to high-tier features, and greater trust from Meta, allowing you to run ads smoothly from day one.'
        },

        // BM Verification
        {
            id: 3,
            category: 'BM Verification',
            question: 'Is the BM account 100% verified?',
            answer: 'Yes! All our Business Manager accounts are 100% legally business-verified with official documentation, active company status, and clean history to ensure max ad stability.'
        },
        {
            id: 4,
            category: 'BM Verification',
            question: 'Can you verify my existing unverified Business Manager?',
            answer: 'Yes, we provide legal business verification services for your existing BM using valid company documents and official Meta partner channels.'
        },

        // Ad Accounts & Pages
        {
            id: 5,
            category: 'Ad Accounts & Pages',
            question: 'What type of ad accounts come with the BM?',
            answer: 'Our BMs come with active, healthy ad accounts featuring clean spending thresholds (such as $50, $250, or unlimited spend limits) depending on the package you choose.'
        },
        {
            id: 6,
            category: 'Ad Accounts & Pages',
            question: 'Will I get full admin access to the pages and ad accounts?',
            answer: 'Yes, you will be given full primary admin ownership rights, and you can remove our agency or account creator once you link your personal/business profile.'
        },

        // Domain Verification
        {
            id: 7,
            category: 'Domain Verification',
            question: 'Why is Domain Verification important in Facebook BM?',
            answer: 'Domain verification helps protect your brand identity, allows you to configure conversion events for Meta Pixel (Aggregated Event Measurement), and prevents unauthorized ad routing.'
        },
        {
            id: 8,
            category: 'Domain Verification',
            question: 'How long does domain verification take?',
            answer: 'Domain verification via DNS TXT record or HTML file upload usually takes anywhere from a few minutes up to 24 hours to reflect on Meta.'
        },

        // WhatsApp API
        {
            id: 9,
            category: 'WhatsApp API',
            question: 'Do you provide official WhatsApp Cloud API setup?',
            answer: 'Yes, we provide full WhatsApp Business Cloud API setup, green tick verification assistance, message template approvals, and webhook integration support.'
        },
        {
            id: 10,
            category: 'WhatsApp API',
            question: 'What are the message costs for WhatsApp API?',
            answer: 'Meta charges standard conversation-based pricing depending on user-initiated or business-initiated messaging. We help you connect your own Facebook Business portfolio to manage billing directly.'
        },

        // Pricing & Payments
        {
            id: 11,
            category: 'Pricing & Payments',
            question: 'What payment methods do you accept?',
            answer: 'We accept Crypto (USDT, BTC, ETH), Binance Pay, Wise, Payoneer, international Credit/Debit cards, and local payment methods (bKash/Nagad for Bangladeshi clients).'
        },
        {
            id: 12,
            category: 'Pricing & Payments',
            question: 'Are there any hidden fees?',
            answer: 'No, our pricing is fully transparent. The price listed on our website covers the BM account delivery, setup assistance, and initial documentation support.'
        },

        // Support & Refunds
        {
            id: 13,
            category: 'Support & Refunds',
            question: 'Can I get a refund or replacement if there is an issue?',
            answer: 'Yes, we offer a 100% replacement guarantee or full refund if any technical issue or pre-existing restriction occurs on the account before you launch your first campaign.'
        },
        {
            id: 14,
            category: 'Support & Refunds',
            question: 'Do you provide ongoing support after purchase?',
            answer: 'Yes, we offer 24/7 dedicated customer support via WhatsApp and email to help you with troubleshooting, ad account linking, and security tips.'
        }
    ];

    const categories = [
        { name: 'General Questions', icon: <FaQuestionCircle /> },
        { name: 'BM Verification', icon: <FaShieldAlt /> },
        { name: 'Ad Accounts & Pages', icon: <FaGlobe /> },
        { name: 'Domain Verification', icon: <FaGlobe /> },
        { name: 'WhatsApp API', icon: <FaWhatsapp /> },
        { name: 'Pricing & Payments', icon: <FaRegCreditCard /> },
        { name: 'Support & Refunds', icon: <FaHeadset /> },
    ];

    const [activeCategory, setActiveCategory] = useState('General Questions');
    const [openId, setOpenId] = useState(1);

    const toggleFAQ = (id) => {
        setOpenId(openId === id ? null : id);
    };

    // Filter questions based on selected category
    const filteredFaqs = faqData.filter(faq => faq.category === activeCategory);

    return (
        <div className="min-h-screen bg-[#0b0d14] text-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-4">
                        <FaQuestionCircle className="text-sm" /> Frequently Asked Questions
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                        Find Quick Answers <br />
                        <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                            To Your Questions
                        </span>
                    </h1>
                    <p className="mt-4 text-base text-gray-400">
                        Get answers to the most common questions about our Facebook Business Manager solutions, pricing, and services.
                    </p>
                </div>

                {/* FAQ Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Left Side Navigation Sidebar */}
                    <div className="lg:col-span-4 bg-[#121522] border border-white/10 rounded-2xl p-4 sm:p-6 space-y-2 shadow-xl sticky top-24">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4 px-3">
                            Categories
                        </h3>
                        {categories.map((cat, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    setActiveCategory(cat.name);
                                    // Open the first item of the newly selected category automatically
                                    const firstItem = faqData.find(f => f.category === cat.name);
                                    if(firstItem) setOpenId(firstItem.id);
                                }}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 text-left ${
                                    activeCategory === cat.name
                                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20'
                                        : 'text-gray-400 hover:bg-white/5 hover:text-white'
                                }`}
                            >
                                <span className="text-lg shrink-0">{cat.icon}</span>
                                <span className="truncate">{cat.name}</span>
                            </button>
                        ))}
                    </div>

                    {/* Right Side Accordion Section */}
                    <div className="lg:col-span-8 space-y-4">
                        {filteredFaqs.map((faq) => {
                            const isOpen = openId === faq.id;
                            return (
                                <div
                                    key={faq.id}
                                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                                        isOpen
                                            ? 'border-blue-500/50 bg-[#151929] shadow-xl shadow-blue-900/10'
                                            : 'border-white/10 bg-[#121522] hover:border-white/20'
                                    }`}
                                >
                                    <button
                                        onClick={() => toggleFAQ(faq.id)}
                                        className="w-full flex items-center justify-between p-5 text-left font-semibold text-white text-base sm:text-lg focus:outline-none cursor-pointer"
                                    >
                                        <span className="flex items-center gap-3 pr-4">
                                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold">
                                                ?
                                            </span>
                                            {faq.question}
                                        </span>
                                        <FaChevronDown
                                            className={`transition-transform duration-300 shrink-0 text-blue-400 ${
                                                isOpen ? 'rotate-180' : ''
                                            }`}
                                        />
                                    </button>

                                    {isOpen && (
                                        <div className="px-6 pb-6 pt-2 text-sm text-gray-300 leading-relaxed border-t border-white/5">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom CTA Box */}
                <div className="mt-16 rounded-2xl border border-white/10 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-indigo-900/20 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
                    <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
                    
                    <div className="space-y-2 text-center md:text-left z-10">
                        <div className="inline-flex items-center gap-2 text-blue-400 font-bold text-sm">
                            <FaHeadset className="text-lg" /> Still Have Questions?
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white">
                            Can't find the answer you are looking for?
                        </h3>
                        <p className="text-sm text-gray-400 max-w-lg">
                            Feel free to contact our support team. We are available 24/7 to help you with any issues.
                        </p>
                    </div>

                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3.5 font-semibold text-white transition duration-300 hover:shadow-lg hover:shadow-blue-500/30 shrink-0 z-10"
                    >
                        Contact Us <FaPaperPlane />
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default FAQ;