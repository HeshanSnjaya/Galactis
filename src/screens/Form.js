import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  Pressable,
  Modal,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import Checkbox from "expo-checkbox";

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

  //date
  const [date, setDate] = useState(new Date(2065, 0, 1));
  const [dateR, setDateR] = useState(new Date(2065, 0, 1));
  const [show, setShow] = useState(false);
  const [showR, setShowR] = useState(false);
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [isChecked, setChecked] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  const onChangeDep = ({ type }, selectedDate) => {
    if (type == "set") {
      const currentDate = selectedDate;
      setDate(currentDate);
      setDepartureDate(currentDate.toDateString());
      toggleShow();
    } else {
      toggleShow();
    }
  };

  const toggleShowR = () => {
    setShowR(!showR);
  };

  const onChangeRet = ({ type }, selectedDate) => {
    if (type == "set") {
      const currentDate = selectedDate;
      setDateR(currentDate);
      setReturnDate(currentDate.toDateString());
      toggleShowR();
    } else {
      toggleShowR();
    }
  };

  //passengerCount
  const [adultCount, setAdultCount] = useState(0);
  const [childCount, setChildCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const incrementCount = (type) => {
    if (type === "adult") {
      setAdultCount(adultCount + 1);
    } else if (type === "child") {
      setChildCount(childCount + 1);
    } else if (type === "infant") {
      setInfantCount(infantCount + 1);
    }
  };

  const decrementCount = (type) => {
    if (type === "adult") {
      if (adultCount > 0) {
        setAdultCount(adultCount - 1);
      }
    } else if (type === "child") {
      if (childCount > 0) {
        setChildCount(childCount - 1);
      }
    } else if (type === "infant") {
      if (infantCount > 0) {
        setInfantCount(infantCount - 1);
      }
    }
  };

  //travelMode

  const [travelMode, setTravelMode] = useState("spaceship"); // Default: 'spaceship'
  const [selectedCard, setSelectedCard] = useState("1st Class");

  const handleTravelModeChange = (mode) => {
    setTravelMode(mode);
    setSelectedCard("1st Class");
  };

  const handleCardSelect = (card) => {
    setSelectedCard(card);
  };

  const renderCardOptions = () => {
    if (travelMode === "spaceship") {
      const cardOptions = [
        {
          label: "ECO Voyager",
          details: [
            "Shared Bunk",
            "Basic Rations",
            "Virtual Tour",
            "Holodeck Access",
          ],
        },
        {
          label: "Cosmic Cruiser",
          details: [
            "Private Cabin",
            "Gourmet Meals",
            "Exclusive Tours",
            "VIP Lounge",
          ],
        },
        {
          label: "Galactic Luxe",
          details: [
            "Captain's Suit",
            "Michelin Stars",
            "Personalized Itinerary",
            "A-List Treatmnts",
          ],
        },
      ];
      return (
        <View style={styles.cardContainer}>
          {cardOptions.map((card) => (
            <TouchableOpacity
              key={card.label}
              style={[
                styles.card,
                selectedCard === card.label && styles.selectedCard,
              ]}
              onPress={() => handleCardSelect(card.label)}
            >
              <Text>{card.label}</Text>
              <View style={styles.cardDetails}>
                {card.details.map((detail) => (
                  <Text key={detail} style={styles.bulletPoint}>
                    {"\u2022"} {detail}
                  </Text>
                ))}
              </View>
            </TouchableOpacity>
          ))}
        </View>
      );
    } else if (travelMode === "portal") {
      return (
        <View style={styles.cardContainer}>
          <TouchableOpacity
            style={[
              styles.card,
              selectedCard === "Millenium Metro" && styles.selectedCard,
            ]}
            onPress={() => handleCardSelect("Millenium Metro")}
          >
            <Text>Millenium Metro</Text>
            <View style={styles.cardDetails}>
              <Text style={styles.bulletPoint}>
                {"\u2022"}Potal jump{"\n"}
                {"\u2022"}Shared Cabin{"\n"}
                {"\u2022"}5000x Light Speed{"\n"}
                {"\u2022"}Limited Passengers{"\n"}
                {"\u2022"}VIP Lounge
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    } else {
      return null;
    }
  };

  //confirm
  const handleConfirm = () => {
    // You can add the logic here to send the selected data to the backend (Firebase, etc.)
    // For example:
    const bookingDetails = {
      travelMode,
      selectedCard,
      // ... other selected data
    };

    // Here, you can implement the logic to send bookingDetails to the backend
    console.log("Booking Details:", bookingDetails);
  };

  //customFont
  const [loaded] = useFonts({
    Goldman: require("../../assets/fonts/Goldman-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, backgroundColor: "white", padding: 10 }}>
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
        <View style={{ flex: 1, backgroundColor: "white" }}>
          <Text style={{ fontFamily: "Goldman", fontSize: 18 }}>
            Recent Tours
          </Text>
          {/* <RecentTours tours={tours}></RecentTours> */}
        </View>
        <View style={{ flex: 6 }}>
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
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ textAlignVertical: "center", fontSize: 16 }}>
              Departing
            </Text>
            {show && (
              <DateTimePicker
                mode="date"
                display="spinner"
                value={date}
                onChange={onChangeDep}
              />
            )}
            {!show && (
              <Pressable onPress={toggleShow}>
                <TextInput
                  style={{ marginRight: 45 }}
                  editable={false}
                  placeholder={date.toDateString()}
                  value={departureDate}
                />
              </Pressable>
            )}
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <Text style={{ textAlignVertical: "center", fontSize: 16 }}>
              Returning
            </Text>
            <Checkbox
              style={{ marginLeft: 100, marginTop: 5 }}
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? "#4630EB" : undefined}
            />

            {showR && (
              <DateTimePicker
                mode="date"
                display="spinner"
                value={dateR}
                onChange={onChangeRet}
              />
            )}
            {!showR && (
              <Pressable onPress={toggleShowR}>
                <TextInput
                  style={{ marginRight: 45 }}
                  editable={false}
                  placeholder={dateR.toDateString()}
                  value={returnDate}
                />
              </Pressable>
            )}
          </View>
          <View style={styles.container1}>
            <TouchableOpacity
              style={styles.passengerContainer}
              onPress={toggleModal}
            >
              <Text style={styles.label}>Passengers</Text>
              <Text style={styles.passengerText}>
                {adultCount} Adults {"\t\t"}
                {childCount} Children {"\t\t"} {infantCount} Infants
              </Text>
            </TouchableOpacity>

            <Modal
              animationType="slide"
              transparent={true}
              visible={isModalVisible}
              onRequestClose={toggleModal}
            >
              <View style={styles.modalContainer}>
                <View style={styles.passengerBox}>
                  <View style={styles.adultsBox}>
                    <Text style={styles.passengerBoxLabel}>Adults</Text>
                    <View style={styles.buttonGroup}>
                      <Button
                        style={{ height: 10 }}
                        title="+"
                        onPress={() => incrementCount("adult")}
                      />
                      <Text>{adultCount}</Text>
                      <Button
                        style={styles.commonButtonStyles}
                        title="-"
                        onPress={() => decrementCount("adult")}
                      />
                    </View>
                  </View>
                  <View style={styles.childrenBox}>
                    <Text style={styles.passengerBoxLabel}>Children</Text>
                    <View style={styles.buttonGroup}>
                      <Button
                        style={styles.commonButtonStyles}
                        title="+"
                        onPress={() => incrementCount("child")}
                      />
                      <Text>{childCount}</Text>
                      <Button
                        style={styles.commonButtonStyles}
                        title="-"
                        onPress={() => decrementCount("child")}
                      />
                    </View>
                  </View>
                  <View style={styles.infantBox}>
                    <Text style={styles.passengerBoxLabel}>Infants</Text>
                    <View style={styles.buttonGroup}>
                      <Button
                        style={styles.commonButtonStyles}
                        title="+"
                        onPress={() => incrementCount("infant")}
                      />
                      <Text>{infantCount}</Text>
                      <Button
                        style={styles.commonButtonStyles}
                        title="-"
                        onPress={() => decrementCount("infant")}
                      />
                    </View>
                  </View>
                </View>
                <Button title="Done" onPress={toggleModal} />
              </View>
            </Modal>
          </View>
          <View style={styles.container}>
            {/* Travel Mode Selection */}
            <View style={styles.travelModeContainer}>
              <TouchableOpacity
                style={[
                  styles.travelModeButton,
                  travelMode === "spaceship" && styles.selectedTravelMode,
                ]}
                onPress={() => handleTravelModeChange("spaceship")}
              >
                <Text>Spaceship</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.travelModeButton,
                  travelMode === "portal" && styles.selectedTravelMode,
                ]}
                onPress={() => handleTravelModeChange("portal")}
              >
                <Text>Portal</Text>
              </TouchableOpacity>
            </View>

            {/* Card Options */}
            {renderCardOptions()}
          </View>
        </View>
        <View style={{ flex: 1, alignContent: "flex-end" }}>
          <TouchableOpacity
            style={styles.confirmButton}
            onPress={handleConfirm}
          >
            <Text style={styles.confirmButtonText}>Confirm</Text>
          </TouchableOpacity>
        </View>
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
  container1: {},
  passengerContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  label: {
    fontSize: 16,
  },
  passengerText: {
    fontSize: 14,
    marginLeft: 108,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  passengerBox: {
    backgroundColor: "white",
    padding: 20,
    paddingHorizontal: 100,
    borderRadius: 40,
    marginBottom: 20,
  },
  passengerBoxLabel: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
  },
  buttonGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 80,
  },
  adultsBox: {
    marginBottom: 30,
  },
  childrenBox: {
    marginBottom: 30,
  },
  infantBox: {
    marginBottom: 30,
  },
  commonButtonStyles: {
    backgroundColor: "#4630EB",
    color: "white",
    width: 30,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  //travel mode styles
  container2: {
    padding: 20,
  },
  travelModeContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  travelModeButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginRight: 10,
  },
  selectedTravelMode: {
    backgroundColor: "#007AFF",
    borderColor: "#007AFF",
    color: "white",
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  card: {
    width: "30%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 5,
    borderRadius: 8,
    alignItems: "center",
  },
  selectedCard: {
    backgroundColor: "#007AFF",
    borderColor: "#007AFF",
    color: "white",
  },
  cardDetails: {
    marginTop: 10,
    textAlign: "left",
  },
  bulletPoint: {
    marginLeft: 0,
    textAlign: "left",
  },
  //confirm button styles
  confirmButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  confirmButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
