import React, { useEffect, useState } from "react";
import {
   KeyboardAvoidingView,
   StyleSheet,
   Text,
   TouchableOpacity,
   View,
   ImageBackground,
   Image,
} from "react-native";
import { Input, Icon, IconElement, Button } from "@ui-kitten/components";
import { auth } from "../../firebase";
import { useNavigation } from "@react-navigation/native";

const AlertIcon = (props) => <Icon {...props} name="alert-circle-outline" />;

const LoginScreen = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [secureTextEntry, setSecureTextEntry] = useState(true);

   const navigation = useNavigation();

   useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
         if (user) {
            navigation.navigate("Home");
         }
      });
      return unsubscribe;
   }, []);

   const handleSignUp = () => {
      auth
         .createUserWithEmailAndPassword(email, password)
         .then((userCredentials) => {
            const user = userCredentials.user;
            console.log("Registered with:", user.email);
         })
         .catch((error) => alert(error.message));
   };

   const handleLogin = () => {
      auth
         .signInWithEmailAndPassword(email, password)
         .then((userCredentials) => {
            const user = userCredentials.user;
            console.log("Logged in with:", user.email);
         })
         .catch((error) => alert(error.message));
   };

   const toggleSecureEntry = () => {
      setSecureTextEntry(!secureTextEntry);
   };

   const renderIcon = (props) => (
      <TouchableOpacity onPress={toggleSecureEntry}>
         <Icon {...props} name={secureTextEntry ? "eye-off" : "eye"} />
      </TouchableOpacity>
   );

   const renderCaption = () => {
      return (
         <View style={styles.captionContainer}>
            {AlertIcon(styles.captionIcon)}
            <Text style={styles.captionText}>
               Should contain at least 6 characters
            </Text>
         </View>
      );
   };

   return (
      <ImageBackground
         source={require("../../assets/Background.png")}
         style={styles.imageBackground}
      >
         <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : null}
            keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0}
            style={styles.container}
         >
            <Image
               source={require("../../assets/GALACTIS.png")}
               style={styles.logo}
            />
            <View style={styles.inputContainer}>
               <Input
                  placeholder="Email"
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  style={styles.emailInput}
               />
               <Input
                  placeholder="Password"
                  value={password}
                  accessoryRight={renderIcon}
                  caption={renderCaption}
                  secureTextEntry={secureTextEntry}
                  onChangeText={(text) => setPassword(text)}
               />
            </View>

            <View style={styles.buttonContainer}>
               <TouchableOpacity onPress={handleLogin} style={styles.button}>
                  <Text style={styles.buttonText}>Login</Text>
               </TouchableOpacity>
               <TouchableOpacity
                  onPress={handleSignUp}
                  style={[styles.button, styles.buttonOutline]}
               >
                  <Text style={styles.buttonTextOutline}>Signup</Text>
               </TouchableOpacity>
            </View>
         </KeyboardAvoidingView>
      </ImageBackground>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
   },
   imageBackground: {
      flex: 1,
      resizeMode: "cover",
   },
   inputContainer: {
      marginVertical: 20,
      width: "80%",
   },
   captionContainer: {
      flexDirection: "row",
      alignItems: "center",
   },
   captionIcon: {
      width: 10,
      height: 10,
      marginRight: 5,
   },
   captionText: {
      fontSize: 12,
      fontWeight: "400",
      color: "#8F9BB3",
   },
   buttonContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "80%",
   },
   button: {
      flex: 1,
      marginHorizontal: 5,
      backgroundColor: "#007bff",
      paddingVertical: 10,
      borderRadius: 5,
      alignItems: "center",
   },
   buttonText: {
      color: "white",
      fontWeight: "bold",
   },
   buttonOutline: {
      backgroundColor: "transparent",
      borderWidth: 1,
      borderColor: "#007bff",
   },
   buttonTextOutline: {
      color: "#007bff",
      fontWeight: "bold",
   },
   emailInput: {
      marginBottom: 10,
   },
   logo: {
      width: 150, // Set the width as needed
      height: 50, // Set the height as needed
      resizeMode: "contain", // Adjust the resizeMode as needed
   },
});

export default LoginScreen;
