import { useRecoilState } from "recoil";
import { todoState } from "../state/atoms/TodoState";
import { useState } from "react";
import Todo from "./Todo";

const Todos = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useRecoilState(todoState)
  const handleChange = (event) => {
    setInputText(event.target.value)
  }
  const handleAddTodo = () => {
    setTodos((prevTodos) => [...prevTodos, { id: Math.random() * 100, text: inputText }])
    setInputText('');
  }

  const clearTodos = () => {
    setTodos([]);
  }
  console.log(todos);
  return (
    <main>
      <input type="text" id="todoInput" value={inputText} onChange={handleChange} />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={clearTodos}>Clear Todos</button>
      <ul>
        {todos.map((item) => {
          return (<Todo text={item.text} id={item.id} />)
        })}
      </ul>
    </main>
  )
}

export default Todos;
