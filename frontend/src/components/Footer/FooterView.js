import React from 'react';
import { Grid, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#1c1c1c",
    height: '8vh',
    paddingTop: '8px',
    color: 'white',
  },
  Typo: {
    color: 'secondary',
  },
}));

function FooterView() {
  const classes = useStyles();

  return (
    <Grid
      container
      direction='column'
      className={`${classes.footer}`}
      justify='flex-start'
      alignItems='center'
    >
      {/* <Grid item md='6'>
        <Typography>
          MIT License
          <Link href='https://github.com/Niotane/Collectup' color='blue'>
            {' '}
            | Github
          </Link>
        </Typography>
      </Grid> */}

      <Grid item md='6'>
        <Typography>
          Made with &hearts; by East India Company
        </Typography>
      </Grid>
    </Grid>
  );
}

export default FooterView;
