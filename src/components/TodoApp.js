import React from 'react';
import TodoAppHeader from "./TodoAppHeader";
import TodoAppList from "./TodoAppList";
import "../App.css";

class TodoApp extends React.Component{
    render(){
        return (
            <div className="todo-container">
                <TodoAppHeader/>
                <TodoAppList />
            </div>
        );
    }
}

export default TodoApp