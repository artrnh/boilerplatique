import React from 'react';

import {NavBar, Link} from './styled';

const Nav: React.FC = () => (
    <NavBar>
        <Link to="/first">link to first</Link>
        <Link to="/second">link to second</Link>
    </NavBar>
);

export default Nav;
