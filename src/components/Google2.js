import React from 'react'
import { GoogleLogout } from 'react-google-login';


function Google2({isLogin,handleLogout}){
    return(
        <GoogleLogout
        clientId="290452160697-sae26qv96rc5gujs37p799cma9n0s01t.apps.googleusercontent.com"
        buttonText="Logout"
        onLogoutSuccess={handleLogout}
      >
      </GoogleLogout>
    )
}

export default Google2;