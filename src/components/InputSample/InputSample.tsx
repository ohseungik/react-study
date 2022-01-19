import React, { useState } from "react";

const InputSample = () => {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });

    const { name, nickname } = inputs;

    const onChange = (e: { target: { value: string; name: string; }; }) => {
        const { value, name } = e.target;

        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const onReset = () => {
        setInputs({
            name: '',
            nickname: '',
        })
    }

    return (
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name}/>
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: {`${name} (${nickname})`}</b>
            </div>
        </div>
    )
}

export default InputSample;