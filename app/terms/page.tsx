"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function TermsOfService() {
    const router = useRouter();

    return (
        <div className="flex min-h-screen w-full flex-col bg-white">
            {/* Header / Navigation Bar Placeholder - Assuming global nav handles this, checking layout.tsx might be good but sticking to page content as requested */}

            <main className="mx-auto w-full max-w-7xl px-8 py-12 lg:px-20 xl:px-32">
                <div className="mb-8">
                    <button
                        onClick={() => router.back()}
                        className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>
                        Back
                    </button>
                </div>

                <div className="mb-12">
                    <h1 className="mb-4 text-4xl font-bold text-gray-900">Terms of Service</h1>
                    <p className="text-lg text-gray-600">Last updated: December 7, 2025</p>
                </div>

                <div className="space-y-12">
                    <section>
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">1. Introduction</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Welcome to Job Pilot. By accessing our website and using our services, you agree to comply with and be bound by the following Terms of Service. Please review these terms carefully. If you do not agree to these terms, you should not access or use our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">2. User Accounts</h2>
                        <p className="mb-4 text-gray-600 leading-relaxed">
                            To access certain features of Job Pilot, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information, including your password, and for all activity that occurs under your account.
                        </p>
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="rounded-lg bg-gray-50 p-6">
                                <h3 className="mb-2 text-lg font-semibold text-gray-900">For Candidates</h3>
                                <p className="text-sm text-gray-600">
                                    Candidates must provide accurate and up-to-date professional information. You agree not to impersonate any person or entity or misrepresent your affiliation with a person or entity.
                                </p>
                            </div>
                            <div className="rounded-lg bg-gray-50 p-6">
                                <h3 className="mb-2 text-lg font-semibold text-gray-900">For Employers</h3>
                                <p className="text-sm text-gray-600">
                                    Employers are solely responsible for the job postings they create. All job descriptions must comply with applicable local labor laws and regulations.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">3. Acceptable Use</h2>
                        <p className="mb-4 text-gray-600 leading-relaxed">
                            You agree not to use Job Pilot for any unlawful purpose or any purpose prohibited under this clause. You agree not to use the website in any way that could damage the website, the services, or the general business of Job Pilot.
                        </p>
                        <ul className="list-disc space-y-2 pl-5 text-gray-600">
                            <li>Harassing, abusing, or threatening others.</li>
                            <li>Posting content that is false, misleading, or defamatory.</li>
                            <li>Attempting to gain unauthorized access to our systems.</li>
                            <li>Scraping or collecting data from our users without consent.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">4. Intellectual Property</h2>
                        <p className="text-gray-600 leading-relaxed">
                            The Job Pilot website and its original content, features, and functionality are owned by Job Pilot and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">5. Termination</h2>
                        <p className="text-gray-600 leading-relaxed">
                            We may terminate your access to the Site, without cause or notice, which may result in the forfeiture and destruction of all information associated with your account. All provisions of this Agreement that, by their nature, should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">6. Limitation of Liability</h2>
                        <p className="text-gray-600 leading-relaxed">
                            In no event shall Job Pilot, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">7. Changes to Terms</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Job Pilot reserves the right to modify these Terms at any time. We will do so by posting and drawing attention to the updated terms on the Site. Your decision to continue to visit and make use of the Site after such changes have been made constitutes your formal acceptance of the new Terms of Service.
                        </p>
                    </section>

                    <div className="mt-12 border-t pt-8 text-center text-sm text-gray-500">
                        <p>&copy; {new Date().getFullYear()} Job Pilot. All rights reserved.</p>
                    </div>
                </div>
            </main>
        </div>
    );
}
