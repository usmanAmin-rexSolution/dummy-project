import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Provider } from 'react-redux';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PaperProvider } from 'react-native-paper';
import { theme } from './src/constants/theme';
import { RootNavigator } from './src/navigation';
import store from './src/redux/store/configureStore';
import { AuthProvider } from './src/context';
import { ToastProvider } from './src/utils/ToastUtils';
import ErrorBoundary from './src/components/ErrorBoundary';

const App = () => {

  return (
    <GestureHandlerRootView style={styles.container}>
      <PaperProvider theme={theme}>
        <Provider store={store}>
          <AuthProvider>
            <ErrorBoundary>
              <View style={styles.container}>
                <RootNavigator />
                <ToastProvider />
              </View>
            </ErrorBoundary>
          </AuthProvider>
        </Provider>
      </PaperProvider>
    </GestureHandlerRootView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background
  },
});

export default App;