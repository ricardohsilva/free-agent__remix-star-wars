import { useEffect, useRef, useState } from 'react';
import { db } from '~/shared/services/db.server';
import { LoaderFunction, useLoaderData, useMatches } from 'remix';

import { useAppDispatch, useAppSelector } from '~/shared/store/hooks';
import { openCloseSearch, selectSearch } from '~/shared/store/search/search.slice';
import { IToy } from '~/shared/interfaces/toy.interface';

import SearchItem from './search-item';

import searchSvg from '~/assets/svg/search.svg';
import closeSvg from '~/assets/svg/close.svg';


export default function Search() {
    const matches = useMatches();
    const [searchedToys, setSearchedToys] = useState<IToy[]>([]);
    const searchRef = useRef<HTMLDivElement>(null);
    const dispatch = useAppDispatch();

    useEffect(() => {
        matches.forEach((match) => {
            if (match.data) {
                setSearchedToys(match.data.toys)
            }
        })
    }, []);

    console.log(searchedToys)

    // Subscribe to Store Search.
    const { isOpened } = useAppSelector(selectSearch);


    useEffect(() => {
        const handleClickOutside = (event: any): void => {
            if (searchRef.current && searchRef.current.contains(event.target)) {
                dispatch(openCloseSearch(false));
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [searchRef]);

    return (
        <>
            {isOpened &&
                <div>
                    <div ref={searchRef} className='search-overlay'></div>
                    <div className='search'>
                        <div className="search--wrapper">
                            <form className="search--wrapper--form">
                                <img className="search--wrapper--form--svg" src={searchSvg} alt="search" />
                                <input className='search--wrapper--form--input' placeholder="What are you looking for?" />
                                <img onClick={() => dispatch(openCloseSearch(false))} className='pointer search--wrapper--form--svg-close' src={closeSvg} alt="close" />
                            </form>
                            <div className='search--wrapper--divider'>.</div>
                            {searchedToys.map(item =>
                                <SearchItem key={item.id} toy={item} />
                            )}
                        </div>
                    </div>
                </div>
            }
        </>
    )
}