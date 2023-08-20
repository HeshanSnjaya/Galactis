import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Ticket from "./app/screens/Ticket";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();

function InsideLayout() {
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen name="Ticket" component={Ticket} />
    </InsideStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Ticket">
        <Stack.Screen
          name="Inside"
          component={InsideLayout}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>

    // <View style={styles.container}>
    //   <Text>GALACTIS!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#7E56DA",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
