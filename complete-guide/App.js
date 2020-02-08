import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList
} from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [myGoals, setMyGoals] = useState([]);
  const addGoalHandler = goalTitle =>
    setMyGoals(currendGoads => [
      ...currendGoads,
      { id: Math.random().toString(), value: goalTitle }
    ]);

  const remoteGoalHandler = id => {
    setMyGoals(goals => {
      return goals.filter(g => g.id !== id);
    });
  };

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={myGoals}
        renderItem={itemData => (
          <GoalItem
            id={itemData.item.id}
            onDelete={remoteGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
  {
    /* <View
        style={{
          padding: 10,
          flexDirection: "row",
          width: "80%",
          height: 300,
          justifyContent: "space-around",
          alignItems: "stretch"
        }}
      >
        <View
          style={{
            backgroundColor: "red",
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text>1</Text>
        </View>
        <View
          style={{
            backgroundColor: "blue",
            flex: 2,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text>2</Text>
        </View>
        <View
          style={{
            backgroundColor: "orange",
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text>3</Text>
        </View>
      </View> */
  }
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    padding: 10
  },
  listItem: {
    padding: 20,
    marginVertical: 10,
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "#ccc"
  }
});
