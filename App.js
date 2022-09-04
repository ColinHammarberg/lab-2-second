import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
} from "react-native";
import * as Speech from "expo-speech";

export default function App() {
  return (
    <View style={{ backgroundColor: "sandybrown", flex: 1 }}>
      <View style={{ flex: 0.05 }} />
      <View style={{ flexDirection: "row", flex: 1 }}>
        <View style={{ flex: 3 }}>
          <View style={styles.full_row_style}>
            <View style={{ flex: 4, flexDirection: "row" }}>
              <Image
                source={require("./pics/pin3.png")}
                style={styles.image_style}
              />
              <Image
                source={require("./pics/pin3.png")}
                style={styles.image_style}
              />
              <Image
                source={require("./pics/pin2.png")}
                style={styles.image_style}
              />
              <Image
                source={require("./pics/pin2.png")}
                style={styles.image_style}
              />
            </View>
            <View style={{ backgroundColor: "black", width: 4 }} />
            <View style={{ flex: 1 }}>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <Image
                    source={require("./pics/pin5.png")}
                    style={styles.small_image_style}
                  />
                </View>
                <View style={{ flex: 1 }} />
              </View>
              <View style={{ flex: 1 }} />
            </View>
          </View>
          <View style={{ backgroundColor: "black", height: 4 }} />
          <View style={styles.full_row_style}>
            <View style={{ flex: 4, flexDirection: "row" }}>
              <Image
                source={require("./pics/pin6.png")}
                style={styles.image_style}
              />
              <Image
                source={require("./pics/pin1.png")}
                style={styles.image_style}
              />
              <Image
                source={require("./pics/pin1.png")}
                style={styles.image_style}
              />
              <Image
                source={require("./pics/pin3.png")}
                style={styles.image_style}
              />
            </View>
            <View style={{ backgroundColor: "black", width: 4 }} />
            <View style={{ flex: 1 }}>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <Image
                  source={require("./pics/pin1.png")}
                  style={styles.small_image_style}
                />
                <Image
                  source={require("./pics/pin5.png")}
                  style={styles.small_image_style}
                />
              </View>
              <View style={{ flex: 1 }} />
            </View>
          </View>
          <View style={{ backgroundColor: "black", height: 4 }} />

          <View style={styles.full_row_style}>
            <View style={{ flex: 4 }} />
            <View style={{ backgroundColor: "black", width: 4 }} />
            <View style={{ flex: 1 }} />
          </View>
          <View
            style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
          >
            <Text
              style={{
                fontSize: 21,
                color: "red",
                fontFamily: "Courier",
                fontWeight: "bold",
                fontStyle: "italic",
              }}
            >
              It's your turn..
            </Text>
          </View>
        </View>
        <View style={{ flex: 2, backgroundColor: "green" }}>
          <Image
            source={require("./pics/mastermind.png")}
            style={{ resizeMode: "stretch", flex: 1, width: "auto" }}
          />
        </View>
      </View>
      <View>
        <Button
          title="Let's play!"
          onPress={() => {
            Speech.speak("Let's play!");
          }}
          style={{ flex: 1, resizeMode: "stretch" }}
        />
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  full_row_style: {
    flexDirection: "row",
    flex: 0.07,
  },
  small_image_style: {
    flex: 1,
    resizeMode: "stretch",
    height: "auto",
  },
  image_style: {
    flex: 1,
    resizeMode: "stretch",
    height: "auto",
  },
});
