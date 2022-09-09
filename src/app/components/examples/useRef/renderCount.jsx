import React, { useState, useEffect, useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const RenderCountExample = () => {
    const renderRef = useRef(0);
    const [otherState, setOtherState] = useState(false);
    useEffect(() => {
        renderRef.current++;
    });
    const toggleOtherState = () => {
        setOtherState(!otherState);
    };
    return (
        <CardWrapper>
            <SmallTitle>Подсчет количества рендеров</SmallTitle>
            <Divider />
            {<p>Количество рендеров: {renderRef.current}</p>}
            <button className="btn btn-primary" onClick={toggleOtherState}>Render</button>
        </CardWrapper>
    );
};

export default RenderCountExample;
