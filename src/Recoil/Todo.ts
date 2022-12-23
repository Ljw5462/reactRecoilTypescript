import { atom } from 'recoil';

export interface TodoTypes{
    id : number;
    contents : string;
    isCompleted : boolean;
}

export const inputState = atom<string>({
    key : 'inputState',
    default : '',
});

export const todosState = atom<TodoTypes[]>({
    key : 'todos',
    default : [
        {
            id : 1,
            contents : 'It is added to press Enter.',
            isCompleted : false,
        },
        {
            id : 2,
            contents : 'Modification and deletion are possible.',
            isCompleted : false,
        },
        {
            id : 3,
            contents : 'I gave up the design. Please look at the desktop screen.',
            isCompleted : false,
        }
    ]
});