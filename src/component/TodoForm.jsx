import React, { useContext } from 'react'
import { TodoContext } from '../Context/TodoContext'

const TodoForm = () => {
  const {handleAdd, inputTodo, setInputTodo} = useContext(TodoContext)

  return (
    <>
     <form action="" onSubmit={handleAdd} className="flex w-full mt-4">
            <input
              className="flex-1 border border-r-0 rounded-l pl-2 pr-14 py-1.5 focus:outline-none "
              type="text"
              value={inputTodo}
              onChange={(e) => setInputTodo(e.target.value)}
            />
            <button
              type="submit"
              className="bg-[#f6d4b1] text-[#1A1A1A] px-2 py-2 rounded-r"
            >
              Add Todo
            </button>
          </form>
      
    </>
  )
}

export default TodoForm
