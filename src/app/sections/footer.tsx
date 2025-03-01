import Link from "next/link";
import ScrollAnimation from "../components/ScrollAnimation";

const FooterSection = ({
    title,
    links,
    index,
}: {
    title: string;
    links: { name: string; href: string }[];
    index: number;
}) => (
    <ScrollAnimation
        type="slide"
        direction="left"
        delay={0.1 * index}
        duration={0.5}
    >
        <div className="flex flex-col space-y-4">
            <h3 className="font-semibold text-gray-700 uppercase">{title}</h3>
            <div className="flex flex-col space-y-3">
                {links.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
        </div>
    </ScrollAnimation>
);

export default function Footer() {
    const businessLinks = [
        { name: "GTM Enablement", href: "/business/gtm-enablement" },
        {
            name: "Learning & Development",
            href: "/business/learning-development",
        },
        { name: "Partner Enablement", href: "/business/partner-enablement" },
        {
            name: "Corporate Communications",
            href: "/business/corporate-communications",
        },
        { name: "Leadership", href: "/business/leadership" },
        { name: "Engineering", href: "/business/engineering" },
    ];

    const aboutLinks = [
        { name: "Our Team", href: "/about/team" },
        { name: "Careers", href: "/about/careers" },
        { name: "AI Roleplays", href: "/about/ai-roleplays" },
        { name: "FAQ", href: "/about/faq" },
        { name: "Webinars", href: "/about/webinars" },
        { name: "Status", href: "/about/status" },
        { name: "Feature Announcements", href: "/about/features" },
        { name: "Coach Directory", href: "/about/coach-directory" },
        { name: "Glossary", href: "/about/glossary" },
    ];

    const useCasesLinks = [
        {
            name: "Conversation Roleplays",
            href: "/use-cases/conversation-roleplays",
        },
        {
            name: "Interview Preparation",
            href: "/use-cases/interview-preparation",
        },
        {
            name: "Presentation Practice",
            href: "/use-cases/presentation-practice",
        },
        { name: "Online Meetings", href: "/use-cases/online-meetings" },
        { name: "Toastmasters", href: "/use-cases/toastmasters" },
        { name: "Speech Coaches", href: "/use-cases/speech-coaches" },
    ];

    const resourcesLinks = [
        { name: "Blog", href: "/resources/blog" },
        { name: "Our Partnerships", href: "/resources/partnerships" },
        { name: "Press", href: "/resources/press" },
        { name: "Help Center", href: "/resources/help-center" },
        { name: "Sample Speeches", href: "/resources/sample-speeches" },
        { name: "Community", href: "/resources/community" },
        { name: "Trust Center", href: "/resources/trust-center" },
        { name: "Ambassadors", href: "/resources/ambassadors" },
        { name: "Courses", href: "/resources/courses" },
        { name: "Video Tutorials", href: "/resources/video-tutorials" },
    ];

    return (
        <footer className="bg-gray-50 py-12 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <FooterSection
                        title="FOR BUSINESS"
                        links={businessLinks}
                        index={1}
                    />
                    <FooterSection title="ABOUT" links={aboutLinks} index={2} />
                    <FooterSection
                        title="USE CASES"
                        links={useCasesLinks}
                        index={3}
                    />
                    <FooterSection
                        title="RESOURCES"
                        links={resourcesLinks}
                        index={4}
                    />
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
                    <div className="flex space-x-4">
                        <ScrollAnimation
                            type="slide"
                            direction="right"
                            delay={0.3}
                            duration={0.5}
                        >
                            <Link
                                href="https://linkedin.com"
                                className="text-gray-600 hover:text-blue-600"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                                </svg>
                            </Link>
                        </ScrollAnimation>

                        <ScrollAnimation
                            type="slide"
                            direction="right"
                            delay={0.2}
                            duration={0.5}
                        >
                            <Link
                                href="https://twitter.com"
                                className="text-gray-600 hover:text-blue-400"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path d="M22 5.8a8.49 8.49 0 01-2.36.64 4.13 4.13 0 001.81-2.27 8.21 8.21 0 01-2.61 1 4.1 4.1 0 00-7 3.74 11.64 11.64 0 01-8.45-4.29 4.16 4.16 0 001.27 5.49 4.09 4.09 0 01-1.86-.52v.05a4.1 4.1 0 003.3 4 4.05 4.05 0 01-1.9.07 4.11 4.11 0 003.83 2.85A8.22 8.22 0 012 18.28a11.57 11.57 0 006.29 1.85A11.59 11.59 0 0020 8.45v-.53a8.43 8.43 0 002-2.12z"></path>
                                </svg>
                            </Link>
                        </ScrollAnimation>

                        <ScrollAnimation
                            type="slide"
                            direction="right"
                            delay={0.1}
                            duration={0.5}
                        >
                            <Link
                                href="https://youtube.com"
                                className="text-gray-600 hover:text-red-600"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path d="M23 9.71a8.5 8.5 0 00-.91-4.13 2.92 2.92 0 00-1.72-1A78.36 78.36 0 0012 4.27a78.45 78.45 0 00-8.34.3 2.87 2.87 0 00-1.46.74c-.9.83-1 2.25-1.1 3.45a48.29 48.29 0 000 6.48 9.55 9.55 0 00.3 2 3.14 3.14 0 00.71 1.36 2.86 2.86 0 001.49.78 45.18 45.18 0 008.4.31c3.69 0 7.42-.25 8.34-.3a2.92 2.92 0 001.71-1 3.18 3.18 0 00.7-1.34 8.58 8.58 0 00.31-2.05 44.21 44.21 0 00.06-6.07zm-13.82 6.6V7.7l6.73 4.3z"></path>
                                </svg>
                            </Link>
                        </ScrollAnimation>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4">
                        <ScrollAnimation
                            type="slide"
                            direction="left"
                            delay={0.1}
                            duration={0.5}
                        >
                            <Link
                                href="/pricing"
                                className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200 hover:border-blue-500 transition-colors"
                            >
                                <span className="text-black font-medium">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="w-5 h-5 inline mr-1 mb-[2px]"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                                        />
                                    </svg>
                                    See pricing plans
                                </span>
                            </Link>
                        </ScrollAnimation>

                        <ScrollAnimation
                            type="slide"
                            direction="left"
                            delay={0.2}
                            duration={0.5}
                        >
                            <Link
                                href="/sales"
                                className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200 hover:border-blue-500 transition-colors"
                            >
                                <span className="text-black font-medium">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="w-5 h-5 inline mr-1 mb-[2px]"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                        />
                                    </svg>
                                    Talk to Sales
                                </span>
                            </Link>
                        </ScrollAnimation>

                        <ScrollAnimation
                            type="slide"
                            direction="left"
                            delay={0.3}
                            duration={0.5}
                        >
                            <Link
                                href="/community"
                                className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200 hover:border-blue-500 transition-colors"
                            >
                                <span className="text-black font-medium">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="w-5 h-5 inline mr-1 mb-[2px]"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                        />
                                    </svg>
                                    Join our community
                                </span>
                            </Link>
                        </ScrollAnimation>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
                    <p>© 2025 Yoodli, Inc.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link
                            href="/contact"
                            className="hover:text-blue-600 transition-colors"
                        >
                            Contact Us
                        </Link>
                        <Link
                            href="/privacy"
                            className="hover:text-blue-600 transition-colors"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/terms"
                            className="hover:text-blue-600 transition-colors"
                        >
                            Terms of Service
                        </Link>
                        <Link
                            href="/cookies"
                            className="hover:text-blue-600 transition-colors"
                        >
                            Cookie Preferences
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
