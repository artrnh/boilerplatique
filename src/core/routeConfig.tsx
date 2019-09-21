import React from 'react';

import {Router} from '@reach/router';

import App from 'screens/App';
import First from 'screens/First';
import Second from 'screens/Second';

const routeConfig = (
    <Router>
        <App path="/">
            <First path="first" default />
            <Second path="second" />
        </App>
    </Router>
);

export default routeConfig;
