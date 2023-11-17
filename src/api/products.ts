import api from './';
import url from './url';
import { _showToast } from '../utils/ToastUtils';
import { ApiResponse, Product } from '../constants';

// Define a function for products
export const getProductsApi = async (page: number = 1): Promise<ApiResponse<Product[]>> => {
    try {
        // Convert page to limit (assuming each page corresponds to 10 items)
        const limit = page * 10;

        // Make a GET request to the endpoint with dynamic limit
        const response: any = await api.get(`${url.products}?limit=${limit}`);
        return { success: true, message: 'success', data: response.data };
    } catch (error) {
        // Handle any errors that occur
        console.error('Product API error:', error);
        return { success: false, message: 'failure' };
    }
};

export const searchProductApi = async (query: string): Promise<ApiResponse<Product[]>> => {
    try {
        // Make a GET request to the endpoint with dynamic limit
        const response: any = await api.get(`${url.search}${query}`);
        return { success: true, message: 'success', data: response.data };
    } catch (error) {
        // Handle any errors that occur
        console.error('Product search API error:', error);
        return { success: false, message: 'failure' };
    }
};

export const addProductsApi = async (payload: Product) => {
    try {
        const response: any = await api.post(url.add, payload);
        return { success: true, message: 'success', data: response.data };
    } catch (error) {
        // Handle any errors that occur
        console.error('Product search API error:', error);
        return { success: false, message: 'failure' };
    }
};