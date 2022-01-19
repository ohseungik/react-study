import React from "react";

const Hello = (props: { name: String; }) => {
    const { name } = props;
    const hello = "안녕하세요.";

    return (
        <>
            <div>{name}</div>
            <div>{hello}</div>
        </>
    )
}

export default Hello;