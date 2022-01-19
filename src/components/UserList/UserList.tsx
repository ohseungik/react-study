import React from "react";

type user = {
    username: string,
    email: string
}

const UserList = () => {
    const User = (props: { user: user; }) => {
        const { user } = props;
        return (
            <div>
                <b>{user.username}</b> <span>{user.email}</span>
            </div>
        )
    }

    const users = [
        {
          id: 1,
          username: 'velopert',
          email: 'public.velopert@gmail.com'
        },
        {
          id: 2,
          username: 'tester',
          email: 'tester@example.com'
        },
        {
          id: 3,
          username: 'liz',
          email: 'liz@example.com'
        }
    ];

    return (
      <div>
        {users.map((user, index) => (
          <User user={user} key={user.id} />
        ))}
      </div>
    );
}

export default UserList;