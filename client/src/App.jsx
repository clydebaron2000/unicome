import { lazy, Suspense, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
// import './index.css';
import "./css/app.css"
import Navbar from "./components/navbar"
import ModalButton from "./components/ModalAndButton"
const Home = lazy((_) => import("./pages/home"))
const About = lazy((_) => import("./pages/about"))

function App() {
	if (false)
		return (
			<>
				<ModalButton>
					contact me
				</ModalButton>
			</>
		)
	return (
		<Router>
			<Navbar />
			<Suspense fallback={<div>Loading</div>}>
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/about' exact component={About} />
					<Route path='/services' exact component={About} />
					<Route component={Home} />
				</Switch>
			</Suspense>
		</Router>
	)
}
export default App
