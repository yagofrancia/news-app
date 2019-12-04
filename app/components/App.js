import React from 'react';
import Card from './Card';

const fakeData = [
    {
        title: 'Lorem ipsum dolor sit amet',
        date: new Date().getTime(),
        source: 'nyt'
    },
    {
        title: 'Lorem Lorem ipsum',
        date: new Date().getTime(),
        source: 'the_sun'
    }
]


const App = () => {
    return <div>
        <h1>H3LL0 W0RLD</h1>
        {
            fakeData.map(n => <Card data={n} />)
        }
    </div>
}

export default App;