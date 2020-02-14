import React, {useContext} from 'react';
import {FlatList} from 'react-native';
import Styled from 'styled-components/native';

import {TodoListContext} from '~/Context/TodoListContext';

import EmptyItem from './EmptyItem';
import TodoItem from './TodoItem';

const Container = Styled(FlatList)`
`;

interface Props {}

const TodoList = ({}: Props) => {
  const {todoList, removeTodoList} = useContext<ITodoListContext>(
    TodoListContext,
  );

  return (
    <Container
      data={todoList} // 리스트 뷰에 표시할 데이터의 배열
      keyExtractor={(item, index) => {
        // 리액트에서 반복적으로 동일한 컴포넌트를 표시하기 위해서는 컴포넌트에 키 값을 설정.
        return `todo-${index}`;
      }}
      ListEmptyComponent={<EmptyItem />} // 주어진 배열에 데이터가 없을 경우 표시되는 컴포넌트
      renderItem={(
        {item, index}, // 주어진 배열에 데이터를 사용하여 반복적으로 표시될 컴포넌트
      ) => (
        <TodoItem
          text={item as string}
          onDelete={() => removeTodoList(index)}
        />
      )}
      contentContainerStyle={todoList.length === 0 && {flex: 1}} // 표시할 데이터가 없는 경우 ListEmptyComponent의 컴포넌트가 화면에 표시 -> 전체 화면으로 표시
    />
  );
};

export default TodoList;
