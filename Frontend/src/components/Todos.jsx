import React from 'react';

function Todos({ todos }) {
  if (!todos || todos.length === 0) {
    return <p>No todos available.</p>; // Or display a message for empty data
  }

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo._id}>
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Todos;
