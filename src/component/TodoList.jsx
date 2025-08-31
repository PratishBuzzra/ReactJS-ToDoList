import React, { useContext } from 'react'
import TodoItem from './TodoItem'
import { TodoContext } from '../Context/TodoContext'

const TodoList = () => {
    const {filteredTodo} = useContext(TodoContext)
  return (
    <ul className="flex flex-col gap-2 mt-5 px-4">
             {filteredTodo().map((doo) => (
                <TodoItem doo={doo}  key={doo.id}/>
             ))
             
            } 
          </ul>
  
  )
}


export default TodoList
