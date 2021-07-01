import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import './Login.css'
import firebaseConfig from './firebase.Config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
firebase.initializeApp(firebaseConfig);

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };


  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  var provider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {

        var credential = result.credential;
        var token = credential.accessToken;
        var { displayName, photoURL, email } = result.user;
        const signInUser = { name: displayName, photoURL, email }
        setLoggedInUser(signInUser)
        history.replace(from);
        //console.log( signInUser)
      }).catch((error) => {
        console.log(error);
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;

      });


  }
  return (
    <>
    <form action=""  className="log-are">
               <h2>login</h2>
         <div className="input">
                 <div className="right">
               <label>Name</label>
               <input className="area" placeholder="Your name" require></input>
               </div>
               <div className="right">
               <label>E-mail</label>
               <input className="area" placeholder="Your E-mail" require></input>
               </div>
               <div className="right">
               <label>Password</label>
               <input className="area" placeholder="Your Password" require></input>
               </div>
               </div> 
    
             
    
             </form> 


    <div>

      <button onClick={handleGoogleSignIn}>signIn</button>

   </div>
   </>

  );
};

export default Login;
 // 

