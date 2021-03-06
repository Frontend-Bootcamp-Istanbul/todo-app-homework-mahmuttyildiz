import React from 'react';
import {connect} from "react-redux";
import {toggleTodo} from "../redux/actions";
import TodoAppDelete from './TodoAppDelete';

const TodoAppListItem = ({content, id, completed, toggleTodo}) => {
    return (
        <>
        <div style={{
            textDecoration: completed ? "line-through" : "initial"
        }} onClick={() => toggleTodo(id)}>
            {content}
        </div>
        <TodoAppDelete id = {id}/>
        </>
    );
};

const mapDispatchToProps = {
    toggleTodo: toggleTodo
}

export default connect(null, mapDispatchToProps)(TodoAppListItem);