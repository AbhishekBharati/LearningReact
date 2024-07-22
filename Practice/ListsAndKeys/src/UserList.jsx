
const UserList = () => {
  const users = [
    { id: 1, name: 'Abhishek' },
    { id: 2, name: 'Anshu' },
    { id: 3, name: "Darshan" }
  ]

  return (
    <div>
      <ul>
        {users.map((user) => (<li key={user.id}>{user.name}</li>))}
      </ul>
    </div>
  )
}

export default UserList;
