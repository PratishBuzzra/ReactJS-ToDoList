import React, { useContext } from 'react'
import { TodoContext } from '../Context/TodoContext'

const TodoFilter = () => {
    const {categories, setCategory, handleClearCompleted, category} = useContext(TodoContext)
  return (
      <div className="flex flex-wrap gap-2 mt-4 justify-center">
            {categories.map((cat, index)=>(
              <button key={index} onClick={()=>setCategory(cat)} className={`px-3 py-1 rounded text-sm ${category === cat ? 'underline underline-offset-4 font-semibold bg-[#f6d4b1] text-[#1A1A1A]' : 'bg-[#f6d4b1] text-[#1A1A1A]'}`} >{cat}</button>
            ))}
            <button className="bg-[#f6d4b1] text-[#1A1A1A] px-3 py-1 rounded text-sm" onClick={()=>handleClearCompleted()}>Clear Completed</button>
            
          </div>
  )
}

export default TodoFilter
