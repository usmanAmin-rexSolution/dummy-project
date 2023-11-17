import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { loginApi } from '../api/auth';
import { _showToast } from '../utils/ToastUtils';
import Storage from '../utils/Storage';
import { SEVERITY_ERROR } from '../constants';
import keys from '../constants/keys';

interface User {
    id: number;
    name: string;
    email: string;
    password: string;
}

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    login: (login: string, password: string) => Promise<any>;
    logout: (navigationRef: any) => Promise<void>;
    isLoading: boolean;
}

interface AuthProviderProps {
    children: ReactNode;
}

// Create the AuthContext
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Custom hook to use the AuthContext
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

// AuthProvider component to wrap your app with
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const storage = new Storage();
    const [user, setUser] = useState<User | null>(null); // User data
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Authentication state
    const [isLoading, setIsLoading] = useState(false);

    let severity = SEVERITY_ERROR;

    // Load user data and authentication state from AsyncStorage on app startup
    useEffect(() => {
        const loadUserData = async () => {
            try {
                const userJSON = await storage.get(keys.USER);
                const storedIsLoggedIn = await storage.get(keys.IS_LOGGED_IN);

                if (userJSON && storedIsLoggedIn === true) {
                    setUser(userJSON);
                    setIsAuthenticated(true);
                }
            } catch (error) {
                console.error('Error loading user data:', error);
            }
        };

        loadUserData();
    }, []);

    // Function to log in the user
    const login = async (login: string, password: string) => {
        setIsLoading(true);
        try {
            // Simulating a login with hardcoded credentials
            const hardcodedUsername = 'testUser';

            // Simulated successful login
            const simulatedUser = {
                id: 1,
                name: hardcodedUsername,
                email: login,
                password: password,
                // Add other user properties as needed
            };
            // Save user data and authentication state to AsyncStorage
            await storage.store(keys.IS_LOGGED_IN, true);
            await storage.store(keys.USER, simulatedUser);
            await storage.store(keys.TOKEN, 'simulatedToken');
            setUser(simulatedUser);
            setIsAuthenticated(true);
            return { success: true, token: 'simulatedToken' };
        } catch (error) {
            console.error('Error logging in:', error);
        } finally {
            setIsLoading(false);
        }
    };

    // Function to log out the user
    const logout = async (navigationRef: any) => {
        try {
            // Clear user data and authentication state from AsyncStorage
            setUser(null);
            setIsAuthenticated(false);
            await storage.clear();

            navigationRef?.replace('LoginNavigation');
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    const authContextValue: AuthContextType = {
        user,
        isAuthenticated,
        login,
        logout,
        isLoading,
    };

    return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};
