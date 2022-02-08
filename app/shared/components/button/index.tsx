import React from "react";

interface IProps {
    label: string,
    type?: 'button' | 'submit';
    callback?: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Button({ label, type, callback }: IProps) {
    if (!type) {
        type = 'submit';
    }
    return (
        <button type={type} onClick={() => callback ? callback(true) : null} className="button">
            <div className="pointer button--inner">
                <p>{label}</p>
            </div>
        </button>
    )
}