import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Alert,
} from "react-native";
import { Audio } from "expo-av";

const fartSounds = {
  one: require("./assets/sounds/f1.wav"),
  two: require("./assets/sounds/f3.mp3"),
};

export default function App() {
  const handlePlaySound = async (fart) => {
    const soundObject = new Audio.Sound();

    try {
      let source = fartSounds[fart];
      //let source = require('./assets/A.wav');
      await soundObject.loadAsync(source);
      await soundObject
        .playAsync()
        .then(async (playbackStatus) => {
          setTimeout(() => {
            soundObject.unloadAsync();
          }, playbackStatus.playableDurationMillis);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("./assets/images/fart.png")}
          style={styles.fartLogo}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableHighlight
          style={[styles.button, { backgroundColor: "blue" }]}
          onPress={() => handlePlaySound("one")}
        >
          <Text style={styles.buttonText}>Fart</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableHighlight
          style={[styles.button, { backgroundColor: "green" }]}
          onPress={() => handlePlaySound("two")}
        >
          <Text style={styles.buttonText}>Baby Fart</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableHighlight
          style={[styles.button, { backgroundColor: "black" }]}
          onPress={() => Alert.alert("Pfffffffffttttttt")}
        >
          <Text style={styles.buttonText}>Silent Fart</Text>
        </TouchableHighlight>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 50,
  },
  buttonContainer: {
    height: 40,
    margin: 5,
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  fartLogo: {
    marginVertical: 30,
    height: 234,
    width: 339,
  },
});
