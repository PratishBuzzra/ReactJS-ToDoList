import React, { useContext } from 'react'
import { TodoContext } from '../Context/TodoContext'

const TodoForm = () => {
  const {handleAdd, inputTodo, setInputTodo} = useContext(TodoContext)

  return (
    
     <form action="" onSubmit={handleAdd} className="flex flex-col sm:flex-row w-full mt-4 gap-2">
            <input
              className="flex-1 border rounded px-3 py-2 focus:outline-none "
              type="text"
              value={inputTodo}
              onChange={(e) => setInputTodo(e.target.value)}
              placeholder='Add new Task'
            />
            <button
              type="submit"
              className="bg-[#f6d4b1] text-[#1A1A1A] px-4 py-2 rounded"
            >
              Add Todo
            </button>
          </form>
      
    
  )
}

export default TodoForm
