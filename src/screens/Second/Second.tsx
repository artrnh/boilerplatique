import React from 'react';

import {RouteComponentProps} from '@reach/router';

import {useSecondStore} from 'stores/hooks';

const Second: React.FC<RouteComponentProps> = () => {
    const second = useSecondStore();

    return (
        <div>
            <h1>Second Page</h1>

            {second.formattedData.map(str => (
                <span key={str}>{str}</span>
            ))}
        </div>
    );
};

export default Second;
