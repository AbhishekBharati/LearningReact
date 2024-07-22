import { useState } from "react";

const Greeting = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);

  const handleLogin = () => {
    setIsLoggedin(true);
  }

  const handleLogout = () => {
    setIsLoggedin(false);
  }

  let message;
  if (isLoggedin) {
    message = <h1>Welcome Back!!!</h1>
  } else {
    message = <h1>Please Sign in</h1>
  }
  return (
    <div>
      {message}
      {isLoggedin ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  )
}

export default Greeting;
