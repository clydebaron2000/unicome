import {useEffect, useState} from 'react'
import { ReactComponent as Logo } from '../../logo.svg'
import { ReactComponent as Email } from '../../media/email.svg'
import { ReactComponent as Phone } from '../../media/phone.svg'
import { ReactComponent as Linkedin } from '../../media/linkedin.svg'

export default function Footer(props) {
    if(true)
    return (
        <div class="footer">
            <div>
                <Logo class='logo'/>
                <div>UNICOME</div>
            </div>
            <div className='icons'>
                <a href='mailto:unicome11.11@gmail.com'><Email/></a>
                <a href='tel:+(619) 410 4277'><Phone/></a>
                <a href='https://www.linkedin.com/in/glen-lubao-1849ab46/'><Linkedin/></a>
            </div>
        </div>
    )
}