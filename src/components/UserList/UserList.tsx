import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import CreateUser from "./CreateUser";

type user = {
    id: number,
    username: string,
    email: string,
    active: boolean
}

const UserList = () => {
    const countActiveUsers = (users: { id: number; username: string; email: string; active: boolean; }[]) =>  {
      return users.filter((user: user) => user.active).length;
    }

    const User = (props: { user: user; }) => {
        const { user } = props;

        useEffect(() => {
          return () => {
          } 
        }, [user]);

        return (
            <div>
                <b style={{cursor: "pointer", color: user.active ? 'green' : 'black'}} onClick={() => onToggle(user.id)}>{user.username}</b> <span>{user.email}</span>
                <button onClick={() => { onRemove(user.id) }}>삭제</button>
            </div>
        )
    }

    const [inputs, setInputs] = useState({
        username: '',
        email: ''
    });

    const { username, email } = inputs;

    const onChange = useCallback((e: { target: { name: string; value: string; }; }) => {
        const { name, value } = e.target;

        setInputs({
            ...inputs,
            [name]: value
        });
    }, [inputs]);

    const [users, setUsers] = useState([
      {
        id: 1,
        username: "velopert",
        email: "public.velopert@gmail.com",
        active: true,
      },
      {
        id: 2,
        username: "tester",
        email: "tester@example.com",
        active: false
      },
      {
        id: 3,
        username: "liz",
        email: "liz@example.com",
        active: false
      },
    ]);

    const nextId = useRef(4);

    const onCreate = useCallback(() => {
        const user = {
            id: nextId.current,
            username,
            email,
            active: false
        }

        setUsers([...users, user]);
        setInputs({
            username: '',
            email: ''
        })

        nextId.current += 1;
    }, [users, username, email]);

    const onRemove = useCallback((id: number) => {
        setUsers(users.filter(user => user.id !== id))
    }, [users]);

    const onToggle = useCallback((id: number) => {
        setUsers(users.map(user => user.id === id ? {...user, active: !user.active } : user))
    }, [users]);

    const count = useMemo(() => countActiveUsers(users), [users]);

    return (
      <div>
        <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/> 
        {users.map((user, index) => (
          <User user={user} key={user.id} />
        ))}
        <div>활성사용자 수 : {count}</div>
      </div>
    );
}

export default UserList;