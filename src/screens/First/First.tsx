import React from 'react';

import {RouteComponentProps} from '@reach/router';

import {useFirstStore} from 'stores/hooks';

const First: React.FC<RouteComponentProps> = () => {
    const first = useFirstStore();

    return (
        <div>
            <h1>First Page</h1>

            {first.formattedData.map(str => (
                <span key={str}>{str}</span>
            ))}
        </div>
    );
};

export default First;
