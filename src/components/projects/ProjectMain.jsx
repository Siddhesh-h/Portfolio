import Project from "./Project";

export default function ProjectMain() {
    return (
        <section
            id="projects"
            className="relative z-10 py-16 md:py-24 px-4 md:px-8 text-text-primary"
        >
            <div className="w-full max-w-[1200px] mx-auto px-0 md:px-4 box-border">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
                        Featured Projects
                    </h2>
                    <div className="w-[80px] h-[4px] bg-text-primary mt-4 mx-auto rounded-xs"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <Project
                        image="/images/landing-page.JPG"
                        heading="TradeX - Full Stack Trading Platform"
                        description="Built a full-stack stock trading platform with JWT authentication, simulated real-time market updates, portfolio and fund management, order execution, responsive dashboards, Docker containerization, and cloud deployment."
                        demoLink="https://tradex-frontend-nu.vercel.app/"
                        tech={[
                            "React",
                            "Tailwind CSS",
                            "Node.js",
                            "Express.js",
                            "Prisma",
                            "PostgreSQL",
                            "JWT",
                            "Docker",
                            "Vercel",
                            "Render",
                        ]}
                    />
                </div>
            </div>
        </section>
    );
}
