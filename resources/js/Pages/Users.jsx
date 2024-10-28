import React, { useEffect, useState } from 'react';
import { getUsers } from '../Api';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch users from the API
    const fetchUsers = async () => {
        try {
            const response = await getUsers();
            setUsers(response.data);
        } catch (error) {
            alert('Error fetching users. Please try again later.');
        } finally{
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h2>User List</h2>
            {users.length === 0 ? (
                <p>No users found or there might be an issue fetching data</p>
            ) : (
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            {user.name} - {user.email}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Users;
