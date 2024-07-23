import Todos from "./components/Todos";
import { RecoilRoot, useRecoilValue } from "recoil";
import { totalTodos } from "./state/selectors/TotalTodos";

const App = () => {
  const totalTodoState = useRecoilValue(totalTodos);
  return (
    <div>
      <h1>Heloo</h1>
      <Todos />
      <h2>Total Todos : {totalTodoState}</h2>
    </div>

  )
}

export default App;
