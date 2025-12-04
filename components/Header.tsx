"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FiPhoneCall, FiMenu, FiX } from "react-icons/fi";
import { BiWorld } from "react-icons/bi";
import { BsBriefcase } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

const countries = [
    { name: "Afghanistan", code: "af" }, { name: "Albania", code: "al" }, { name: "Algeria", code: "dz" }, { name: "Andorra", code: "ad" }, { name: "Angola", code: "ao" }, { name: "Antigua and Barbuda", code: "ag" }, { name: "Argentina", code: "ar" }, { name: "Armenia", code: "am" }, { name: "Australia", code: "au" }, { name: "Austria", code: "at" }, { name: "Azerbaijan", code: "az" },
    { name: "Bahamas", code: "bs" }, { name: "Bahrain", code: "bh" }, { name: "Bangladesh", code: "bd" }, { name: "Barbados", code: "bb" }, { name: "Belarus", code: "by" }, { name: "Belgium", code: "be" }, { name: "Belize", code: "bz" }, { name: "Benin", code: "bj" }, { name: "Bhutan", code: "bt" }, { name: "Bolivia", code: "bo" }, { name: "Bosnia and Herzegovina", code: "ba" }, { name: "Botswana", code: "bw" }, { name: "Brazil", code: "br" }, { name: "Brunei", code: "bn" }, { name: "Bulgaria", code: "bg" }, { name: "Burkina Faso", code: "bf" }, { name: "Burundi", code: "bi" },
    { name: "Cabo Verde", code: "cv" }, { name: "Cambodia", code: "kh" }, { name: "Cameroon", code: "cm" }, { name: "Canada", code: "ca" }, { name: "Central African Republic", code: "cf" }, { name: "Chad", code: "td" }, { name: "Chile", code: "cl" }, { name: "China", code: "cn" }, { name: "Colombia", code: "co" }, { name: "Comoros", code: "km" }, { name: "Congo", code: "cg" }, { name: "Costa Rica", code: "cr" }, { name: "Croatia", code: "hr" }, { name: "Cuba", code: "cu" }, { name: "Cyprus", code: "cy" }, { name: "Czech Republic", code: "cz" },
    { name: "Denmark", code: "dk" }, { name: "Djibouti", code: "dj" }, { name: "Dominica", code: "dm" }, { name: "Dominican Republic", code: "do" },
    { name: "East Timor", code: "tl" }, { name: "Ecuador", code: "ec" }, { name: "Egypt", code: "eg" }, { name: "El Salvador", code: "sv" }, { name: "Equatorial Guinea", code: "gq" }, { name: "Eritrea", code: "er" }, { name: "Estonia", code: "ee" }, { name: "Eswatini", code: "sz" }, { name: "Ethiopia", code: "et" },
    { name: "Fiji", code: "fj" }, { name: "Finland", code: "fi" }, { name: "France", code: "fr" },
    { name: "Gabon", code: "ga" }, { name: "Gambia", code: "gm" }, { name: "Georgia", code: "ge" }, { name: "Germany", code: "de" }, { name: "Ghana", code: "gh" }, { name: "Greece", code: "gr" }, { name: "Grenada", code: "gd" }, { name: "Guatemala", code: "gt" }, { name: "Guinea", code: "gn" }, { name: "Guinea-Bissau", code: "gw" }, { name: "Guyana", code: "gy" },
    { name: "Haiti", code: "ht" }, { name: "Honduras", code: "hn" }, { name: "Hungary", code: "hu" },
    { name: "Iceland", code: "is" }, { name: "India", code: "in" }, { name: "Indonesia", code: "id" }, { name: "Iran", code: "ir" }, { name: "Iraq", code: "iq" }, { name: "Ireland", code: "ie" }, { name: "Israel", code: "il" }, { name: "Italy", code: "it" }, { name: "Ivory Coast", code: "ci" },
    { name: "Jamaica", code: "jm" }, { name: "Japan", code: "jp" }, { name: "Jordan", code: "jo" },
    { name: "Kazakhstan", code: "kz" }, { name: "Kenya", code: "ke" }, { name: "Kiribati", code: "ki" }, { name: "Korea, North", code: "kp" }, { name: "Korea, South", code: "kr" }, { name: "Kosovo", code: "xk" }, { name: "Kuwait", code: "kw" }, { name: "Kyrgyzstan", code: "kg" },
    { name: "Laos", code: "la" }, { name: "Latvia", code: "lv" }, { name: "Lebanon", code: "lb" }, { name: "Lesotho", code: "ls" }, { name: "Liberia", code: "lr" }, { name: "Libya", code: "ly" }, { name: "Liechtenstein", code: "li" }, { name: "Lithuania", code: "lt" }, { name: "Luxembourg", code: "lu" },
    { name: "Madagascar", code: "mg" }, { name: "Malawi", code: "mw" }, { name: "Malaysia", code: "my" }, { name: "Maldives", code: "mv" }, { name: "Mali", code: "ml" }, { name: "Malta", code: "mt" }, { name: "Marshall Islands", code: "mh" }, { name: "Mauritania", code: "mr" }, { name: "Mauritius", code: "mu" }, { name: "Mexico", code: "mx" }, { name: "Micronesia", code: "fm" }, { name: "Moldova", code: "md" }, { name: "Monaco", code: "mc" }, { name: "Mongolia", code: "mn" }, { name: "Montenegro", code: "me" }, { name: "Morocco", code: "ma" }, { name: "Mozambique", code: "mz" }, { name: "Myanmar", code: "mm" },
    { name: "Namibia", code: "na" }, { name: "Nauru", code: "nr" }, { name: "Nepal", code: "np" }, { name: "Netherlands", code: "nl" }, { name: "New Zealand", code: "nz" }, { name: "Nicaragua", code: "ni" }, { name: "Niger", code: "ne" }, { name: "Nigeria", code: "ng" }, { name: "North Macedonia", code: "mk" }, { name: "Norway", code: "no" },
    { name: "Oman", code: "om" },
    { name: "Pakistan", code: "pk" }, { name: "Palau", code: "pw" }, { name: "Palestine", code: "ps" }, { name: "Panama", code: "pa" }, { name: "Papua New Guinea", code: "pg" }, { name: "Paraguay", code: "py" }, { name: "Peru", code: "pe" }, { name: "Philippines", code: "ph" }, { name: "Poland", code: "pl" }, { name: "Portugal", code: "pt" },
    { name: "Qatar", code: "qa" },
    { name: "Romania", code: "ro" }, { name: "Russia", code: "ru" }, { name: "Rwanda", code: "rw" },
    { name: "Saint Kitts and Nevis", code: "kn" }, { name: "Saint Lucia", code: "lc" }, { name: "Saint Vincent and the Grenadines", code: "vc" }, { name: "Samoa", code: "ws" }, { name: "San Marino", code: "sm" }, { name: "Sao Tome and Principe", code: "st" }, { name: "Saudi Arabia", code: "sa" }, { name: "Senegal", code: "sn" }, { name: "Serbia", code: "rs" }, { name: "Seychelles", code: "sc" }, { name: "Sierra Leone", code: "sl" }, { name: "Singapore", code: "sg" }, { name: "Slovakia", code: "sk" }, { name: "Slovenia", code: "si" }, { name: "Solomon Islands", code: "sb" }, { name: "Somalia", code: "so" }, { name: "South Africa", code: "za" }, { name: "South Sudan", code: "ss" }, { name: "Spain", code: "es" }, { name: "Sri Lanka", code: "lk" }, { name: "Sudan", code: "sd" }, { name: "Suriname", code: "sr" }, { name: "Sweden", code: "se" }, { name: "Switzerland", code: "ch" }, { name: "Syria", code: "sy" },
    { name: "Taiwan", code: "tw" }, { name: "Tajikistan", code: "tj" }, { name: "Tanzania", code: "tz" }, { name: "Thailand", code: "th" }, { name: "Togo", code: "tg" }, { name: "Tonga", code: "to" }, { name: "Trinidad and Tobago", code: "tt" }, { name: "Tunisia", code: "tn" }, { name: "Turkey", code: "tr" }, { name: "Turkmenistan", code: "tm" }, { name: "Tuvalu", code: "tv" },
    { name: "Uganda", code: "ug" }, { name: "Ukraine", code: "ua" }, { name: "United Arab Emirates", code: "ae" }, { name: "United Kingdom", code: "gb" }, { name: "United States", code: "us" }, { name: "Uruguay", code: "uy" }, { name: "Uzbekistan", code: "uz" },
    { name: "Vanuatu", code: "vu" }, { name: "Vatican City", code: "va" }, { name: "Venezuela", code: "ve" }, { name: "Vietnam", code: "vn" },
    { name: "Yemen", code: "ye" },
    { name: "Zambia", code: "zm" }, { name: "Zimbabwe", code: "zw" }
];

