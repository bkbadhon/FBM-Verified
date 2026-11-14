
import React, { useState } from "react";
import {
    FaWhatsapp,
    FaPaperPlane,
    FaEnvelope,
    FaMapMarkerAlt,
    FaHeadset,
} from "react-icons/fa";

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const whatsappNumber = "8801831591975";

        const whatsappMessage = `
Hello FBM Verified!

New Contact Form Submission

Name: ${formData.fullName}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}
        `;

        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            whatsappMessage
        )}`;

        window.open(whatsappURL, "_blank", "noopener,noreferrer");

        setFormData({
            fullName: "",
            email: "",
            subject: "",
            message: "",
        });
    };

    return (
        <div className="min-h-screen bg-[#0b0d14] text-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-4">
                        <FaHeadset className="text-sm" /> Get In Touch
                    </div>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                        We'd Love To Hear{" "}
                        <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                            From You
                        </span>
                    </h1>

                    <p className="mt-4 text-base text-gray-400">
                        Have a question, need support, or want to work with us?
                        Reach out and we'll get back to you as soon as possible.
                    </p>
                </div>

                {/* Contact Page Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">

                    {/* Left Side: Contact Cards */}
                    <div className="lg:col-span-5 flex flex-col justify-between space-y-6">

                        {/* WhatsApp Card */}
                        <div className="bg-[#121522] border border-white/10 rounded-2xl p-6 transition duration-300 hover:border-green-500/50 hover:shadow-xl hover:shadow-green-500/10 flex items-start gap-5">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-500/20 text-green-400 text-2xl">
                                <FaWhatsapp />
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-white mb-1">
                                    WhatsApp
                                </h3>

                                <a
                                    href="https://wa.me/8801831591975"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-sm font-semibold text-green-400 hover:underline block mb-1"
                                >
                                    +8801831591975
                                </a>

                                <p className="text-xs text-gray-400">
                                    Chat with us directly for quick response
                                </p>
                            </div>
                        </div>

                        {/* Email Card */}
                        <div className="bg-[#121522] border border-white/10 rounded-2xl p-6 transition duration-300 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 flex items-start gap-5">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400 text-2xl">
                                <FaEnvelope />
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-white mb-1">
                                    Email
                                </h3>

                                <a
                                    href="mailto:support@fbmverified.com"
                                    className="text-sm font-semibold text-blue-400 hover:underline block mb-1 break-all"
                                >
                                    support@fbmverified.com
                                </a>

                                <p className="text-xs text-gray-400">
                                    Send us an email anytime
                                </p>
                            </div>
                        </div>

                        {/* Location Card */}
                        <div className="bg-[#121522] border border-white/10 rounded-2xl p-6 transition duration-300 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10 flex items-start gap-5">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-500/20 text-purple-400 text-2xl">
                                <FaMapMarkerAlt />
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-white mb-1">
                                    Location
                                </h3>

                                <p className="text-sm font-semibold text-gray-200 mb-1">
                                    Jahangirabad, Pirganj, Rangpur, Bangladesh 5470
                                </p>

                                <span className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/30">
                                    <span className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse"></span>
                                    Available 24/7
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <div className="lg:col-span-7 bg-[#121522] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                        <div className="absolute -right-16 -top-16 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>

                        <h3 className="text-2xl font-bold text-white mb-6">
                            Send a Message
                        </h3>

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-5 relative z-10"
                        >

                            {/* Full Name */}
                            <div>
                                <label className="block text-xs font-medium text-gray-400 mb-2">
                                    Full Name *
                                </label>

                                <input
                                    type="text"
                                    name="fullName"
                                    required
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    className="w-full rounded-xl bg-[#181c2e] border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition duration-200"
                                />
                            </div>

                            {/* Email Address */}
                            <div>
                                <label className="block text-xs font-medium text-gray-400 mb-2">
                                    Email Address *
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="you@example.com"
                                    className="w-full rounded-xl bg-[#181c2e] border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition duration-200"
                                />
                            </div>

                            {/* Subject */}
                            <div>
                                <label className="block text-xs font-medium text-gray-400 mb-2">
                                    Subject *
                                </label>

                                <input
                                    type="text"
                                    name="subject"
                                    required
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Enter subject"
                                    className="w-full rounded-xl bg-[#181c2e] border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition duration-200"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-xs font-medium text-gray-400 mb-2">
                                    Message *
                                </label>

                                <textarea
                                    name="message"
                                    rows="4"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your message..."
                                    className="w-full rounded-xl bg-[#181c2e] border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition duration-200 resize-none"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3.5 font-semibold text-white transition duration-300 hover:shadow-lg hover:shadow-purple-500/25 active:scale-[0.99] cursor-pointer"
                            >
                                Send Message
                                <FaPaperPlane className="text-sm" />
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;