import React from 'react';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    formControl: {
        minWidth: 200
    },
    root: {
        '&:hover:not($error) $notchedOutline': {
            borderColor: '#5c5c5c',
            borderWidth: '3px'
        },
        "&$focused:not($error) $notchedOutline": {
            borderColor: 'grey',//'#d43939',
            borderWidth: 2
        }
    },
    focused: {},
    error: {},
    notchedOutline: {
        borderColor: '#5c5c5c',
        borderWidth: '2px'
    },
    labelRoot: {
        '&$focused:not($error)': {
            color: '#d43939'
        }
    }
})

const SourceFilter = ({ sources, active, changeHandler }) => {
    const classes = useStyles();

    return (
        <FormControl
            className={classes.formControl}
            variant="outlined"
        >
            <InputLabel
                classes={{
                    root: classes.labelRoot,
                    focused: classes.focused,
                    error: classes.error
                }}
            >
                Filter By Source
            </InputLabel>
            <Select
                value={active}
                variant="outlined"
                onChange={e => {
                    changeHandler(e.target.value)
                }}
                input={
                    <OutlinedInput
                        labelWidth={115}
                        classes={{
                            root: classes.root,
                            notchedOutline: classes.notchedOutline,
                            focused: classes.focused,
                            input: classes.input,
                            error: classes.error
                        }}
                    />
                }
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