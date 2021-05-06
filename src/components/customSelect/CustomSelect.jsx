import React from "react";
import Select from "react-select";

const CustomSelect = ({ options, onChange, value, placeholder }) => {
    const customStyles = {
        valueContainer: (provided, state) => ({
            ...provided,
            padding: "0px 15px"
        }),
        input: (provided, state) => ({
            ...provided,
            padding: "0px",
            margin: "0px"
        }),
        option: (provided, state) => ({
            ...provided,
            cursor: "pointer",
            paddingLeft: "15px"
        }),
        control: () => ({
            border: "1px solid #cdd1de",
            display: "flex",
            height: "50px",
            borderRadius: "5px",
            backgroundColor: "#fff",
            cursor: "pointer"
        }),
        placeholder: (provided, state) => ({
            ...provided,
            transform: "translateY(0px)",
            position: "static",
            top: "0px"
        }),
        indicatorSeparator: () => ({
            width: "0px"
        }),
        dropdownIndicator: (provided, state) => ({
            ...provided,
            paddingRight: "15px"
        }),
        menu: (provided, state) => {
            return {
                ...provided,
                padding: "0px",
                margin: "0px",
                borderRadius: "0px 0px 5px 5px",
                transform: "translateY(-5px)",
                boxShadow: "0px",
                border: "1px solid #cdd1de",
                borderTop: "0px"
            };
        },
        singleValue: (provided, state) => ({
            ...provided,
            opacity: state.isDisabled ? 0.5 : 1,
            transition: "opacity 300ms",
            transform: "translateY(0px)",
            position: "static",
            top: "0px",
            cursor: "pointer"
        })
    };

    return <Select styles={customStyles} options={options} onChange={onChange} value={value} placeholder={placeholder} />;
};

export default CustomSelect;
