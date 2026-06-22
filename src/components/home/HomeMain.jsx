import FloatingShapes from "../background/FloatingShapes";
import Hero from "./Hero";
import Navbar from "./Navbar";

export default function HomeMain({ theme, setTheme }) {
    return (
        <>
            <FloatingShapes />
            <Navbar theme={theme} setTheme={setTheme} />
            <Hero />
        </>
    );
}
