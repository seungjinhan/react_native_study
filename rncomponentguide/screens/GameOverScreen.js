import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Colors from "../constants/colors";
import MainButton from "../components/MainButton";

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/sample.jpeg")}
          // source={{
          //   uri:
          //     "https://img.seoul.co.kr//img/upload/2018/08/05/SSI_20180805171559.jpg"
          // }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed
          <Text style={styles.hightlight}>{props.roundsNumber}</Text>rounds to
          guess the number
          <Text style={styles.hightlight}>{props.userNunber}</Text>
        </BodyText>
      </View>
      {/* <BodyText> Number of rounds: {props.roundsNumber}</BodyText>
      <BodyText> Number user: {props.userNunber}</BodyText> */}
      <MainButton onPress={props.onRestart}>New Game</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 20
  },
  image: {
    width: "100%",
    height: "100%"
  },
  hightlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold"
  },
  resultText: {
    textAlign: "center",
    fontSize: 20
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 15
  }
});

export default GameOverScreen;
