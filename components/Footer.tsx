import Link from "next/link";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaBriefcase,
} from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

const footerLinks = {
  quickLink: [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
  ],
  candidate: [
    { name: "Browse Jobs", href: "/jobs" },
    { name: "Browse Employers", href: "/companies" },
    { name: "Candidate Dashboard", href: "/dashboard/candidate" },
    { name: "Saved Jobs", href: "/saved-jobs" },
  ],
  employers: [
    { name: "Post a Job", href: "/post-job" },
    { name: "Browse Candidates", href: "/candidates" },
    { name: "Employers Dashboard", href: "/dashboard/employer" },
    { name: "Applications", href: "/applications" },
  ],
  support: [
    { name: "FAQs", href: "/faqs" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
  ],
};

const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="group flex items-center text-gray-500 hover:text-white transition-colors duration-200 relative"
  >
    <div className="w-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:w-6">
      <BsArrowRight className="w-5 h-5 flex-shrink-0" />
    </div>
    <span>{children}</span>
  </Link>
);

export default function Footer() {
  return (
    <footer className="bg-[#18191C] pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-8">
              <FaBriefcase className="w-8 h-8 text-white" />
              <span className="text-2xl font-bold text-white">Jobpilot</span>
            </Link>

            <div className="mb-6">
              <p className="text-gray-500 mb-2">Call now:</p>
              <p className="text-white font-semibold text-lg hover:text-blue-500 transition-colors cursor-pointer">
                (319) 555-0115
              </p>
            </div>

            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              6391 Elgin St. Celina, Delaware 10299, New York, United States of
              America
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-6">
              Quick Link
            </h4>
            <ul className="flex flex-col gap-4">
              {footerLinks.quickLink.map((link) => (
                <li key={link.name}>
                  <FooterLink href={link.href}>{link.name}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Candidate</h4>
            <ul className="flex flex-col gap-4">
              {footerLinks.candidate.map((link) => (
                <li key={link.name}>
                  <FooterLink href={link.href}>{link.name}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Employers</h4>
            <ul className="flex flex-col gap-4">
              {footerLinks.employers.map((link) => (
                <li key={link.name}>
                  <FooterLink href={link.href}>{link.name}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Support</h4>
            <ul className="flex flex-col gap-4">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <FooterLink href={link.href}>{link.name}</FooterLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 Jobpilot - Job Pilot. All rights Reserved
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-gray-500 hover:text-white transition-colors"
            >
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-white transition-colors"
            >
              <FaYoutube className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-white transition-colors"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-white transition-colors"
            >
              <FaTwitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
