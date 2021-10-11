import React,{useState , useEffect} from 'react'
import logo from '../../img/apay.jpeg'

const image = {
    height: '150px',
    width: '150px',
    position : 'center',
    borderRadius: '20%'
  }

const Header = () => {
    return (
        <header 
        className='center'>
            <img style={image} src={logo} alt='amazon'/>
        </header>
    )
}

export default Header
