import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export const GoalItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#EBEBEB",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
});
