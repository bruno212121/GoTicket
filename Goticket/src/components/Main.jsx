import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Main = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>GoTicket Application</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
    },
});

export default Main;