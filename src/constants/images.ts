
import { ImageSourcePropType } from "react-native";

const IMAGE_ASSET_PATH = '../assets/images/';

interface ImagePaths {
    [key: string]: ImageSourcePropType;
}

export const images: ImagePaths = {
    login: require(`${IMAGE_ASSET_PATH}login.png`),
};

