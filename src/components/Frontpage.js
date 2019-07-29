import React from 'react';
import { Grid } from '@material-ui/core';

import Scroll from '../img/scroll.gif';

import '../css/main.css';
import '../css/frontpage.css';

const Frontpage = () => {
  return (
    <Grid
      className='page frontPage'
      container
      spacing={1}
      direction='column'
      justify='center'
      alignItems='center'
    >
      <Grid item>
        <h1 className='name'>Jonne Liukkonen</h1>
      </Grid>

      <Grid item>
        <h2 className='title'>- Code & Design -</h2>
      </Grid>
      <Grid item>
        <div className='some-icons'>
          <a href='https://github.com/ennoj?tab=projects' target='_blank'>
            <i className='fab fa-github' />
          </a>
          <a
            href='https://www.linkedin.com/in/jonne-liukkonen/'
            target='_blank'
          >
            <i className='fab fa-linkedin' />
          </a>
        </div>
      </Grid>

      <div className='scroll'>
        <img src={Scroll} alt='Vieritä alas' />
        <p style={{ textAlign: 'center', margin: '0' }}>Vieritä alas</p>
      </div>
    </Grid>
  );
};

export default Frontpage;
