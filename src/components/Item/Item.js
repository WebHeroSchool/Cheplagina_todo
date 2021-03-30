import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const Item = ({ value, isDone, onClickDone, id, onClickDelete }) => (
	<span className={
		classnames({
			[styles.item]: true,
			[styles.done]: isDone
			})
		}>
		<Checkbox
			checked={isDone}
			color='primary'
			inputProps={{ 
				'aria-label': 'secondary checkbox',
			}}

	      onClick={() => onClickDone(id)}
	   />
	   {value}
		<div className={styles.delete}>	   
			<IconButton aria-label='delete'
			>
		   <DeleteIcon fontSize='small' 
		   onClick={() => onClickDelete(id)}  />
		   </IconButton>
	   </div>
	</span>);

export default Item;


