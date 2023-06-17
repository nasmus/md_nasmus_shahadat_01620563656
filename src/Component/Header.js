import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Header.css'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DehazeIcon from '@mui/icons-material/Dehaze';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
  return (
    <div className='header'>
        <div className='header__left'>
        <Link to='/' >
            <img
            className="header__icon"
            src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
            alt=""
            />
        </Link>
        </div>
        
        <div className='header__center'>
            <input placeholder='Start your search' type="text" />
            <SearchIcon />
        </div>

        <div className='header__right'>
            <div className='airban'>
                <a href=''>Airbun your home</a>
            </div>
            <div className='icon'>
                <LanguageIcon />
            </div>
            <div className='two_icon'>
                <DehazeIcon />
                <AccountCircleIcon className='big' />
            </div>
        </div>
    </div>
  )
}

export default Header