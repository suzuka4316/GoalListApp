import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, FlatList, SafeAreaView } from "react-native";
import { GoalItem, GoalInput } from "./components";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      //FlatList searches for key property automatically
      { id: Math.random().toString(), value: goalTitle },
    ]);
    // setCourseGoals([...courseGoals, enteredGoal]);
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  return (
    <SafeAreaView>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        style={styles.listContainer}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />

      {/* ScrollView will make your app slow if the list is big because it will render all the items at once */}
      {/* <ScrollView style={styles.listContainer}>
        {courseGoals.map((goal) => 
          <View style={styles.listItem}>
            <Text key={goal}>{goal}</Text>
          </View>
        )}
      </ScrollView> */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    margin: 20,
  },
});
