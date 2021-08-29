##  [Auth0](https://auth0.com/) one of the easiet solution for authentication here is a code short about how you cann authenticate using react and react hooks.
 NOTE : you have to first sign up at auth0 then have to create a .env file where you have to put your domain name and client id inside a variable then in const domain and clientId has to call them to work. Don't put the string right away in your code if you're trying to make your site/code public .
```javascript
import React from 'react';
import {Auth0Provider, useAuth0 } from '@auth0/auth0-react';

const domain = env.  //domain name provided by Auth0 . make sure to read it from your .env file 

const clientId =  env.  //client ID provided by Auth 0 . make sure to read it from your .env file

const Button = () => {
  const { loginWithRedirect ,logout , isAuthenticated } = useAuth0() ; // useAuth hooks for login button I think variables are self descriptory
  return (isAuthenticated)?(
        <button onClick={() => logout()}>Log Out
          </button>):(<button onClick={ ()=>loginWithRedirect()}>
          Login</button>);
  //if not authenticated show render login button , if authenticated render Login button if not render logout button
}

const Post = () => {
  const { user , isAuthenticated } = useAuth0() ;
  return (isAuthenticated)?(
    <>
    <div>{JSON.stringify(user)}</div>
    <p><iframe width="718" height="404" src="https://www.youtube.com/embed/iik25wqIuFo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></p>;
    </>
    //if  authenticated give us the user information and rickroll him
  ):<h1>Hello please login</h1>
    //if not please tell him to login
}

const App = () => {
  return ( 
    <Auth0Provider
    domain={domain} //enter your domain parameter here
    clientId={clientId} //enter your client id here
    redirectUri = {window.location.origin} //enter the location where you want to redirect the user
    >
    <Button /> //add the elements
    <Post />
    </Auth0Provider>     
  )
}


export default App;

```
