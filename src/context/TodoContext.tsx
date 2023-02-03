import React, { createContext } from 'react';
import { Todo } from '../models/Todo';
import { TodoContextType } from './TodoContextType';

export const TodoContext = createContext<TodoContextType>({
    todos: [],
    addTodo: () => {},
    removeTodo: () => {},
    toggle: () => {},
});

const TodoProvider = (props: any) => {
    
    const todos: Todo[] = [
        { id:1, title: 'Go to Market', done:true },
        { id:2, title: 'Go to Gym', done:false },
        { id:3, title: 'Go to Dentist', done:false } 
    ];

    const addTodo = (title: string) => {
        console.log('Add=' + title);
    }
    
    const removeTodo = (todo: Todo) => {
        console.log('Removed=' + todo.title)
    }
    
    const toggle = (todo: Todo) => {
        console.log('Changed=' + todo.title)
    }
    
    return(
        <TodoContext.Provider value={{
            todos, addTodo,removeTodo,toggle
        }}>
            {props.children}
        </TodoContext.Provider>
    );
 }

export default TodoProvider;