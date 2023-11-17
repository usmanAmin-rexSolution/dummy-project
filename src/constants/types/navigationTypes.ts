import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define the types for the navigation props of each screen

// SplashScreen
export type SplashScreenRouteProp = RouteProp<RootStackParamList, 'SplashScreen'>;
export interface SplashScreenProps {
    navigation: StackNavigationProp<RootStackParamList, 'SplashScreen'>;
    route: SplashScreenRouteProp;
}

// LoginScreen
export type LoginScreenRouteProp = RouteProp<RootStackParamList, 'LoginScreen'>;
export interface LoginScreenProps {
    navigation: StackNavigationProp<RootStackParamList, 'LoginScreen'>;
    route: LoginScreenRouteProp;
}

// DashboardScreen
export type DashboardScreenRouteProp = RouteProp<HomeTabParamList, 'DashboardScreen'>;
export interface DashboardScreenProps {
    navigation: StackNavigationProp<HomeTabParamList, 'DashboardScreen'>;
    route: DashboardScreenRouteProp;
}

// RecordsScreen
export type RecordsScreenRouteProp = RouteProp<SearchTabParamList, 'RecordsScreen'>;
export interface RecordsScreenProps {
    navigation: StackNavigationProp<SearchTabParamList, 'RecordsScreen'>;
    route: RecordsScreenRouteProp;
}

// SettingsScreen
export type SettingsScreenRouteProp = RouteProp<AccountTabParamList, 'SettingsScreen'>;
export interface SettingsScreenProps {
    navigation: StackNavigationProp<AccountTabParamList, 'SettingsScreen'>;
    route: SettingsScreenRouteProp;
}

// HomeTab
export type HomeTabRouteProp = RouteProp<TabNavigatorStackParamList, 'HomeTab'>;
export interface HomeTabProps {
    navigation: StackNavigationProp<TabNavigatorStackParamList, 'HomeTab'>;
    route: HomeTabRouteProp;
}
// SearchTab
export type SearchTabRouteProp = RouteProp<TabNavigatorStackParamList, 'SearchTab'>;
export interface SearchTabProps {
    navigation: StackNavigationProp<TabNavigatorStackParamList, 'SearchTab'>;
    route: SearchTabRouteProp;
}
// AccountTab
export type AccountTabRouteProp = RouteProp<TabNavigatorStackParamList, 'AccountTab'>;
export interface AccountTabProps {
    navigation: StackNavigationProp<TabNavigatorStackParamList, 'AccountTab'>;
    route: AccountTabRouteProp;
}

// Define the param list for the HomeTab
export type TabNavigatorStackParamList = {
    HomeTab: undefined;
    SearchTab: undefined;
    AccountTab: undefined;
    // Define other screens in your HomeTab if any
};

// Define the param list for the HomeTab
export type HomeTabParamList = {
    DashboardScreen: undefined;
    // Define other screens in your HomeTab if any
};

// Define the param list for the SearchTab
export type SearchTabParamList = {
    RecordsScreen: undefined;
    // Define other screens in your SearchTab if any
};

// Define the param list for the AccountTab
export type AccountTabParamList = {
    SettingsScreen: undefined;
    // Define other screens in your AccountTab if any
};

// Define the param list for the RootStack
export type RootStackParamList = {
    SplashScreen: undefined;
    LoginScreen: undefined;
    TabNavigator: undefined;
    TaskDetailScreen: undefined;
    CreateScreen: undefined;
    // Define other stacks or screens in your app
};
