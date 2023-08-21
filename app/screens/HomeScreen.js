import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { auth } from "../../firebase";
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();

    const handleSignOut = () => {
        auth.signOut().then(() => {
            navigation.replace("Login");
        });
    }

    const handleClick = () => {
        navigation.navigate("Form");
    }

  return (
    <View style={styles.container}>
      <Text>Email:</Text>
      <TouchableOpacity style={styles.button} onPress={handleSignOut}>
        <Text>Sign Out</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleClick}>
        <Text>Book a ticket</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
     },
})