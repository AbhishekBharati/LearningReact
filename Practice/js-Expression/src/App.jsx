const App = () => {
  const name = "Abhishek Bharati"
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <div>
      <p>CreatedBy {name}</p>
      <p>CopyRight {currentYear}</p>
    </div>
  )
}

export default App;
