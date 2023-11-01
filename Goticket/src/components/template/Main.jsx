import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import styles from '../styles/Main.styles';
import StyledText from './StyledText';
import Icon from 'react-native-vector-icons/Ionicons';
import ticketApi from '../../api/ticketApi';

const MainScreen = ({navigation}) => {

  const [buses, setbuses] = useState([]);

  const logbuss = async () => {
    try {
      const resp = await ticketApi.get('/company');
        setbuses(resp.data);  
    } catch (error){
      console.log(error)
    }
  };


  const [currentPage, setCurrentPage] = useState(1);

  const handleBus = () => {
    navigation.navigate('Bus')
  };

  const handlePagination = (direction) => {
    if (direction === 'prev' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (direction === 'next' && endIndex < buss.length) {
      setCurrentPage(currentPage + 1);
    }
  };
  
  useEffect(() => {
    logbuss();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
    {buses.map((bus, i) => ( 
      <View key={bus.id} style={styles.busCard}>
        <Text style={styles.busTitle}>{bus.name}</Text>
        {bus.trips.map((trip, i) => (
          <View key={i}>
            <Text>Salida: {trip.city_from.name}</Text>
            <Text>Llegada: {trip.city_to.name}</Text>
            <Text>Hora: {trip.date}</Text>
            <TouchableOpacity onPress={handleBus} style={styles.button}>
             <StyledText color='bold' style={styles.button}>Comprar</StyledText>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    ))}
    </ScrollView>
  );
};


export default MainScreen;
