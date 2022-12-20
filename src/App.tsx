/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */ 

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { GestureHandlerRootView } from 'react-native-gesture-handler'; 
import Loader from './Loader';
import Login from './screens/login';
import Settings from './screens/settings';

export type MainStackTypeParamList = {
  LOGIN_SCREEN: undefined;
  SETTINGS_SCREEN: undefined;
 };

function App(): JSX.Element { 
  const Stack = createStackNavigator<MainStackTypeParamList>(); 
  const { t } = useTranslation('navigate'); 

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer> 
        <React.Suspense fallback={<Loader />}> 
          <Stack.Navigator
          screenOptions={{
          gestureEnabled: true, // If you want to swipe back like iOS on Android
          ...TransitionPresets.SlideFromRightIOS,
          }}>
            <Stack.Screen 
            name="LOGIN_SCREEN" 
            component={Login} 
            options={{ title: t('navigate:login') }} /> 

            <Stack.Screen 
            name="SETTINGS_SCREEN" 
            component={Settings} 
            options={{ title: t('navigate:settings') }} />
          </Stack.Navigator> 
        </React.Suspense>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
