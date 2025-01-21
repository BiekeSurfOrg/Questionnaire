import React from 'react';
import { useNavigate } from "react-router-dom";


const Card = ({ text, route }) => {
    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(path);
    }
    return (
        <div className="card" onClick={() => routeChange(route)}>
            {text}
        </div>
    );
};

export default Card;