/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */

import { DefaultTheme } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import i18next, { t } from 'i18next';
import { useState, useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text } from 'react-native';
import { MainStackTypeParamList } from '../../App'; 
import React from 'react';
import styles from '../../Style';

type Props = StackScreenProps<MainStackTypeParamList, 'SETTINGS_SCREEN'>; 


const Settings = ({ navigation, route }: Props) => {
    const { t, i18n } = useTranslation('common');
    const [lang, changeLang] = useState('en');
    const selectedLanguageCode = i18n.language; 
    
    const languages = [ // Language List
        { code: 'en', label: t('language:english') },
        { code: 'it', label: t('language:italian') },
    ]; 
    
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTitle: i18next.t('navigate:settings'),
        }); 

      return () => {}; 
    }, 
    [navigation, lang]); 

    return (
        <View>
            <Text style={styles.settings_language}> 
                {i18next.t('common:change_language')} 
            </Text> 

            { 
                languages.map((currentLang, i) => { 
                    console.log('currentlang', currentLang);
                    
                    const selectedLanguage = currentLang.code === selectedLanguageCode; 

                    return (
                       <Text
                       key={i}
                       onPress={() => {
                        changeLang(currentLang.code);
                        i18n.changeLanguage(currentLang.code); // it will change the language through out the app.
                       }}
                       style={{
                       color: selectedLanguage ? DefaultTheme.colors.primary : 'black',
                       padding: 10,
                       fontSize: 18,
                       fontWeight: selectedLanguage ? 'bold' : 'normal',
                       }}>
                           {currentLang.label}
                       </Text>
                    );
                }) 
            }
        </View>
    );
};

export default Settings;
