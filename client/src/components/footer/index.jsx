import React from 'react'
import { ReactComponent as Logo } from '../../logo.svg'
import { ReactComponent as Email } from '../../media/email.svg'
import { ReactComponent as Phone } from '../../media/phone.svg'
import { ReactComponent as Linkedin } from '../../media/linkedin.svg'
import BounceButton from '../ActionButton'

export default function Footer(props) {
    if(true)
    return (
        <div className="footer">
            <div>
                <Logo className='logo'/>
                <div>UNICOME</div>
            </div>
            <div className='icons'>
                <a href='mailto:unicome11.11@gmail.com' aria-label='unicome email unicome11.11@gmail.com'>
                    <BounceButton ariaLabel={'email icon'}>
                        <Email/>
                    </BounceButton>
                </a>
                <a href='tel:+(619) 410 4277' aria-label='unicome phone number (619) 410 4277'>
                    <BounceButton ariaLabel={'phone icon'}>
                        <Phone/>
                    </BounceButton>
                </a>
                <a href='https://www.linkechdin.com/in/Glen-Lubao-dba-UNICOME/' aria-label='unicome linkedin link'>
                    <BounceButton ariaLabel={'linkein icon'}>
                        <Linkedin className='linkedin'/>
                    </BounceButton>
                </a>
            </div>
        </div>
    )
}