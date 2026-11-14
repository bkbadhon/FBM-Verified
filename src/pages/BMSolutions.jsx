import React from 'react';
import {
    FaShieldAlt,
    FaUserCheck,
    FaFileAlt,
    FaGlobe,
    FaWhatsapp,
    FaUsers,
    FaArrowRight,
    FaFacebook,
    FaInfinity
} from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const BMSolutions = () => {
    const navigate = useNavigate();

    const services = [
        {
            id: 1,
            slug: "bm-verification",
            icon: <FaShieldAlt className="text-2xl text-blue-400" />,
            title: "BM Verification",
            description: "Get your Business Manager verified and unlock full features with maximum ad spending limits.",
        },
        {
            id: 2,
            slug: "ad-account-setup",
            icon: <FaUserCheck className="text-2xl text-blue-400" />,
            title: "Ad Account Setup",
            description: "Create and manage ad accounts with proper access, security, and payment options.",
        },
        {
            id: 3,
            slug: "page-setup",
            icon: <FaFileAlt className="text-2xl text-blue-400" />,
            title: "Page Setup",
            description: "Setup and manage Facebook pages for your business with official verification badge.",
        },
        {
            id: 4,
            slug: "domain-verification",
            icon: <FaGlobe className="text-2xl text-blue-400" />,
            title: "Domain Verification",
            description: "Verify your domain and improve ad performance, pixel tracking, and trust level.",
        },
        {
            id: 5,
            slug: "whatsapp-api",
            icon: <FaWhatsapp className="text-2xl text-blue-400" />,
            title: "WhatsApp API",
            description: "Official WhatsApp API setup and integration support for automated customer messaging.",
        },
        {
            id: 6,
            slug: "bm-access-management",
            icon: <FaUsers className="text-2xl text-blue-400" />,
            title: "BM Access Management",
            description: "Add users, assign roles, and manage permissions safely across your Meta assets.",
        },
    ];

    return (
        <div className="min-h-screen bg-[#0b0d14] text-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl space-y-20">

                {/* Hero Header Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#121522] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
                    <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>

                    <div className="lg:col-span-7 space-y-6 relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-widest">
                            <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span> Our Services
                        </div>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                            Facebook Business <br />
                            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                                Manager Solutions
                            </span>
                        </h1>
                        <p className="text-base text-gray-400 max-w-xl leading-relaxed">
                            Everything you need to manage your business on Meta — from verification to advanced ad solutions, account recovery, and API integrations.
                        </p>
                    </div>

                    {/* Right Graphic Card Illustration */}
                    <div className="lg:col-span-5 flex justify-center relative z-10">
                        <div className="w-full max-w-md bg-gradient-to-br from-blue-900/30 via-indigo-900/20 to-purple-900/30 border border-white/15 rounded-2xl p-6 shadow-2xl backdrop-blur-sm relative">
                            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white font-bold text-lg shadow-md">
                                        <FaFacebook />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-white">Meta Verified Portfolio</p>
                                        <p className="text-xs text-blue-400">High Limit • Unlimited Spend</p>
                                    </div>
                                </div>
                                <FaInfinity className="text-2xl text-purple-400" />
                            </div>

                            <div className="space-y-3">
                                <div className="flex justify-between items-center bg-[#181c2e] p-3 rounded-xl border border-white/5 text-xs">
                                    <span className="text-gray-400">Status</span>
                                    <span className="text-green-400 font-semibold flex items-center gap-1.5">
                                        <span className="h-1.5 w-1.5 rounded-full bg-green-400"></span> Verified Business
                                    </span>
                                </div>
                                <div className="flex justify-between items-center bg-[#181c2e] p-3 rounded-xl border border-white/5 text-xs">
                                    <span className="text-gray-400">Daily Limit</span>
                                    <span className="text-white font-bold">$250 - No Limit</span>
                                </div>
                                <div className="flex justify-between items-center bg-[#181c2e] p-3 rounded-xl border border-white/5 text-xs">
                                    <span className="text-gray-400">WhatsApp API</span>
                                    <span className="text-blue-400 font-semibold">Enabled</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Services 6-Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="bg-[#121522] border border-white/10 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 group"
                        >
                            <div className="space-y-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>

                            <div className="pt-6 mt-4 border-t border-white/5">
                                <button
                                    onClick={() => navigate(`/services/${service.slug}`)}
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-cyan-400 transition duration-200"
                                >
                                    Learn More <FaArrowRight />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Custom Solution Callout Card */}
                <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-indigo-900/20 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
                    <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>

                    <div className="space-y-3 text-center md:text-left z-10">
                        <div className="flex items-center justify-center md:justify-start gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20 text-green-400 text-xl">
                                <FaWhatsapp />
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                                Need a Custom Solution?
                            </h3>
                        </div>
                        <p className="text-sm text-gray-400 max-w-xl">
                            Get a personalized BM solution or high-tier agency account setup tailored specifically for your business scaling needs.
                        </p>
                    </div>

                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-7 py-3.5 font-bold text-white transition duration-300 hover:shadow-lg hover:shadow-blue-500/30 shrink-0 z-10 cursor-pointer"
                    >
                        Contact Us <FaArrowRight />
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default BMSolutions;