import React from 'react';
import Grid from '@material-ui/core/Grid';

const Card = props => {
    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <h1>{props.data.title}</h1>
                </Grid>
                <Grid item xs={3}>
                    <span>{new Date(props.data.date).toLocaleDateString()}</span>
                </Grid>
                <Grid item xs={3}>
                    <span>{props.data.source}</span>
                </Grid>
            </Grid>
        </div>
    )
}

export default Card;