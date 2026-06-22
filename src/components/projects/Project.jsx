export default function Project({
    image,
    heading,
    description,
    tech,
    demoLink,
}) {
    return (
        <div className="group bg-glass-bg border border-glass-border rounded-2xl overflow-hidden transiton-all duration-600 hover:border-text-primary hover:-translate-y-3">
            {/* Image Section */}
            <div className="relative w-full pb-[60%] overflow-hidden bg-bg-secondary">
                <img
                    src={image}
                    alt={heading}
                    className="absolute top-0 left-0 w-full h-full object-cover max-w-full block"
                />
                {/* Overlay */}
                <div className="absolute inset-0 top-0 left-0 w-full height-full bg-[rgba(0,0,0,0.7)] flex items-center justify-center opacity-0 z-5 transition-all duration-300 group-hover:opacity-100">
                    <div className="flex gap-4">
                        <a
                            href={demoLink}
                            target="_blank"
                            className="bg-text-primary text-bg-primary border-text-primary py-[10px] px-[20px] rounded-lg no-underline text-sm font-semibold flex text-center gap-4 border-2 border-transparent hover:border-text-primary transition"
                        >
                            <i className="fas fa-external-link-alt"></i>
                            Live Demo
                        </a>
                    </div>
                </div>
            </div>
            {/* Content */}
            <div className="p-8">
                <h3 className="text-xl font-bold mb-2 text-text-primary">
                    {heading}
                </h3>
                <p className="text-sm text-text-tertiary mb-4 leading-[1.6]">
                    {description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {tech.map((item, index) => (
                        <span
                            key={index}
                            className="inline-block py-1 px-3 bg-glass-bg border border-glass-border rounded-full text-xs text-text-secondary font-semibold"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
