import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import UAParser from 'ua-parser-js';
import Card from './Card';
import SourceFilter from './SourceFilter';
import { getNews } from '../../apiclient';
import { setNewsData, setFilterBySource, setItemsToDisplay } from '../../actions';
// import withWidth from '@material-ui/core/withWidth';

const agentParser = new UAParser();
const device = agentParser.getDevice().type || 'pc';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '60%',
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      minWidth: '100%'
    },
    minWidth: device !== 'pc'
      ? '100%'
      : undefined
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
}));

export const NewsWrapper = props => {
  const [loading, setLoading] = useState(false);

  const {
    setDataToStore,
    setFilter,
    addDisplayedItems,
    active,
    data,
    itemsToDisplay,
    sources,

  } = props;

  const setActiveFilter = value => {
    setFilter(value);
  };

  const classes = useStyles();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const newsData = await getNews();
      // console.log(data);
      setDataToStore({
        data: newsData,
        sources: [...new Set(newsData.map(d => d.source.name))]
      });
      setLoading(false);
    }
    fetchData();
  }, []);

  const dataBySource = active
    ? data.filter(nw => nw.source.name === active)
    : data;

  const filteredData = dataBySource.slice(0, itemsToDisplay);

  const showMore = () => {
    const itemsToAdd = itemsToDisplay + 5 < data.length
      ? 5
      : data.length - itemsToDisplay;

    addDisplayedItems(itemsToDisplay + itemsToAdd);
  };

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
              sources={sources}
              active={active}
              changeHandler={setActiveFilter}
            />
          </div>
        </div>
        {
          filteredData.map(n => <Card key={n.title} data={n} />)
        }
        {
          (itemsToDisplay < dataBySource.length) && (
            <Button
              variant="outlined"
              color="primary"
              onClick={showMore}
              className={classes.button}
            >
              Show More
            </Button>
          )
        }
      </div>
    );
};

const mapStateToProps = state => ({
  data: state.main.data,
  sources: state.main.sources,
  active: state.main.activeSourceSelected,
  itemsToDisplay: state.main.itemsToDisplay
});

const mapDispatchToProps = dispatch => ({
  setDataToStore: data => dispatch(setNewsData(data)),
  setFilter: data => dispatch(setFilterBySource(data)),
  addDisplayedItems: data => dispatch(setItemsToDisplay(data))
});

NewsWrapper.propTypes = {
  setDataToStore: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
  addDisplayedItems: PropTypes.func.isRequired,
  active: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  itemsToDisplay: PropTypes.number.isRequired,
  sources: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsWrapper);
