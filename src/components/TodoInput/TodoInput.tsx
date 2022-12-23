import {ChangeEvent, useCallback, KeyboardEvent} from 'react';
import './TodoInput.scss';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { inputState, todosState,  TodoTypes} from '../../Recoil/Todo';


const TodoInput = () : JSX.Element => {
    const [contents, setContents] = useRecoilState<string>(inputState);
    const todos = useRecoilValue<TodoTypes[]>(todosState);
    const setTodos = useSetRecoilState<TodoTypes[]>(todosState);

    const addTodo = useCallback(() : void => {
        const nextId : number = todos.length > 0 ? todos[todos.length - 1].id + 1 : 0;
        if (!contents.trim()) {
            return;
          }
        const todo : TodoTypes ={
            id : nextId,
            contents,
            isCompleted : false,
        };

        setTodos([...todos, todo]);
        setContents('');
    },[contents, setContents, setTodos, todos]);

    const onChange = useCallback((e : ChangeEvent<HTMLInputElement>) : void =>{
        const { value } = e.target;
        setContents(value);
    },[setContents]);

    const onKeyDown = useCallback((e : KeyboardEvent<HTMLInputElement>) : void =>{
        if(e.key === 'Enter'){
            addTodo();
        }
    },[addTodo]);


    return (
        <div className='TodoInput'>
            <input
                type='text'
                className='TodoInput-Input'
                placeholder='Please write'
                value={contents}
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
            <button className='TodoInput-Button' onClick={addTodo}>Add</button>
        </div>
    );
}

export default TodoInput;