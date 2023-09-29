import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const MainScreen = () => {
  const buss = [
    {
      id: 1,
      titulo: "Título ",
      body: "Cuerpo",
      usuario_id: { id: 1, nombre: "John Doe" },
    },
    {
      id: 2,
      titulo: "Título",
      body: "Cuerpo",
      usuario_id: { id: 2, nombre: "Jane Doe" },
    },
    // Agrega más buss según tus necesidades
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {buss.map((bus) => (
        <View key={bus.id} style={styles.busCard}>
          <Text style={styles.busTitle}>{bus.titulo}</Text>
          <Text>{bus.body}</Text>
          <TouchableOpacity onPress={() => { /* Acción cuando se presiona el nombre del usuario */ }}>
            <Text style={styles.usuarioNombre}>{bus.usuario_id.nombre}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>ver Colectivo</Text>
          </TouchableOpacity>
        </View>
      ))}
      <View style={styles.pagination}>
        <TouchableOpacity>
          <Text style={styles.paginationText}>«</Text>
        </TouchableOpacity>
        <Text style={styles.paginationText}>1</Text>
        <Text style={styles.paginationText}>2</Text>
        <Text style={styles.paginationText}>3</Text>
        <Text style={styles.paginationText}>... 33</Text>
        <TouchableOpacity>
          <Text style={styles.paginationText}>»</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
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
  usuarioNombre: {
    color: "#007bff", // Color de enlace (azul)
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#fff",
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
  },
  paginationText: {
    marginHorizontal: 8,
  },
});

export default MainScreen;