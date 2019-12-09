import React, { useEffect, useState } from 'react';
import Card from './Card';
import SourceFilter from './SourceFilter'
import { connect } from 'react-redux';
import { getNews } from '../../apiclient';
import { setNewsData, setFilterBySource, setItemsToDisplay } from '../../actions';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
// import withWidth from '@material-ui/core/withWidth';

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: '60%',
        margin: '0 auto',
        [theme.breakpoints.down('sm')]: {
            minWidth: '100%',
            background: 'pink'
        }
    },
    head: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    title: {
        color: '#d43939'
    },
    button: {
        color: '#d43939',
        borderColor: '#d43939',
        borderWidth: '3px',
        borderRadius: '0',
        marginTop: '10px',
        '&:hover': {
            borderWidth: '4px',
            borderColor: '#d43939'
        }
    }
}))

const NewsWrapper = props => {

    const [loading, setLoading] = useState(false);

    const setActiveFilter = value => {
        props.setFilter(value);
    }

    const classes = useStyles();

    useEffect(() => {

        async function fetchData() {
            setLoading(true);
            let data = await getNews();
            console.log(data)
            props.setDataToStore({
                data,
                sources: [...new Set(data.map(d => d.source.name))]
            });
            setLoading(false)
        }
        fetchData();

    }, [])

    const dataBySource = props.active
        ? props.data.filter(nw => nw.source.name === props.active)
        : props.data

    const filteredData = dataBySource.slice(0, props.itemsToDisplay)

    const showMore = () => {

        const itemsToAdd = props.itemsToDisplay + 5 < props.data.length
            ? 5
            : props.data.length - props.itemsToDisplay

        props.addDisplayedItems(props.itemsToDisplay + itemsToAdd)
    }

    return loading
        ? <div className="loader">Loading...</div>
        : (
            <div className={classes.root}>
                <div className={classes.head}>
                    <div className={classes.title}>
                        <h1 style={{ borderBottom: '5px solid #d43939', marginLeft: '5px' }}>News</h1>
                    </div>
                    <div>
                        <SourceFilter
                            sources={props.sources}
                            active={props.active}
                            changeHandler={setActiveFilter}
                        />
                    </div>
                </div>
                {
                    filteredData.map((n, i) => <Card key={i} data={n} />)
                }
                {
                    (props.itemsToDisplay < dataBySource.length) && <Button
                        variant="outlined"
                        color="primary"
                        onClick={showMore}
                        className={classes.button}
                    >
                        Show More
                </Button>
                }
            </div >
        )

}

const mapStateToProps = state => ({
    data: state.main.data,
    sources: state.main.sources,
    active: state.main.activeSourceSelected,
    itemsToDisplay: state.main.itemsToDisplay
})

const mapDispatchToProps = dispatch => ({
    setDataToStore: data => dispatch(setNewsData(data)),
    setFilter: data => dispatch(setFilterBySource(data)),
    addDisplayedItems: data => dispatch(setItemsToDisplay(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewsWrapper);