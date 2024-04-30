import React, { useContext, useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link, useLocation } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

export const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { getTotalCartItems } = useContext(ShopContext);
    const location = useLocation();

    useEffect(() => {
        const loggedInStatus = localStorage.getItem('isLoggedIn');
        if (loggedInStatus) {
            setIsLoggedIn(JSON.parse(loggedInStatus));
        }
    }, []);

    const handleloginlogout = () => {
        const newLoggedInStatus = !isLoggedIn;
        setIsLoggedIn(newLoggedInStatus);
        localStorage.setItem('isLoggedIn', JSON.stringify(newLoggedInStatus));
    };


    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="" />
                <p>Retro Revival</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => { setMenu("shop") }}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link> {menu === "shop" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("books") }}><Link style={{ textDecoration: 'none' }} to='/books'>Books</Link> {menu === "books" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("clothing") }}><Link style={{ textDecoration: 'none' }} to='/clothing'>Clothing</Link> {menu === "clothing" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("items") }}><Link style={{ textDecoration: 'none' }} to='/items'>Items</Link> {menu === "items" ? <hr /> : <></>}</li>
            </ul>
            <div className="nav-login-cart">
                { location.pathname !== '/login' &&
                (isLoggedIn ? (
                    <Link to='/'><button onClick={handleloginlogout}>Logout</button></Link>
                ) : (
                    <Link to='/login'><button onClick={handleloginlogout}>Sign Up</button></Link>
                ))
                }
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    )
}
