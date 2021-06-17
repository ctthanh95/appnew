import React, { useEffect } from 'react'
import AppNavigation from './src/navigation/AppNavigation'
import SplashScreen from 'react-native-splash-screen'
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux'
import { store, persistor } from './src/redux/store'

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  })
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigation></AppNavigation>
      </PersistGate>
    </Provider>
  );
};

export default App;
