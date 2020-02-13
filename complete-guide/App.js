import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [myGoals, setMyGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  console.log("####");

  const addGoalHandler = goalTitle => {
    if (goalTitle.length === 0) {
      return;
    }
    setMyGoals(currendGoads => [
      ...currendGoads,
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddMode(false);
  };

  const remoteGoalHandler = id => {
    setMyGoals(goals => {
      return goals.filter(g => g.id !== id);
    });
  };

  const cancelGoalAddHandler = () => setIsAddMode(false);

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalAddHandler}
      />
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
