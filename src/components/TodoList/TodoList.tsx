import React, { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { todosState, TodoTypes } from '../../Recoil/Todo';
import TodoItem from './TodoItem/TodoItem';
import './TodoList.scss';



const TodoList = () : JSX.Element => {
    const [todos, setTodos] = useRecoilState<TodoTypes[]>(todosState);

    const onComplete = useCallback((id: number): void => {
        setTodos(todos.map((todo: TodoTypes) => {
          return todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo;
        }));
      }, [setTodos, todos]);

    const onDelete = useCallback((id : number) => {
        setTodos(todos.filter((todo : TodoTypes)=> todo.id !== id));
    },[setTodos, todos]);

    return (
        <div className='TodoList'>
        {
          todos.length > 0 ? todos.map((todo: TodoTypes) => {
            const { id, contents, isCompleted } = todo;
  
            return (
              <TodoItem
                key={id}
                id={id}
                contents={contents}
                isCompleted={isCompleted}
                onComplete={onComplete}
                onDelete={onDelete}
                todos={todos}
                setTodos={setTodos}
              />
            );
          }) :
  
          <div className='TodoList-NoList'>Todo가 없슴둥</div>
        }
      </div>
    );
}

export default TodoList;