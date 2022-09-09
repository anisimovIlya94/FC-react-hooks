import React, { useState, useEffect, useRef } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";

const PrevStateExample = () => {
    const prevStateRef = useRef("");
    const [otherState, setOtherState] = useState("false");
    useEffect(() => {
        prevStateRef.current = otherState;
    }, [otherState]);
    const toggleOtherState = () => {
        setOtherState((prevState) => prevState === "false" ? "true" : "false");
    };
    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <Divider />
            {<p>Предыдущее состояние: {prevStateRef.current}</p>}
            {<p>Следующее состояние: {otherState}</p>}
            <button className="btn btn-primary" onClick={toggleOtherState}>Изменить состояние</button>
        </CardWrapper>
    );
};

export default PrevStateExample;
