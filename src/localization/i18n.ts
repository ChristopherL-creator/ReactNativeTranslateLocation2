/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */

import  i18n  from 'i18next';
import { initReactI18next } from 'react-i18next'; 
import en from './en/common';
import it from './it/common';

const resources = { // list of languages
  en,  
  it, 
};  

console.log('resources', resources);


i18n.use(initReactI18next) 
    .init({ 
      initImmediate: false, 
      compatibilityJSON: 'v3', 
      resources: resources, 
      fallbackLng: 'en', 
      lng: 'it', 
      debug: true, 
      keySeparator: false, 
      ns: [ 
            'translation', 
            'common', 
            'navigate', 
            'language',
      ],
      defaultNS: 'common',
    },
     (err, t): void => {
      if (err) { 
        return console.log('something went wrong loading', err); 
      }
      t('key'); // -> same as i18next.t
      }, 
    );

export default i18n; 
