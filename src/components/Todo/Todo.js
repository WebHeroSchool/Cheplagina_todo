import React, {useState, useEffect} from 'react';
import CardContent from '@material-ui/core/CardContent';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './Todo.module.css';

const Todo = () => {
		const initialState = {
			items: JSON.parse(localStorage.getItem('items')) ||
			[
					{
						value: 'Написать новое приложение',
						isDone: false,
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
				],
				count: 3,
				filter: 'all'
	};

	const [items, setItems] = useState (initialState.items);
	const [count, setCount] = useState (initialState.count);
	const [filter, setFilter] = useState ('allTask');
	let itemsFilter;
	
	useEffect(() => {console.log('mount');}, []);
	useEffect(() => {console.log('update');});
	useEffect(() => {localStorage.setItem('items', JSON.stringify(items));})
	
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
					value: value,
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

	const activeTask = (items.filter((item) => item.isDone === false)).length;
	const doneTask = (items.filter((item) => item.isDone === true)).length;

	const onClickFilter = filtered => setFilter(filtered);

	switch (filter) {
		case 'done':
			itemsFilter = items.filter(item => item.isDone);
			break;
		case 'active':
			itemsFilter = items.filter(item => !item.isDone);
			break;
		default:
			itemsFilter = items;		
	}

		return (
			<CardContent>
				<h1 className={styles.title}>Важные дела:</h1>
				<InputItem items={items} onClickAdd={onClickAdd} />
				<ItemList 
					items={itemsFilter} 
					onClickDone={onClickDone}  
					onClickDelete={onClickDelete} />
				<Footer filtered={filter}
					onClickFilter={onClickFilter} 
					count={count}
					activeTask = {activeTask}
					doneTask = {doneTask}
					onClickDeleteDone={onClickDeleteDone}
				/>
			</CardContent>);
}

export default Todo;