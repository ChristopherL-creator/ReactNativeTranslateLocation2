/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */ 

import { DefaultTheme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  login_title: { 
    justifyContent: 'space-around',
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 5,
    color: DefaultTheme.colors.primary,
  }, 

  login_text: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 5,
    color: DefaultTheme.colors.primary,
   }, 
   
  login_input: { 
    borderWidth: 2, 
    margin: 5, 
    padding: 5,  
  }, 

  login_button: { 
    margin: 5, 
    padding: 5, 
  }, 

  settings_language: { 
    paddingTop: 10,
    textAlign: 'center',
  },

}); 

export default styles; 
