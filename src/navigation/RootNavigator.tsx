import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabsNavigator from "./BottomTabsNavigator";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import ProfileScreen from "../screens/ProfileScreen";


export type RootStackParamList = {
    Root: undefined;
    Home: undefined;
    Detalhes: undefined;
    Perfil: undefined;
}



const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator(){
return(
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
                name="Root"
                component={BottomTabsNavigator}
                options={{headerShown: false}}
                />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Detalhes" component={DetailsScreen} />
            <Stack.Screen name="Perfil" component={ProfileScreen} />
        </Stack.Navigator>

    </NavigationContainer>
)
}