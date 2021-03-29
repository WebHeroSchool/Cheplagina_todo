import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './InputItem.module.css';

class InputItem extends React.Component {
	state = {
		inputValue: '',
		error: undefined
	};

	onButtonClick = () => {
		if (this.state.inputValue !== ''){
		this.props.onClickAdd(this.state.inputValue);
		} 
	
	this.setState({
			inputValue: ''
		});
		 
}

	render() {

		//const { onClickAdd } = this.props;

		return (
			<div>
			   <TextField
		          label="Добавить задание"
		          id="margin-dense"
		          fullWidth
		          margin="dense"
		          value={this.state.inputValue.toUpperCase()}
		          onChange={event => this.setState({inputValue: event.target.value.toUpperCase()})}
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