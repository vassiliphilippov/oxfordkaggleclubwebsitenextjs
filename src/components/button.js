import React from 'react';

const Button = ({ text, onClick, icon, className }) => {
    return (
        <button
        className={`${className}`}
            onClick={onClick}
        >
            {text} &nbsp; {icon}
        </button>
    );
};

export default Button;
