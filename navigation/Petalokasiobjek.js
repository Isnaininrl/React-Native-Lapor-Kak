import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Fontawesome5 from "react-native-vector-icons/FontAwesome5";
import Portofolio from "../App";
import { WebView } from "react-native-webview";
import Getjsonfile from "../Getjsonfile";
import { Callapi } from "../Callapi";

//const webmap = require('../peta/map.html');

const Tab = createBottomTabNavigator();

const jeniskerusakan = "https://dpu.kulonprogokab.go.id/detil/61/jenis-kerusakan-jalan-pada-perkerasan-lentur";

const Forminput = "https://isnaininrl.github.io/React-Native-Spreadsheet-App/";

const webmap =
  "https://isnaininrl.github.io/React-Native-Spreadsheet-App/map.html";

function HomeScreen() {
  return <WebView source={{ uri: jeniskerusakan}} />;;
}

function MapsScreen() {
  return <WebView source={{ uri: webmap }} />;
}

function AddDataScreen() {
  return <WebView source={{ uri: Forminput }} />;
}

function ListScreen() {
  return (
    <View>
      <Callapi />
    </View>
  );
}

function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <Fontawesome5 name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Maps"
          component={MapsScreen}
          options={{
            tabBarLabel: "Maps",
            tabBarIcon: ({ color, size }) => (
              <Fontawesome5 name="map-marked-alt" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Add Data"
          component={AddDataScreen}
          options={{
            tabBarLabel: "Add Data",
            tabBarIcon: ({ color, size }) => (
              <Fontawesome5 name="plus" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="List"
          component={ListScreen}
          options={{
            tabBarLabel: "List Data",
            tabBarIcon: ({ color, size }) => (
              <Fontawesome5 name="list-ul" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;

const styles = StyleSheet.create({
  listitems: {
    padding: 10,
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: "stretch",
  },
  caption: {
    fontSize: 14,
    fontWeight: "bold",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  container: {
    marginHorizontal: 20,
    marginTop: 20,
    padding: 20,
    backgroundColor: "#fff",
  },
  card: {
    container: {
      marginHorizontal: 30,
      marginTop: 30,
      padding: 30,
      backgroundColor: "#B6BBC4",
    },
  },
});
