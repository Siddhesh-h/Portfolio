import Project from "./Project";

export default function ProjectMain() {
    return (
        <section
            id="projects"
            className="relative z-10 py-24 px-8 text-text-primary"
        >
            <div className="w-full max-w-[1200px] m-auto px-[15px] box-border">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-black mb-4">
                        Featured Projects
                    </h2>
                    <div className="w-[80px] h-[4px] bg-text-primary mt-4 mx-auto rounded-xs"></div>
                </div>
                <div className="grid grid-cols-2 gap-8">
                    <Project
                        image="/images/Portfolio.jpg"
                        heading="Portfolio Website"
                        description="Personal portfolio website showcasing projects, skills, experience, and achievements through a modern and interactive design."
                        demoLink=""
                        tech={["React", "Tailwind", "JavaScript"]}
                    />
                </div>
            </div>
        </section>
    );
}
