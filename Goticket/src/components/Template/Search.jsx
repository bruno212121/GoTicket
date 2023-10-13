import React, { useState } from 'react';
import { Text, View,TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../Styles/Search.styles';
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
            <Icon name="ios-bus" size={80} color="#fff" />
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

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#56008c",
    },
    iconContainer: {
        marginBottom: 20,
        alignItems: "center",
    },

    container: {
        width: '80%',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    title1: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 30,
        color: "#ffff"
    },
    title2: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 20,
    },

    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    roundButton: {
        backgroundColor: "#9036bb",
        borderRadius: 50,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
});


export default Main;
