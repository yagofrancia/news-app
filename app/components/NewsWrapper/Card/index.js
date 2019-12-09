import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        padding:'10px 0 0 0',
        '&:hover': {
            background: '#dedede',
            borderRadius: '8px'
        },
    },
    secContainer: {
        display: 'flex',
        marginBottom:'10px',
        marginLeft:'5px'
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
        color:'#dbdbdb'
    },
    anchor: {
        textDecoration: 'inherit',
        color: 'inherit'
    },
    titleContainer: {
        marginBottom: '15px',
        marginLeft:'5px'
    },
    title: {
        fontSize: '23px',
        fontWeight: 'bold'
    }
})

const Card = props => {

    const classes = useStyles();

    return (
        <a href={props.data.url} className={classes.anchor} target="_blank">
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={12}>
                        <div className={classes.titleContainer}>
                            <span className={classes.title}>{props.data.title.split(' - ')[0]}</span>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className={classes.secContainer}>
                            <span>{new Date(props.data.publishedAt).toLocaleDateString()}</span>
                            <span className={classes.sourceTag}>{props.data.source.name}</span>
                        </div>
                    </Grid>
                </Grid>
                <hr className={classes.ruler} />
            </div>
        </a>
    )
}

export default Card;