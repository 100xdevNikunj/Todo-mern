import './App.css';
import InputComponent from './components/Input';
import Todos from './components/Todos';
import { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTodos() {
      try {
        const response = await fetch("http://localhost:3000/todos");
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const json = await response.json();
        setTodos(json.todos);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching todos:', error);
        setLoading(false); // Set loading to false if there's an error
      }
    }

    fetchTodos();
  }, []);

  if (loading) {
    return <p>Loading...</p>; // Show a loading indicator while fetching data
  }

  //  useEffect(() => {
  //   fetch("https://sum-server.100xdevs.com/todo?id=" + id)
  //     .then(async function(res) {
  //       const json = await res.json();
  //       setTodo (json.todo);
  //     })
  // }, [id])
  
  return (
    <>
      <InputComponent />
      <Todos todos={todos} />
    </>
  );
}

export default App;
