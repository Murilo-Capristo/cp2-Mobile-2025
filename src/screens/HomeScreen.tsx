import { View, Text, StyleSheet, Button } from "react-native";
import { RootStackParamList } from "../navigation/RootNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";


export default function HomeScreen() {

    return (
        <>
        <View style={styles.container}>
            <Text style={styles.title}>Tela inicial</Text>
            <Text style={styles.description}>Bem vindo ao App!</Text>
        </View>
        </>
        
    );
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