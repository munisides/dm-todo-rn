import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  Platform,
} from "react-native";
import TodoItem from "./TodoItem";
import Icon from "react-native-vector-icons/Ionicons";

export default function TodoList() {
  const [todo, setTodo] = useState("");
  const [todoItems, setTodoItems] = useState([]);

  const handleAddTodo = () => {
    Keyboard.dismiss();
    setTodoItems([...todoItems, todo]);
    setTodo("");
  };

  const deleteTodo = (index) => {
    let itemsCopy = [...todoItems];
    itemsCopy.splice(index, 1);
    setTodoItems(itemsCopy);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
            }}
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.todosWrapper}>
              <View style={styles.topTitle}>
                <Text style={styles.sectionTitle}>TODO LIST</Text>
              </View>
              <View style={styles.items}>
                {todoItems.map((item, index) => {
                  return (
                    <TouchableOpacity style={styles.listArea} key={index}>
                      <View>
                        <Icon
                          name="md-checkbox-outline"
                          size={30}
                          color="#4F8EF7"
                        />
                      </View>
                      <TodoItem text={item} />

                      <View>
                        <Icon
                          onPress={() => deleteTodo(index)}
                          name="trash-outline"
                          size={30}
                          color="#4F8EF7"
                        />
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          </ScrollView>

          <View style={styles.writeTodoWrapper}>
            <TextInput
              style={styles.input}
              placeholder={"Add a task"}
              value={todo}
              onChangeText={(text) => setTodo(text)}
            />
            <TouchableOpacity>
              <View>
                <View>
                  <Icon
                    onPress={() => handleAddTodo()}
                    name="md-add-circle-outline"
                    size={60}
                    color="#4F8EF7"
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  topTitle: {
    alignItems: "center",
    backgroundColor: "#E8EAED",
    paddingTop: 10,
  },
  todosWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeTodoWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: "70%",
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  listArea: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
