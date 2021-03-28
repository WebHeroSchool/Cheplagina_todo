import React from 'react';
import styles from './Footer.module.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import DeleteIcon from '@material-ui/icons/Delete';

const Footer = ({ count }) => (<div className={styles.footer}>
	<p className={styles.unfinished}>Осталось выполнить дел: {count}</p>
	
	<div className={styles.buttons}><ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
        <Button>Все</Button>
        <Button>Активные</Button>
        <Button>Выполненные</Button>
      </ButtonGroup>
   </div>
   <div className={styles.delete}>
   	<Button
        variant="contained"
        color="secondary"
        startIcon={<DeleteIcon />}
      >
        Удалить выполненные дела
      </Button>
   </div>
</div>);

export default Footer;