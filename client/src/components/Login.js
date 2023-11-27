import { GoogleLogin } from "react-google-login";
import React from "react";

const clientId =
  "8758465897-3grpik8l0u7mhcta0br8ksg1e14dqor6.apps.googleusercontent.com";

function Login() {
  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        // onSuccess={onSuccess}
        // onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}
export default Login;
