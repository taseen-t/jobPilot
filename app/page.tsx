"use client";

import Header from "@/components/Header";
import Stats from "@/components/Stats";
import MostPopularVacancies from "@/components/MostPopularVacancies";
import HowItWorks from "@/components/HowItWorks";
import Image from "next/image";
import { CiSearch, CiLocationOn } from "react-icons/ci";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>

        <section className="bg-[#f7f7f9] py-12 lg:py-20">
          <div className="container mx-auto px-4 flex flex-col items-center justify-between gap-12 lg:flex-row">

            <div className="max-w-2xl">
              <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 lg:text-6xl">
                Find a job that suits <br />
                your interest & skills.
              </h1>
              <p className="mb-8 text-lg text-gray-500">
                Aliquam vitae turpis in diam convallis finibus in at risus. Nullam in scelerisque leo, eget sollicitudin velit vestibulum.
              </p>

              <div className="mb-6 flex flex-col gap-4 rounded-lg bg-white p-3 shadow-lg sm:flex-row sm:items-center border border-gray-100">
                <div className="flex flex-1 items-center gap-3 border-b border-gray-100 px-3 pb-3 sm:border-b-0 sm:border-r sm:pb-0">
                  <CiSearch className="h-6 w-6 text-blue-600" />
                  <input
                    type="text"
                    placeholder="Job tittle, Keyword..."
                    className="w-full text-gray-600 outline-none placeholder:text-gray-400"
                  />
                </div>
                <div className="flex flex-1 items-center gap-3 px-3">
                  <CiLocationOn className="h-6 w-6 text-blue-600" />
                  <input
                    type="text"
                    placeholder="Your Location"
                    className="w-full text-gray-600 outline-none placeholder:text-gray-400"
                  />
                </div>
                <button className="rounded-md bg-blue-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-700">
                  Find Job
                </button>
              </div>

              <p className="text-sm text-gray-500">
                <span className="text-gray-400">Suggestion:</span> Designer, Programing, <span className="text-blue-600">Digital Marketing</span>, Video, Animation.
              </p>
            </div>

            <div className="relative w-full max-w-lg lg:max-w-xl">
              <Image
                src="/job-search-illustration.jpg"
                alt="Job Search Illustration"
                width={600}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>

          </div>
        </section>

        <Stats />

        <MostPopularVacancies />

        <HowItWorks />

      </main>
    </div>
  );
}
