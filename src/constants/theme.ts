import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#FF7461',
        secondary: '#619DFF',
        black: '#1F2535',
        black_light: '#4C4444',
        grey: '#797C88',
        grey_light: '#6F737E',
        grey_lighter: '#CECBCB',
        placeholder: '#D5D3D3',
        background: '#F6FAFB',
        blue: '#61B4FE',
        blue_light: '#60B2FB',
        orange_light: '#F4715D',
        green: '#B2D098',
        yellow: '#FAA94B',
        purple: '#AA9BFE',
        white: '#FFFFFF',
        tintIcon: '#1B6664',
    },
    roundness: 8,
};

export { theme }