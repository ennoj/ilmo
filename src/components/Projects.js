import React from 'react';
import { Grid, Typography, Button, Paper } from '@material-ui/core';
import CodeIcon from '@material-ui/icons/Code';
import DemoIcon from '@material-ui/icons/DesktopWindows';

import Ilmo from '../img/ilmo-pieni.jpg';
import Nappis from '../img/nappis.png';
import Kotisivuni from '../img/kotisivuni-pieni.jpg';

import '../css/main.css';
import '../css/projects.css';

const Projects = () => {
  return (
    <Grid
      className='page projectsPage'
      container
      direction='column'
      justify='center'
      alignItems='center'
    >
      <h1>Projektit</h1>
      <Grid
        container
        spacing={2}
        direction='row'
        justify='space-around'
        alignItems='flex-start'
      >
        <Grid item align='center' md>
          <Paper className='paper'>
            <h2>Ilmo</h2>
            <img className='thumbnail' src={Ilmo} alt='ilmo pikkukuva' />

            <a href='#!' target='_blank'>
              <Button variant='contained' color='primary'>
                <DemoIcon /> Demo
              </Button>
            </a>
            {'  '}
            <a href='#!' target='_blank'>
              <Button variant='contained' color='primary'>
                <CodeIcon /> Koodi
              </Button>
            </a>

            <Typography className='description' variant='body2'>
              Nettiauton ilmoituskone Ilmo sai alkunsa, kun huomasin käyttäväni
              töissä paljon aikaa itseään toistavissa tehtävissä ja halusin
              löytää koodin kautta ratkaisun.
              <br />
              <b>
                Ilmo on työpaikallani päivittäisessä käytössä, ja se säästää
                lukuisia työtunteja viikottain
              </b>
              .
            </Typography>
          </Paper>
        </Grid>

        <Grid item align='center' md>
          <Paper className='paper'>
            <h2>Kotisivuni</h2>
            <img
              className='thumbnail'
              src={Kotisivuni}
              alt='kotisivuni pikkukuva'
            />

            <a href='#!' target='_blank'>
              <Button variant='contained' color='primary'>
                <DemoIcon /> Demo
              </Button>
            </a>
            {'  '}
            <a href='#!' target='_blank'>
              <Button variant='contained' color='primary'>
                <CodeIcon /> Koodi
              </Button>
            </a>

            <Typography className='description' variant='body2'>
              Kotisivuni on käyttäjälle räätälöity "internetin etusivu".
              Käyttäjälle avautuu näyttävä koko ruudun kokoinen kello.
              Vierittämällä sivua alas, käyttäjä voi avata itselleen tallentamat
              linkit tai palvelun listaamat Suomen suosituimmat linkit.
              <br />
              <b>Tulossa: kirjautuminen + MongoDB-tietokanta</b>.
            </Typography>
          </Paper>
        </Grid>

        <Grid item align='center' md>
          <Paper className='paper'>
            <h2>Näppis (Beta)</h2>
            <img className='thumbnail' src={Nappis} alt='näppis pikkukuva' />

            <a href='#!' target='_blank'>
              <Button variant='contained' color='primary'>
                <DemoIcon /> Demo
              </Button>
            </a>
            {'  '}
            <a href='#!' target='_blank'>
              <Button variant='contained' color='primary'>
                <CodeIcon /> Koodi
              </Button>
            </a>

            <Typography className='description' variant='body2'>
              Näppis on tarkoitettu lapsille, aakkosten opetteluun. Paina
              näppäimistöllä haluamaasi kirjainta ja näppis lukee sen ääneen.
              Ulkoasu on hyvin pelkistetty ja sen parantaminen on seuraava askel
              projektissa.
              <br />
              <b>* Vaatii näppäimistön *</b>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Projects;
