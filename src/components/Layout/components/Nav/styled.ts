import styled from 'styled-components';

import {Link as _Link} from '@reach/router';

export const NavBar = styled.nav`
    margin-bottom: 20px;
`;

export const Link = styled(_Link)`
    margin-right: 10px;

    font-weight: bold;
    color: ${props => props.theme.colors.link};
`;
