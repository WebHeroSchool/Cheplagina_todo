import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item/Item';
import styles from './ItemList.module.css';

const ItemList = ({ items, onClickDone, onClickDelete }) => (
	<ul className={styles.list}>
		{items.map(item =>
		 <li className={styles.item} key={item.value}>
			<Item 
				value={item.value} 
				isDone={item.isDone} 
				id={item.id}
				onClickDone={onClickDone}
				onClickDelete={onClickDelete} 
			/>
		</li>)}
	</ul>);

ItemList.defaultProps = {
	items: [{
		value: 'нет задачи',
	  isDone: false
	}]
}

ItemList.defaultProps = {
	items: PropTypes.array.isRequired
};

export default ItemList;