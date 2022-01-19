import React, { useState, useRef } from "react";

const InputSample = () => {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });

    const nameInput = useRef<HTMLInputElement>(null);

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

        nameInput.current?.focus();
    }

    return (
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput}/>
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: {`${name} (${nickname})`}</b>
            </div>
        </div>
    )
}

export default InputSample;