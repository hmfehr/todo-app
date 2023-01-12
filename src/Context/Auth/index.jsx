import React, {useState} from 'react';
import jwtDecode from 'jwt-decode';

export const AuthContext = React.createContext();

const AuthProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);

  const can = (capability) => {
    // note the short hand 
    return user?.capabilities?.includes(capability)
  };

  const _validateToken = (token) =>{
    try {
      let validUser = jwtDecode(token);
      console.log('validUser', validUser);
      if(validUser){
        setUser(validUser);
        setIsLoggedIn(true);
        console.log('I am logged in');
      }
    } catch (e) {
      setError(e);
        console.error(e);
    }
  };

  const login = (username, password) =>{
    let authCrededentials = testUser[username];

    // validate we have the correct answer
    if(authCrededentials && authCrededentials.password === password){
      try{
        _validateToken(authCrededentials.token);
      } catch (e){
        setError(e);
        console.error(e);
      }
    }
  };

  const logout = () => {
    setUser({});
    setIsLoggedIn(false);
  };




  const values = {
user,
isLoggedIn,

  };

  return(
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  )
}