import { Dimensions } from 'react-native';

export function calculateHeight(percentage: number): number {
    const { height } = Dimensions.get('window');
    return Math.round((percentage / 100) * height);
}

export function calculateWidth(percentage: number): number {
    const { width } = Dimensions.get('window');
    return Math.round((percentage / 100) * width);
}
