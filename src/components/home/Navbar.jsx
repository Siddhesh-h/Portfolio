import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar({ theme, setTheme }) {
    const [showNav, setShowNav] = useState(true);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.6,
            },
        );

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            setScrolled(currentScrollY > 50);

            if (currentScrollY > lastScrollY) {
                setShowNav(false);
            } else {
                setShowNav(true);
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`
        fixed
        top-0
        inset-x-0
        z-50
        transition-all
        duration-500
        border-b
        border-glass-border
        text-text-primary

        ${showNav ? "translate-y-0" : "-translate-y-full"}

        ${scrolled ? "backdrop-blur-xl bg-text-primary/[0.03]" : ""}
    `}
        >
            <div className="max-w-[1200px] mx-auto px-4 md:px-5 py-4 md:py-5 flex items-center justify-between">
                <div>
                    <span className="font-bold text-xl sm:text-2xl md:text-3xl">
                        Siddhesh
                    </span>

                    <span className="font-extrabold text-xl sm:text-2xl md:text-3xl ml-2">
                        .
                    </span>
                </div>

                <ul className="hidden md:flex gap-8">
                    <li>
                        <a
                            href="#home"
                            className={`nav-link ${
                                activeSection === "home" ? "active" : ""
                            }`}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            className={`nav-link ${
                                activeSection === "about" ? "active" : ""
                            }`}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#skills"
                            className={`nav-link ${
                                activeSection === "skills" ? "active" : ""
                            }`}
                        >
                            Skills
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            className={`nav-link ${
                                activeSection === "projects" ? "active" : ""
                            }`}
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className={`nav-link ${
                                activeSection === "contact" ? "active" : ""
                            }`}
                        >
                            Contact
                        </a>
                    </li>
                </ul>

                <div className="flex items-center">
                    <input
                        type="checkbox"
                        id="theme-toggle-checkbox"
                        className="hidden"
                        checked={theme === "light"}
                        onChange={() =>
                            setTheme(theme === "dark" ? "light" : "dark")
                        }
                    />

                    <label
                        htmlFor="theme-toggle-checkbox"
                        className="
                            flex
                            px-3
                            relative
                            w-[60px]
                            md:w-[70px]
                            h-[30px]
                            md:h-[34px]
                            border
                            border-glass-border
                            rounded-full
                            items-center
                            justify-between
                            cursor-pointer
                            bg-text-primary/[0.03]
                        "
                    >
                        <Moon size={16} />
                        <Sun size={15} />

                        <span
                            className={`absolute left-1 w-[22px] md:w-[24px] h-[22px] md:h-[24px] rounded-full bg-text-primary transition-all duration-300 ${theme === "light" ? "translate-x-[28px] md:translate-x-[35px]" : ""}`}
                        ></span>
                    </label>
                </div>
            </div>
        </nav>
    );
}
