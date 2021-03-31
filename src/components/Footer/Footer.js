import React from 'react';

import styles from './Footer.module.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import DeleteIcon from '@material-ui/icons/Delete';

const Footer = ({ count, id, onClickDeleteDone }) => (
  <div className={styles.footer}>
  	<p className={styles.unfinished}>Осталось выполнить дел: {count}</p>
  	
  	<div className={styles.buttons}>
        <ButtonGroup 
          variant="contained" 
          color="primary" 
          aria-label="contained primary button group">
            <Button>Все</Button>
            <Button>Активные</Button>
            <Button>Выполненные</Button>
        </ButtonGroup>
     </div>
     <div className={styles.delete} onClick={() => onClickDeleteDone(id)}>
     	<Button
          variant="contained"
          color="secondary"
          startIcon={<DeleteIcon />}
        >
          Удалить выполненные дела
        </Button>
     </div>
  </div>);

Footer.defaultProps = {
  count: 0
};

export default Footer;