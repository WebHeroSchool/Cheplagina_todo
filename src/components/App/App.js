import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import './App.css';

const todoItem = 'Написать новое приложение';

const App = () => {
	const items = [
		{
			value: 'Написать новое приложение'
		},
		{
			value: 'Написать props-ы'
		},
		{
			value: 'Сделать все дела'
		}
	];

	return (
		<div className='wrap'>
			<h1 className='wrap__title'>Важные дела:</h1>
			<InputItem />
			<ItemList items={items} />
			<Footer count={3} />
		</div>);
}

export default App;