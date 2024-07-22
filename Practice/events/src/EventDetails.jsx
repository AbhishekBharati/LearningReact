const EventDetails = () => {
  const handleClick = (event) => {
    console.log('Event Type : ', event.type) // Logs 'click'
    console.log('Event Target : ', event.target); // Logs the button event.
    event.preventDefault();
  }
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default EventDetails;
