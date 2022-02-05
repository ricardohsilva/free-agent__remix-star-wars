import { useEffect, useRef, useState } from 'react';
import { db } from '~/shared/services/db.server';
import { ActionFunction, Form, LoaderFunction, useFetcher, useLoaderData, useMatches, useNavigate, useSubmit } from 'remix';

import { useAppDispatch, useAppSelector } from '~/shared/store/hooks';
import { shouldOpenSearch, selectSearch } from '~/shared/store/search/search.slice';
import { IToy } from '~/shared/interfaces/toy.interface';

import SearchItem from './search-item';
import closeSvg from '~/assets/svg/close.svg';

export let action: ActionFunction = async ({ params }) => {
    console.log('Action Search?')
}

export const loader: LoaderFunction = async ({ request }) => {
    console.log('Loader search')
}

export default function Search() {
    const searchRef = useRef<HTMLDivElement>(null);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const fetcher = useFetcher();



    const onSearch = (value: string) => {
        fetcher.submit({ name: value }, { method: 'get', action: '/' });
    }

    // Subscribe to Store Search.
    const { isOpened } = useAppSelector(selectSearch);

    useEffect(() => {
        const handleClickOutside = (event: any): void => {
            if (searchRef.current && searchRef.current.contains(event.target)) {
                dispatch(shouldOpenSearch(false));
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [searchRef]);

    const onSelectSearch = (toy: IToy) => {
        navigate(`/${toy.id}`, { replace: true });
        dispatch(shouldOpenSearch(false));
    }

    return (
        <>
            {isOpened &&
                <div>
                    <div ref={searchRef} className='search-overlay'></div>
                    <div className='search'>
                        <div className="search--wrapper">
                            <Form method="get" className="search--wrapper--form">
                                <input onChange={(event) => onSearch(event.target.value)} className='search--wrapper--form--input' placeholder="What are you looking for?" />
                                <img onClick={() => dispatch(shouldOpenSearch(false))} className='pointer search--wrapper--form--svg-close' src={closeSvg} alt="close" />
                            </Form>
                            <div className='search--wrapper--divider'>.</div>
                            {fetcher.state === "idle" && fetcher.data?.toys.map((item: IToy) =>
                                <SearchItem key={item.id} toy={item} callback={() => onSelectSearch(item)} />
                            )}
                        </div>
                    </div>
                </div>
            }
        </>
    )
}