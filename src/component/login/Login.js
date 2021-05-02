import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import './Login.css'
import firebaseConfig from './firebase.Config';


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const Login = () => {
    //firebase.initializeApp(firebaseConfig);
    const handleGoogleSignIn = () =>{
      var provider = new firebase.auth.GoogleAuthProvider();
     // var provider = new firebase.auth.GithubAuthProvider();
      firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        const signInUser = {
          isSignedIn: true,
          name:"",
          email:"",
          password:""
        }
      
      });
  
    }
    return (
      <form action=""  className="log-are">
         <h2>login</h2>
         <div className="input">
         <label>Name</label>
         <input placeholder="Your name" require></input>
         <label>E-mail</label>
         <input placeholder="Your E-mail" require></input>
         <label>Password</label>
         <input placeholder="Your Password" require></input>
         </div>
         <button onClick={handleGoogleSignIn}>signIn</button>
     
      </form>
    );
};

export default Login;