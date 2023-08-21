import React, {useState, useEffect} from "react";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import * as eva from "@eva-design/eva";

import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LandingScreen from "./app/screens/LandingScreen";
import LoginScreen from "./app/screens/LoginScreen";
import HomeScreen from "./app/screens/HomeScreen";
import QRScannerScreen from './app/screens/QRScannerScreen';

import * as Font from "expo-font";
import Ticket from "./app/screens/Ticket";
import Form from "./app/screens/Form";
import PaymentSuccession from "./app/screens/PaymentSuccession";

const Stack = createNativeStackNavigator();

export default function App() {
   const [fontsLoaded, setFontsLoaded] = useState(false);

   const loadFonts = async () => {
      await Font.loadAsync({
         Goldman: require('./assets/fonts/Goldman-Regular.ttf'),
         GoldmanBold: require("./assets/fonts/Goldman-Bold.ttf"),
      });
   };

   useEffect(() => {
      loadFonts().then(() => {
         setFontsLoaded(true);
      });
   }, []);

   if (!fontsLoaded) {
      // Return a loading screen or null until fonts are loaded
      return null;
   }

   return (
      <React.Fragment>
         <IconRegistry icons={EvaIconsPack} />
         <ApplicationProvider {...eva} theme={{ ...eva.light }}>
            <NavigationContainer>
               <Stack.Navigator>
                  <Stack.Screen 
                    options={{ headerShown: false }} 
                    name="QRScanner" 
                    component={QRScannerScreen} 
                  />
                  <Stack.Screen
                     options={{ headerShown: false }}
                     name="Landing"
                     component={LandingScreen}
                  />
                  <Stack.Screen
                     options={{ headerShown: false }}
                     name="Login"
                     component={LoginScreen}
                  />
                  <Stack.Screen 
                     name="Home" 
                     component={HomeScreen} 
                  />
                  <Stack.Screen
                     options={{ headerShown: false }}
                     name="Form"
                     component={Form}
                  />
                  <Stack.Screen
                     options={{ headerShown: false }}
                     name="Ticket"
                     component={Ticket}
                  />
                  <Stack.Screen
                     options={{ headerShown: false }}
                     name="PaymentSuccession"
                     component={PaymentSuccession}
                  />
               </Stack.Navigator>
            </NavigationContainer>
         </ApplicationProvider>
      </React.Fragment>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
   },
});
