import Button from '@material-ui/core/Button';
import setUpComponent from '../../testUtils';
import { NewsWrapper } from './index';
import Card from './Card';

const createDummyData = n => {
  const arr = [];
  for (let i = 0; i < n; i += 1) {
    arr.push({ title: n.toString() });
  }
  return arr;
};

describe('NewsWrapper Component', () => {
  describe('Before fetch', () => {
    let component;
    const storeProps = { // props from initial store state
      active: '',
      sources: [],
      data: [],
      itemsToDisplay: 5,
      setDataToStore: () => { }, // action generators
      setFilter: () => { },
      addDisplayedItems: () => { }
    };

    const props = {
      ...storeProps // any other props if exist
    };

    beforeEach(() => {
      component = setUpComponent(NewsWrapper, props);
    });

    it('Renders 0 Card Components', () => {
      const cards = component.find(Card);
      expect(cards.length).toBe(0);
    });

    it('Doesnt renders any button', () => {
      const buttons = component.find(Button);
      expect(buttons.length).toBe(0);
    });
  });

  describe('After fetch', () => {
    let component;
    const storeProps = {
      active: '',
      sources: [],
      data: createDummyData(10),
      itemsToDisplay: 5,
      setDataToStore: () => { }, // action generators
      setFilter: () => { },
      addDisplayedItems: () => { }
    };

    const props = {
      ...storeProps
    };

    beforeEach(() => {
      component = setUpComponent(NewsWrapper, props);
    });

    it('Renders 5 Card Components', () => {
      const cards = component.find(Card);
      expect(cards.length).toBe(5);
    });

    it('Renders a Button Component', () => {
      const buttons = component.find(Button);
      expect(buttons.length).toBe(1);
    });
  });

  describe('After expand, when has news number = items to display', () => {
    let component;
    const storeProps = {
      active: '',
      sources: [],
      data: createDummyData(10),
      itemsToDisplay: 10,
      setDataToStore: () => { }, // action generators
      setFilter: () => { },
      addDisplayedItems: () => { }
    };

    const props = {
      ...storeProps
    };

    beforeEach(() => {
      component = setUpComponent(NewsWrapper, props);
    });

    it('Renders 10 Card Components', () => {
      const cards = component.find(Card);
      expect(cards.length).toBe(10);
    });

    it('Doesnt renders any Button Component', () => {
      const buttons = component.find(Button);
      expect(buttons.length).toBe(0);
    });
  });
});
