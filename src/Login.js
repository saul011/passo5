import React from 'react';
import { useUser } from './UserContext';

const Login = () => {
    const { login } = useUser();

    const handleLogin = () => {
        const userData = { name: 'User Name', email: 'user@example.com' };
        login(userData);
    };

    return (
        <div>
            <h2>Login</h2>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
