import React, { useEffect, useRef, useState } from 'react';
import arrowDown from '~/assets/svg/arrow-down.svg';

interface IOption {
    name: string;
    value: string;
}

interface IProps {
    label: string;
    options: IOption[];
    onSelect: React.Dispatch<React.SetStateAction<string>>;
}

export default function Select({ label, onSelect, options }: IProps) {
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const searchRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleClickOutside = (event: any): void => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setIsOpened(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [searchRef]);

    const handleSelect = (option: IOption) => {
        setIsOpened(false);
        onSelect(option.value)
    }

    return (
        <div>
            <div className='select'>
                <p className="sm">{label}:</p>
                <div onClick={() => setIsOpened(true)} className="pointer select--image-container">
                    <img className='select--image-container--image' src={arrowDown} alt="Arrow Down" />
                </div>
                {isOpened &&
                    <div ref={searchRef} className='select--list-container'>
                        <ul className='select--list-container--ul'>
                            {options.map((option) =>
                                <li key={Math.random()} onClick={() => handleSelect(option)} className='select--list-container--ul--li pointer'>
                                    <p className='sm select--list-container--ul--li--text'>{option.name}</p>
                                </li>
                            )}
                        </ul>
                    </div>
                }
            </div>
        </div>
    )
}
