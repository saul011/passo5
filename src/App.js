import React from 'react';
import { UserProvider } from './UserContext';
import Login from './Login';
import UserProfile from './UserProfile';

const App = () => {
    return (
        <UserProvider>
            <Login />
            <UserProfile />
        </UserProvider>
    );
};

export default App;
