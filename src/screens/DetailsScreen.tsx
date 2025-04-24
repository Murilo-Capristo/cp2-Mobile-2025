import { View, StyleSheet, Text } from "react-native";

export default function DetailsScreen() {

    return(
         <>
                <View style={styles.container}>
                    <Text style={styles.title}>Esta é a tela de detalhes.</Text>
                    <Text style={styles.description}>Detalhes sobre o App</Text>
                </View>
                </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
    },
    description: {
        fontSize: 16,
        color: "#666",
    },
});