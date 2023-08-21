import { View, Text, StyleSheet, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigation } from "@react-navigation/native";


const Ticket = () => {
  const [ticket, setTicket] = useState([]);

  useEffect(() => {
    const addTicket = async () => {
      try {
        const docRef = doc(db, "Booking", "e5X4wVfoN5yeErvqY5q9");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setTicket(docSnap.data());
        } else {
          console.log("No such Ticket!");
        }
      } catch (e) {
        console.error("Error fetching Ticket:".e);
      }
    };

    addTicket();
  }, []);

  const navigation = useNavigation();

  const handleConfirm = () => {
    navigation.navigate("PaymentSuccession");
    console.log("Confirmed");
  };

  return (
    <View style={styles.container}>
      <View style={styles.ticket}>
        <View>
          <View style={styles.row}>
            <View style={styles.rowCells}>
              <Text style={styles.label}>From:</Text>
              <Text style={styles.value}>{ticket.pickup}</Text>
            </View>
            <View style={styles.rowCells}>
              <Text style={styles.label}>To:</Text>
              <Text style={styles.value}>{ticket.dropby}</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.rowCells}>
              <Text style={styles.label}>Travel Mode:</Text>
              <Text style={styles.value}>{ticket.travelMode}</Text>
            </View>
            <View style={styles.rowCells}>
              <Text style={styles.label}>Package:</Text>
              <Text style={styles.value}>{ticket.spaceship}</Text>
            </View>
          </View>

          <Text style={styles.heading}>No of Passengers</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Adults:</Text>
            <Text style={styles.value}>{ticket.adult}</Text>
            <Text style={styles.label}>Children:</Text>
            <Text style={styles.value}>{ticket.children}</Text>
            <Text style={styles.label}>Infants:</Text>
            <Text style={styles.value}>{ticket.infant}</Text>
          </View>

          <View style={styles.row}>
            <View style={styles.rowCells}>
              <Text style={styles.label}>Depature:</Text>
              {/* <Text style={styles.value}>Date:</Text> */}
              <Text style={styles.label}>Time:</Text>
              {/* <Text style={styles.value}>{person.address}</Text> */}
            </View>
            <View style={styles.rowCells}>
              <Text style={styles.label}>Returning:</Text>
              {/* <Text style={styles.value}>{ticket.depature.seconds}</Text> */}
              <Text style={styles.label}>Time:</Text>
              {/* <Text style={styles.value}>{person.address}</Text> */}
            </View>
          </View>
          <Text style={styles.heading}>Amount:</Text>
          <View style={styles.row}>
            <Text style={styles.value}>{ticket.total}</Text>
            <Text style={styles.value}>$</Text>
          </View>
        </View>
      </View>
      <View style={styles.confirmButton}>
        <Button title="Tap to Pay" onPress={handleConfirm} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    padding: 20,
    backgroundColor: "#7E56DA",
  },
  ticket: {
    flex: 0.75,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  rowCells: {
    flex: 0.5,
    alignItems: "center",
  },
  heading: {
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    alignSelf: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
    padding: 5,
  },
  value: {
    fontSize: 16,
    padding: 5,
    margin: 4,
    alignSelf: "center",
  },
  confirmButton: {
    flex: 0.25,
    alignSelf: "center",
    marginTop: 15,
    width: 150,
  },
});

export default Ticket;