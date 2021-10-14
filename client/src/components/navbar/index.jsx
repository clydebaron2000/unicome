import { NavLink as Link } from "react-router-dom"
import{useLocation} from 'react-router';
import {useEffect, useState} from 'react'
import { ReactComponent as Logo } from '../../logo.svg'
import { ReactComponent as MenuIcon } from '../../media/menu-icon.svg'
import ModalButton from "../ModalAndButton";
import BounceButton from "../ActionButton";
export default function Navbar(props) {
    const [collapsed, setCollapsed] = useState(false);
    const [active,setActive] = useState(window.location.pathname)
    const location = useLocation();
    const menu_bar={
        "/#":'Home',
        '/services':'Services',
        '/about':'About',
    }
    useEffect(_=>{
        if(location.hash)
            document?.querySelector?.(location.hash)?.scrollIntoView({
                behavior:'smooth'
            });
    },[location])
    
    return (
        <div className="navbar">
        <div className='container'>
            <a className='brand' href="/#">
                <Logo className="logo"/>
                <div className='logo-name'>
                    <div className='main-text'>
                        United Communication
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
            <div id="nav" className={'menu'+((collapsed)?' show':' ')}>
                <div className='menu-links'>
                    {Object.keys(menu_bar).map((key,i)=>
                        <div key={i} onClick={_=>{
                            setActive(key)
                            setCollapsed(false)
                        }} className={(key===active)?'active':''}>
                            <Link  
                                exact to={key}
                                href={key}
                            >
                                <BounceButton>
                                    {menu_bar[key]}
                                </BounceButton>
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