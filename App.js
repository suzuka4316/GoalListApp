import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  Platform,
  FlatList,
} from "react-native";
import { GoalItem } from "./components";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      //FlatList searches for key property automatically
      { key: Math.random().toString(), value: enteredGoal },
    ]);
    // setCourseGoals([...courseGoals, enteredGoal]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Course Goal"
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <FlatList
        style={styles.listContainer}
        data={courseGoals}
        renderItem={(itemData) => <GoalItem title={itemData.item.value} />}
      />

      {/* ScrollView will make your app slow if the list is infinite because it will render all the items at once */}
      {/* <ScrollView style={styles.listContainer}>
        {courseGoals.map((goal) => 
          <View style={styles.listItem}>
            <Text key={goal}>{goal}</Text>
          </View>
        )}
      </ScrollView> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    padding: 6,
    minWidth: 200,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  listContainer: {
    margin: 20,
  },

  screen: {
    marginTop: Platform.OS === "ios" ? 50 : 50,
  },
});
