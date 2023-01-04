import { StyleSheet, View } from "react-native";
import TodoList from "./Components/TodoList";

export default function App() {
  return (
    <View style={styles.root}>
      <TodoList />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  text: {
    color: "white",
  },
});
