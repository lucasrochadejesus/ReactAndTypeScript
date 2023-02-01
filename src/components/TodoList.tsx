import React from 'react';
import { Todo } from '../models/Todo';
import TodoListItem from './TodoListItem';

const TodoList = () => {
    const todos:  Todo[] = [
        { id:1, title: 'Go to Market', done:true },
        { id:2, title: 'Go to Gym', done:false },
        { id:3, title: 'Go to Dentist', done:false }
    ];
    return(
    <table className="uk-table">
        <caption>Tasks ToDo</caption>
        <thead>
            <tr>
                <th>#</th>
                <th>Tasks</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
        {
            todos?.map(
                todo => (<TodoListItem key={todo.id} todo={todo}></TodoListItem>)
            )
        }
        </tbody>
    </table>
    
        );
 }

export default TodoList;