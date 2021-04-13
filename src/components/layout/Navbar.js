import React from 'react'
import {  Link, NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <div>
           <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container">
            <NavLink className="navbar-brand" to="/">React</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item ">
                    <NavLink className="nav-link" exact to="/">Home <span className="sr-only">(current)</span></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" exact to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
                </li>
              
                </ul>
            </div>
            <Link exact to="/users/add" className="btn btn-outline-light">Add User </Link>
            </div>
         
            </nav> 
        </div>
    )
}

export default Navbar
