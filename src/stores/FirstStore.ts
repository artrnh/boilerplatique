import {observable, computed} from 'mobx';
import R from 'ramda';

export interface IFirstStore {
    data: string[];
    formattedData: string[];
}

class FirstStore implements IFirstStore {
    @observable
    public data = ['one', 'two', 'three'];

    @computed
    get formattedData(): string[] {
        return R.map(R.toUpper, this.data);
    }
}

export default new FirstStore();
