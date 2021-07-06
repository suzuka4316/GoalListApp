import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, FlatList, SafeAreaView, Button } from "react-native";
import { GoalItem, GoalInput } from "./components";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalTitle) => {
    //MEMO -- if you're setting two states after each other, it will batch these together, and it will not re-render the component twice after first change and after the second change, instead it will basically apply all state changes at once and only re-render the component once which is good, otherwise we would have an unnecessary re-render cycle there
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      //MEMO -- FlatList searches for key property automatically
      { id: Math.random().toString(), value: goalTitle },
    ]);
    // setCourseGoals([...courseGoals, enteredGoal]);
    setIsAddMode(false);
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };

  return (
    <SafeAreaView>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalAdditionHandler}
      />
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

      {/*MEMO -- ScrollView will make your app slow if the list is big because it will render all the items at once */}
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
