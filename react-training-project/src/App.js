import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('Andy');
  const [users, setUsers] = useState([
    {username: 'jimmy069', country: 'India', id: 1},
    {username: 'black111', country: 'Germany', id: 2},
    {username: 'andy077', country: 'USA', id: 3},
    {username: 'jack101', country: 'Dubai', id: 4},
  ]);
  const [showUsers, setShowUsers] = useState(true);

  const handleClick = () => {
    setName('Jack');
  }

  const deleteUser = (id) => {
    setUsers((prevUsers)=>{
      return prevUsers.filter((user)=>{
        return user.id !== id;
      })
    })
  }

  return (
    <div className="App">
      <div>
        <h1>Hello, my name is {name}</h1>
        <button onClick={handleClick}>Click To Change Name</button>
      </div>
      <hr />
      {!showUsers && (
        <div>
          <button onClick={() => setShowUsers(true)}>Show Users</button>
        </div>
      )}
      {showUsers && (
        <div>
          <button onClick={() => setShowUsers(false)}>Hide Users</button>
        </div>
      )}
      <div>
        {showUsers && users.map((user)=>(
          <div key={user.id}>
            <h1>User {user.username} just logged in from {user.country}</h1>
            <button onClick={() => deleteUser(user.id)}>Delete User</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
