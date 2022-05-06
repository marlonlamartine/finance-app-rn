/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { RoutesNavigator } from './src/routes';
import { AuthProvider } from './src/contexts/auth';
import { EditProvider } from './src/contexts/edit';

const App = () => {

  return (
    <AuthProvider>
      <EditProvider>
        <RoutesNavigator />
      </EditProvider>
    </AuthProvider>
  );
};

export default App;
