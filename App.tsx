/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { RoutesNavigator } from './src/routes';
import { AuthProvider } from './src/contexts/auth';

const App = () => {

  return (
    <AuthProvider>
      <RoutesNavigator />
    </AuthProvider>
  );
};

export default App;
