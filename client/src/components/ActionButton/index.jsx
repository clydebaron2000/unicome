import { motion} from 'framer-motion'
export default function BounceButton({className, onClick,children}){
    return <>
        <motion.button
            whileHover={{scale:1.1}}
            whileTap={{scale:0.9}}
            className={className}
            onClick={onClick}
        >
            {children}
        </motion.button>
    </>
}