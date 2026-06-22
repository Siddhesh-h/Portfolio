import { ChevronDown, Download, Mail } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
    return (
        <section id="home">
            <div className="relative z-10 min-h-screen flex items-center justify-center text-text-primary">
                <div className="text-center px-4">
                    <div className="mb-5">
                        <h1 className="text-3xl sm:text-5xl md:text-7xl lg-text-8xl font-bold p-5">
                            Siddhesh Gopal Sarang
                        </h1>

                        <div className="text-base sm:text-xl md:text-2xl lg:text-3xl font-medium mt-5 mb-5">
                            <TypeAnimation
                                sequence={[
                                    "Full Stack Developer",
                                    2000,
                                    "Frontend Developer",
                                    2000,
                                    "Backend Developer",
                                    2000,
                                ]}
                                wrapper="h4"
                                speed={30}
                                repeat={Infinity}
                            />
                        </div>

                        <p className="mt-10 max-w-3xl px-6 mx-auto text-text-tertiary leading-[1.8] text-base md:text-lg">
                            Full Stack Developer passionate about building
                            modern web applications with React, Node.js,
                            Express, MongoDB, and MySQL. Focused on creating
                            scalable, efficient, and user-friendly digital
                            experiences.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 px-6">
                        <a
                            href="/SiddheshSarangResume.pdf"
                            download="Siddhesh_Sarang_Resume.pdf"
                            className="w-full sm:w-auto rounded-full bg-text-primary text-bg-primary px-6 h-14 font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(255,255,255,0.25)]"
                        >
                            <Download />
                            Download Resume
                        </a>
                        <a
                            href="#contact"
                            className="w-full sm:w-auto rounded-full border-2 px-6 h-14 font-medium flex items-center justify-center gap-2 transition-all hover:bg-text-primary hover:text-bg-primary duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(255,255,255,0.25)] cursor-pointer"
                        >
                            <Mail /> Contact Me
                        </a>
                    </div>
                    <div className="mx-auto mt-5 w-12 h-12 rounded-full border-2 flex items-center justify-center cursor-pointer hover:bg-text-primary hover:text-bg-primary hover:-translate-y-1 transition">
                        <a
                            href="https://www.linkedin.com/in/siddhesh-sarang-761b30229"
                            className="font-bold text-lg "
                            target="_blank"
                        >
                            in
                        </a>
                    </div>

                    <h4 className="mt-5 text-text-tertiary">
                        SCROLL TO EXPLORE
                    </h4>
                    <div className="mt-5 flex justify-center">
                        <ChevronDown className="animate-bounce" />
                    </div>
                </div>
            </div>
        </section>
    );
}
