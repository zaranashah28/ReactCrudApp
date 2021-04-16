import React,{useState,useEffect} from 'react'
import { useParams,Link,useHistory } from "react-router-dom";
import axios from 'axios';
const ViewUser = () => {

    const [user,setUsers] = useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:""

    })
    let history = useHistory()

    const {id} = useParams();

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3001/users")
        setUsers(result.data.reverse())
    }

    const deleteUser = async(id) =>{
        await axios.delete(`http://localhost:3001/users/${id}`)
     loadUsers();
     history.push("/")

      alert(`${id} deleted`)
       
   }

    useEffect(() =>{
        loadData();
      },[])

    const loadData = async() =>{
        const result=await axios.get(`http://localhost:3001/users/${id}`)
        setUsers(result.data)
    };

    return (
        <div className="container py-4">
            <h1 className="py-4">View</h1>
<Link exact to ="/"  className="btn btn-primary mb-3 mr-2">Back to home</Link>
<Link exact to ={`/users/edit/${user.id}`} className="btn btn-warning mb-3 mr-2">Edit User</Link>
<Link exact to onClick={() => deleteUser(user.id)}  className="btn btn-danger mb-3">Delete User</Link>


         <ul class="list-group">
        <li class="list-group-item ">{user.name}</li>
    <li class="list-group-item">{user.username}</li>
    <li class="list-group-item">{user.email}</li>
    <li class="list-group-item">{user.phone}</li>
    <li class="list-group-item">{user.website}</li>
        </ul>
        </div>
    )
}

export default ViewUser
