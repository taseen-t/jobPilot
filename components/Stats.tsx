import { BsBriefcase } from "react-icons/bs";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { FiUsers } from "react-icons/fi";
import { PiSuitcaseSimple } from "react-icons/pi";

export default function Stats() {
    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="group flex items-center gap-4 rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                        <BsBriefcase className="h-8 w-8" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900">1,75,324</h3>
                        <p className="text-gray-500">Live Job</p>
                    </div>
                </div>

                <div className="group flex items-center gap-4 rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                        <HiOutlineBuildingOffice2 className="h-8 w-8" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900">97,354</h3>
                        <p className="text-gray-500">Companies</p>
                    </div>
                </div>

                <div className="group flex items-center gap-4 rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                        <FiUsers className="h-8 w-8" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900">38,47,154</h3>
                        <p className="text-gray-500">Candidates</p>
                    </div>
                </div>

                <div className="group flex items-center gap-4 rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                        <PiSuitcaseSimple className="h-8 w-8" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900">7,532</h3>
                        <p className="text-gray-500">New Jobs</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
