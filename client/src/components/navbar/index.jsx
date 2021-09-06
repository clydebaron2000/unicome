import { NavLink as Link } from "react-router-dom"
import NavbarBootstrap from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { ReactComponent as Logo } from '../../logo.svg'
export default function Navbar(props) {
    const menu_bar={
        '/':'Home',
        '/about':'About',
    }
    return (
        <NavbarBootstrap collapseOnSelect expand="lg" class="navbar" variant="dark" fixed="top">
        <Container>
            <NavbarBootstrap.Brand href="/">
                <Logo className="logo"/>
                <div className='logo-name'>
                    <div className='main-text'>
                        United Communication
                    </div>
                    <div className='sub-text'>
                        Enterprise
                    </div>
                </div>
            </NavbarBootstrap.Brand> 
            <NavbarBootstrap.Toggle aria-controls="responsive-navbar-nav" />
            <NavbarBootstrap.Collapse id="responsive-navbar-nav">
            <Nav>
                {Object.keys(menu_bar).map((key,i)=>
                    <Link  
                        key={i}
                        // className={(key===window.location.pathname)?"selected":null}
                        exact to={key}
                    >
                        {menu_bar[key]}
                    </Link>
                )}
            </Nav>
            <button className="action-button">Contact me</button>
        </NavbarBootstrap.Collapse>
        </Container>
    </NavbarBootstrap>
    )
}