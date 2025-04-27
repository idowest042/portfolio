import Particles from "@/Components/ui/particles";
import useTheme from "../Hooks/useTheme";
import { useEffect, useState } from "react";

const ParticlesUI = () => {
    const { theme } = useTheme()
    const [color, setColor] = useState("#ffffff");

    useEffect(() => {
        setColor(theme === "dark" ? "#ffffff" : "#000000");
    }, [theme]);

    return (
        <div>
            <Particles
                key={color}
                className={`fixed top-0 left-0 w-full h-full z-[-1] dark:z-0`}
                quantity={400}
                ease={80}
                color={color}
                refresh
            />
        </div>
    );
};

export default ParticlesUI;
