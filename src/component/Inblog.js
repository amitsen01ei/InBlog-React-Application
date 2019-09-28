import React from 'react';

import Login from './Login';

export default class Inblog extends React.Component {
    render () {
        return (
            <div>
                <Login />
                <a href="/">Signup</a>
            </div>
        );
    }
}