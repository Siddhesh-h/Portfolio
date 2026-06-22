export default function Info({ icon, heading, detail }) {
    return (
        <div className="bg-glass-bg border border-glass-border p-6 md:p-8 rounded-2xl text-center relative overflow-hidden text-text-primary hover:border-text-primary transition break-words">
            <div className="relative text-4xl mb-6 inline-block">{icon}</div>
            <h3 className="text-base font-bold mb-[8px]">{heading}</h3>
            <div className="text-sm text-text-tertiary">
                <div className="text-text-secondary font-semibold no-underline">
                    {detail}
                </div>
            </div>
        </div>
    );
}
