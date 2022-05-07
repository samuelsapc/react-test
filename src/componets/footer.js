import React from 'react';
import ReactDOM from 'react-dom';
import logoImg from '../images/logo.png';
import visa from '../images/visa.png';
import mastercard from '../images/mastercard.png';
import skrill from '../images/skrill.png';
import crypto from '../images/crypto.webp';

import './styles/footer.css';
import { TiSocialFacebook,TiSocialInstagram,TiSocialTwitter} from 'react-icons/ti';
import { SiDiscord } from 'react-icons/si';
import { AiFillStar } from 'react-icons/ai';

 export class footer extends React.Component {
    render() {
        return (
                <div className='footer'>
                    <div className='pays'>
                        <img className='paysimg' src={visa} />
                        <img className='paysimgm' src={mastercard} />
                        <img className='paysimg' src={skrill} />
                        <img className='payscrypto' src={crypto} />

                        <p>and 50+ more</p>
                        
                    </div>
                    <div className='social'>
                        <TiSocialFacebook className='facebook' size={30}/>
                        <TiSocialInstagram className='instagram' size={30}/>
                        <TiSocialTwitter className='twitter' size={30}/>
                        <SiDiscord className='discord' size={30}/>
                    </div>
                    <div className='info'>
                        <div>
                            <img src={logoImg} /><br /><br />
                            support@chicksgold.com
                        </div>
                        <div>
                            <h2>Chicksgold</h2>
                            <ul className='ul2'>
                                <li className='li2'>Games</li>
                                <li className='li2'>About us</li>
                                <li className='li2'>Blog</li>
                                <li className='li2'>Site map</li>
                            </ul>
                        </div>
                        <div>
                            <h2>Support</h2>
                            <ul className='ul2'>
                                <li className='li2'>Contact Us</li>
                                <li className='li2'>FAQ</li>
                            </ul>
                        </div>
                        <div>
                            <h2>Legal</h2>
                            <ul className='ul2'>
                                <li className='li2'>Privacy Policy</li>
                                <li className='li2'>Terms of Service</li>
                                <li className='li2'>Copyright Policy</li>
                            </ul>
                        </div>
                        <div className='trustpilot'>
                                <AiFillStar size={20}/>
                                <AiFillStar size={20}/>
                                <AiFillStar size={20}/>
                                <AiFillStar size={20}/>
                                <AiFillStar size={20}/>
                                <p>Trustspilot reviews</p>
                        </div>
                    </div>
                    <div className='contact'>
                        © 2017 - 2022 Chicksgold.com. All Rights Reserved
                    </div>
                </div>
        )
    }
}

export default footer
