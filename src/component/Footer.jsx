import React from 'react';
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
    FaArrowRight,
    FaTelegramPlane,
} from 'react-icons/fa';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'BM Solutions', path: '/bm-solutions' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'About', path: '/about' },
        { name: 'FAQ', path: '/faq' },
        { name: 'Contact', path: '/contact' },
    ];

    const services = [
        'BM Verification',
        'Ad Account Setup',
        'Page Setup',
        'Domain Verification',
        'WhatsApp API',
        'BM Access Management',
    ];

    return (
        <footer className="bg-[#101114] text-gray-400 border-t border-white/10">
            {/* Newsletter / CTA Section */}
            <div className="border-b border-white/10">
                <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
                    <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/15 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-transparent p-7 sm:p-10 md:flex-row md:items-center shadow-2xl">
                        <div>
                            <p className="mb-2 text-sm font-semibold uppercase tracking-[3px] text-blue-400">
                                Verified • Secure • Trusted
                            </p>
                            <h2 className="max-w-xl text-2xl font-bold leading-tight text-white sm:text-3xl">
                                Ready to Grow Your Business with
                                <span className="block text-blue-400">
                                    Verified Facebook BM Solutions?
                                </span>
                            </h2>
                            <p className="mt-3 max-w-lg text-sm leading-6 text-gray-400">
                                Get verified and secure Facebook Business Manager setup, access, and management services for your advertising growth.
                            </p>
                        </div>

                        <Link
                            to="/contact"
                            className="inline-flex shrink-0 items-center gap-3 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30"
                        >
                            Get Started Now
                            <FaArrowRight />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12 lg:px-10">
                {/* Brand Info */}
                <div>
                    <Link to="/" className="inline-flex items-center gap-3">
                        <img className='h-12 w-16' src={logo} alt="logo" />
                        <div>
                            <h3 className="text-xl font-bold text-white">
                                FBM<span className="text-blue-400">Verified</span>
                            </h3>
                            <p className="text-xs tracking-wider text-gray-500 font-medium">
                                FB BM SELLER & PROVIDER
                            </p>
                        </div>
                    </Link>

                    <p className="mt-5 max-w-xs text-sm leading-7 text-gray-400">
                        Your trusted partner for 100% secure, Facebook Business Manager Verifieds and professional Meta ad solutions.
                    </p>

                    <div className="mt-6 flex items-center gap-3">
                        <a
                            href="https://www.facebook.com/fbmverified"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Facebook"
                            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white"
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            href="https://www.instagram.com/fbmverified"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Instagram"
                            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="https://www.linkedin.com/groups/40993029"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white"
                        >
                            <FaLinkedinIn />
                        </a>
                        <a
                            href="https://t.me/fbmverified"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Telegram"
                            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white"
                        >
                            <FaTelegramPlane />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="mb-6 text-lg font-bold text-white">
                        Quick Links
                    </h3>
                    <ul className="space-y-3">
                        {quickLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.path}
                                    className="group inline-flex items-center gap-2 text-sm transition hover:text-blue-400"
                                >
                                    <FaArrowRight className="text-xs opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100 text-blue-400" />
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* BM Services */}
                <div>
                    <h3 className="mb-6 text-lg font-bold text-white">
                        BM Solutions
                    </h3>
                    <ul className="space-y-3">
                        {services.map((service) => (
                            <li key={service}>
                                <Link
                                    to="/bm-solutions"
                                    className="text-sm transition hover:text-blue-400"
                                >
                                    {service}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="mb-6 text-lg font-bold text-white">
                        Get In Touch
                    </h3>

                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <MdEmail className="mt-0.5 shrink-0 text-xl text-blue-400" />
                            <div>
                                <p className="text-xs text-gray-500">Email Us</p>
                                <a
                                    href="mailto:support@fbmverified.com"
                                    className="text-sm transition hover:text-blue-400 break-all"
                                >
                                    support@fbmverified.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <MdPhone className="mt-0.5 shrink-0 text-xl text-blue-400" />
                            <div>
                                <p className="text-xs text-gray-500">WhatsApp / Phone</p>
                                <a
                                    href="https://wa.me/8801831591975"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm transition hover:text-blue-400"
                                >
                                    +8801831591975
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <MdLocationOn className="mt-0.5 shrink-0 text-xl text-blue-400" />
                            <div>
                                <p className="text-xs text-gray-500">Location</p>
                                <p className="text-sm text-gray-400">Jahangirabad, Pirganj, Rangpur, Bangladesh 5470 (Available 24/7)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 text-center sm:px-8 md:flex-row lg:px-10">
                    <p className="text-xs leading-6 text-gray-500 sm:text-sm">
                        © {currentYear} FBMVerified. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6 text-xs sm:text-sm">
                        <Link
                            to="/privacy-policy"
                            className="transition hover:text-blue-400"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            to="/terms"
                            className="transition hover:text-blue-400"
                        >
                            Terms & Conditions
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;