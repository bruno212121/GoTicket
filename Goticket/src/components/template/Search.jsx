import React, { useState } from 'react';
import { Text, View,TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles/Search.styles';
import StyledText from './StyledText';

const Main = ({navigation}) => {
    const [origen, setOrigen] = useState('');
    const [destino, setDestino] = useState('');
    const [fecha, setFecha] = useState('');

    const handleBuscar = () => {
        navigation.navigate('Search')
    };

    const handlePerfil = () => {
        navigation.navigate('Profile')
    }

    return (
        <View style={styles.outerContainer}>
            <View style={styles.profileButtonContainer}>
              <TouchableOpacity onPress={handlePerfil} style={styles.roundButton}>
                <Icon name="ios-person" size={25} color="#fff" />
                <StyledText color='body' style={styles.button}> Profile</StyledText>
              </TouchableOpacity>
            </View>
          <View style={styles.iconContainer}>
            <Icon name="ios-bus" size={80} color="#BA55D3" />
            <Text style={styles.title1}>GoTicket</Text>
          </View>
          
          <View style={styles.container}>
            
            <Text style={styles.title2}>Where we go?</Text>
      
            <TextInput
              style={styles.input}
              placeholder="Ciudad de Origen"
              value={origen}
              onChangeText={(text) => setOrigen(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Ciudad de Destino"
              value={destino}
              onChangeText={(text) => setDestino(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Fecha de Viaje"
              value={fecha}
              onChangeText={(text) => setFecha(text)}
            />
      
            <TouchableOpacity onPress={handleBuscar} style={styles.roundButton}>
              <Icon name="ios-search" size={25} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
    )
}

export default Main;
