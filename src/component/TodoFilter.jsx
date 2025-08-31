import React, { useContext } from 'react'
import { TodoContext } from '../Context/TodoContext'

const TodoFilter = () => {
    const {categories, setCategory, handleClearCompleted} = useContext(TodoContext)
  return (
      <div className="flex gap-2 mt-3 items-center justify-center">
            {categories.map((cat, index)=>(
              <button key={index} onClick={()=>setCategory(cat)} className="bg-[#f6d4b1] text-[#1A1A1A] px-1 py-0.5 rounded">{cat}</button>
            ))}
            <button className="bg-[#f6d4b1] text-[#1A1A1A] px-1 py-0.5 rounded" onClick={()=>handleClearCompleted()}>Clear Completed</button>
            
          </div>
  )
}

export default TodoFilter
