import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    padding: '10px 0 0 0',
    '&:hover': {
      background: '#dedede',
      borderRadius: '8px'
    },
  },
  secContainer: {
    display: 'flex',
    marginBottom: '10px',
    marginLeft: '5px'
  },
  sourceTag: {
    background: 'grey',
    color: 'white',
    marginLeft: '10px',
    borderRadius: '15px',
    padding: '0px 8px'
  },
  ruler: {
    marginBottom: '0px',
    color: '#dbdbdb'
  },
  anchor: {
    textDecoration: 'inherit',
    color: 'inherit'
  },
  titleContainer: {
    marginBottom: '15px',
    marginLeft: '5px'
  },
  title: {
    fontSize: '23px',
    fontWeight: 'bold'
  }
});

const Card = props => {
  const classes = useStyles();
  const { data } = props;

  return (
    <a href={data.url} className={classes.anchor} target="_blank" rel="noopener noreferrer">
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <div className={classes.titleContainer}>
              <span className={classes.title}>{data.title.split(' - ')[0]}</span>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.secContainer}>
              <span>{new Date(data.publishedAt).toLocaleDateString()}</span>
              <span className={classes.sourceTag}>{data.source.name}</span>
            </div>
          </Grid>
        </Grid>
        <hr className={classes.ruler} />
      </div>
    </a>
  );
};

Card.propTypes = {
  data: PropTypes.shape({
    url: PropTypes.string,
    title: PropTypes.string,
    publishedAt: PropTypes.string,
    source: PropTypes.shape({
      name: PropTypes.string
    })
  }).isRequired
};

export default Card;
