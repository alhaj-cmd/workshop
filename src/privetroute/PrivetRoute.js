import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import {UserContext} from '../App';

const PrivetRoute = ({ children, ...rest }) => {
    const [loggedInUser,setLoggedInUser] =useContext(UserContext);
    console.log(loggedInUser);
    return (
        <Route 
        { ...rest }
        render={({location}) =>
        loggedInUser.email ? (
            children
        ) : (
            <Redirect to={{
                pathname:"/login",
                state:{from:location}
            }}
            />
        )
    }
        />
    );
};

export default PrivetRoute;


// const PrivetRoute = ({ children, ...rest }) => {
//     const [user,setUser] =useContext(UserContext);
//     return (
//         <Route
//       {...rest}
//       render={({ location }) =>
//       user.email  ? (
//           children
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/login",
//               state: { from: location }
//             }}
//           />
//         )
//       }
//     />
//     )
// };

// export default PrivetRoute;