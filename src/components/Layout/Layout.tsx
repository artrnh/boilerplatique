import React from 'react';

import {Nav} from './components';
import {Wrapper} from './styled';

const Layout: React.FC = ({children}) => (
    <Wrapper>
        <Nav />
        {children}
    </Wrapper>
);

export default Layout;
