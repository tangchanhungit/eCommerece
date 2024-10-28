import React, {useState, useEffect} from 'react'
import { getUser } from '../Api';
import AdminLayout from '../Layouts/AdminLayout';

export default function Home ({userId}) {
  const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await getUser(userId);
                setUser(response.data); // Assuming the user data is in response.data
            } catch (err) {
                setError(err); // Handle any errors
                console.error('Error fetching user:', err);
            }
        };

        fetchUser();
    }, [userId]);

    if (error) {
        return <div>Error loading user: {error.message}</div>;
    }

    if (!user) {
        return <div>Loading...</div>; // Show a loading state while fetching
    }
    

    return (
        <div>
            <AdminLayout userName = {user.name}>
            </AdminLayout>   
        </div>
    );
};


