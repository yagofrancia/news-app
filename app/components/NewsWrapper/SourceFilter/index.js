import React from 'react';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    formControl: {
        minWidth: 200
    }
})

const SourceFilter = ({ sources, active, changeHandler }) => {
    const classes = useStyles();

    return (
        <FormControl className={classes.formControl}>
            <InputLabel>Filter By Source</InputLabel>
            <Select
                value={active}
                onChange={e => {
                    changeHandler(e.target.value)
                }}
            >
                <MenuItem value="">No Filters</MenuItem>
                {
                    sources.map((src, i) => <MenuItem key={i} value={src}>{src}</MenuItem>)
                }
            </Select>
        </FormControl>
    )
}

export default SourceFilter;