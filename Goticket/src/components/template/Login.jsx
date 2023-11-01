import React, { useState } from 'react';
import { View, Text,TouchableOpacity} from 'react-native';
import styles from '../styles/Login.styles';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';


const LoginScreen = ({navigation}) => {
    const [email,setEmail] = useState ('');
    const [password,setPassword] = useState ('');
    
    const Loginperson = [
        {
            id: 1,
            email: "brunonicorc@gmail.com",
            password: "perez1212",
        }
    ];

    const handleLogin = () => {
       navigation.navigate('Home')
    }

    const handleRegister = () => {
        navigation.navigate('Register')
    }

    return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Icon name="ios-bus" size={80} color="#BA55D3" />
              <Text style={styles.title1}>GoTicket</Text>
          </View>
          <View style={styles.form}>
            {Loginperson.map((Loginperson) => (
              <View key={Loginperson.id} style={styles.registercard}>
                <Text style={styles.titleemail}>Email </Text>
                <TextInput
                    placeholder="Enter your email"
                    value={email}
                    onChange={setEmail}
                />
                <Text style={styles.titlepassword}>Password</Text>
                <TextInput
                    value={password}
                    onChange={setPassword}
                />
                <TouchableOpacity onPress={handleLogin} style={styles.buttonlogin} activeOpacity={0.7}>
                     <Text style={styles.buttonText}>Log in</Text> 
                </TouchableOpacity>   
                <Text style={styles.descriptionaccount}>Don't you have an account?</Text>
                <TouchableOpacity onPress={handleRegister} style={styles.buttonregister}>
                    <Text style={styles.textregister}>Register</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
      );
}

export default LoginScreen;
