import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Storage {
    async store(key: string, value: any): Promise<void> {
        try {
            await AsyncStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.log('Error storing data:', error);
        }
    }

    async get(key: string): Promise<any> {
        try {
            const value = await AsyncStorage.getItem(key);
            return value !== null ? JSON.parse(value) : undefined;
        } catch (error) {
            console.log('Error retrieving data:', error);
            return undefined;
        }
    }

    async remove(key: string): Promise<void> {
        try {
            await AsyncStorage.removeItem(key);
        } catch (error) {
            console.log('Error removing data:', error);
        }
    }

    async clear(): Promise<void> {
        try {
            await AsyncStorage.clear();
        } catch (error) {
            console.log('Error clearing data:', error);
        }
    }
}
