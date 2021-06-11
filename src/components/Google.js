import React from 'react';
import  GoogleLogin  from 'react-google-login';
import { withRouter} from 'react-router-dom';




function Google({isLogin,handleResponseSuccess,history}){
    console.log(history)
    const responseGoogle = (response) => {
        console.log(response);
        console.log(response.profileObj);
        if(response.accessToken){
            handleResponseSuccess(isLogin)
        }
      }

    return(
        <GoogleLogin
        clientId="290452160697-sae26qv96rc5gujs37p799cma9n0s01t.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        className='google'
        isSignedIn = { true }
      />

    )
}

export default withRouter(Google);
 
