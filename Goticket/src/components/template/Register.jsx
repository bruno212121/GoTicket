import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/Register.styles';
import Icon from 'react-native-vector-icons/Ionicons';


const RegisterScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Aquí puedes manejar la lógica de registro
  };

  const handlemain = () => {
    navigation.navigate('Home')
  }

  return (

    <View style={styles.container}>
      <View style={styles.header}>
          <Icon name="ios-bus" size={80} color="#fff" />
            <Text style={styles.title1}>GoTicket</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.registercard}>
          <Text style={styles.title}>Name </Text>
            <TextInput
              style={styles.input}
              placeholder="Type your name"
              value={name}
              onChangeText={setName}
            />
          <Text style={styles.title}>Last name </Text>
            <TextInput
              style={styles.input}
              placeholder="Type your last name"
              value={surname}
              onChangeText={setSurname}
            />
          <Text style={styles.title}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="i.e. my@email.com"
              value={email}
              onChangeText={setEmail}
            />
          <Text style={styles.title}>Password </Text>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          <Text style={styles.title}>Confirm Password </Text>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
        </View>
        <TouchableOpacity onPress={handlemain} style={styles.buttonregister} activeOpacity={0.7}>
            <Text style={styles.textregister}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterScreen;