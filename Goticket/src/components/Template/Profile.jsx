import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const UserProfile = () => {
  const usuario = {
    name: "Ezequiel Garcia",
    rol: "Usuario",
    email: "john.doe@example.com",
  };

  const bus = [
    {
      id: 1,
      titulo: "Reserva ",
      company: "Andesmar",
      origin: "Mendoza",
      destination: "San Rafael",
      date: "12/12/2020",
      user_id: { name: "Bruno Rosales" },
    },
    {
      id: 2,
      titulo: "Reserva ",
      company: "Andesmar",
      origin: "Mendoza",
      destination: "San Rafael",
      date: "12/12/2020",
      user_id: { name: "Ezequiel Garcia" },
    },
    // Agrega más bus según tus necesidades
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../../assets/splash.png")} style={styles.avatar} />
        <Text style={styles.name}>{usuario.name}</Text>
        <Text style= {styles.name}>{usuario.email}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.description}>
        </Text>
        <View style={styles.socialIcons}>
          {/* Agrega tus iconos de redes sociales aquí */}
        </View>
      </View>
      <View style={styles.bus}>
        {bus.map((bus) => (
          <View key={bus.id} style={styles.busCard}>
            <Text style={styles.busTitle}>{bus.titulo}</Text>
            <View style={styles.socialIcons}>
            {/* Agrega tus iconos de redes sociales aquí */}
            </View>
            <Text>{bus.company}</Text>
            <Text>{bus.origin}</Text>
            <Text>{bus.destination}</Text>
            <Text>{bus.date}</Text>
            <Text>{bus.user_id.name}</Text>
            <View style={styles.busButtons}>
              <TouchableOpacity style={styles.deleteButton}>
                <Text style={styles.buttonText}>Eliminar</Text>
              </TouchableOpacity>
              {/* Botones para editar y borrar bus */}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#BA55D3",
  },
  header: {
    alignItems: "center",
    marginBottom: 16,
    marginTop: 55,
  },  
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#fff",
  },
  content: {
    marginBottom: 16,
  },
  description: {
    marginBottom: 16,
  },
  socialIcons: {
    flexDirection: "row",
    marginBottom: 16,
  },
  deleteButton: {
    backgroundColor: "#9036bb",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
  },
  bus: {
    flexDirection: "column",
  },
  busCard: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: "#fff",
  },
  busTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  busButtons: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});

export default UserProfile;
