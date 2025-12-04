"use client";

import Link from "next/link";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";

export default function EmailVerification() {
    const [code, setCode] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Verify code", code);
    };

    return (
        <div className="flex min-h-screen w-full flex-col items-center justify-center bg-white px-4">
            {/* Logo */}
            <div className="absolute top-12 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded bg-blue-600 text-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-5 w-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                        />
                    </svg>
                </div>
                <span className="text-xl font-bold text-gray-900">Jobpilot</span>
            </div>

            <div className="w-full max-w-md text-center">
                <h1 className="mb-4 text-3xl font-bold text-gray-900">Email Verification</h1>
                <p className="mb-8 text-sm text-gray-500">
                    We've sent an verification to <span className="font-medium text-gray-900">emailaddress@gmail.com</span> to verify your email address and activate your account.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <input
                        type="text"
                        placeholder="Verification Code"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-gray-500 outline-none placeholder:text-gray-500 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    />

                    <button
                        type="submit"
                        className="flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                    >
                        Verify My Account
                        <BsArrowRight className="h-5 w-5" />
                    </button>
                </form>

                <p className="mt-6 text-sm text-gray-500">
                    Didn't recieve any code?{" "}
                    <button className="font-medium text-blue-600 hover:underline">
                        Resends
                    </button>
                </p>
            </div>
        </div>
    );
}
