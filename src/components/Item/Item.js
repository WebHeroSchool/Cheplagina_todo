import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Item.module.css';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

class Item extends React.Component {

	componentDidMount() {
		this.timerID = setInterval(() => console.log('interval'), 1000);
	}
	componentDidUpdate() {
		console.log('componentDidUpdate');
	}
	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	render() {
	const { value, isDone, onClickDone, id, onClickDelete } = this.props;

		return (	<span className={
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
	   <p 
	   	onDoubleClick={() => onClickDone(id)}>
	   		{value}
	    </p>
		<div className={styles.delete} 
			onClick={() => onClickDelete(id)}>	   
			<IconButton aria-label='delete'>
		   <DeleteIcon fontSize='small' 
		     />
		   </IconButton>
	   </div>
	</span>);
}}

Item.defaultProps = {
	  value: 'нет задачи'
	};

	Item.propTypes = {
		value: PropTypes.string.isRequired
	};

export default Item;


