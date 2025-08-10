import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { Theme, THEMES } from '../constants/Colors';

type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
    theme: THEMES.light,
    toggleTheme: () => { },
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [currentThemeKey, setCurrentThemeKey] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        const loadTheme = async () => {
            const savedTheme = await AsyncStorage.getItem('@theme');
            if (savedTheme === 'light' || savedTheme === 'dark') {
                setCurrentThemeKey(savedTheme);
            }
        };
        loadTheme();
    }, []);

    const toggleTheme = async () => {
        const newTheme = currentThemeKey === 'light' ? 'dark' : 'light';
        setCurrentThemeKey(newTheme);
        await AsyncStorage.setItem('@theme', newTheme);
    };

    const theme = useMemo(() => THEMES[currentThemeKey], [currentThemeKey]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);