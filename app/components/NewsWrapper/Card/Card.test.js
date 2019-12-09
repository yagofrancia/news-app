import Card from './index';
import Grid from '@material-ui/core/Grid';
import setUpComponent from '../../../testUtils';

describe('Card Component', () => {
  let component;
  const props = {
    data: {
      url: 'http://google.com',
      title: ' - ',
      source: { name: '' }
    }
  };
  beforeEach(() => {
    component = setUpComponent(Card, props)
  });

  it('Renders 3 span elements', () => {
    expect(component.find('span').length).toBe(3);
  });

  it('Renders 3 Grid components', () => {
    expect(component.find(Grid).length).toBe(3);
  });

  it('Renders a valid http link', () => {
    const anchor = component.find('a')
    const href = anchor.prop('href')
    expect(href).toMatch(/http:\/\//)
  });

  it('Opens a new tab', () => {
    const anchor = component.find('a')
    const target = anchor.prop('target')
    expect(target).toBe('_blank')
  });

});
