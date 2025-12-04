import Link from "next/link";

const vacancies = [
    { title: "Anesthesiologists", positions: "45,904 Open Positions" },
    { title: "Surgeons", positions: "50,364 Open Positions" },
    { title: "Obstetricians-Gynecologists", positions: "4,339 Open Positions" },
    { title: "Orthodontists", positions: "20,079 Open Positions" },
    { title: "Maxillofacial Surgeons", positions: "74,875 Open Positions" },
    { title: "Software Developer", positions: "43,359 Open Positions" },
    { title: "Psychiatrists", positions: "18,599 Open Positions" },
    { title: "Data Scientist", positions: "28,200 Open Positions" },
    { title: "Financial Manager", positions: "61,391 Open Positions" },
    { title: "Management Analysis", positions: "93,046 Open Positions" },
    { title: "IT Manager", positions: "50,963 Open Positions" },
    { title: "Operations Research Analysis", positions: "16,627 Open Positions" },
];

export default function MostPopularVacancies() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-900 mb-12">Most Popular Vacancies</h2>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4">
                    {vacancies.map((job, index) => (
                        <Link href="#" key={index} className="group flex flex-col gap-1">
                            <h3 className="text-lg font-medium text-gray-900 transition-colors group-hover:text-blue-600">
                                {job.title}
                            </h3>
                            <span className="text-sm text-gray-500">
                                {job.positions}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
