import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        '&:hover': {
            background: '#dedede'
        }
    },
    secContainer: {
        display: 'flex'
    },
    sourceTag: {
        background: 'grey',
        color: 'white',
        marginLeft: '10px',
        borderRadius: '15px',
        padding: '0px 8px'
    }
})

const Card = props => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12}>
                    <h1>{props.data.title}</h1>
                </Grid>
                <Grid item xs={12}>
                    <div className={classes.secContainer}>
                        <span>{new Date(props.data.date).toLocaleDateString()}</span>
                        <span className={classes.sourceTag}>{props.data.source.name}</span>
                    </div>
                </Grid>
            </Grid>
            <hr />
        </div>
    )
}

export default Card;