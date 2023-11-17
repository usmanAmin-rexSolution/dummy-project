import axios, { AxiosError, AxiosProgressEvent, AxiosRequestConfig, AxiosResponse } from 'axios';
import { useNavigation } from '@react-navigation/native';
import url from './url';
import { HttpStatus, SEVERITY_ERROR, SEVERITY_FATAL, SEVERITY_INFO, SeverityType } from '../constants';
import { _showToast } from '../utils/ToastUtils';
import { useAuth } from '../context';

// Define TypeScript type constants for HTTP status codes
type HttpStatus = {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
};

// Function for making formatted response
const makeFormattedResponse = async <T>(
    response: AxiosResponse<T>
): Promise<{ success: boolean; data: T | null; message: string }> => {
    const { status, data } = response;

    if (status >= HttpStatus.OK && status < HttpStatus.BAD_REQUEST) {
        return {
            success: true,
            message: 'Success',
            data,
        };
    }

    if (status === HttpStatus.UNAUTHORIZED) {
        const navigation = useNavigation();
        const { logout } = useAuth();
        await logout(navigation);
    }

    return {
        success: false,
        message: `Error: ${status}`,
        data: null,
    };
};

let severity: SeverityType = SEVERITY_INFO;

// Generic function for making API requests
const makeApiRequest = async <T>(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    endpoint: string,
    data?: any,
    onUploadProgress?: (progressEvent: AxiosProgressEvent) => void,
    isMultipart: boolean = false,
    options?: AxiosRequestConfig
): Promise<{ success: boolean; data: T | null; message: string }> => {
    try {
        const headers: Record<string, string> = {
            // Authorization: `Bearer ${token}`,
        };

        if (isMultipart) {
            headers['Content-Type'] = 'multipart/form-data';
        } else {
            headers['Content-Type'] = 'application/json';
        }

        const requestOptions: AxiosRequestConfig = {
            method,
            url: `${url.base}/${endpoint}`,
            headers,
            data,
            ...options,
        };

        // Conditionally include onUploadProgress for POST requests
        if (method === 'POST' && onUploadProgress) {
            requestOptions.onUploadProgress = onUploadProgress;
        }

        const response = await axios(requestOptions);

        // Determine the severity based on the HTTP status code
        if (response.status >= HttpStatus.BAD_REQUEST && response.status < HttpStatus.INTERNAL_SERVER_ERROR) {
            severity = SEVERITY_ERROR; // Client error
        } else if (response.status >= HttpStatus.INTERNAL_SERVER_ERROR) {
            severity = SEVERITY_FATAL; // Server error
        }

        return makeFormattedResponse<T>(response);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError: AxiosError = error;
            if (axiosError.response) {
                console.error(
                    `Request failed with status ${axiosError.response.status}: ${axiosError.response.statusText}`
                );
            } else {
                console.error('Request failed:', axiosError.message);
            }
        } else {
            console.error('An unexpected error occurred:', error?.message);
        }
        _showToast('blue', 'something went wrong')
        throw error;
    }
};

// Functions for different HTTP methods with authentication
const api = {
    get: <T>(
        endpoint: string,
        options?: AxiosRequestConfig
    ): Promise<{ success: boolean; data: T | null; message: string }> =>
        makeApiRequest<T>('GET', endpoint, undefined, undefined, false, options),

    post: <T>(
        endpoint: string,
        data?: any,
        isMultipart: boolean = false,
        onUploadProgress?: (progressEvent: AxiosProgressEvent) => void,  // Include onUploadProgress as a parameter
        options?: AxiosRequestConfig
    ): Promise<{ success: boolean; data: T | null; message: string }> =>
        makeApiRequest<T>('POST', endpoint, data, onUploadProgress, isMultipart, options),

    put: <T>(
        endpoint: string,
        data?: any,
        isMultipart: boolean = false,
        options?: AxiosRequestConfig
    ): Promise<{ success: boolean; data: T | null; message: string }> =>
        makeApiRequest<T>('PUT', endpoint, data, undefined, isMultipart, options),

    delete: <T>(
        endpoint: string,
        data?: any,
        options?: AxiosRequestConfig
    ): Promise<{ success: boolean; data: T | null; message: string }> =>
        makeApiRequest<T>('DELETE', endpoint, data, undefined, false, options),
};

export default api;
