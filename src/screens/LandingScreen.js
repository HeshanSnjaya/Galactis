import {
   StyleSheet,
   Text,
   View,
   ImageBackground,
   Image,
   TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const LandingScreen = () => {
    const navigation = useNavigation();

    const handleClick = () => {
        navigation.navigate("Login");
    }

   return (
      <ImageBackground
         source={require("../../assets/Landing_background.jpeg")}
         style={styles.imageBackground}
      >
         <View style={styles.container}>
            <View style={styles.top}>
               <Image
                  source={require("../../assets/GALACTIS.png")}
                  style={styles.logo}
               />
               <Text style={styles.description}>
                  Explore Beyond Boundaries {"\n"}
                  Your Inter-Galactic Adventure Awaits!
               </Text>
            </View>

            <View style={styles.bottom}>
               <TouchableOpacity onPress={handleClick}>
                  <Image
                     source={require("../../assets/Button.png")}
                     style={styles.buttonImage}
                  />
               </TouchableOpacity>
            </View>
         </View>
      </ImageBackground>
   );
};

export default LandingScreen;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
   },
   top: {
      position: "absolute",
      top: 135,
      left: 14,
   },
   bottom: {
      position: "absolute",
      top: 575,
   },
   description: {
      color: "white",
      fontSize: 13,
      fontFamily: "Goldman",
      fontWeight: "500",
      lineHeight: 15,
      marginTop: 10,
      marginLeft: 5,
   },
   imageBackground: {
      flex: 1,
      resizeMode: "cover",
   },
   logo: {
      width: 300,
      height: 50,
      resizeMode: "contain",
   },
   buttonImage: {
      width: 400,
      resizeMode: "contain",
   },
});
