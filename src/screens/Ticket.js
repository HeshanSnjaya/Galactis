import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
// import * as firebase from "firebase";

const Ticket = () => {
  const handleConfirm = () => {
    // Your confirmation logic here
    console.log("Confirmed");
  };

  return (
    <View style={styles.container}>
      <View style={styles.ticket}>
        <View>
          <View style={styles.row}>
            <View style={styles.rowCells}>
              <Text style={styles.label}>From:</Text>
              {/* <Text style={styles.value}>{person.name}</Text> */}
            </View>
            <View style={styles.rowCells}>
              <Text style={styles.label}>To:</Text>
              {/* <Text style={styles.value}>{person.name}</Text> */}
            </View>
          </View>

          <Text style={styles.label}>Travel Mode:</Text>
          {/* <Text style={styles.value}>{person.age}</Text> */}

          <Text style={styles.label}>Package:</Text>
          {/* <Text style={styles.value}>{person.address}</Text> */}

          <Text style={styles.heading}>No of Passengers:</Text>
          <Text style={styles.label}>Adults:</Text>
          {/* <Text style={styles.value}>{person.address}</Text> */}
          <Text style={styles.label}>Children:</Text>
          {/* <Text style={styles.value}>{person.address}</Text> */}
          <Text style={styles.label}>Infants:</Text>
          {/* <Text style={styles.value}>{person.address}</Text> */}

          <View style={styles.row}>
            <View style={styles.rowCells}>
              <Text style={styles.label}>Depature:</Text>
              <Text style={styles.value}>Date:</Text>
              <Text style={styles.label}>Time:</Text>
              {/* <Text style={styles.value}>{person.address}</Text> */}
            </View>
            <View style={styles.rowCells}>
              <Text style={styles.label}>Returning:</Text>
              <Text style={styles.value}>Date:</Text>
              <Text style={styles.label}>Time:</Text>
              {/* <Text style={styles.value}>{person.address}</Text> */}
            </View>
          </View>
          <Text style={styles.heading}>Amount:</Text>
          {/* <Text style={styles.value}>{person.address}</Text> */}
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
    fontSize: 16,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
    padding: 5,
  },
  value: {
    fontSize: 16,
    marginBottom: 12,
  },
  confirmButton: {
    flex: 0.25,
    alignSelf: "center",
    marginTop: 15,
    width: 150,
    // borderRadius: 10,
  },
});

export default Ticket;
