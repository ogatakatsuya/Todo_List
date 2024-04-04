import { useState } from "react";
import { VStack, Heading } from "@chakra-ui/react";

import List from "./List";
import Form from "./Form";

const Todo = () => {
  const todosList = [
    {
      id: 1,
      content: "宿題をする",
    },
    {
      id: 2,
      content: "卵を買う",
    },
    {
      id: 3,
      content: "郵便を出す",
    },
  ];

  const [todos, setTodos] = useState(todosList);

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(newTodos);
  };

  const createTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <VStack p="10" spacing="10">
      <Heading color="blue.200" fontSize="5xl">
        Reminder
      </Heading>
      <List todos={todos} deleteTodo={deleteTodo} />
      <Form createTodo={createTodo} />
    </VStack>
  );
};
export default Todo;
