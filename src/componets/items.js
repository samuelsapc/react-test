import React from 'react';
import ReactDOM from 'react-dom';
import partyhat from '../images/bluepartyhat.png'
import { AiOutlineDown,AiOutlineSearch,AiFillCaretDown,AiOutlineLeft,AiOutlineRight } from 'react-icons/ai';
import { GiBroadsword, GiPowderBag, GiRuneStone} from 'react-icons/gi';
import { IoMdCart } from 'react-icons/io';
import { RiLeafFill } from 'react-icons/ri'

const data = [
    {
        id: 1,
        stock: "In Stock", 
        name: "Blue Partyhat",
        img: partyhat,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        price:  <p>$ 450.00</p>,
        sale: "ON SALE",
        colorsale: "#39E29D",
        discount: <p className='discount'>$ 550.00</p>,
        logo: <GiRuneStone className='product-logo' size={25}/> ,
    },
    {
        id: 2,
        stock: "In Stock", 
        name: "Blue Partyhat",
        img: partyhat,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        price:  <p>$ 450.00</p>,
        sale: "ON SALE",
        colorsale: "#39E29D",
        discount: <p className='discount'>$ 550.00</p>,
        logo: <GiRuneStone className='product-logo' size={25}/> ,
    },
    {
        id: 3,
        stock: "In Stock", 
        name: "Blue Partyhat",
        img: partyhat,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        price:  <p>$ 450.00</p>,
        sale: "ON SALE",
        colorsale: "#39E29D",
        discount: <p className='discount'>$ 550.00</p>,
        logo: <GiRuneStone className='product-logo' size={25}/> ,
    },
    {
        id: 4,
        stock: "In Stock", 
        name: "Blue Partyhat",
        img: partyhat,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        price:  <p>$ 450.00</p>,
        sale: "ON SALE",
        colorsale: "#39E29D",
        discount: <p className='discount'>$ 550.00</p>,
        logo: <GiRuneStone className='product-logo' size={25}/> ,
    },
    {
        id: 4,
        stock: "In Stock", 
        name: "Blue Partyhat",
        img: partyhat,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        price:  <p>$ 450.00</p>,
        sale: "ON SALE",
        colorsale: "#39E29D",
        discount: <p className='discount'>$ 550.00</p>,
        logo: <GiRuneStone className='product-logo' size={25}/> ,
    },
    
]

const myList = data.map((item) =>   <div className='card md-2'>
                                        <div className='card-header'>
                                        <p style={{color: item.colorsale}}>•</p>{item.sale}<span className='number-wrapper'>
                                            <input className='md-3' type="number" /></span><br />
                                        </div>
                                        <div className='card-body'>
                                            <div className='stock'>
                                                {item.stock}
                                            </div>
                                            <div className='product-img'>
                                                <img src={item.img} alt="" />
                                            </div>
                                            <div className='product-name'>
                                                <h3>{item.name}</h3>
                                                {item.logo}
                                            </div> 
                                            <div className='product-description'>
                                                <span>
                                                        {item.price}
                                                        {item.discount}
                                                </span>  
                                                        {item.description}
                                            </div> 
                                        </div>
                                        <div className='card-footer'>
                                            <button className='md-4 btn btn-ligth'>Details</button>
                                            <button className='md-4 btn btn-info'>ADD <IoMdCart className='icon-btn' size={25}/></button>      
                                        </div>
                                    </div>)
                                    
export class items extends React.Component {
    render() {
        return (
            <div >
                <div className='items-body'>
                    {myList}
                </div>  
                <div className='items-footer'>
                            <div className='pages'>
                                <button className='btn btn-border'> <AiOutlineLeft/>  </button>
                                <button className='btn btn-info'> 1  </button>
                                <button className='btn btn-traparent'> 2  </button>
                                <button className='btn btn-traparent'> 3  </button>
                                <button className='btn btn-traparent'> 4  </button>
                                <button className='btn btn-border'> <AiOutlineRight/>  </button>
                            </div>
                        </div>
            </div>
        )
    }
}
export default items

