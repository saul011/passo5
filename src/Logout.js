import React from 'react';
import { useUser } from './UserContext';

const Logout = () => {
    const { logout } = useUser();

    const handleLogout = () => {
        // Implementar a lógica de logout, por exemplo, limpar o estado do usuário
        logout();
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
};

export default Logout;
