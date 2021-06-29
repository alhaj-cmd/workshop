import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import './Login.css'
import firebaseConfig from './firebase.Config';
import { UserContext } from '../../App';


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
//const [loggedInUser,setLoggedInUser] = useContext(UserContext);

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
     // setLoggedInUser(newUserInfo);
      });
  
    }
    return (
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
         
         <button onClick={handleGoogleSignIn}>signIn</button>
    
       </form> 
    );
};

export default Login;
// import React, { useContext } from 'react';
// import { UserContext } from '../../App';
// import firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from './firebase.Config';


// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// } else {
//   firebase.app(); // if already initialized, use that one
// }

// const Login = () => {
// const [user,setUser] = useContext(UserContext);
//   const provider = new firebase.auth.GoogleAuthProvider();
//   const handleGoogleSignIn = () => {
//     firebase.auth()
//     .signInWithPopup(provider)
//     .then((result) => {
//       /** @type {firebase.auth.OAuthCredential} */
//       var credential = result.credential;
//       var token = credential.accessToken;
//       var user = result.user;
// setUser(user)
//     }).catch((error) => {
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       var email = error.email;
//       var credential = error.credential;
     
//     });
//   }
//   return (
//     <div>
//        <button onClick={handleGoogleSignIn}>signIn</button>
    
//     </div>
//   );
// };

// export default Login;