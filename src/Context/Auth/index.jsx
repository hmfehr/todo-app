import React, {useEffect, useState} from 'react';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import cookie from 'react-cookies';

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
      // console.log('validUser', validUser);
      if(validUser){
        setUser(validUser);
        setIsLoggedIn(true);
        cookie.save('auth', token);
        cookie.remove('auth');
      }
    } catch (e) {
      setError(e);
        console.error(e);
    }
  };

  const login = async (username, password) =>{
     const config = {
      url: '/signin',
      baseURL: `https://api-js401.herokuapp.com`,
      method: 'post',
      auth: {
        username,
        password,
      }
    }
    const response = await axios(config);
    const {token} = response.data;

    if(token){
      try{
        _validateToken(token);
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

  useEffect(() => {
    let token = cookie.load('auth');
    if(token){
      _validateToken(token);
    } 
  }, []);

  const values = {
user,
isLoggedIn,
error,
can,
login,
logout,
  };

  return(
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  )
};

export default AuthProvider;