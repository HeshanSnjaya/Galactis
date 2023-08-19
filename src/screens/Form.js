import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { Picker } from "@react-native-picker/picker";

const tours = [
  { id: 1, destination: "Paris", travelMethod: "Airplane", price: "$1000" },
  { id: 2, destination: "Tokyo", travelMethod: "Train", price: "$1200" },
  { id: 3, destination: "New York", travelMethod: "Bus", price: "$800" },
];

const RecentTours = ({ tours }) => {
  const renderTours = () => {
    return tours.map((tour) => (
      <View key={tour.id}>
        <Text>{tour.destination}</Text>
        <Text>{tour.travelMethod}</Text>
        <Text>{tour.price}</Text>
      </View>
    ));
  };

  return (
    <View>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        {renderTours()}
      </View>
    </View>
  );
};

const Form = () => {
  //departure
  const [departureOption, setDepartureOption] = useState("searchByGalaxy");
  const [departureDropdownOptions, setDepartureDropdownOptions] = useState([
    "Galaxy 1",
    "Galaxy 2",
    "Galaxy 3",
  ]);
  const [
    selectedSecondaryDepartureOption,
    setSelectedSecondaryDepartureOption,
  ] = useState("");

  const handleDepartureOptionChange = (value) => {
    setDepartureOption(value);

    setSelectedSecondaryDepartureOption(""); // Reset secondary dropdown selection
    // Set secondary dropdown options based on the selected departure option
    if (value === "searchByGalaxy") {
      setDepartureDropdownOptions(["Galaxy 1", "Galaxy 2", "Galaxy 3"]);
    } else if (value === "searchByPlanet") {
      setDepartureDropdownOptions(["Planet 1", "Planet 2", "Planet 3"]);
    }
  };

  const handlesetSelectedSecondaryDepartureOption = (value) => {
    setSelectedSecondaryDepartureOption(value);
  };

  //arrival
  const [arrivalOption, setArrivalOption] = useState("searchByGalaxy");
  const [arrivalDropdownOptions, setArrivalDropdownOptions] = useState([
    "Galaxy 1",
    "Galaxy 2",
    "Galaxy 3",
  ]);
  const [selectedSecondaryArrivalOption, setSelectedSecondaryArrivalOption] =
    useState("");

  const handleArrivalOptionChange = (value) => {
    setArrivalOption(value);

    setSelectedSecondaryArrivalOption(""); // Reset secondary dropdown selection
    // Set secondary dropdown options based on the selected departure option
    if (value === "searchByGalaxy") {
      setArrivalDropdownOptions(["Galaxy 1", "Galaxy 2", "Galaxy 3"]);
    } else if (value === "searchByPlanet") {
      setArrivalDropdownOptions(["Planet 1", "Planet 2", "Planet 3"]);
    }
  };

  const handlesetSelectedSecondaryArrivalOption = (value) => {
    setSelectedSecondaryArrivalOption(value);
  };

  const [loaded] = useFonts({
    Goldman: require("../../assets/fonts/Goldman-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, backgroundColor: "lightyellow", padding: 10 }}>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontFamily: "Goldman",
              textAlign: "center",
              fontSize: 24,
            }}
          >
            Let's reserve space in{"\n"} space traveling
          </Text>
        </View>
        <View style={{ flex: 1, backgroundColor: "lightblue" }}>
          <Text style={{ fontFamily: "Goldman", fontSize: 18 }}>
            Recent Tours
          </Text>
          <RecentTours tours={tours}></RecentTours>
        </View>
        <View style={{ flex: 5 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ textAlignVertical: "center", fontSize: 16 }}>
              Departure Space Port
            </Text>
            <Picker
              style={{
                width: 200,
                borderWidth: 1,
                borderColor: "#ccc",
                borderRadius: 8,
                paddingHorizontal: 10,
              }}
              selectedValue={departureOption}
              onValueChange={handleDepartureOptionChange}
            >
              <Picker.Item
                label="Search by Galaxy"
                value="searchByGalaxy"
                style={{}}
              />
              <Picker.Item
                label="Search by Planet"
                value="searchByPlanet"
                style={{}}
              />
            </Picker>
          </View>
          {departureDropdownOptions.length > 0 && (
            <View style={{ marginLeft: 172 }}>
              <Picker
                selectedValue={selectedSecondaryDepartureOption}
                onValueChange={handlesetSelectedSecondaryDepartureOption}
                style={{ width: 200 }}
              >
                {departureDropdownOptions.map((option) => (
                  <Picker.Item key={option} label={option} value={option} />
                ))}
              </Picker>
            </View>
          )}
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ textAlignVertical: "center", fontSize: 16 }}>
              Arrival Space Port
            </Text>
            <Picker
              style={{
                width: 200,
                borderWidth: 1,
                borderColor: "#ccc",
                borderRadius: 8,
                paddingHorizontal: 10,
              }}
              selectedValue={arrivalOption}
              onValueChange={handleArrivalOptionChange}
            >
              <Picker.Item
                label="Search by Galaxy"
                value="searchByGalaxy"
                style={{}}
              />
              <Picker.Item
                label="Search by Planet"
                value="searchByPlanet"
                style={{}}
              />
            </Picker>
          </View>
          {arrivalDropdownOptions.length > 0 && (
            <View style={{ marginLeft: 172 }}>
              <Picker
                selectedValue={selectedSecondaryArrivalOption}
                onValueChange={handlesetSelectedSecondaryArrivalOption}
                style={{ width: 200 }}
              >
                {arrivalDropdownOptions.map((option) => (
                  <Picker.Item key={option} label={option} value={option} />
                ))}
              </Picker>
            </View>
          )}
        </View>
        <View style={{ flex: 1 }}></View>
      </View>
    </SafeAreaView>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
  },
});
