import React from 'react';
import ReactDOM from 'react-dom';
import { AiOutlineDown,AiOutlineSearch,AiFillCaretDown,AiOutlineLeft,AiOutlineRight } from 'react-icons/ai';
import { GiBroadsword, GiPowderBag, GiRuneStone} from 'react-icons/gi';
import { RiLeafFill } from 'react-icons/ri'
import './styles/filters.css';
export class filters extends React.Component {
    render() {
        return (
            <div className='input-group'>
                <div className='input md-2'>
                    <GiBroadsword /> <label htmlFor=""> Select a game </label><AiFillCaretDown/>
                </div>
                <div className='input md-6 '>
                    <AiOutlineSearch size={25}/><label htmlFor=""> Search</label>
                </div>
                <div className='input md-2'>
                    <GiPowderBag className='icon-filter'/><label htmlFor=""> price </label><AiFillCaretDown/>
                </div>
                <div className='input md-2'>
                    <RiLeafFill className='icon-filter'/> <label htmlFor=""> All </label><AiFillCaretDown/>
                </div>
            </div>
        )
    }
}
export default filters
