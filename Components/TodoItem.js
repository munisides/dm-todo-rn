import React from "react";
import { View, Text, StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function TodoItem(props) {
  return (
    <View style={styles.item}>
        <Text style={styles.itemText}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  itemText: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 700,
  },
});
