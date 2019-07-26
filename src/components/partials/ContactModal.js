import React from 'react';
import { makeStyles, Grid, Button } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    color: '#333',
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 4),
    outline: 'none'
  }
}));

const ContactModal = () => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid container direction='column' justify='center' alignItems='center'>
      <div>
        <Button onClick={handleOpen} variant='contained' color='primary'>
          Näytä Yhteystiedot
        </Button>

        <Modal
          aria-labelledby='simple-modal-title'
          aria-describedby='simple-modal-description'
          open={open}
          onClose={handleClose}
        >
          <div style={modalStyle} className={classes.paper}>
            <h2 id='modal-title'>Ota Minuun Yhteyttä!</h2>
            <EmailIcon />
            <p id='simple-modal-description'>jonne.liukkonen@gmail.com</p>
            <br />

            <CallIcon />
            <p id='simple-modal-description'>044 242 0295</p>
          </div>
        </Modal>
      </div>
    </Grid>
  );
};

export default ContactModal;
