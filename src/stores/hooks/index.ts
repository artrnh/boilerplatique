import useInject from 'stores/utils/useInject';

import firstStore, {IFirstStore} from 'stores/FirstStore';
import secondStore, {ISecondStore} from 'stores/SecondStore';

export function useFirstStore(): IFirstStore {
    return useInject<IFirstStore>(firstStore);
}

export function useSecondStore(): ISecondStore {
    return useInject<ISecondStore>(secondStore);
}
