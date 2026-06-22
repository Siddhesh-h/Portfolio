import Skills from "./Skills";
import {
    SiHtml5,
    SiCss,
    SiJavascript,
    SiReact,
    SiMysql,
    SiPostgresql,
    SiGit,
    SiNodedotjs,
    SiMongodb,
    SiExpress,
    SiDocker,
    SiPrisma,
    SiTypescript,
    SiTailwindcss,
} from "react-icons/si";

export default function SkillsMain() {
    return (
        <section
            id="skills"
            className="relative z-10 py-[6rem] px-[2rem] text-text-primary"
        >
            <div className="w-[100%] max-w-[1200px] m-auto px-[15px] box-border">
                <div className="text-center mb-[4rem]">
                    <h2 className="text-5xl font-black mb-[2rem]">
                        Skills & Technologies
                    </h2>
                    <div className="w-[80px] h-[4px] bg-text-primary mt-[1rem] mx-auto rounded-xs"></div>
                </div>
                <div className="grid grid-cols-4 gap-5 w-full">
                    <Skills
                        icon={<SiHtml5 />}
                        heading={"HTML5"}
                        completed={100}
                    />

                    <Skills icon={<SiCss />} heading={"CSS3"} completed={80} />

                    <Skills
                        icon={<SiJavascript />}
                        heading={"JavaScript"}
                        completed={80}
                    />

                    <Skills
                        icon={<SiReact />}
                        heading={"React"}
                        completed={80}
                    />

                    <Skills
                        icon={<SiMysql />}
                        heading={"MySQL"}
                        completed={70}
                    />

                    <Skills
                        icon={<SiPostgresql />}
                        heading={"PostgreSQL"}
                        completed={70}
                    />

                    <Skills
                        icon={<SiGit />}
                        heading={"Git & GitHub"}
                        completed={90}
                    />

                    <Skills
                        icon={<SiNodedotjs />}
                        heading={"Node.js"}
                        completed={80}
                    />

                    <Skills
                        icon={<SiMongodb />}
                        heading={"MongoDB"}
                        completed={70}
                    />

                    <Skills
                        icon={<SiExpress />}
                        heading={"Express.js"}
                        completed={90}
                    />

                    <Skills
                        icon={<SiTypescript />}
                        heading={"TypeScript"}
                        completed={75}
                    />
                    <Skills
                        icon={<SiDocker />}
                        heading={"Docker"}
                        completed={60}
                    />
                </div>
            </div>
        </section>
    );
}
