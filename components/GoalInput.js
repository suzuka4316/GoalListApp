import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

export const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a Goal"
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        {/* onPress={() => props.onAddGoal(enteredGoal)} */}
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "40%",
    borderColor: "#C0C0C0",
    borderWidth: 1,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    // without giving width, justifyContent won't work
    width: "60%",
    marginTop: 5,
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    width: "80%",
  },
  inputContainer: {
    // without flex: 1, input container's size will be adjusted to children component's size
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
