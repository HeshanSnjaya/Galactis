import React from "react";

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import image from "../../assets/astronaut.jpg";

const PaymentSuccession = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={[styles.title]}>Payment Successfull !</Text>
      </ImageBackground>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7121A6",
    // alignItems: "center",
    // justifyContent: "center",
  },
  headline: {
    // fontFamily: "GoldmanRegular",
    fontSize: 17,
    transform: [{ translateY: -20 }],
  },
  title: {
    // fontSize: 23,
    // fontWeight: "bold",
    // color: "#fff",
    // textAlign: "center",
    // fontWeight: "bold",
    // zIndex: 0,

    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",

    transform: [{ translateY: 320 }],
  },
  moveUp: {
    transform: [{ translateY: -100 }],
  },
  moveDown: {
    transform: [{ translateY: 100 }],
  },
  slashImg: {
    height: 250,
    width: 300,
  },

  image: {
    flex: 1,
    width: 400,
    opacity: 0.3,
  },
});

export default PaymentSuccession;