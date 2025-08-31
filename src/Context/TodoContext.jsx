import { createContext, useEffect, useState, useCallback } from "react";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState(() => {
    const savedTodo = localStorage.getItem("todos");
    return savedTodo ? JSON.parse(savedTodo) : [];
  });

  const [inputTodo, setInputTodo] = useState("");
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [editedTodo, setEditedTodo] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", "Completed", "Uncompleted"];

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
    console.log("Todo list updated");
  }, [todo]);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!inputTodo.trim()) return;
    setTodo((prev) => [...prev, { id: Date.now(), task: inputTodo, completed: false }]);
    setInputTodo("");
  };

  const handleDelete = (id) => {
    setTodo((prev) => prev.filter((doo) => doo.id !== id));
  };

  const handleEdit = (doo) => {
    setSelectedTodo(doo);
    setEditedTodo(doo.task);
  };

  const handleEditData = (e) => {
    e.preventDefault();
    setTodo((prev) =>
      prev.map((t) => (t.id === selectedTodo.id ? { ...t, task: editedTodo } : t))
    );
    setSelectedTodo(null);
    setEditedTodo("");
  };

  const handleCompleted = (id) => {
    setTodo((prev) =>
      prev.map((doo) =>
        doo.id === id ? { ...doo, completed: !doo.completed } : doo
      )
    );
  };

  const filteredTodo = useCallback(() => {
    if (category === "Completed") {
      return todo.filter((doo) => doo.completed);
    } else if (category === "Uncompleted") {
      return todo.filter((doo) => !doo.completed);
    } else {
      return todo;
    }
  }, [todo, category]);

  const handleClearCompleted = () => {
    setTodo((prev) => prev.filter((doo) => !doo.completed));
  };

  return (
    <TodoContext.Provider
      value={{
        todo,
        inputTodo,
        setInputTodo,
        handleAdd,
        selectedTodo,
        handleDelete,
        handleEdit,
        handleEditData,
        editedTodo,
        setEditedTodo,
        handleCompleted,
        filteredTodo,
        category,
        setCategory,
        categories,
        handleClearCompleted,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
