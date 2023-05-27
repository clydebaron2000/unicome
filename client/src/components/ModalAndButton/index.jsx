import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import BounceButton from "../ActionButton"
import {ReactComponent as Close} from '../../media/close.svg'
import { ReactComponent as Logo } from '../../logo.svg'
import { ReactComponent as Email } from '../../media/email.svg'
import { ReactComponent as Phone } from '../../media/phone.svg'
import { ReactComponent as Linkedin } from '../../media/linkedin.svg'
import { ReactComponent as Medlegal } from '../../media/legal medical.svg'

export default function ModalButton({ children}) {
	const [isOpen, setIsOpen] = useState(false)
	const close = (_) => setIsOpen(false)
	const open = (_) => setIsOpen(true)
	return (
		<>
			<BounceButton 
                className="action-button"
                onClick={(_) => (isOpen ? close() : open())}>
				{children}
			</BounceButton>
            <AnimatePresence
				initial={false}
				exitBeforeEnter={true}
				onExitComplete={(_) => null}>
			{isOpen && (
				<Modal modalOpen={isOpen} handleClose={close}>
                    <div className='contact'>
						<div className='head'>
							<Medlegal width='50px' height='50px'/>
							<h4>
								Certified Med-Legal Interpreter
							</h4>
						</div>
						<br/>
                        <motion.a href='mailto:unicome11.11@gmail.com'
                            whileHover={{scale:1.1}}
                            whileTap={{scale:0.9}}
                        >
                            <Email/>
                            <div>unicome11.11@gmail.com</div>
                        </motion.a>
                        <motion.a href='tel:+(619) 410 4277'
                            whileHover={{scale:1.1}}
                            whileTap={{scale:0.9}}
                        >
                            <Phone/>
                            <div>+(619) 410 4277</div>
                        </motion.a>
                        <motion.a href='https://www.linkedin.com/in/Glen-Lubao-dba-UNICOME/'
                            whileHover={{scale:1.1}}
                            whileTap={{scale:0.9}}
                        >
                            <Linkedin className='linkedin'/>
                            <div>@Glen-Lubao-dba-UNICOME</div>
                        </motion.a>
                    </div>
				</Modal>
			)}
            </AnimatePresence>
		</>
	)
}

function Modal({ handleClose, children }) {
	const dropIn = {
		hidden: {
			y: "-100vh",
			opacity: 0,
		},
		visible: {
			y: "0",
			opacity: 1,
			transition: {
				duration: 0.1,
				type: "spring",
				damping: 25,
				stiffness: 500,
			},
		},
		exit: {
			y: "100vh",
			opacity: 0,
		},
	}
	return (
		<Backdrop onClick={handleClose}>
			<motion.div
				className='modal'
				onClick={(e) => e.stopPropagation()}
				variants={dropIn}
				initial='hidden'
				animate='visible'
				exit='exit'>
				{children}
				<BounceButton
					className='close-button'
					onClick={handleClose}>
					<Close/>
				</BounceButton>
			</motion.div>
		</Backdrop>
	)
}

function Backdrop({ children, onClick }) {
	return (
		<motion.div
			className='backdrop'
			onClick={onClick}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}>
			{children}
		</motion.div>
	)
}
