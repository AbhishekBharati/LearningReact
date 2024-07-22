import { useState } from "react";
const Status = () => {
  const [isOnline, setIsOnline] = useState(true);
  const [hasNewMessages, setHasNewMessages] = useState(false);

  return (
    <div>
      <button onClick={() => { setIsOnline(!isOnline) }}>{isOnline ? 'Go offline' : 'Go Online'}</button>
      <button onClick={() => {
        setHasNewMessages(!hasNewMessages);
      }}>{hasNewMessages ? 'Clear Messages' : 'New Messages'}</button>
      <p>Status : {isOnline ? "Online" : "Offline"}</p>
      <p>{isOnline && hasNewMessages ? 'You have new Messages' : 'No new Messages'}</p>
    </div>
  )
}

export default Status;
