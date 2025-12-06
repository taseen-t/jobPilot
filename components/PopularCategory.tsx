import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import {
  PiPenNib,
  PiCode,
  PiMegaphone,
  PiMonitorPlay,
  PiMusicNotes,
  PiChartBar,
  PiFirstAid,
  PiDatabase,
} from "react-icons/pi";

const categories = [
  {
    icon: PiPenNib,
    title: "Graphics & Design",
    positions: "357 Open position",
  },
  {
    icon: PiCode,
    title: "Code & Programing",
    positions: "312 Open position",
  },
  {
    icon: PiMegaphone,
    title: "Digital Marketing",
    positions: "297 Open position",
  },
  {
    icon: PiMonitorPlay,
    title: "Video & Animation",
    positions: "247 Open position",
  },
  {
    icon: PiMusicNotes,
    title: "Music & Audio",
    positions: "204 Open position",
  },
  {
    icon: PiChartBar,
    title: "Account & Finance",
    positions: "167 Open position",
  },
  {
    icon: PiFirstAid,
    title: "Health & Care",
    positions: "125 Open position",
  },
  {
    icon: PiDatabase,
    title: "Data & Science",
    positions: "57 Open position",
  },
];

export default function PopularCategory() {
  return (
    <section className="py-16 bg-white lg:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-12 gap-4">
          <h2 className="text-3xl font-bold text-gray-900">Popular category</h2>
          <Link
            href="/jobs"
            className="group flex items-center gap-2 px-6 py-3 text-blue-600 bg-white border border-gray-100 rounded-[12px] font-medium transition-all hover:bg-blue-50"
          >
            View All
            <BsArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link
              href="#"
              key={index}
              className="group flex items-center gap-4 p-5 rounded-lg transition-all duration-300 hover:shadow-[0_12px_48px_rgba(0,44,109,0.1)] hover:bg-white border border-transparent hover:border-blue-500/10"
            >
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                <category.icon className="w-6 h-6" />
              </div>

              <div>
                <h3 className="font-medium text-gray-900 group-hover:text-gray-900 transition-colors">
                  {category.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {category.positions}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
