import { BriefcaseBusiness, Goal, User } from "lucide-react";
import About from "./About";
import Completed from "./Completed";

export default function AboutMain() {
    return (
        <>
            <section
                className="bg-bg-secondary text-text-primary py-16 md:py-24 px-4 md:px-8"
                id="about"
            >
                <div className="w-full max-w-[1200px] m-auto px-0 py-[15px]">
                    <div className="text-center mb-[4rem]">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-['Space_Grotesk',_sans-serif] mb-4">
                            About Me
                        </h1>
                        <div className="w-[80px] h-[4px] bg-text-primary mt-[1rem] mx-auto rounded-xl"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        <About
                            icon={
                                <User
                                    size={40}
                                    strokeWidth={2.5}
                                    className="mb-[1rem]"
                                />
                            }
                            heading={"Professional Bio"}
                            details={
                                <>
                                    I am a passionate{" "}
                                    <strong>Full Stack Developer</strong> with
                                    experience building modern, scalable, and
                                    user-friendly web applications. I specialize
                                    in frontend development using{" "}
                                    <strong>
                                        React.js, HTML, CSS, and JavaScript,
                                    </strong>
                                    creating responsive and intuitive user
                                    interfaces. On the backend, I develop{" "}
                                    <strong>RESTful</strong> APIs and web
                                    applications using{" "}
                                    <strong>
                                        Node.js, Express.js, MongoDB, and MySQL.
                                    </strong>{" "}
                                    With a strong foundation in software
                                    engineering and problem-solving.
                                </>
                            }
                        />

                        <About
                            icon={
                                <BriefcaseBusiness
                                    size={40}
                                    strokeWidth={2.5}
                                    className="mb-[1rem]"
                                />
                            }
                            heading={"Internship Experience"}
                            details={
                                <>
                                    Completed a 3-month{" "}
                                    <strong>
                                        Web Developer & Project Coordinator
                                    </strong>{" "}
                                    internship at{" "}
                                    <strong>Sahu Technologies</strong>, where I
                                    worked on real-world web development
                                    projects, developed responsive user
                                    interfaces using React.js, HTML, CSS, and
                                    JavaScript, collaborated with teams to
                                    implement new features, resolved technical
                                    issues, and coordinated project activities
                                    to deliver high-quality solutions within
                                    deadlines.
                                </>
                            }
                        />

                        <About
                            icon={
                                <Goal
                                    size={40}
                                    strokeWidth={2.5}
                                    className="mb-[1rem]"
                                />
                            }
                            heading={"My Goal"}
                            details={
                                "My goal is to create modern digital experiences that combine clean design, efficient backend systems, and seamless user interactions. I strive to continuously improve my technical skills, tackle challenging problems, and contribute to meaningful projects that make a real impact."
                            }
                        />
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center gap-5 mt-10">
                        <Completed number="3" title="+ PROJECTS" />
                        <Completed number="12" title="TECHNOLOGIES" />
                        <Completed number="100" title="% DEDICATION" />
                    </div>
                </div>
            </section>
        </>
    );
}
