import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoFilter from "./TodoFilter";
import TodoList from "./TodoList";

const Todo = () => {
  return (
    <div className="h-screen bg-[#1A1A1A] text-[#f6d4b1]">
      <div className="flex items-center justify-center pt-12 ">
        <div className="border border-[#f6d4b1] p-12 rounded-xl shadow-xl  bg-[#1A1A1A]">
          <TodoForm />

          <TodoFilter />

          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default Todo;
