import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const UserProfile = () => {
  const usuario = {
    nombre: "John Doe",
    rol: "Usuario",
    email: "john.doe@example.com",
  };

  const bus = [
    {
      id: 1,
      titulo: "Título del bus 1",
      body: "Cuerpo del bus 1",
      usuario_id: { nombre: "John Doe" },
    },
    {
      id: 2,
      titulo: "Título del bus 2",
      body: "Cuerpo del bus 2",
      usuario_id: { nombre: "John Doe" },
    },
    // Agrega más bus según tus necesidades
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../../assets/splash.png")} style={styles.avatar} />
        <Text style={styles.name}>{usuario.nombre}</Text>
        <Text>{usuario.rol}</Text>
        <Text>{usuario.email}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.description}>
          Descripción del perfil o historia del usuario
        </Text>
        <View style={styles.socialIcons}>
          {/* Agrega tus iconos de redes sociales aquí */}
        </View>
      </View>
      <View style={styles.bus}>
        {bus.map((bus) => (
          <View key={bus.id} style={styles.busCard}>
            <Text style={styles.busTitle}>{bus.titulo}</Text>
            <Text>{bus.body}</Text>
            <Text>{bus.usuario_id.nombre}</Text>
            <View style={styles.busButtons}>
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
    backgroundColor: "#fff",
  },
  header: {
    alignItems: "center",
    marginBottom: 16,
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
    backgroundColor: "#343a40",
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
