/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */

/**
 * @format
 */ 

import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json'; 
import './src/localization/i18n';

AppRegistry.registerComponent(appName, () => App);
