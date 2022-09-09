import React, { useState, useRef, useEffect, useCallback } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const withoutCallback = useRef(0);
    const withCallback = useRef(0);
    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    const validateWithoutCallback = (data) => {
        console.log(data);
    };
    const validateWithCallback = useCallback((data) => {
        console.log(data);
    }, []);
    useEffect(() => {
        withoutCallback.current++;
    }, [validateWithoutCallback]);
    useEffect(() => {
        withCallback.current++;
     }, [validateWithCallback]);
    useEffect(() => {
        validateWithCallback(data);
        validateWithoutCallback(data);
     }, [data]);
    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>withoutCallback: {withoutCallback.current}</p>
            <p>withCallback: {withCallback.current}</p>
            <label htmlFor="email" className="form-label me-2">Email</label>
            <input type="email" name="email" className="form-control" onChange={handleChange}/>
        </CardWrapper>
    );
};

export default UseCallBackExample;
