import Form from "./Form";
import Info from "./Info";

export default function ContactMain() {
    return (
        <section
            id="contact"
            className="bg-bg-secondary relative overflow-hidden z-10 py-24 px-8"
        >
            <div className="w-full max-w-[1200px] m-auto px-4 box-border">
                <div className="text-center mb-6">
                    <h2 className="text-5xl font-black mb-4 text-text-primary">
                        Get In Touch
                    </h2>
                    <div className="w-[80px] h-[4px] bg-text-primary mt-4 mx-auto rounded-xs"></div>
                </div>
                <div className="grid grid-cols-2 gap-16 z-10">
                    <div className="grid gird-row-4 gap-8">
                        <Info
                            icon={<i className="fa-solid fa-envelope"></i>}
                            heading="Email"
                            detail="siddheshsarang73@gmail.com"
                        />
                        <Info
                            icon={<i className="fa-solid fa-phone"></i>}
                            heading="Phone"
                            detail="+91 9152084170"
                        />
                        <Info
                            icon={<i className="fa-solid fa-location-dot"></i>}
                            heading="Location"
                            detail="Mumbai, Maharashtra, India"
                        />
                        <Info
                            icon={<i className="fa-solid fa-link"></i>}
                            heading="Connect"
                            detail={
                                <div className="flex justify-center mt-4 gap-3">
                                    <a
                                        href="https://www.linkedin.com/in/siddhesh-sarang-761b30229/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-text-secondary font-semibold w-10 h-10 flex items-center justify-center border-2 border-text-primary rounded-full no-underline     transition-all duration-300 hover:border-text-primary hover:-translate-y-1 hover:bg-text-primary"
                                    >
                                        <i className="fa-brands fa-linkedin text-lg"></i>
                                    </a>

                                    <a
                                        href="https://www.instagram.com/siddhesh_73?igsh=MXdod2ZhYnM4NWQ1eA=="
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-text-secondary font-semibold w-[40px] h-[40px] flex items-center justify-center border-2 border-text-primary  rounded-full no-underline transition-all duration-300 hover:border-text-primary hover:-translate-y-1 hover:bg-text-primary"
                                    >
                                        <i className="fa-brands fa-instagram text-lg"></i>
                                    </a>
                                </div>
                            }
                        />
                    </div>
                    <Form />
                </div>
            </div>
        </section>
    );
}
