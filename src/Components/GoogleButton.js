import React from "react";
import googleICon from '../Assets/google.png'
import  {GoogleSignButtons} from './styleComponents';

const GoogleSignButton = ({handleSocialLogin}) =>{
  return(
      <GoogleSignButtons onClick={() =>handleSocialLogin()}>
       <img src={googleICon}  alt='googleICon' height={'30px'} width={'30px'} />   
       <span>Sign with Google</span>
      </GoogleSignButtons>
  )

}

export default GoogleSignButton;