import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () => {
    const [users,setUsers] = useState([])
    useEffect(() =>{
      loadUsers();
    },[])

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3001/users")
        setUsers(result.data.reverse())
    }

    return (
        <div className="container">
            <div className="py-4">
                <h1>Home page</h1>

                <table class="table border shadow">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>

    </tr>
  </thead>
  <tbody>
  {
      users.map((user , index ) =>(
          <tr>
              <th scope='row'>{index+1}</th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                  <Link className="btn btn-primary mr-2">View</Link>
                  <Link className="btn btn-outline-primary mr-2">Edit</Link>
                  <Link className="btn btn-danger mr-2">Delete</Link>

              </td>
          </tr>
      ))
  }
  </tbody>
</table>


        </div>

        </div>

    )
}

export default Home
