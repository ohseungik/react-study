import React, { ReactNode } from "react";
import "./Todo.scss";

const TodoTemplate = (props: { children: ReactNode; }) => {
    const { children } = props;

    return (
        <>
        <div className="TodoTemplateBlock">{children}</div>
        </>
    )
}

export default TodoTemplate;