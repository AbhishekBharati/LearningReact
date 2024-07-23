import { useState } from "react";

const FormValidation = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    email: ""
  });
  const [errors, setErrors] = useState({
    username: "",
    email: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });

    // Validation Logic
    let error = "";
    if (name == "username" && value.length < 3) {
      error = "Username must be atleast 3 character's long";
    }

    if (name == "email" && !/\S+@\S+\.\S+/.test(value)) {
      error = "Invalid email Address"
    }
    setErrors({ ...errors, [name]: error });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!errors.username && !errors.email) {
      alert(`Form Submitted: ${JSON.stringify(formValues)}`);
    } else {
      alert(`Please fix the errors in the form`);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Username :
            <input type="text"
              name="username"
              value={formValues.username}
              onChange={handleChange}
            />
          </label>
          {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
        </div>
        <div>
          <label>
            Email :
            <input type="text"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default FormValidation;
