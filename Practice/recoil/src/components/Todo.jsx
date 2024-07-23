import { useSetRecoilState } from "recoil"
import { todoState } from "../state/atoms/TodoState"

const Todo = ({ text, id }) => {
  const setTodos = useSetRecoilState(todoState);

  const handleDelete = () => {
    setTodos((prevTodos) => {
      return prevTodos.filter((item) => item.id != id)
    })
  }
  return (
    <div>
      <p>{text}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default Todo;

