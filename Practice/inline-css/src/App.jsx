const App = () => {
  let Greet = "Hey";
  let color = "black";
  const date = new Date;
  let hour = date.getHours();
  if (hour >= 0 && hour <= 12) {
    Greet = "Good Morning";
    color = "red";
  } else if (hour > 12 && hour <= 18) {
    Greet = "Good Afternoon"
    color = "green";
  } else {
    Greet = "Good Evening"
    color = "blue";
  }
  return (
    <div>
      <h1 style={{ color: color, backgroundColor: "lightblue" }}>{Greet}</h1>
    </div>
  )
}

export default App;
