import React, { useCallback, useEffect, useReducer, useState } from "react";
import axios from 'axios';

interface user {
    id: string,
    username: string,
    name: string
}

const UserReducer = (state: any, action: { type: any; data: any; error: any; }) => {
    switch (action.type) {
        case 'LOADING':
            return {
                loading: true,
                data: null,
                error: null
            }
        case 'SUCCESS':
            return {
                loading: false,
                data: action.data,
                error: null
            }
        case 'ERROR':
            return {
                loading: false,
                data: null,
                error: action.error
            }
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

const Users = () => {
    const [state, dispatch] = useReducer(UserReducer, {
        loading: false,
        data: null,
        error: null
    })

    const fetchUsers = useCallback(async () => {
        try {
            dispatch({ type: 'LOADING', data: null, error: null });
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            dispatch({ type: 'SUCCESS', data: response.data, error: null });
        } catch (e: any) {
            dispatch({ type: 'ERROR', data: null, error: e });
        }
    }, []);

    useEffect(() => {
        fetchUsers();
    }, []);

    const { loading, data: users, error } = state;

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

