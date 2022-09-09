import React, { useState, useMemo } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}
function runFactorial(n) {
    console.log("run factorial");
    return factorial(n);
}
const ComplexCalculateExample = () => {
    const [value, setValue] = useState(100);
    const [otherState, setOtherState] = useState(false);
    const fact = useMemo(() => runFactorial(value), [value]);
    const handleIncrement = (n) => {
        setValue((prevState) => prevState + n);
    };
    const handleDecrement = (n) => {
        setValue((prevState) => prevState - n);
    };
    const buttonColor = otherState ? "btn-secondary" : "btn-primary";
    const toggleOtherState = () => {
        setOtherState(!otherState);
    };
    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                {<p>Value: {value} </p>}
                {<p>Result: {fact} </p>}
                <button onClick={() => handleIncrement(10)} className="btn btn-primary">Increment</button>
                <button onClick={() => handleDecrement(10)} className="btn btn-primary">Decrement</button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <button className={"btn " + buttonColor} onClick={toggleOtherState}>Изменить цвет</button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
