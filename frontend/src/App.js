import React, {useState, useEffect, Fragment} from "react";
import Axios from "axios";
import Formulario from "./components/Formulario";
import Registros from './components/Registros'

function App() {
  const [newUser,setNewUser] = useState(true)
  const [users,setUsers] = useState([])
  const[user, setUser] = useState({})

  useEffect(()=>{
      const fetchUsers = async () => {
          const items = await Axios.get("http://localhost:4000/api")
          console.log(items.data.users)
          setUsers(items.data.users)
      }
      if(newUser){
        fetchUsers()
        setUsers([...users,user])
        setNewUser(false)
      }
        
  },[users,newUser])

  return (
    <Fragment>
      <div className="App">
        <Formulario 
          setNewUser={setNewUser}
          setUser={setUser}
        />
      </div>
      <div className="container col-md-5 mt-4">
        <Registros
          users={users}
        />
      </div>
    </Fragment>
  );
}

export default App;
