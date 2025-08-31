import React, { useContext } from 'react'
import { TodoContext } from '../Context/TodoContext'
import { IoCheckmarkDone } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const TodoItem = ({doo}) => {
    const {selectedTodo, handleDelete,handleEdit, handleEditData,  editedTodo, setEditedTodo, handleCompleted} = useContext(TodoContext)
  return (
selectedTodo && selectedTodo.id === doo.id ? (
              
                <form onSubmit={handleEditData} className="flex w-full mt-4">
            <input
              className="flex-1 border border-r-0 rounded-l pl-2 pr-14 py-1.5 focus:outline-none "
              type="text"
              value={editedTodo}
              onChange={(e) => setEditedTodo(e.target.value)}
            />
            <button
              type="submit"
              className="bg-[#f6d4b1] text-[#1A1A1A] px-2 py-2 rounded-r"
            >
              Update
            </button>
          </form>
             ):(
              <li
                className={`${doo.completed ? 'line-through' : 'no-underline'} border rounded-lg  bg-[#f6d4b1] text-[#1A1A1A] py-2 px-4  flex justify-between`}
               
              >
                {doo.task}{" "}
                <div className="flex items-center gap-2">
                    <button onClick={() => handleCompleted(doo.id)}>
                  <IoCheckmarkDone className="text-xl" />
                </button>{" "}
                    <button onClick={() => handleEdit(doo)}>
                  <FaEdit className="text-xl" />
                </button>{" "}
                <button onClick={() => handleDelete(doo.id)}>
                  <MdDelete className="text-xl" />
                </button>{" "}

                </div>
                
              </li>
            ))
}

export default TodoItem
