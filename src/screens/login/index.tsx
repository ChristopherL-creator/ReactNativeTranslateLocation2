/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import { StackScreenProps } from '@react-navigation/stack';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, TextInput, Button } from 'react-native';
import { MainStackTypeParamList } from '../../App';
import styles from '../../Style';

type Props = StackScreenProps<MainStackTypeParamList, 'LOGIN_SCREEN'>; 

const Login = ({ navigation, route }: Props) => {
    const onLogin = () => {};
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState(''); 
    const { t } = useTranslation('common');


    return (
     <View>
        <Text style={styles.login_title}>
            {t('common:welcome')}
        </Text>
   
        <Text style={styles.login_text}>
            {t('common:username')}
        </Text> 

        <TextInput
        value={userName}
        onChangeText={text => setUserName(text)}
        style={styles.login_input}
        />
        <Text
        style={styles.login_title}>
            {t('common:password')}
        </Text>
        <TextInput
        value={password}
        onChangeText={text => setPassword(text)}
        style={styles.login_input}
        /> 

        <View style={styles.login_button}>
            <Button
            title={t('common:login')}
            onPress={() => {
                onLogin();
            }}
            />
        </View> 

        <View style={styles.login_button}>
            <Button
            title={t('common:settings')}
            onPress={() => {
                navigation.navigate('SETTINGS_SCREEN');
            }}
            />
        </View>
     </View>
    );
   }; 

   export default Login; 
