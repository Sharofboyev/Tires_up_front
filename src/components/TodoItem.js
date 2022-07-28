import React from "react"
import styles from "./TodoItem.module.css"

function TodoItem(props) {
  return(
    <li className={styles.item}>
        <input className={styles.checkbox} type="checkbox" checked={props.todo.completed} 
        onChange={() => props.handleChangeProps(props.todo.id)}/>
        <button onClick={() => {props.deleteTodoProps(props.todo.id)}}>Delete</button>
        {props.todo.title}
    </li>
  )
    
}

export default TodoItem