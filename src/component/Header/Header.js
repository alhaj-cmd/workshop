import React, { useContext } from 'react';
import UserContext from '../../User';
import logo from '../../images/Urban Riders.png'
import './Header.css';
import { Link } from 'react-router-dom' 

const Header = () => {
    const [user,setUser] = useContext(UserContext);
    console.log(user);
    return (
       <header className="header">
           <div className="container">
               <div className="navber">
                   <div className="logo_img--box">
                       <img src={logo} alt="" className="logo"/>
                   </div>
                   <nav className="navber-nav">
                       
                       <Link className="nav-link" to="/">Home</Link>
                       <Link className="nav-link" to="/">Destination</Link>
                       <Link className="nav-link" to="/">Blog</Link>
                       <Link className="nav-link" to="/">Contact</Link>
                       <Link className="btn-primary"to="Login">Login</Link>

                   </nav>
               </div>
           </div>
       </header>
    );
};

export default Header;