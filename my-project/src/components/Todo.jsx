import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

const Todo = () => {
  let { id } = useParams();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    const fetchTodo = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      );
      const todoData = await response.json();
      setTodo(todoData);
    };

    fetchTodo();
  }, [id]);

  if (!todo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="max-w-md mx-auto bg-white shadow-md rounded-md p-6">
        <h2 className="text-xl font-bold mb-4">Todo: {todo.id}</h2>
        <p className="mb-4">Title: {todo.title}</p>
      </div>
    </div>
  );
};

export default Todo;