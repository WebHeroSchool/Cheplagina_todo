import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

const App = () => {
		const initialState = {
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
				count: 4
	};

	const [items, setItems] = useState (initialState.items);
	const [count, setCount] = useState (initialState.count);

	useEffect(() => {console.log('mount');}, [items])


	const onClickDone = id => {
		const newItemList = items.map(item =>{
			const newItem = { ...item};
			if(item.id ===id) {
				newItem.isDone = !item.isDone;
			}
			return newItem
		});
		setItems(newItemList);
	};

	const onClickDelete = id => {
			const newItemList = items.filter(item =>{
				return item.id !== id; 
			});
			setItems(newItemList)
			setCount(count - 1)
		};

	const onClickAdd = value => {
		setItems(
			[...items,
				{
					value: value.toLowerCase(),
					isDone: false,
					id: count + 1
				}]);
		setCount(count + 1) 
	}


	const onClickDeleteDone = id => {
		const newItemList = items.filter(item =>{
			return item.isDone !== true; 
		});
		setItems(newItemList);
	};

		return (
			<div className={styles.wrap}>
				<h1 className={styles.title}>Важные дела:</h1>
				<InputItem onClickAdd={onClickAdd} />
				<ItemList 
					items={items} 
					onClickDone={onClickDone}  
					onClickDelete={onClickDelete} />
					<Footer count={items.length}
					onClickDeleteDone={onClickDeleteDone}
				/>
			</div>);
}

export default App;