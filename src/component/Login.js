import React from 'react'
import axios from 'axios';

export default class Login extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();

        const loginData = {};
        loginData.username = e.target.elements.username.value.trim();
        console.log("Username: ", loginData.username);
        loginData.password = e.target.elements.password.value;
        console.log("Password", loginData.password);

        axios.post("http://localhost:7071/login", loginData)
            .then(res => {

                if (res.status === 200) {
                    console.log(res.data);
                }
            })
        
    }

    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name='username' />
                    <input type='password' name='password' />
                    <button>Login</button>
                </form>
            </div>
        );
    }
}