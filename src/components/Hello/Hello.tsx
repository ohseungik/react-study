import React from "react";

type Color = 'red';

const Hello = (props: { name: String, color: Color, isSpecial: Boolean; }) => {
    const { name, color, isSpecial } = props;
    const hello = "안녕하세요.";

    return (
        <>
            <div style={{color: color}}>
                { isSpecial ? <b>*</b> : null }
                {name}
            </div>
            <div>{hello}</div>
        </>
    )
}

Hello.defaultProps = {
    name: "기본이름",
    isSpecial: false
}

export default Hello;