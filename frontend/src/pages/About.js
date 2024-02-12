import { useEffect, useState } from "react"
import axios from 'axios'


export default function About() {
  const [data, setData] = useState([])
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };
  

  useEffect(()=>{
    axios.get('http://localhost:8000/objavi')
    .then(data => setData(data.data))
    .catch(err => console.log(err))
  }, [])
  const reversedData = data.slice().reverse(); 
  return (
    
  <div className="image-container">
  {reversedData.map((user, index) => {
    return (
      <div key={index} className="user-container" onClick={() => handleUserClick(user)}>
        <div className="user-info">
          <h2>{user.title}</h2>
          <p>{user.subtitle}</p>
          <h4 className="tekst">{user.text}</h4>
        </div>
        <div className="user-image">
          <img
            src={require(`../../../backend/public/Images/${user.file}`)}
            alt={user.file}
            height={200}
            width={200}
          />
        </div>
      </div>
    );
  })}
   {selectedUser && (
        <div className="popup">
          <div className="popup-content">
            <h2>{selectedUser.title}</h2>
            <p>{selectedUser.subtitle}</p>
            <p>{selectedUser.text}</p>
            <div className="user-image">
            <img
            src={require(`../../../backend/public/Images/${selectedUser.file}`)}
            alt={selectedUser.file}
            height={100}
            width={100}
          />
        </div>
            <button onClick={() => setSelectedUser(null)}>Zatvori</button>
          </div>
        </div>
      )}
</div>
          
          
  )
}
