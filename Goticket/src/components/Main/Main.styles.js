import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      padding: 16,
      backgroundColor: "#BA55D3",
      marginTop: 50,
      paddingBottom: 100,
    },
    busCard: {
      borderWidth: 1,
      backgroundColor: "#fff",
      borderColor: "#ccc",
      padding: 16,
      borderRadius: 8,
      marginBottom: 16,
      flexDirection: "column",
    },
    sectionscard: {
      borderWidth: 1,
      borderColor: "#ccc",
      padding: 16,
      borderRadius: 8,
      marginBottom: 16,
      flexDirection: "row",
    },
    busTitle: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 8,
    },
    usuarioNombre: {
      color: "#007bff", // Color de enlace (azul)
      marginBottom: 8,
    },
    button: {
      backgroundColor: "#9036bb",
      paddingVertical: 4,
      marginTop: 8,
      borderRadius: 4,
      alignItems: "center",
    },
    buttonText: {
      color: "#fff",
    },
  });

export default styles