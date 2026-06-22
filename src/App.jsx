import "./App.css";
import AboutMain from "./components/about/AboutMain";
import FloatingShapes from "./components/background/FloatingShapes";
import HomeMain from "./components/home/HomeMain";
import SkillsMain from "./components/skills/SkillsMain";
import ProjectMain from "./components/projects/ProjectMain";
import ContactMain from "./components/contact/ContactMain";
import Footer from "./components/footer/Footer";
import { useEffect, useState } from "react";

function App() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
    useEffect(() => {
        document.documentElement.classList.toggle("light", theme === "light");
        localStorage.setItem("theme", theme);
    }, [theme]);
    return (
        <>
            <HomeMain theme={theme} setTheme={setTheme} />
            <AboutMain />
            <SkillsMain />
            <ProjectMain />
            <ContactMain />
            <Footer />
        </>
    );
}

export default App;
