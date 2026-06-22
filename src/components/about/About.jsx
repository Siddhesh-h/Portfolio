import { User } from "lucide-react";

export default function About({ icon, heading, details }) {
    return (
        <div className="w-[100%] px-[20px] py-[25px] wrap-break-word overflow-hidden border rounded-2xl bg-glass-bg border-glass-border transition-all duration-300 hover:-translate-y-1 hover:border-text-primary">
            <div>{icon}</div>

            <h3 className="mb-[1rem] text-xl font-bold">{heading}</h3>
            <p className="leading-[1.7] text-text-tertiary">{details}</p>
        </div>
    );
}
