import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function SectionCTA() {
    return (
        <section className="py-16 bg-white lg:py-24">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

               
                    <div className="group relative overflow-hidden rounded-lg bg-gray-50 flex flex-col-reverse sm:flex-row items-center justify-between p-8 sm:p-12 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(0,102,223,0.15)]">
                        <div className="z-10 flex flex-col items-start gap-4 sm:w-1/2">
                            <h3 className="text-3xl font-bold text-gray-900">
                                Become a Candidate
                            </h3>
                            <p className="text-gray-500 mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus a dolor convallis efficitur.
                            </p>
                            <Link
                                href="/create-account"
                                className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-6 py-3 rounded shadow-sm transition-colors hover:bg-blue-50"
                            >
                                Register Now
                                <BsArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>

                        <div className="absolute right-0 top-0 h-full w-1/2 hidden sm:block">
                            <Image
                                src="/cta/candidate.png"
                                alt="Candidate Workspace"
                                fill
                                className="object-cover object-center opacity-90"
                            />
                           
                            <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent"></div>
                        </div>
                        
                    </div>

                    
                    <div className="group relative overflow-hidden rounded-lg bg-[#0066DF] flex flex-col-reverse sm:flex-row items-center justify-between p-8 sm:p-12 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(0,102,223,0.5)]">
                        <div className="z-10 flex flex-col items-start gap-4 sm:w-1/2">
                            <h3 className="text-3xl font-bold text-white">
                                Become a Employer
                            </h3>
                            <p className="text-blue-100 mb-4">
                                Cras in massa pellentesque, mollis ligula non, luctus dui. Morbi sed efficitur dolor. Pelque augue risus, aliqu.
                            </p>
                            <Link
                                href="/create-account"
                                className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-6 py-3 rounded shadow-sm transition-colors hover:bg-blue-50"
                            >
                                Register Now
                                <BsArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>

                        <div className="absolute right-0 top-0 h-full w-1/2 hidden sm:block">
                            <Image
                                src="/cta/employer.png"
                                alt="Employer"
                                fill
                                className="object-cover object-top opacity-90"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#0066DF] via-[#0066DF]/80 to-transparent"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
