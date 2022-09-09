import React, { useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";

const LogOutButton = ({ onLogOut }) => {
    useEffect(() => {
        console.log("render button");
    });
    return (<button className="btn btn-primary" onClick={onLogOut}>LogOut</button>);
};
LogOutButton.propTypes = {
    onLogOut: PropTypes.func
};

const MemoizedLogOutButton = React.memo(LogOutButton, areEqual);

function areEqual(prevState, nextState) {
    if (prevState.onLogOut === nextState.onLogOut) {
        return true;
    }
    return false;
}

const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false);
    const handleLogOut = useCallback(() => {
        localStorage.removeItem("auth");
    }, [props]);
    return (
        <>
            <MemoizedLogOutButton onLogOut={handleLogOut} />
            <button className="btn btn-primary" onClick={() => setState(!state) }>Set state</button>
        </>
    );
};

export default MemoWithUseCallbackExample;
