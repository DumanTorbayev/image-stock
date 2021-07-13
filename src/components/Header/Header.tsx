import React, {ChangeEvent, FC, useEffect, useState} from 'react'
import css from './Header.module.scss'
import {Link} from 'react-router-dom';
import {useWindowSize} from "../../hooks/useWindowSize";
import {BREAKPOINTS} from "../../constants";
import {useDebounce} from "../../hooks/useDebounce";

export const Header: FC = () => {
    const [showSearchBar, setShowSearchBar] = useState(false)
    const [value, setValue] = useState('')
    const {w} = useWindowSize()
    const debouncedValue = useDebounce<string>(value, 500)

    useEffect(() => {
        console.log(value);
    }, [debouncedValue])

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return (
        <header className={css.header}>
            <div className="container">
                <div className={css.header__top}>
                    <Link to="/" className={css.logo}>
                        <img src={`${process.env.PUBLIC_URL}/img/logo.svg`} alt="logo"/>
                        {w > BREAKPOINTS["576"] ? 'ImageStock' : ''}
                    </Link>

                    <div className={css.search} onClick={() => setShowSearchBar(!showSearchBar)}>
                        <img src={`${process.env.PUBLIC_URL}/img/search-icon.svg`} alt=""/>
                        {w > BREAKPOINTS["576"] ? 'Поиск' : ''}
                    </div>

                    <Link to="/favorites" className={css.favorites}>
                        <img src={`${process.env.PUBLIC_URL}/img/heart-icon.svg`} alt="Favorites photo"/>
                        {w > BREAKPOINTS["576"] ? 'Избранное' : ''}
                    </Link>
                </div>

                {
                    showSearchBar &&
                    <div className={css.searchbar}>
                        <input type="text" placeholder="Поиск" onChange={handleSearch}/>
                    </div>
                }
            </div>
        </header>
    );
};