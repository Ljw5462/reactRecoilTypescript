import { ChangeEvent, Dispatch, SetStateAction, useCallback } from 'react';

interface PropTypes {
    setIsModal : Dispatch<SetStateAction<boolean>>;
    modifyContents : string;
    setModifyContents : Dispatch<SetStateAction<string>>;
    onModifyTodo : () => void;
}

const TodoModal = ({
    setIsModal,
    modifyContents,
    setModifyContents,
    onModifyTodo,
} : PropTypes) : JSX.Element => {
    const onCloseModal = useCallback(() : void => {
        setIsModal(false);
    },[setIsModal]);

    const onChange = useCallback((e : ChangeEvent<HTMLInputElement>) : void =>{
        const { value } = e.target;
        setModifyContents(value);
    },[setModifyContents]);

    return (
        <>
            <div className='TodoModal-Overlay' onClick={onCloseModal}></div>
                <div className='TodoModal'>
                    <div className='TodoModal-Title'>
                        <div>Todo Modification</div>
                    </div>
                    <div className='TodoModal-Contents'>
                        <input
                            type='text'
                            className='TodoModal-Contents-Input'
                            value={modifyContents}
                            onChange={onChange}
                            placeholder='Todo input please'
                        />
                    <button
                        className='TodoModal-Contents-Button'
                        onClick={onModifyTodo}
                    >
                        Modification
                    </button>
                </div>
            </div>
        </>
    )
}

export default TodoModal;