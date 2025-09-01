import React, { useContext } from 'react'
import { TodoContext } from '../Context/TodoContext'
import { IoCheckmarkDone } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const TodoItem = ({doo}) => {
    const {selectedTodo, handleDelete,handleEdit, handleEditData,  editedTodo, setEditedTodo, handleCompleted} = useContext(TodoContext)
  return (
selectedTodo && selectedTodo.id === doo.id ? (
              
                <form onSubmit={handleEditData} className="flex flex-col sm:flex-row w-full mt-2 gap-2">
            <input
              className="flex-1 border rounded px-3 py-2 focus:outline-none "
              type="text"
              value={editedTodo}
              onChange={(e) => setEditedTodo(e.target.value)}
            />
            <button
              type="submit"
              className="bg-[#f6d4b1] text-[#1A1A1A] px-4 py-2 rounded"
            >
              Update
            </button>
          </form>
             ):(
              <li
                className={`${doo.completed ? 'line-through' : 'no-underline'} border rounded-lg  bg-[#f6d4b1] text-[#1A1A1A] py-2 px-4  flex justify-between items-center`}
               
              >
                {doo.task}{" "}
                <div className="flex items-center gap-2">
                    <button title='Complete' onClick={() => handleCompleted(doo.id)}>
                  <IoCheckmarkDone className="text-xl" />
                </button>{" "}
                    <button title='Edit' onClick={() => handleEdit(doo)}>
                  <FaEdit className="text-xl" />
                </button>{" "}
                <button title='Delete' onClick={() => handleDelete(doo.id)}>
                  <MdDelete className="text-xl" />
                </button>{" "}

                </div>
                
              </li>
            ))
}

export default TodoItem
