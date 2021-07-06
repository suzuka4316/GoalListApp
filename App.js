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
import { GoalItem, GoalInput } from "./components";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      //FlatList searches for key property automatically
      { key: Math.random().toString(), value: goalTitle },
    ]);
    // setCourseGoals([...courseGoals, enteredGoal]);
  };

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
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
  listContainer: {
    margin: 20,
  },
  screen: {
    marginTop: Platform.OS === "ios" ? 50 : 50,
  },
});
