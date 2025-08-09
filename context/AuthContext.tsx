// import { AuthContextType, UserType } from "@/constants/types";
// import axios from 'axios';
import { createContext, useContext, useState } from "react";


type AuthContextType = {}
type UserType = {
    uid?: string;
    email?: string | null;
    name: string | null;
    image?: any;
} | null;

const AuthContext = createContext<AuthContextType | null>(null);

AuthContext.displayName = "authContext";
export const AuthProvider = ({ children }: any) => {

    const [user, setUser] = useState<UserType>(null);
    // const [error, setError] = useState<string | null>(null);
    // const [loading, setLoading] = useState(false);
    // const router = useRouter();


    // // const API_URL = 'http://localhost:8000';
    // const API_URL = 'http://192.168.223.54:8000'; // Use your actual local IP react native

    // const login = async (email: string, password: string) => {
    //     try {
    //         setLoading(true);
    //         setError(null);

    //         const response = await axios.get(`${API_URL}/user`, {
    //             params: { email, password },
    //         });

    //         if (response?.data?.length > 0) {
    //             const user = response?.data[0];
    //             setUser(user);
    //             await AsyncStorage.setItem('user', JSON.stringify(user));
    //             Alert.alert("Login successful!!!");
    //             return { success: true };
    //         } else {
    //             return { success: false, msg: 'Invalid email or password' };
    //         }

    //     } catch (error: any) {
    //         return {
    //             success: false,
    //             msg: error?.response?.data?.message || 'Login failed',
    //         };
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    // const register = async (name: string, email: string, password: string) => {
    //     try {
    //         setLoading(true);
    //         setError(null);

    //         const existing = await axios.get(`${API_URL}/user?email=${email}`);
    //         if (existing.data.length > 0) {
    //             return { success: false, msg: 'Email already exists' };
    //         }

    //         const response = await axios.post(`${API_URL}/user`, {
    //             name,
    //             email,
    //             password,
    //         });

    //         if (response?.data) {
    //             setUser(response.data);
    //             await AsyncStorage.setItem('user', JSON.stringify(response.data));
    //             Alert.alert("Registration successful!!!");
    //             return { success: true };
    //         } else {
    //             return { success: false, msg: 'Registration failed' };
    //         }

    //     } catch (error: any) {
    //         return {
    //             success: false,
    //             msg: error?.response?.data?.message || 'Registration failed',
    //         };
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    // const updateUserData = async (userId: string) => {
    //     try {
    //         const response = await axios.get(`${API_URL}/${userId}`);

    //         if (response.data) {
    //             const updatedUser = { ...user, ...response.data };
    //             setUser(updatedUser);
    //             await AsyncStorage.setItem('user', JSON.stringify(updatedUser));
    //         }
    //     } catch (error) {
    //         console.error('Failed to update user data:', error);
    //     }
    // };

    // const logout = async () => {
    //     await AsyncStorage.removeItem('user');
    //     setUser(null);
    //     router.push("/(auth)/welcome");
    // };

    // useEffect(() => {
    //     const loadUser = async () => {
    //         const storedUser = await AsyncStorage.getItem('user');
    //         if (storedUser) {
    //             setUser(JSON.parse(storedUser));
    //         }
    //     };
    //     loadUser();
    // }, []); // reload user to persist

    return (
        <AuthContext.Provider
            value={{
                user,
                // error,
                // loading,
                setUser,
                // login,
                // register,
                // updateUserData,
                // logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

