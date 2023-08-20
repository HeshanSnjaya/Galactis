

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Ticket from "./src/Ticket";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import * as eva from "@eva-design/eva";

import QRScannerScreen from './src/screens/QRScannerScreen';
import LandingScreen from "./src/screens/LandingScreen";
import LoginScreen from "./src/screens/LoginScreen";
import HomeScreen from "./src/screens/HomeScreen";

const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();


import * as Font from "expo-font";

const Stack = createNativeStackNavigator();

function InsideLayout() {
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen name="Ticket" component={Ticket} />
    </InsideStack.Navigator>
  );
}


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
                     name="QR"
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
                       
                  <Stack.Screen name="Home" component={HomeScreen} />
                    
                    <Stack.Screen
          name="Inside"
          component={InsideLayout}
          options={{ headerShown: false }}
        /><Stack.Screen
          name="Inside"
          component={InsideLayout}
          options={{ headerShown: false }}
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

