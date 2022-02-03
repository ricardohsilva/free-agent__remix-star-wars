import React from "react";

interface IProps {
    label: string,
    callback: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Button({ label, callback }: IProps) {
    return (
        <div onClick={() => callback(true)} className="button">
            <div className="pointer button--inner">
                <p>{label}</p>
            </div>
        </div>
    )
}