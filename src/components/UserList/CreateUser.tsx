import React, { ChangeEventHandler } from "react";

const CreateUser = (props: { username: string; email: string; onChange: ChangeEventHandler<HTMLInputElement>; onCreate: () => void; }) => {
    const { username, email, onChange, onCreate } = props; 

    return (
      <div>
        <input
          name="username"
          placeholder="계정명"
          onChange={onChange}
          value={username}
        />
        <input
          name="email"
          placeholder="이메일"
          onChange={onChange}
          value={email}
        />
        <button onClick={onCreate}>등록</button>
      </div>
    );
}

export default CreateUser;