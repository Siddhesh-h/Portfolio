export default function Completed({ number, title }) {
    return (
        <div className="w-full sm:w-[180px] py-[20px] px-[15px] text-center border border-glass-border bg-glass-bg rounded-2xl hover:border-text-primary transition-all duration-300">
            <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] font-black mb-[8px]">
                {number}
            </h1>

            <span className="text-[0.85rem] text-text-tertiary font-semibold uppercase tracking-[1px]">
                {title}
            </span>
        </div>
    );
}
