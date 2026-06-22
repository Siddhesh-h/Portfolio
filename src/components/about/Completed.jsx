export default function Completed({ number, title }) {
    return (
        <div className="w-[180px] py-[20px] px-[15px] text-center border border-glass-border bg-glass-bg rounded-2xl hover:border-text-primary">
            <h1 className="text-[3.5rem] font-black mb-[8px]">{number}</h1>
            <span className="text-[0.85rem] text-text-tertiary font-semibold uppercase tracking-[1px]">
                {title}
            </span>
        </div>
    );
}
