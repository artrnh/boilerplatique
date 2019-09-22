import React from 'react';

export default function useInject<IStore>(store: IStore): IStore {
    const createStoreContext = React.createContext<IStore>(store);

    return React.useContext<IStore>(createStoreContext);
}
