import { setUpComponent } from '../../../testUtils';
import SourceFilter from './index';
import MenuItem from '@material-ui/core/MenuItem'

describe('SourceFilter Component', () => {


    describe('Before data fetching', () => {

        let component;
        let props = {
            sources: [],
            active: '',
            changeHandler: () => { }
        }

        beforeEach(() => {
            component = setUpComponent(SourceFilter, props)
        })

        it("Render one option only", () => {
            const items = component.find(MenuItem);
            expect(items.length).toBe(1)
        })

    })

    describe('After data fetching', () => {

        let component;
        let props = {
            sources: ['lorem', 'ipsum', 'dolor'],
            active: '',
            changeHandler: () => { }
        }

        beforeEach(() => {
            component = setUpComponent(SourceFilter, props)
        })

        it("Render more than one option", () => {
            const items = component.find(MenuItem);
            expect(items.length).toBeGreaterThan(1)
        })
    
        it('Renders a Select Component', () => {
    
        })
    })


})