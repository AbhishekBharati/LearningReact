import { useEffect, useState } from "react";

const TitleUpdater = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`

  }, [count]) // It will run as many times as count values changes.
  return (
    <div>
      <p>You clicked ${count} times</p>
      <button onClick={() => {
        setCount(count + 1);
      }}>Click Me</button>
    </div>
  )
}

export default TitleUpdater;
