import React, { ChangeEventHandler, useCallback, useContext, useRef } from "react";
import UseInputs from "../Hooks/UseInputs";
import { UserDisaptch } from "./UserList";

const CreateUser = () => {
    const [{ username, email }, onChange, reset] = UseInputs({username: '', email: ''});
    const nextId = useRef(4);
    const dispatch: any = useContext(UserDisaptch);

    const onCreate = useCallback(() => {
      dispatch({
        type: "CREATE_USER",
        user: { id: nextId.current, username, email, active: false },
      });

      reset();
      nextId.current += 1;
    }, [username, email]);

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