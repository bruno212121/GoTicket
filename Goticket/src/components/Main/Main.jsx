import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import styles from './Main.styles';
import StyledText from '../StyledText';

const MainScreen = () => {

  const buss = [
    {
      id: 1,
      titulo: "CATA Internacional ",
      salida: "Ciudad autonoma de Buenos Aires",
      llegada: "Mendoza",
      comodidad: "Semi Cama",
      info: "Salida 20:00hs",
    },
    {
      id: 2,
      titulo: "Butinni ",
      salida: "Ciudad autonoma de Buenos Aires",
      llegada: "Mendoza",
      comodidad: "Semi Cama",
      info: "Salida 20:00hs",
    },
    {
      id: 3,
      titulo: "El Rapido Internacional",
      salida: "Ciudad autonoma de Buenos Aires",
      llegada: "Mendoza",
      comodidad: "Semi Cama",
      info: "Salida 20:00hs",
    },
    {
      id: 4,
      titulo: "Internacional",
      salida: "Ciudad autonoma de Buenos Aires",
      llegada: "Mendoza",
      comodidad: "Semi Cama",
      info: "Salida 20:00hs",
    },
    {
      id: 5,
      titulo: "El Rapido Internacional",
      salida: "Ciudad autonoma de Buenos Aires",
      llegada: "Mendoza",
      comodidad: "Semi Cama",
      info: "Salida 20:00hs",
    },
    // Agrega más buss según tus necesidades
  ];

  const [currentPage, setCurrentPage] = useState(1);


  const handlePagination = (direction) => {
    if (direction === 'prev' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (direction === 'next' && endIndex < buss.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {buss.map((bus) => (
        <View key={bus.id} style={styles.busCard}>
          <Text style={styles.busTitle}>{bus.titulo}</Text>
          <Text>Salida: {bus.salida}</Text>
          <Text>Llegada: {bus.llegada}</Text>
          <Text>Comodidad: {bus.comodidad}</Text>
          <TouchableOpacity style={styles.button}>
            <StyledText color='bold' style={styles.button}>Comprar</StyledText>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

export default MainScreen;
