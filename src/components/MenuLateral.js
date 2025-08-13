import './MenuLateral.css'

import React, { useState, useEffect } from 'react';

import { Link } from "react-router-dom";
import { PiHouseFill } from "react-icons/pi";
import { GoCreditCard } from "react-icons/go";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { MdDevices } from "react-icons/md";
import { PiScanSmileyLight } from "react-icons/pi";


function MenuLateral(){

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://api.sampleapis.com/movies/comedy')
        .then(response => response.json())
        .then(data => setData(data));
    }, []);

  
    return(
        <div className="menu-lateral">
            <Link className="item-menu">
                <PiHouseFill className='icone' />
                <span className='texto-menu'>Visão Geral</span>
            </Link>
            <Link className="item-menu">
                <GoCreditCard className='icone' />
                <span className='texto-menu'>Assinatura</span>
            </Link>
            <Link className="item-menu">
                <IoShieldCheckmarkOutline className='icone' />
                <span className='texto-menu'>Segurança</span>
            </Link>
            <Link className="item-menu">
                <MdDevices className='icone' />
                <span className='texto-menu'>Aparelhos</span>
            </Link>
            <Link className="item-menu">
                <PiScanSmileyLight className='icone' />
                <span className='texto-menu'>Perfis</span>
            </Link>
            <div>
                {data.map(item => (
                    
                    <img src={item.posterURL} />
                ))}
            </div>
        </div>

    );
}

export default MenuLateral;