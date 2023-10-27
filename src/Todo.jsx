import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'

const style = {
    li: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
    liComplete: `flex justify-between bg-slate-400 p-4 my-2 capitalize`,
    row: `flex`,
    text: `ml-2 cursor-pointer`,
    textComplete: `ml-2 cursor-pointer line-through`,
    button: `cursor-pointer flex items-center`,
};

const Todo = ({todo, toggleComplete, deleteTodo}) => {

  const deleteTodoHandler = (e) => {
    e.preventDefault(e);
    deleteTodo(todo.id);
  }
  return (
    <li className={todo.completed ? style.liComplete :  style.li} >
        <div className={style.row}>
            <input onChange={() => toggleComplete(todo)} type='checkbox' checked={todo.completed ? 'checked' : ''}/>
            <p onClick={() => toggleComplete(todo)} className={todo.completed ? style.liComplete : style.li}>{todo.text}</p>
        </div>
        <button onClick={deleteTodoHandler}>{<FaRegTrashAlt />}</button>
    </li>
  )
}

export default Todo