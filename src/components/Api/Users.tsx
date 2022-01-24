import React, { useCallback, useEffect, useState } from "react";
import axios from 'axios';

interface user {
    id: string,
    username: string,
    name: string
}

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchUsers = useCallback(async () => {
        try {
            setError(null);
            setUsers([]);
            setLoading(true);
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data);
        } catch (e: any) {
            setError(e);
        }

        setLoading(false);
    }, []);

    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) return <div>로딩중...</div>;
    if (error) return <div>에러가 발생했습니다.</div>;
    if (!users) return null;

    return (
        <>
        <ul>
            {users.map((user: user) => (
                <li key={user.id}>
                    {user.username} ({user.name})
                </li>
            ))}
        </ul>
        <button onClick={fetchUsers}>다시 불러오기.</button>
        </>
        
    )
}


export default Users;

