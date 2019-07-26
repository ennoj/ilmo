import React from 'react';
import { Grid } from '@material-ui/core';

import ContactModal from './partials/ContactModal';

import '../css/main.css';
import '../css/contact.css';

const Contact = () => {
  return (
    <Grid
      className='page contactPage'
      container
      direction='column'
      justify='center'
      alignItems='center'
    >
      <h1>Ota Yhteyttä!</h1>
      <Grid
        container
        direction='row'
        justify='space-around'
        alignItems='flex-start'
      >
        <Grid item md align='center'>
          <ContactModal />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;
