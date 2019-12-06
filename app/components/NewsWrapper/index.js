import React, { useEffect } from 'react';
import Card from './Card';
import SourceFilter from './SourceFilter'
import { connect } from 'react-redux';
import { getNews } from '../../apiclient';
import { setNewsData, setFilterBySource, setItemsToDisplay } from '../../actions';
import Button from '@material-ui/core/Button';

const NewsWrapper = props => {

    const setActiveFilter = value => {
        props.setFilter(value);
    }

    useEffect(() => {

        async function fetchData() {
            let data = await getNews();
            console.log(data)
            props.setDataToStore({
                data,
                sources: [...new Set(data.map(d => d.source.name))]
            });
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

    return (
        <div>
            <SourceFilter
                sources={props.sources}
                active={props.active}
                changeHandler={setActiveFilter}
            />
            {
                filteredData.map((n, i) => <Card key={i} data={n} />)
            }
            {
                (props.itemsToDisplay < dataBySource.length) && <Button
                    variant="contained"
                    color="primary"
                    onClick={showMore}
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