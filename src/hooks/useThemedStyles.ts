import { Theme } from "@/constants/Colors";
import { useTheme } from "@/context/ThemeContext";

export function useThemedStyles<T>(styleFn: (theme: Theme) => T): T {
    const { theme } = useTheme();         // get current theme from context
    return styleFn(theme);                // generate styles using the current theme
}
