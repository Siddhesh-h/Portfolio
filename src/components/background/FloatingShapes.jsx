export default function FloatingShapes({ footer = false }) {
    if (footer) {
        return (
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="star star-lg star-a top-[30%] left-[20%]"></div>
                <div className="star star-md star-b top-[60%] right-[25%]"></div>
                <div className="star star-sm star-c top-[40%] left-[70%]"></div>

                <div className="glow glow-bottom-left"></div>
                <div className="glow glow-bottom-right"></div>
            </div>
        );
    }
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {/* =========================
                Main Floating Shapes
            ========================== */}

            <div className="shape circle float-slow top-[12%] left-[8%]"></div>

            <div className="shape circle float-medium bottom-[15%] right-[10%]"></div>

            <div className="shape square float-medium top-[15%] right-[15%]"></div>

            <div className="shape square float-slow bottom-[25%] left-[18%]"></div>

            <div className="shape diamond float-fast top-[35%] right-[35%]"></div>

            <div className="shape diamond float-medium bottom-[30%] right-[18%]"></div>

            <div className="shape triangle float-slow top-[22%] left-[52%]"></div>

            {/* =========================
                Glow Highlights
            ========================== */}

            <div className="glow glow-top-left"></div>

            <div className="glow glow-center-right"></div>

            <div className="glow glow-bottom-right"></div>
            <div className="glow glow-bottom-left"></div>

            {/* =========================
                Stars
            ========================== */}

            {/* Navbar */}
            <div className="star star-lg star-a top-[5%] left-[8%]"></div>
            <div className="star star-sm star-b top-[4%] left-[25%]"></div>
            <div className="star star-md star-c top-[6%] left-[40%]"></div>

            <div className="star star-sm star-a top-[5%] right-[8%]"></div>
            <div className="star star-md star-b top-[3%] right-[25%]"></div>
            <div className="star star-lg star-c top-[6%] right-[40%]"></div>

            {/* Hero */}
            <div className="star star-lg star-a top-[20%] left-[15%]"></div>
            <div className="star star-sm star-b top-[35%] right-[25%]"></div>
            <div className="star star-md star-c top-[28%] left-[60%]"></div>

            <div className="star star-sm star-a top-[50%] left-[10%]"></div>
            <div className="star star-lg star-b top-[60%] right-[20%]"></div>
            <div className="star star-md star-c top-[48%] left-[75%]"></div>

            {/* Bottom */}
            <div className="star star-sm star-a bottom-[15%] left-[20%]"></div>
            <div className="star star-md star-b bottom-[25%] right-[15%]"></div>
            <div className="star star-lg star-c bottom-[10%] right-[40%]"></div>
        </div>
    );
}
