import React, { ReactNode } from "react";
import "./Wrapper.scss";

const Wrapper = (props: { children: ReactNode; }) => {
    const { children } = props;

    return (
        <div className="WrapperStyle">
            {children}
        </div>
    )
}

export default Wrapper;