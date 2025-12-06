"use client";

import Image from "next/image";
import { FaStar, FaQuoteRight } from "react-icons/fa";

const testimonials = [
    {
        id: 1,
        name: "Robert Fox",
        role: "UI/UX Designer",
        image: "/testimonials/robert.png",
        rating: 5,
        quote: "Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui. Maecenas ac placerat metus, in faucibus est.",
    },
    {
        id: 2,
        name: "Bessie Cooper",
        role: "Creative Director",
        image: "/testimonials/bessie.png",
        rating: 5,
        quote: "Mauris eget lorem odio. Mauris convallis justo molestie metus aliquam lacinia. Suspendisse ut dui vulputate augue condimentum ornare. Morbi vitae tristique ante",
    },
    {
        id: 3,
        name: "Jane Cooper",
        role: "Photographer",
        image: "/testimonials/jane.png",
        rating: 5,
        quote: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse et magna quis nibh accumsan venenatis sit amet id orci. Duis vestibulum bibendum dapibus.",
    },
    {
        id: 4,
        name: "Ralph Edwards",
        role: "Tech Lead",
        image: "/testimonials/ralph.png",
        rating: 5,
        quote: "Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam. Donec eget ex magna.",
    },
    {
        id: 5,
        name: "Annette Black",
        role: "Marketing Manager",
        image: "/testimonials/annette.png",
        rating: 5,
        quote: "Nullam cursus velit ac dui convallis, eget consectetur ex tempus. Etiam vel sem nec magna congue sagittis at quis risus. Duis vestibulum bibendum dapibus.",
    },
    {
        id: 6,
        name: "Cameron Williamson",
        role: "Web Developer",
        image: "/testimonials/cameron.png",
        rating: 5,
        quote: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
    },
];

// duplicate the testimonials to create a seamless loop
const marqueeTestimonials = [...testimonials, ...testimonials];

export default function ClientTestimonial() {
    return (
        <section className="py-16 bg-[#f7f7f9] lg:py-24 overflow-hidden">
            <div className="container mx-auto px-4 mb-12">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900">Clients Testimonial</h2>
                </div>
            </div>

            <div className="relative w-full">
                {/* marquee container */}
                <div className="w-full overflow-hidden">
                    <div className="flex gap-6 animate-marquee w-max select-none">
                        {marqueeTestimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="w-[350px] md:w-[400px] bg-white p-8 rounded-lg shadow-sm flex flex-col gap-6 flex-shrink-0 transition-transform hover:scale-[1.02] duration-300"
                            >
                                {/* stars */}
                                <div className="flex gap-1 text-orange-400">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <FaStar key={i} className="w-5 h-5" />
                                    ))}
                                </div>

                                {/* quote */}
                                <p className="text-gray-500 leading-relaxed min-h-[100px] flex-grow">
                                    "{testimonial.quote}"
                                </p>

                                {/* profile & quote icon */}
                                <div className="flex items-center justify-between mt-auto pt-4 border-t border-transparent">
                                    <div className="flex items-center gap-4">
                                        <div className="rounded-full overflow-hidden shrink-0">
                                            <Image
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                width={48}
                                                height={48}
                                                className="object-cover w-12 h-12"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                                            <p className="text-sm text-gray-500">{testimonial.role}</p>
                                        </div>
                                    </div>

                                    <FaQuoteRight className="text-3xl text-gray-200" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
