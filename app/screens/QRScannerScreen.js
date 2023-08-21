import React, { useState, useEffect } from "react";
import {
   View,
   Text,
   StyleSheet,
   TouchableOpacity,
   ImageBackground,
   Alert,
   Image,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useNavigation } from "@react-navigation/native";

const QRScannerScreen = () => {
   const navigation = useNavigation();
   const [hasPermission, setHasPermission] = useState(null);
   const [startScanning, setStartScanning] = useState(false);
   const [allowScanning, setAllowScanning] = useState(true); // State to control scanning

   useEffect(() => {
      (async () => {
         const { status } = await BarCodeScanner.requestPermissionsAsync();
         setHasPermission(status === "granted");
      })();
   }, []);

   const handleBarCodeScanned = ({ type, data }) => {
      // Remove any whitespace and compare the scanned QR code data
      if (data.trim() === "your_required_data") {
         // Show a success message
         setAllowScanning(false); // Prevent further scanning
         Alert.alert("Success", "DNA identified.", [
            { text: "OK", onPress: () => setStartScanning(false) },
         ]);
         navigation.navigate("Landing");
      } else {
         // Show an error message
         setAllowScanning(false); // Prevent further scanning
         Alert.alert("Error", "DNA unknown.", [
            { text: "OK", onPress: () => setStartScanning(true) },
         ]);
      }
   };

   const handleRescan = () => {
      setAllowScanning(true); // Allow scanning
      setStartScanning(true);
   };

   const showScanner = () => {
      // Display an alert with "Proceed" and "Cancel" options
      Alert.alert(
         "Start Scanning",
         "Do you want to start scanning your tattoo?",
         [
            {
               text: "Cancel",
               style: "cancel",
            },
            {
               text: "Proceed",
               onPress: () => setStartScanning(true), // Allow scanning
            },
         ]
      );
   };

   if (hasPermission === null) {
      return <Text>Requesting camera permission</Text>;
   }
   if (hasPermission === false) {
      return <Text>No access to camera</Text>;
   }

   return (
      <ImageBackground
         source={require("../../assets/Background.png")}
         style={styles.imageBackground}
      >
         <View style={styles.container}>
            {!startScanning ? (
               <>
                  <Image
                     source={require("../../assets/GALACTIS.png")}
                     style={styles.logo}
                  />
                  <TouchableOpacity
                     style={styles.rescanButton}
                     onPress={showScanner}
                  >
                     <Text>Start Scanning</Text>
                  </TouchableOpacity>
               </>
            ) : (
               <BarCodeScanner
                  onBarCodeScanned={
                     allowScanning ? handleBarCodeScanned : undefined
                  }
                  style={StyleSheet.absoluteFillObject}
               />
            )}
            {startScanning && (
               <TouchableOpacity
                  style={styles.rescanButton}
                  onPress={handleRescan}
               >
                  <Text>Rescan</Text>
               </TouchableOpacity>
            )}
         </View>
      </ImageBackground>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
   },
   rescanButton: {
      position: "absolute",
      bottom: 20,
      left: 20,
      right: 20,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "lightgray",
      padding: 10,
   },
   imageBackground: {
      flex: 1,
      resizeMode: "cover",
   },
   logo: {
      width: 300, // Set the width as needed
      height: 100, // Set the height as needed
      resizeMode: "contain", // Adjust the resizeMode as needed
   },
});

export default QRScannerScreen;
