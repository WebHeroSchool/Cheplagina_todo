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
						isDone: true,
						id:1
					},
					{
						value: 'Написать props-ы',
						isDone: false,
						id:2
					},
					{
						value: 'стилизовать',
						isDone: false,
						id:3
					},
					{
						value: 'Сделать все дела',
						isDone: true,
						id:4
					}
				],
				count: 2
	};

	onClickDone = id => {
		const newItemList = this.state.items.map(item =>{
			const newItem = { ...item};
			if(item.id ===id) {
				newItem.isDone = !item.isDone;
			}
			return newItem
			console.log(newItem)
		});
		this.setState({ items: newItemList });
	};

	onClickDelete = id => {
		const newItemList = this.state.items.filter(item =>{
			return item.id !== id; 
		} );
		this.setState({items:newItemList});
	};

	onClickDeleteDone = id => {
		const newItemList = this.state.items.filter(item =>{
			return item.isDone !== true; 
		} );
		this.setState({items:newItemList});
	};

	render() {
		return (
			<div className={styles.wrap}>
				<h1 className={styles.title}>Важные дела:</h1>
				<InputItem />
				<ItemList items={this.state.items} onClickDone={this.onClickDone}  onClickDelete={this.onClickDelete} />
				<Footer count={this.state.count} onClickDeleteDone={this.onClickDeleteDone} />
			</div>);
		}
};

export default App;