import { useEffect } from "react";
import { useState } from "react";

const DataFetcher = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(true);
      })
  }, []) // Empty Array means this effect runs once only after initial render and that's it.
  return (
    <div>
      {loading ? (<p>Loading...</p>) : (<ul>{data.map((item) => <li key={item.id}>{item.title}</li>)}</ul>)}
    </div>
  )
}

export default DataFetcher;
