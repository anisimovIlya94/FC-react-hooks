import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";
const ProgrammableActionsExample = () => {
    const inputRef = useRef();
    const handleClick = () => {
        inputRef.current.focus();
    };
    const toggleWidth = () => {
        inputRef.current.style.width = "100px";
     };
    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label htmlFor="email" className="form-label me-2">Email</label>
            <input type="email" className="form-control" ref={inputRef} />
            <button className="btn btn-primary" onClick={handleClick}>Фокус</button>
            <button className="btn btn-secondary" onClick={toggleWidth}>Изменить ширину</button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
