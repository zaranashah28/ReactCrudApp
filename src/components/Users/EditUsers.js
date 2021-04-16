import axios from 'axios';
import React,{useState,useEffect} from 'react'
import {useHistory,useParams} from 'react-router-dom'

const EditUser = () => {
    let history = useHistory();
    const {id} = useParams();
        const [user,setUsers] = useState({
            name:"",
            username:"",
            email:"",
            phone:"",
            website:""
        });

        useEffect(() =>{
            loadUsers();
        },[] )
        

        const {name,username,email,phone,website} = user;
    
    const onInputChange = e =>{
        setUsers({...user,[e.target.name] :e.target.value })
        console.log(e.target.value);
    }

    const onSubmit = async (e) =>{
        e.preventDefault();
        await axios.put(`http://localhost:3001/users/${id}`, user)
        history.push("/")
    }

    const loadUsers = async (e) =>{
      const result =  await axios.get(`http://localhost:3001/users/${id}`)
       setUsers(result.data)
        
        
    }
    return (
        <div className="container">
              <div className="w-75 mx-auto shadow p-5 mt-7">
              <h2 className="text-center mb-4">Edit User</h2>

            <form onSubmit={e => onSubmit(e)}>
            <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
             
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="username"
              value={username}
              onChange={e => onInputChange(e)}

             
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}

              
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={phone}
              onChange={e => onInputChange(e)}

             
           
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Website Name"
              name="website"
              value={website}
              onChange={e => onInputChange(e)}

            
            
            />
          </div>
          <button className="btn btn-warning btn-block">Update User</button>

</form>
</div>
        </div>
    )
}

export default EditUser