export default function Header() {
    const [selectedCountryCode, setSelectedCountryCode] = useState("pk");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="w-full bg-white">
            <div className="border-b border-gray-100 bg-gray-50 px-4 py-2 text-sm text-gray-500">
                <div className="container mx-auto">
                    <div className="flex items-center justify-between md:justify-between">

                        <button
                            className="md:hidden text-2xl text-gray-600"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
                        </button>


                        <nav className="hidden md:flex gap-6">
                            <Link href="/" className="text-blue-600 font-medium">Home</Link>
                            <Link href="#" className="hover:text-blue-600">Find Job</Link>
                            <Link href="#" className="hover:text-blue-600">Employers</Link>
                            <Link href="#" className="hover:text-blue-600">Candidates</Link>
                            <Link href="#" className="hover:text-blue-600">Pricing Plans</Link>
                            <Link href="#" className="hover:text-blue-600">Customer Supports</Link>
                        </nav>

                        <div className="flex items-center gap-6 ml-auto md:ml-0">
                            <div className="hidden sm:flex items-center gap-2">
                                <FiPhoneCall />
                                <span>+1-202-555-0178</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Image src="https://flagcdn.com/w40/us.png" alt="US Flag" width={20} height={15} />
                                <span>English</span>
                                <IoIosArrowDown />
                            </div>
                        </div>
                    </div>
                    {isMobileMenuOpen && (
                        <nav className="md:hidden flex flex-col gap-3 py-3 border-t border-gray-200 mt-2">
                            <Link href="/" className="text-blue-600 font-medium">Home</Link>
                            <Link href="#" className="hover:text-blue-600">Find Job</Link>
                            <Link href="#" className="hover:text-blue-600">Employers</Link>
                            <Link href="#" className="hover:text-blue-600">Candidates</Link>
                            <Link href="#" className="hover:text-blue-600">Pricing Plans</Link>
                            <Link href="#" className="hover:text-blue-600">Customer Supports</Link>
                            <div className="flex sm:hidden items-center gap-2 pt-2 border-t border-gray-100">
                                <FiPhoneCall />
                                <span>+1-202-555-0178</span>
                            </div>
                        </nav>
                    )}
                </div>
            </div>

            <div className="container mx-auto flex flex-row items-center justify-between gap-2 px-4 py-4 md:flex-row">
                <div className="flex items-center gap-8">

                    <Link href="/" className="flex items-center gap-2 text-lg md:text-xl font-bold text-gray-900">
                        <div className="flex h-8 w-8 items-center justify-center rounded bg-blue-600 text-white">
                            <BsBriefcase />
                        </div>
                        <span className="hidden xs:inline">Jobpilot</span>
                        <span className="xs:hidden">Jobpilot</span>
                    </Link>

                    <div className="hidden items-center rounded-md border border-gray-200 bg-white p-1 lg:flex">
                        <div className="relative flex items-center gap-2 border-r border-gray-200 px-3">
                            <Image
                                src={`https://flagcdn.com/w40/${selectedCountryCode}.png`}
                                alt="Country Flag"
                                width={20}
                                height={15}
                            />
                            <select
                                value={selectedCountryCode}
                                onChange={(e) => setSelectedCountryCode(e.target.value)}
                                className="w-24 bg-transparent text-sm font-medium text-gray-700 outline-none cursor-pointer appearance-none pr-4 truncate"
                            >
                                {countries.map((country) => (
                                    <option key={country.code} value={country.code}>{country.name}</option>
                                ))}
                            </select>
                            <IoIosArrowDown className="absolute right-2 h-3 w-3 text-gray-500 pointer-events-none" />
                        </div>
                        <div className="flex items-center px-3">
                            <CiSearch className="mr-2 h-5 w-5 text-blue-600" />
                            <input
                                type="text"
                                placeholder="Job tittle, keyword, company"
                                className="w-96 text-sm outline-none placeholder:text-gray-400"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-2 md:gap-4">
                    <Link
                        href="/login"
                        className="rounded-md px-3 py-2 text-xs md:px-6 md:py-2.5 md:text-sm font-semibold text-blue-600 transition-colors hover:bg-blue-50 whitespace-nowrap"
                    >
                        Sign In
                    </Link>
                    <button className="rounded-md bg-blue-600 px-3 py-2 text-xs md:px-6 md:py-2.5 md:text-sm font-semibold text-white transition-colors hover:bg-blue-700 whitespace-nowrap">
                        Post A Job
                    </button>
                </div>
            </div>
        </header>
    );
}
