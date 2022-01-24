import React from "react";
import "./Todo.scss";

const TodoHead = () => {
    return (
        <div className="TodoHeadBlock">
            <h1>2022년 1월 24일</h1>
            <div className="day">월요일</div>
            <div className="tasks-left">할 일 2개 남음</div>
        </div>
    )
}

export default TodoHead;