import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Course Goal"
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      {/* onPress={() => props.onAddGoal(enteredGoal)} */}
      <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)} />
    </View>
  );
};

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
});
