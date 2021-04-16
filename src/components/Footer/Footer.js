import React from 'react';
import PropTypes from 'prop-types';

import styles from './Footer.module.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import DeleteIcon from '@material-ui/icons/Delete';

const Footer = ({ count, id, onClickDeleteDone, onClickFilter, activeTask, doneTask }) => (
  <div className={styles.footer}>
  	<p className={styles.unfinished}  onClick={() => onClickFilter('active')}>Осталось выполнить дел: {activeTask}</p>
  	
  	<div className={styles.buttons}>
        <ButtonGroup 
          variant="contained" 
          color="primary" 
          aria-label="contained primary button group">

            <Button onClick={() => onClickFilter('allTask')}>
              Все {activeTask + doneTask}
            </Button>

            <Button  onClick={() => onClickFilter('active')}>
              Активные  {activeTask}
            </Button>

            <Button  onClick={() => onClickFilter('done')}>
              Выполненные {doneTask}
            </Button>

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

Footer.propTypes = {
  count: PropTypes.number.isRequired
};

export default Footer;