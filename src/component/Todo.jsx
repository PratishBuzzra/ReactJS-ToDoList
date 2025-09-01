import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoFilter from "./TodoFilter";
import TodoList from "./TodoList";

const Todo = () => {
  return (
    <div className="min-h-screen bg-[#1A1A1A] text-[#f6d4b1] px-4">
      <div className="flex items-center justify-center pt-12 ">
        <div className="w-full max-w-2xl border border-[#f6d4b1] p-6 sm:p-10 md:p-12 rounded-xl shadow-xl  bg-[#1A1A1A]">
          <TodoForm />

          <TodoFilter />

          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default Todo;
