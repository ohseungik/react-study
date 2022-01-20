import React, { useCallback, useEffect, useMemo, useRef, useReducer, createContext } from "react";
import UseInputs from "../Hooks/UseInputs";
import CreateUser from "./CreateUser";

type user = {
    id: number,
    username: string,
    email: string,
    active: boolean
}

export const UserDisaptch = createContext(null);

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
            ...state,
            users: state.users.map((user: { id: string; active: boolean; }) => 
              user.id === action.id ? { ...user, active: !user.active } : user
            )
          }

        case 'REMOVE_USER':
          return {
            ...state,
            users: state.users.filter((user: { id: string; }) => user.id !== action.id)
          }
        default:
          return state;
      }
    }

    const [state, dispatch]: any = useReducer(reducer, initialState);

    const { users } = state;

    const User = React.memo((props: { user: user; }) => {
        const { user } = props;

        useEffect(() => {
          return () => {
          } 
        }, [user]);

        return (
            <div>
                <b style={{cursor: "pointer", color: user.active ? 'green' : 'black'}} onClick={() => dispatch({type: 'TOGGLE_USER', id: user.id})}>{user.username}</b> <span>{user.email}</span>
                <button onClick={() => {  dispatch({type: 'REMOVE_USER', id: user.id}); }}>삭제</button>
            </div>
        )
    })

    const count = useMemo(() => countActiveUsers(users), [users]);

    return (
      <div>
        <UserDisaptch.Provider value={dispatch}>
            <CreateUser/> 
            {users.map((user: { id: any; username: any; email: any; active: any; }, index: any) => (
              <User user={user} key={user.id} />
            ))}
            <div>활성사용자 수 : {count}</div>
        </UserDisaptch.Provider>
      </div>
    );
}

export default UserList;
