import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import UserContext from '../User';

const PrivetRoute = ({ children, ...rest }) => {
    const [user,setUser] =useContext(UserContext);
    //console.log(user)
    return (
        <Route 
        { ...rest }
        render={({location}) =>
        user.isLoggedIn ? (
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