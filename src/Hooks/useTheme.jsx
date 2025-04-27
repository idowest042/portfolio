import { ThemeContext } from "@/Provider/ThemeProvider";
import { useContext } from "react";

const useTheme = () => {
    const theme = useContext(ThemeContext)
    return theme
};

export default useTheme;