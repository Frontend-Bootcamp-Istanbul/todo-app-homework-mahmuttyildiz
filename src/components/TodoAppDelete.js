import React, {Component} from 'react';
import {connect} from "react-redux";
import {deleteTodo} from "../redux/actions";

const TodoAppDelete = (props) => {
     
        return (
            <div>
                <button onClick={()=>{
                    props.deleteTodo(props.id)
                }}>Todo Sil</button>
                
            </div>

        );
    
};

const mapDispatchToProps = {
    deleteTodo: deleteTodo
};

export default connect(null, mapDispatchToProps)(TodoAppDelete);