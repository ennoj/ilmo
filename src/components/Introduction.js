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
              Tietotekniikka on ollut minulle läheinen viisivuotiaasta saakka,
              kun isäni osti Amiga Commodore 500:n. Ohjelmointi on kiinnostanut
              minua teini-ikäisestä asti. <br />
              Vietin iltaa viime kesänä kaverini kanssa, joka puhui työstään
              ohjelmoijana. Sinä iltana tein päätöksen, että minusta tulee
              ohjelmoija! Siitä hetkestä lähtien olen opiskellut noin 1 000
              tuntia (15 - 30h viikossa) itsenäisesti, useilla verkkokursseilla
              ja rakennellen omia projekteja. HTML, CSS, sekä JavaScript (ml.
              libraryjä ja frameworkejä) ovat tulleet minulle todella tutuiksi.
              Ohjelmointimaailman ihastukseni on MERN-stack. Kotisivuni on tehty
              tyhjennettyyn create-react-app:n boiler plateen. Projekteistani
              "Näppis" ja "Kotisivuni" on toteutettu vanilla JavaScriptillä.
              Näiden projektien lisäksi olen opiskellut lukuisten APIen, Noden
              (+Express), MongoDB:n ym parissa. Osaamiseni kanssa olen siinä
              vaiheessa, että perusteet on hyvässä hallussa, olen kykenevä
              toteuttamaan haluamiani projekteja ja uusien asioiden oppiminen
              käy ripeästi. Olen halunnut varmistaa, että osaamiseni on varmasti
              sillä tasolla, että olen valmis siirtymään alalle. Nyt olen
              itsevarma ja valmis. Tavoitteenani on siirtyä alalle tämän syksyn
              aikana.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Introduction;
