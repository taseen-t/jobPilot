import Link from "next/link";
import { FaDribbble } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

const companies = [
    {
        name: "Dribbble",
        isFeatured: true,
        location: "Dhaka, Bangladesh",
        openPositions: 3,
        icon: FaDribbble,
        color: "bg-[#ea4c89]", // Dribbble color
    },
    {
        name: "Dribbble",
        isFeatured: true,
        location: "Dhaka, Bangladesh",
        openPositions: 3,
        icon: FaDribbble,
        color: "bg-[#ea4c89]",
    },
    {
        name: "Dribbble",
        isFeatured: true,
        location: "Dhaka, Bangladesh",
        openPositions: 3,
        icon: FaDribbble,
        color: "bg-[#ea4c89]",
    },
    {
        name: "Dribbble",
        isFeatured: true,
        location: "Dhaka, Bangladesh",
        openPositions: 3,
        icon: FaDribbble,
        color: "bg-[#ea4c89]",
    },
    {
        name: "Dribbble",
        isFeatured: true,
        location: "Dhaka, Bangladesh",
        openPositions: 3,
        icon: FaDribbble,
        color: "bg-[#ea4c89]",
    },
    {
        name: "Dribbble",
        isFeatured: true,
        location: "Dhaka, Bangladesh",
        openPositions: 3,
        icon: FaDribbble,
        color: "bg-[#ea4c89]",
    },
];

export default function TopCompanies() {
    return (
        <section className="py-16 bg-white lg:py-20">
            <div className="container mx-auto px-4">

                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900">Top companies</h2>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {companies.map((company, index) => (
                        <div
                            key={index}
                            className="group flex flex-col p-6 rounded-lg border border-gray-100 bg-white transition-all duration-300 hover:shadow-[0_12px_48px_rgba(0,44,109,0.1)] hover:border-blue-200"
                        >

                            <div className="flex items-start gap-4 mb-6">
                                <div className={`flex-shrink-0 flex items-center justify-center w-12 h-12 rounded text-white ${company.color}`}>
                                    <company.icon className="w-6 h-6" />
                                </div>

                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-900 transition-colors">
                                            {company.name}
                                        </h3>
                                        {company.isFeatured && (
                                            <span className="bg-red-50 text-red-500 text-xs px-2 py-0.5 rounded-full">
                                                Featured
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-1 text-sm text-gray-500">
                                        <CiLocationOn className="w-4 h-4" />
                                        <span>{company.location}</span>
                                    </div>
                                </div>
                            </div>


                            <Link
                                href="#"
                                className="w-full block text-center py-3 rounded bg-blue-50 text-blue-600 font-medium transition-colors group-hover:bg-blue-600 group-hover:text-white"
                            >
                                Open Position ({company.openPositions})
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
