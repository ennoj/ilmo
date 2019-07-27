import React from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';

import jonne from '../img/jonne.png';

import '../css/main.css';
import '../css/introduction.css';

const Introduction = () => {
  return (
    <Grid
      className='page introductionPage'
      container
      direction='column'
      justify='center'
      alignItems='center'
    >
      <h1>Kuka Olen?</h1>
      <Grid
        container
        spacing={5}
        direction='row'
        justify='center'
        alignItems='center'
      >
        <Grid item align='center' lg={4}>
          <img className='avatar' src={jonne} alt='Avatar' />
        </Grid>

        <Grid item align='left' lg={8}>
          <Paper className='paper'>
            <Typography className='description' variant='body1'>
              Ensi vuonna minusta tulee ohjelmoija! Päätin näin kesällä 2018,
              työstäessäni kaverini yrityksen Wordpress-sivun koodia. Siitä
              hetkestä lähtien olen opiskellut noin 1 000 tuntia (15 - 30h
              viikossa) itsenäisesti, useilla verkkokursseilla. HTML, CSS, sekä
              JavaScript (ml. jotkin libraryjä ja frameworkejä) ovat tulleet
              minulle todella tutuiksi. Ohjelmointimaailman ihastukseni on
              MERN-stack. Kotisivuni tein "puhdistettulla" create-react-app:n
              boiler platella. Projekteistani "Näppis" ja "Kotisivuni" on
              toteutettu vanilla JavaScriptillä. Näiden projektien lisäksi olen
              opiskellut lukuisten APIen, Noden (+Express), MongoDB:n ym
              parissa.
              <br />
              <br />
              Tavoitteenani on aloittaa alalla työskentely syksyn aikana.
              Tulevaisuuden tähtäimeni on tulla fullstack-kehittäjäksi.
              JavaScriptin lisäksi minua kiinnostaa mm. PHP ja Java.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Introduction;
