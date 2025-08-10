export interface Theme {
    mode: 'light' | 'dark';
    background: string;
    text: string;
    card: string;
    shadow: string;
    primary: string;
    white: string;
    textLight: string;
    border: string;
    [key: string]: string; // optional for future custom colors
}

export interface Themes {
    light: Theme;
    dark: Theme;
}

export const THEMES: Themes = {
    light: {
        mode: "light",
        background: "#FFFFFF",
        text: "#000000",
        card: "#F5F5F5",
        shadow: "#000000",
        primary: "#6200EE",
        white: "#FFFFFF",
        textLight: "#666666",
        border: "#E0E0E0",
    },
    dark: {
        mode: "dark",
        background: "#121212",
        text: "#FFFFFF",
        card: "#1E1E1E",
        shadow: "#000000",
        primary: "#BB86FC",
        white: "#FFFFFF",
        textLight: "#A0A0A0",
        border: "#333333",
    },
};