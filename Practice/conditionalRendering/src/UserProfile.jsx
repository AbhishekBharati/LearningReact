import { useState } from "react";

const UserProfile = () => {
  const [isUserLoggedin, setIsUserLoggedin] = useState(false);
  return (
    <div>
      {isUserLoggedin ? (
        <div>
          <h1>User Profile</h1>
          <button onClick={() => { setIsUserLoggedin(false) }}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Guest</h1>
          <button onClick={() => { setIsUserLoggedin(true) }}>Login</button>
        </div>
      )}
    </div>
  )
}

export default UserProfile;
