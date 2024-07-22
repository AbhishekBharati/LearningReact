import { useState } from "react";

const SimpleForm = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    console.log(event.target.value);
    setInputValue(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Form Submitted with input ${inputValue}`);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Input :
          <input type="text" value={inputValue} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default SimpleForm;

