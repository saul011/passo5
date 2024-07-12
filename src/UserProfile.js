import React from 'react';
import { useUser } from './UserContext';

const UserProfile = () => {
    const { user, logout } = useUser();

    return (
        <div>
            <h2>User Profile</h2>
            {user ? (
                <div>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <p>No user logged in</p>
            )}
        </div>
    );
};

export default UserProfile;
