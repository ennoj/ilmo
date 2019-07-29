import React from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';

import htmlcssjs from '../img/htmlcssjs.png';
import bootstrap from '../img/bootstrap.png';
import express from '../img/express.png';
import git from '../img/git.png';
import handlebars from '../img/handlebars.png';
import jquery from '../img/jquery.png';
import materializeCss from '../img/materialize-css.png';
import materialUi from '../img/material-ui.png';
import mongodb from '../img/mongodb.png';
import node from '../img/node.png';
import react from '../img/react.png';
import wordpress from '../img/wordpress.png';

import '../css/main.css';
import '../css/skills.css';

const Skills = () => {
  return (
    <Grid
      className='page skillsPage'
      container
      spacing={0}
      direction='row'
      justify='center'
      alignItems='center'
    >
      <h1>Osaaminen</h1>
      <Grid
        container
        spacing={5}
        direction='row'
        justify='center'
        alignItems='center'
      >
        <Grid item lg={7}>
          <Paper className='paper'>
            <Typography variant='body1'>
              <h2>Vankka perusteiden osaaminen - Prioriteetti #1</h2>
              Kielten, frameworkien ja libraryjen osalta olen agnostikko. Olen
              aina kiinnostunut oppimaan uutta ja kokeilemaan eri menetelmiä
              parhaan tuloksen aikaansaamiseksi, mutta vankka perusteiden
              osaaminen on avain ammattitaitoon. Oppia ikä kaikki, kuten sanonta
              menee. JavaScript, erityisesti sen modernit käyttötavat, joita mm.
              Node ja React tarjoavat ovat mieleeni. Näiden lisäksi PHP ja Java
              kiinnostavat minua. Periaatteeni, alusta alkaen on ollut: puhdasta
              koodia, joka täyttää yleiset standardit ja josta voin olla ylpeä.
            </Typography>
          </Paper>
        </Grid>

        <Grid item lg={5}>
          <Grid
            container
            className='stackIcons'
            spacing={1}
            direction='row'
            justify='center'
            alignItems='center'
          >
            <Grid className='big3' item sm={12} align='center'>
              <img src={htmlcssjs} alt='HTML5' />
            </Grid>
            <Grid item md={3} align='center'>
              <img src={react} alt='React' />
            </Grid>
            <Grid item md={3} align='center'>
              <img src={node} alt='Node' />
            </Grid>
            <Grid item md={3} align='center'>
              <img src={express} alt='Express' />
            </Grid>
            <Grid item md={3} align='center'>
              <img src={mongodb} alt='Mongodb' />
            </Grid>
            <Grid item md={3} align='center'>
              <img src={materialUi} alt='Material UI' />
            </Grid>
            <Grid item md={3} align='center'>
              <img src={materializeCss} alt='Materialize CSS' />
            </Grid>
            <Grid item md={3} align='center'>
              <img src={jquery} alt='jQuery' />
            </Grid>
            <Grid item md={3} align='center'>
              <img src={bootstrap} alt='Bootstrap' />
            </Grid>
            <Grid item md={3} align='center'>
              <img src={handlebars} alt='Handlebars' />
            </Grid>
            <Grid item md={3} align='center'>
              <img src={wordpress} alt='Wordpress' />
            </Grid>
            <Grid item md={3} align='center'>
              <img src={git} alt='Git' />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Skills;
