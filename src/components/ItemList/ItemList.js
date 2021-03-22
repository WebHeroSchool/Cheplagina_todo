import React from 'react';
import Item from '../Item/Item';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import styles from './ItemList.module.css';

const ItemList = ({ items, onClickDone }) => (<ul className={styles.list}>
		{items.map(item =>
		 <li className={styles.item} key={item.value}>
			<Checkbox
				checked={item.isDone}
		      defaultChecked
		      //value='checkedG'
		      color='primary'
		      inputProps={{ 
		        	'aria-label': 'secondary checkbox',
		      }}
        onClick={() => onClickDone(item.isDone)}
      />
			<div className={styles.item_text}><Item value={item.value} isDone={item.isDone} onClickDone={onClickDone} /></div>
			<div>
				<IconButton aria-label='delete'>
	          <DeleteIcon fontSize='small' />
	        	</IconButton>
        </div>
		</li>)}
	</ul>);

export default ItemList;