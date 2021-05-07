import React from "react";
import "./CustomInput.scss";

const CustomInput = ({ type = "text", placeholder, handleChange, value, handleBlur, name, id, error, touched }) => {
    return (
        <div className="input-wrapper">
            <input
                type={type}
                placeholder={placeholder}
                className={touched && error ? "input-field error" : "input-field"}
                onChange={handleChange}
                value={value}
                onBlur={handleBlur}
                name={name}
                id={id}
            />
            {touched && error ? <h5 className="error-message">{error}</h5> : null}
        </div>
    );
};

export default CustomInput;
