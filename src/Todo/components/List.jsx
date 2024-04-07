import { VStack, StackDivider, HStack, IconButton, Text } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import MakeMordal from "./MakeMordal";

import { AiOutlineDelete, AiOutlineForm } from "react-icons/ai";

const List = ({ todos, deleteTodo, updateTodo }) => {
  const complete = (id) => {
    deleteTodo(id);
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [ updatedTodo, setUpdatedTodo ] = useState("");
  const [ selectedTodoId, setSelectedTodoId ] = useState(null);
  
  const renewTodo = (id) => {
    updateTodo( id, updatedTodo );
    onClose();
    setUpdatedTodo("");
  }
  const openEditModal = (id) => {
    setSelectedTodoId(id);
    onOpen();
  };
    return (
    <VStack
      divider={<StackDivider />}
      width="100%"
      bgColor="white"
      // color={{ sm: 'red.600', md: 'blue.600', lg: 'green.500', xl: 'red.600' }}
      borderColor="blackAlpha.100"
      borderWidth="1px"
      borderRadius="3px"
      p={5}
      alignItems="start"
    >
      {todos.map((todo) => {
        return (
          <HStack 
          key={todo.id} 
          spacing="5" 
          justifyContent="flex-start" 
          width="100%"
          >
          <Text minWidth="200px">{todo.content}</Text>
          <Text>{todo.date}</Text>
          <HStack spacing="2">
            <IconButton icon={<AiOutlineForm />} isRound onClick={() => openEditModal(todo.id)}>
              編集
            </IconButton>
            <MakeMordal isOpen={isOpen} onClose={onClose} updatedTodo={updatedTodo} 
            setUpdatedTodo={setUpdatedTodo} renewTodo={renewTodo} selectedTodoId={selectedTodoId}/>
            <IconButton 
            onClick={() => complete(todo.id)} 
            icon={<AiOutlineDelete />} 
            isRound bgColor="cyan.100"
            >
              完了
            </IconButton>
          </HStack>
        </HStack>
        );
      })}
    </VStack>
  );
};

export default List;
