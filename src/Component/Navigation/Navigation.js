import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from './Amedeo Ristorante.png'



const Navigation = () => {
    const [newUsers,setNewUsers] =useState(false)
    return (
            <Navbar>
                <Logo>
                    <Link  to='/'>
                        <img src={logo} alt="" />
                    </Link>
                </Logo>
                <Menubar>
                   <Link  to='/'> Home </Link>
                    <Link to="/about">About</Link>
                    <Link to="/typography"> Typography </Link>
                    <Link to="/contact"> Contact</Link>
                    <Link to="/logIn-logOut"  >{newUsers?'Log-in':'Log-Out'}</Link>
                </Menubar>

                <Rightmenu>
                    <Link to='/'onClick={()=>setNewUsers(!newUsers)}>Book Now</Link>
                </Rightmenu>
                
            </Navbar>
    );
};

export default Navigation;

const Navbar =styled.div`
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 70px;
    padding: 0px 20px;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(203, 211, 198, 0.1);
`
const Logo =styled.div`
    display: flex;
    align-item: center
    justfy-content: space-between;
    width:100px;
    img{
        width:200px;
        flex-wrap: nowrap;
        cursor: pointer;
        text-align: center;
    };
    img:hover{
        border-radius: 5px;
        background: rgba(203, 211, 198, 0.6);
        color: #000;
    };
`
const Menubar =styled.div`
    display: flex;
    align-item: center
    justfy-content: space-between;
    a{
        text-decoration: none;
        font-weight: bold;
        padding: 3px 15px;
        font-size: 15px;
        flex-wrap: nowrap;
        text-transform: uppercase;
        color: #d9d9d9;
        cursor: pointer;

    };
    a:hover{
        border-radius: 5px;
        background: rgba(203, 211, 198, 0.7);
        color: #000;
    };
`
const Rightmenu =styled.div`
    display: flex;
    align-items: center;
    a{
        text-decoration: none;
        padding: 5px 15px;
        font-size: 15px;
        flex-wrap: nowrap;
        text-transform: uppercase;
        color: #000;
        cursor: pointer;
        background-color: #d9d9d9;
    };
    a:hover{
        background-color: white;
    }; 
`