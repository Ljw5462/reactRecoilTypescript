import React, { useCallback, useState } from 'react';
import { TodoTypes } from '../../../Recoil/Todo';
import { SetterOrUpdater } from 'recoil';
import TodoModal from '../../TodoModal/TodoModal';

interface PropTypes{
    id : number;
    contents: string;
    isCompleted : boolean;

    onComplete : (id : number) => void;
    onDelete : (id : number) => void;

    todos : TodoTypes[];
    setTodos : SetterOrUpdater<TodoTypes[]>;
}

const TodoItem = ({
    id,
    contents,
    isCompleted,
    onComplete,
    onDelete,
    todos,
    setTodos,
  }: PropTypes): JSX.Element => {
    const [isModal, setIsModal] = useState<boolean>(false);
    const [modifyContents, setModifyContents] = useState<string>('');
  
    const onModify = useCallback((): void => {
      setIsModal(true);
      setModifyContents(contents);
    }, [contents]);
  
    const onModifyTodo = useCallback((): void => {
      if (!modifyContents.trim()) {
        return;
      }
  
      setTodos(todos.map((todo: TodoTypes) => {
        return todo.id === id ? { ...todo, contents: modifyContents } : todo;
      }));
  
      setIsModal(false);
    }, [id, modifyContents, setTodos, todos]);

    return(
        <>
            <div className='TodoItem'>
                <div
                    title={contents}
                    className={isCompleted ? 'TodoItem-Completed' : ''}
                    onClick={()=> onComplete(id)}
                >
                 {contents}
                </div>
                <div className='TodoItem-buttons'>
                    <button 
                        className='TodoItem-modify'
                        onClick={()=> {
                            onComplete(id)
                            onModify()
                        }}
                        >
                        modify
                    </button>
                    <button 
                        className='TodoItem-delete'
                        onClick={()=> onDelete(id)}
                        >
                        delete
                    </button>
                </div>
            </div>
        {
            isModal &&
            <TodoModal
                setIsModal={setIsModal}
                modifyContents={modifyContents}
                setModifyContents={setModifyContents}
                onModifyTodo={onModifyTodo}
            />
        }
        </>
    );
  };

  export default TodoItem;