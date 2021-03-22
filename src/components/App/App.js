import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

class App extends React.Component {
		state = {
			items: [
					{
						value: 'Написать новое приложение',
						isDone: true
					},
					{
						value: 'Написать props-ы',
						isDone: false
					},
					{
						value: 'стилизовать',
						isDone: false
					},
					{
						value: 'Сделать все дела',
						isDone: true
					}
				]
		};

	render() {
		return (
			<div className={styles.wrap}>
				<h1 className={styles.title}>Важные дела:</h1>
				<InputItem />
				<ItemList items={this.state.items} />
				<Footer count={this.state.items.length} />
			</div>);
		}
};

export default App;