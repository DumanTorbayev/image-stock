import React, {ChangeEvent, FC, useEffect, useRef, useState, MouseEvent} from 'react'
import css from './Header.module.scss'
import {Link, useLocation} from 'react-router-dom';
import {useWindowSize} from "../../hooks/useWindowSize";
import {BREAKPOINTS} from "../../constants";
import {useDebounce} from "../../hooks/useDebounce";
import { useHistory } from "react-router-dom";
import {LocationType} from "../../types/location";

export const Header: FC = () => {
    const [showSearchBar, setShowSearchBar] = useState<boolean>(false)
    const [value, setValue] = useState<string>('')
    const {w} = useWindowSize()
    const debouncedValue = useDebounce<string>(value, 1000)
    const history = useHistory()
    const location = useLocation<LocationType>()
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if(location.pathname !== '/search') {
            setShowSearchBar(false)
        }
    }, [location.pathname])

    useEffect(() => {
        if(value !== '') {
            history.push({
                pathname: '/search',
                search: value
            })
        }
    }, [debouncedValue])

    const handleShowSearchBar = (e: MouseEvent<HTMLDivElement>) => {
        setShowSearchBar(!showSearchBar)
    }

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

                    <div className={css.search} onClick={handleShowSearchBar}>
                        <img src={`${process.env.PUBLIC_URL}/img/search-icon.svg`} alt=""/>
                        {w > BREAKPOINTS["576"] ? 'Search' : ''}
                    </div>

                    <Link to="/favorites" className={css.favorites}>
                        <img src={`${process.env.PUBLIC_URL}/img/heart-icon.svg`} alt="Favorites photo"/>
                        {w > BREAKPOINTS["576"] ? 'Favorites' : ''}
                    </Link>
                </div>
                {
                    showSearchBar &&
                    <div className={css.searchbar}>
                        <input autoFocus={true} ref={inputRef} type="text" placeholder="Search" onChange={handleSearch}/>
                    </div>
                }
            </div>
        </header>
    )
}