import { VStack, StackDivider, HStack, IconButton, Text } from "@chakra-ui/react";

// POINT react-iconsからアイコンをインポート
import { AiOutlineDelete, AiOutlineForm } from "react-icons/ai";

const List = ({ todos, deleteTodo }) => {
  const complete = (id) => {
    deleteTodo(id);
  };
  return (
    <VStack
      divider={<StackDivider />}
      width="80%"
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
          justifyContent="space-between" 
          width="100%"
          >
          <Text>{todo.content}</Text>
          <Text>{todo.date}</Text>
          <HStack spacing="2">
            <IconButton icon={<AiOutlineForm />} isRound>
              編集
            </IconButton>
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
