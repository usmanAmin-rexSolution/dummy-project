import api from './';
import url from './url';
import { _showToast } from '../utils/ToastUtils';

// Define a function for login
export const loginApi = async (login: string, password: string) => {
    try {
        // Make a POST request to your login endpoint
        const response = await api.post(url.login, {
            login,
            password,
        });

        // Check if the login was successful
        if (response.success && response.data) {
            return { success: true, message: 'Login successful', token: response.data?.token, user: response.data?.user };
        } else {
            // Handle login failure
            return { success: false, message: 'Login failed' };
        }
    } catch (error) {
        // Handle any errors that occur during the login process
        console.error('Login error:', error);
        return { success: false, message: 'An error occurred during login' };
    }
};