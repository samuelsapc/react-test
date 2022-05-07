import React from 'react';
import logoImg from '../images/logo.png';
import './styles/Header.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsPersonFill } from 'react-icons/bs';
import { AiOutlineDown } from 'react-icons/ai';
import { IoMdCart } from 'react-icons/io'
class Header extends React.Component{
    render() {
        return (
            <div className='nav'>
                <div className='menuheader'>
                    <div className='menu'>
                        <GiHamburgerMenu color="#adb5bd"  size={25}/>
                    </div> 
                    <div className='logomenu'>
                        <img src={logoImg} />
                    </div>
                   
                    <div className='list'>
                        <ul className='ul'>
                            <li className='li'>CURRENCY <AiOutlineDown/></li>
                            <li className='li'>ITEMS <AiOutlineDown/></li>
                            <li className='li'>ACCOUNTS <AiOutlineDown/></li>
                            <li className='li'>SERVICES <AiOutlineDown/></li>
                            <li className='li'>SWAP <AiOutlineDown/></li>
                            <li className='li'>SELL <AiOutlineDown/></li>
                        </ul>
                    </div>
                    <div className='list2'>
                        <ul className='ul'>
                            <li className='li usd'>USD </li><AiOutlineDown style={{color: "white"}}/>
                            <IoMdCart style={{color: "white"}}/><li className='li'>CART(5)</li>
                        </ul>
                    </div>
                    <button className='btn btn-primary md-1'>
                        SIGN IN <BsPersonFill />
                    </button>
                </div>
                <div>
                </div>
            </div>
        );
    }
}

export default Header