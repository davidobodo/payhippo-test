import React, { Children } from "react";

import "./CustomButton.scss";

const CustomButton = ({ type = "submit", onClick, children, disabled }) => {
    return (
        <button className="btn btn-blue" type={type} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};

export default CustomButton;
