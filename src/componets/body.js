import React from 'react';
import ReactDOM from 'react-dom';
import { AiOutlineDown,AiOutlineSearch,AiFillCaretDown,AiOutlineLeft,AiOutlineRight } from 'react-icons/ai';
import { GiBroadsword, GiPowderBag, GiRuneStone} from 'react-icons/gi';
import { GoSettings } from 'react-icons/go';
import './styles/body.css';
import Filters from '../componets/filters';
import Items from '../componets/items';

 export class body extends React.Component {
    render() {
        return (
            <div>                
                <div className='container'>
                    <h1>Condimentum consectetur</h1>
                    
                    <Filters/>
                    <div className='items'>
                        <div className='items-header'>
                            <p>Showing 20 - from 125</p>  
                            <div className='input md-2'>
                                
                                <GoSettings size={35} className='icon-filter'/> <label htmlFor=""> <p> Sort by <br /> Featured </p></label><AiFillCaretDown/>
                            </div> 
                        </div>
                            
                        <div>
                            <Items/>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default body
