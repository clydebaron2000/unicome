import { lazy, Suspense} from "react"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import "./css/app.css"
import Navbar from "./components/navbar"

import BounceButton from "./components/ActionButton";
import ModalButton from "./components/ModalAndButton";

const Home = lazy((_) => import("./pages/home"))
const About = lazy((_) => import("./pages/about"))
const Services = lazy((_) => import("./pages/services"))

function App() {
	if(false)
	return  (
	<div className='hero home'>
		<div className='foreground'>
			<div className='content'>
				<h1>Understanding where</h1>
				<h1>you need it most</h1>
				<h2>Certified Medical-Legal Interpreter</h2>
				<div className='button-container'>
					<a  href='/#services'>
						<BounceButton className='action-button'>
							my services
						</BounceButton>
					</a>
					<ModalButton>
						contact me
					</ModalButton>
				</div>
			</div>
		</div>
	</div>)
	return (
		<Router>
			<Navbar />
			<Suspense fallback={<div>Loading</div>}>
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/about' exact component={About} />
					<Route path='/services' exact component={Services} />
					<Route component={Home} />
				</Switch>
			</Suspense>
		</Router>
	)
}
export default App
