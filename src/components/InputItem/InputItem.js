import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './InputItem.module.css'

class InputItem extends React.Component {
	state = {
		inputValue: '',
		error: false,
		text: 'Добавить задание'
	};

	onButtonClick = () => {
		this.setState({
			inputValue: '',
			text: 'Добавить задание',
		});

		if(this.state.inputValue === '') {
			this.setState ({ error: true, text: 'Введите задание!'});
		} else if  (this.props.items.every(item => item.value !== this.state.inputValue)){
			this.setState({error: false, text: 'Добавить задание'});
			this.props.onClickAdd(this.state.inputValue);
		} else {
			this.setState ({ error: true, text: 'Такое задание уже есть, введите новое!'});
		}
}

	render() {

		return (
			<div>
			   <TextField 
			   	className={styles.error}
			   	error={this.state.error}
		         label={this.state.text}
		         id="margin-dense"
		         fullWidth
		         margin="dense"
		         value={this.state.inputValue}
		         onChange={event => this.setState({inputValue: event.target.value})}
		      />
		      <Button 
			      variant="contained" 
			      color="primary" 
			      fullWidth
			      onClick={this.onButtonClick}>
		        Добавить задание
		      </Button>
			</div>);
	}
}

export default InputItem;