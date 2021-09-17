import { NavLink as Link } from "react-router-dom"
// import NavbarBootstrap from 'react-bootstrap/Navbar'
import{useLocation} from 'react-router';
// import Nav from 'react-bootstrap/Nav'
// import Container from 'react-bootstrap/Container'
import {useEffect, useState} from 'react'
import { ReactComponent as Logo } from '../../logo.svg'
import { ReactComponent as MenuIcon } from '../../media/menu-icon.svg'
import ModalButton from "../ModalAndButton";
export default function Navbar(props) {
    const [collapsed, setCollapsed] = useState(false);
    const [active,setActive] = useState(window.location.pathname)
    const location = useLocation();
    useEffect(_=>{
        if(location.hash)
            document?.querySelector?.(location.hash)?.scrollIntoView({
                behavior:'smooth'
            });
    },[location])
    const menu_bar={
        "/#":'Home',
        '/#services':'Services',
        '/about':'About',
    }
    return (
        <div className="navbar">
        <div className='container'>
            <a className='brand' href="/#">
                <Logo className="logo"/>
                <div className='logo-name'>
                    <div className='main-text'>
                        United Communications
                    </div>
                    <div className='sub-text'>
                        Enterprise
                    </div>
                </div>
            </a> 
            <button className='collapse-btn ' aria-controls="nav"
                onClick={_=>setCollapsed(!collapsed)}
            >
                <MenuIcon/>
            </button>
            <div id="nav" className={'menu '+((collapsed)?'hide':' ')}>
                <div className='menu-links'>
                    {Object.keys(menu_bar).map((key,i)=>
                        <div key={i} onClick={_=>{
                            setActive(key)
                            setCollapsed(false)
                        }} className={(key===active)?'active':''}>
                            <Link  
                                // className={(key===window.location.pathname)?"selected":null}
                                exact to={key}
                            >
                                {menu_bar[key]}
                            </Link>
                        </div>
                    )}
                </div>
                <ModalButton>
                    contact me
                </ModalButton>
        </div>
        </div>
    </div>
    )
}