import {observable, computed} from 'mobx';
import R from 'ramda';

export interface ISecondStore {
    data: string[];
    formattedData: string[];
}

class SecondStore implements ISecondStore {
    @observable
    public data = ['FOUR', 'FIVE', 'SIX'];

    @computed
    get formattedData(): string[] {
        return R.map(R.toLower, this.data);
    }
}

export default new SecondStore();
