import Link from "next/link";
import { BsArrowRight, BsBookmark } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { CiLocationOn } from "react-icons/ci";

const jobs = [
  {
    title: "Techical Support Specialist",
    type: "PART-TIME",
    salary: "$20,000 - $25,000",
  },
  {
    title: "Senior UX Designer",
    type: "FULL-TIME",
    salary: "$20,000 - $25,000",
  },
  {
    title: "Marketing Officer",
    type: "INTERNSHIP",
    salary: "$20,000 - $25,000",
  },
  {
    title: "Junior Graphic Designer",
    type: "INTERNSHIP",
    salary: "$20,000 - $25,000",
  },
  {
    title: "Interaction Designer",
    type: "PART-TIME",
    salary: "$20,000 - $25,000",
  },
  { title: "Project Manager", type: "FULL-TIME", salary: "$20,000 - $25,000" },
  {
    title: "Software Engineer",
    type: "FULL-TIME",
    salary: "$20,000 - $25,000",
  },
  { title: "Visual Designer", type: "FULL-TIME", salary: "$20,000 - $25,000" },
  { title: "Project Manager", type: "FULL-TIME", salary: "$20,000 - $25,000" },
  {
    title: "Front End Developer",
    type: "PART-TIME",
    salary: "$20,000 - $25,000",
  },
  {
    title: "Senior UX Designer",
    type: "FULL-TIME",
    salary: "$20,000 - $25,000",
  },
  {
    title: "Marketing Manager",
    type: "INTERNSHIP",
    salary: "$20,000 - $25,000",
  },
];

export default function FeaturedJobs() {
  return (
    <section className="py-16 bg-white lg:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-12 gap-4">
          <h2 className="text-3xl font-bold text-gray-900">Featured job</h2>
          <Link
            href="/jobs"
            className="group flex items-center gap-2 px-6 py-3 text-blue-600 bg-white border border-gray-100 rounded-[12px] font-medium transition-all hover:bg-blue-50"
          >
            View All
            <BsArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="group relative flex flex-col p-6 rounded-lg border border-gray-100 bg-white transition-all duration-300 hover:shadow-[0_12px_48px_rgba(0,44,109,0.1)] hover:bg-blue-50 hover:border-blue-200"
            >
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {job.title}
                </h3>
                <div className="flex items-center gap-2 text-xs font-medium">
                  <span className="bg-green-50 text-green-600 px-2 py-1 rounded uppercase">
                    {job.type}
                  </span>
                  <span className="text-gray-500">Salary: {job.salary}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded bg-gray-50">
                  <FcGoogle className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-900">
                    Google Inc.
                  </span>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <CiLocationOn className="w-4 h-4" />
                    <span>Dhaka, Bangladesh</span>
                  </div>
                </div>
              </div>

              <button className="absolute top-6 right-6 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity hover:text-blue-600">
                <BsBookmark className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
