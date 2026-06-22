export default function Skills({ icon, heading, completed }) {
    return (
        <div className="w-full p-5 box-border overflow-hidden bg-glass-bg border  border-glass-border rounded-2xl text-center transition-all duration-300 hover:-translate-y-1 md:hover:-translate-y-2 hover:border-text-primary">
            <div className="text-4xl md:text-5xl flex justify-center items-center text-text-primary my-6 md:my-8">
                {icon}
            </div>
            <h3 className="text-sm md:text-base mb-4 font-bold">{heading}</h3>
            <div className="w-full h-[6px] bg-border-color rounded-sm overflow-hidden mb-[0.5rem]">
                <div
                    className="h-full bg-text-primary rounded-sm "
                    style={{ width: `${completed}%` }}
                ></div>
            </div>
            <span>{completed}%</span>
        </div>
    );
}
