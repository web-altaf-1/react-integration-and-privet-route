import React from 'react';

const Login = () => {

    return (
        <div>
            <h3>Please login</h3>
            <div style={{margin:'20px'}}>
                <button>Sign in with Google</button>
            </div>
            <form >
                <input type="email" name="" id="" placeholder='Your Email' />
                <br />
                <input type="password" name="" id="" placeholder='Password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;