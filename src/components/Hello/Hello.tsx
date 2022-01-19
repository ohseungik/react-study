import React from "react";

type Color = 'red';

const Hello = (props: { name: String, color: Color; }) => {
    const { name, color } = props;
    const hello = "안녕하세요.";

    return (
        <>
            <div style={{color: color}}>{name}</div>
            <div>{hello}</div>
        </>
    )
}

export default Hello;