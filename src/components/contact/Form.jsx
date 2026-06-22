import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export default function Form() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = "Full Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(formData.email)) {
                newErrors.email = "Please enter a valid email";
            }
        }

        if (!formData.subject.trim()) newErrors.subject = "Subject is required";
        if (!formData.message.trim()) newErrors.message = "Message is required";

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) return;

        setLoading(true);

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            );
            toast.success("Message sent successfully");

            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
            setErrors({});
        } catch (error) {
            console.error(error);
            toast.error("Failed to send message");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            className="flex flex-col backdrop-blur-[10px] relative gap-8 bg-glass-bg border border-glass-border p-6 md:p-12 rounded-2xl overflow-hidden text-text-primary"
            onSubmit={handleSubmit}
        >
            {/* Header */}

            <div className="text-center mb-8 md:mb-16">
                <h3 className="text-xl font-bold text-text-primary mb-2">
                    Send Me a Message
                </h3>

                <p className="text-text-tertiary text-sm">
                    I'll get back to you as soon as possible
                </p>
            </div>

            {/* Name */}

            <div className="relative">
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer w-full bg-glass-bg border border-glass-border rounded-xl px-4 py-4 text-text-primary outline-none transition focus:border-text-primary"
                />

                <label
                    htmlFor="name"
                    className="absolute left-4 top-4 text-text-tertiary transition-all duration-300 pointer-events-none peer-focus:-top-2 peer-focus:text-xs peer-focus:text-text-primary peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm bg-bg-secondary px-1 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs"
                >
                    Full Name
                </label>
                {errors.name && (
                    <span className="text-red-400 text-xs mt-1 block">
                        {errors.name}
                    </span>
                )}
            </div>

            {/* Email */}

            <div className="relative">
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer w-full bg-glass-bg border border-glass-border rounded-xl px-4 py-4 text-text-primary outline-none transition focus:border-text-primary"
                />

                <label
                    htmlFor="email"
                    className="absolute left-4 top-4 text-text-tertiary transition-all duration-300 pointer-events-none peer-focus:-top-2 peer-focus:text-xs peer-focus:text-text-primary peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm bg-bg-secondary px-1 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs"
                >
                    Email Address
                </label>
                {errors.email && (
                    <span className="text-red-400 text-xs mt-1 block">
                        {errors.email}
                    </span>
                )}
            </div>

            {/* Subject */}

            <div className="relative">
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer w-full bg-glass-bg border border-glass-border rounded-xl px-4 py-4 text-text-primary outline-none transition focus:border-text-primary"
                />

                <label
                    htmlFor="subject"
                    className="absolute left-4 top-4 text-text-tertiary transition-all duration-300 pointer-events-none peer-focus:-top-2 peer-focus:text-xs peer-focus:text-text-primary peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm bg-bg-secondary px-1 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs"
                >
                    Subject
                </label>
                {errors.subject && (
                    <span className="text-red-400 text-xs mt-1 block">
                        {errors.subject}
                    </span>
                )}
            </div>

            {/* Message */}

            <div className="relative">
                <textarea
                    rows="6"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer w-full bg-glass-bg border border-glass-border rounded-xl px-4 py-4 text-text-primary resize-none outline-none transition focus:border-text-primary"
                ></textarea>

                <label
                    htmlFor="message"
                    className="absolute left-4 top-4 text-text-tertiary transition-all duration-300 pointer-events-none peer-focus:-top-2 peer-focus:text-xs peer-focus:text-text-primary peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm bg-bg-secondary px-1 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs"
                >
                    Your Message
                </label>
                {errors.message && (
                    <span className="text-red-400 text-xs mt-1 block">
                        {errors.message}
                    </span>
                )}
            </div>

            {/* Button */}

            <button
                type="submit"
                disabled={loading}
                className={`w-full h-14 rounded-full bg-text-primary text-bg-primary font-semibold transition-all duration-300 ${loading ? "opacity-70 cursor-not-allowed" : "hover:-transition-y-1  hover:shadow-[0_0_35px_rgba(255,255,255,0.25)]"}`}
            >
                {loading ? "Sending..." : "Send Message"}
            </button>
        </form>
    );
}
