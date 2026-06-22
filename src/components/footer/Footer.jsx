import FloatingShapes from "../background/FloatingShapes";

export default function Footer() {
    return (
        <footer className="relative bg-bg-secondary border-t border-glass-border py-12 px-8 overflow-hidden">
            <FloatingShapes footer />
            <div className="max-w-[1400px] mx-auto text-center">
                <div className="text-sm text-text-tertiary leading-[1.8]">
                    <p>&copy; 2026 Siddhesh Sarang. All rights reserved</p>
                </div>
                <div className="w-[80px] h-[2px] bg-[linear-gradient(90deg,transparent,var(--color-text-primary),transparent)] my-4 mx-auto"></div>
            </div>
        </footer>
    );
}
