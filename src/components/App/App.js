import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import copyright from './img/copyright.png';
import Todo from '../Todo/Todo';
import About from '../About/About';

import styles from './App.module.css';

const App = () => (
	<Router>
		<div className={styles.wrap}>

				<div className={styles.sidebar}>
		          <Link to='/' className={styles.link}><div className={styles.link_item}>Обо мне</div></Link>
		          <Link to='/todo' className={styles.link}><div className={styles.link_item}>Дела</div></Link>
	        </div>
			<Card className={styles.content}>
				<Route path='/' exact component={About} />
				<Route path='/todo' component={Todo} />
				<div className={styles.img}>
					<img src = {copyright} alt="copyright" className={styles.copyright}></img>
				</div>
			</Card>

		</div>
	</Router>);
		

export default App;