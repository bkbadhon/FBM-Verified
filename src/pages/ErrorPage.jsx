
import React from "react";
import { Link, useRouteError } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaArrowLeft, FaArrowRight, FaHome, FaSearch, FaShieldAlt } from "react-icons/fa";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <>
            <Helmet>
                <title>Page Not Found | FBM Verified</title>
                <meta
                    name="description"
                    content="The page you are looking for could not be found."
                />
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>

            <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#160d19] px-4 py-16 text-white">

                {/* Background Effects */}
                <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-[#601e52]/40 blur-[120px]" />
                <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-purple-700/20 blur-[120px]" />

                {/* Main Content */}
                <div className="relative z-10 mx-auto w-full max-w-3xl">

                    <div className="rounded-3xl border border-white/10 bg-white/[0.04] px-6 py-12 text-center shadow-2xl backdrop-blur-xl sm:px-12 sm:py-16">

                        {/* Brand */}
                        <Link to="/" className="mb-10 inline-flex items-center gap-2">
                           
                            <span className="text-xl font-extrabold tracking-tight">
                                FBM <span className="text-[#d58ac5]">Verified</span>
                            </span>
                        </Link>

                        {/* 404 */}
                        <div className="relative mx-auto">
                            <h1 className="bg-gradient-to-b from-white via-[#d58ac5] to-[#601e52] bg-clip-text text-[120px] font-black leading-none tracking-tighter text-transparent sm:text-[190px]">
                                404
                            </h1>

                            <div className="absolute inset-x-0 bottom-2 mx-auto h-6 max-w-xs rounded-full bg-[#a83d91]/40 blur-2xl" />
                        </div>

                        {/* Icon */}
                        <div className="mx-auto mt-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#a83d91]/30 bg-[#601e52]/30 text-2xl text-[#e5a5d6] shadow-lg shadow-[#601e52]/20">
                            <FaSearch />
                        </div>

                        {/* Text */}
                        <h2 className="mt-7 text-3xl font-extrabold sm:text-4xl">
                            Page Not Found
                        </h2>

                        <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-gray-400 sm:text-base">
                            Oops! The page you're looking for doesn't exist,
                            may have been moved, or the URL might be incorrect.
                            Let's get you back on track.
                        </p>

                        {/* Buttons */}
                        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">

                            <Link
                                to="/"
                                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#601e52] px-7 py-4 font-bold text-white shadow-lg shadow-[#601e52]/30 transition duration-300 hover:-translate-y-1 hover:bg-[#792665]"
                            >
                                <FaHome />
                                Back to Home
                                <FaArrowRight className="transition group-hover:translate-x-1" />
                            </Link>

                            <Link
                                to="/bm-solutions"
                                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-4 font-bold text-white transition duration-300 hover:-translate-y-1 hover:border-[#a83d91] hover:bg-[#601e52]/30"
                            >
                                Explore Services
                                <FaArrowRight />
                            </Link>

                        </div>

                        {/* Helpful Links */}
                        <div className="mt-12 border-t border-white/10 pt-8">

                            <p className="mb-5 text-sm font-semibold text-gray-400">
                                Explore FBM Verified
                            </p>

                            <div className="flex flex-wrap justify-center gap-3">

                                {[
                                    {
                                        name: "BM Verification",
                                        path: "/facebook-business-manager-verification",
                                    },
                                    {
                                        name: "Verification Guide",
                                        path: "/verified-business-manager-guide",
                                    },
                                    {
                                        name: "Domain Verification",
                                        path: "/domain-verification-facebook-business-manager",
                                    },
                                    {
                                        name: "Contact Us",
                                        path: "/contact",
                                    },
                                ].map((item) => (
                                    <Link
                                        key={item.path}
                                        to={item.path}
                                        className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-gray-300 transition hover:border-[#a83d91]/60 hover:bg-[#601e52]/30 hover:text-white"
                                    >
                                        {item.name}
                                    </Link>
                                ))}

                            </div>
                        </div>

                        {/* Trust Footer */}
                        <div className="mt-10 flex items-center justify-center gap-2 text-xs font-medium text-gray-500">
                            <FaShieldAlt className="text-[#d58ac5]" />
                            FBM Verified — Business Verification Solutions
                        </div>

                    </div>

                    <p className="mt-6 text-center text-xs text-gray-600">
                        © {new Date().getFullYear()} FBM Verified. All rights reserved.
                    </p>

                </div>
            </main>
        </>
    );
};

export default ErrorPage;