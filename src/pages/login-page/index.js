import React from 'react';
import { useState } from 'react';
import LoginForm from './components/login-form/LoginForm';

const LoginPage = () => {
    // const adminUser = {
    //     email: "admin@email.com",
    //     password: "password123"
    // }

    // const [user, setUser] = useState({name: "", email: "" });
    // const [error, setError] = useState("");

    const login = (details) => {
        console.log(details)
    }

  return (
    <div>
        {/* {(user.email != "") ? ( */}
            {/* <div className="welcome">
                <h2>Welcome, <span>user.name</span></h2>
            </div> */}
            <LoginForm />
        {/* )  */}
        {/* // : (
        //     <LoginForm />
        // )} */}
    </div>
  )
}

export default LoginPage;