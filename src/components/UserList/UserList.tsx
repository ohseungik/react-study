import React, { useCallback, useEffect, useMemo, useRef, useReducer } from "react";
import UseInputs from "../Hooks/UseInputs";
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

    const initialState = {
      users: [
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
      ]
    };

    const reducer = (state: any, action: any) => {
      switch (action.type) {
        case 'CREATE_USER':
          return {
            users: [...state.users, action.user]
          }

        case 'TOGGLE_USER':
          return {
            users: state.users.map((user: { id: string; active: boolean; }) => 
              user.id === action.id ? { ...user, active: !user.active } : user
            )
          }

        case 'REMOVE_USER':
          return {
            users: state.users.filter((user: { id: string; }) => user.id !== action.id)
          }
        default:
          return state;
      }
    }

    const [state, dispatch] = useReducer(reducer, initialState);
    const nextId = useRef(4);

    const { users } = state;
    const [{ username, email }, onChange, reset] = UseInputs({username: '', email: ''});

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

    const onCreate = useCallback(() => {
        dispatch({type: 'CREATE_USER', user: {id: nextId.current, username, email, active: false}});

        reset();
        nextId.current += 1;
    }, [username, email]);

    const onRemove = useCallback((id: number) => {
        dispatch({type: 'REMOVE_USER', id});
    }, []);

    const onToggle = useCallback((id: number) => {
        dispatch({type: 'TOGGLE_USER', id});
    }, []);

    const count = useMemo(() => countActiveUsers(users), [users]);

    return (
      <div>
        <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/> 
        {users.map((user: { id: any; username: any; email: any; active: any; }, index: any) => (
          <User user={user} key={user.id} />
        ))}
        <div>활성사용자 수 : {count}</div>
      </div>
    );
}

export default UserList;
