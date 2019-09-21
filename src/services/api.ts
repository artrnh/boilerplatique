import axios, {AxiosResponse, AxiosRequestConfig} from 'axios';

interface IEndpoints {
    getAll?(params: object, config: AxiosRequestConfig): Promise<AxiosResponse>;
    getOne?(params: object, config: AxiosRequestConfig): Promise<AxiosResponse>;
    create?(params: object, config: AxiosRequestConfig): Promise<AxiosResponse>;
    update?(params: object, config: AxiosRequestConfig): Promise<AxiosResponse>;
    patch?(params: object, config: AxiosRequestConfig): Promise<AxiosResponse>;
    delete?(params: object, config: AxiosRequestConfig): Promise<AxiosResponse>;
}

interface IApi {
    endpoints: {[entityName: string]: IEndpoints};
}

class Api implements IApi {
    public endpoints: {[entityName: string]: IEndpoints} = {};

    constructor(private url: string) {
        this.url = url;
    }

    createEntity(entityName: string) {
        this.endpoints[entityName] = this.createBasicEndpoints(entityName);
    }

    createEntities(arrayOfEntity: string[]) {
        arrayOfEntity.forEach(this.createEntity);
    }

    createBasicEndpoints(entityName: string) {
        const endpoints: IEndpoints = {};

        const resourceURL = `${this.url}/${entityName}`;

        endpoints.getAll = (params = {}, config = {}) =>
            axios.get(resourceURL, {params, ...config});

        endpoints.getOne = (id, config = {}) =>
            axios.get(`${resourceURL}/${id}`, config);

        endpoints.create = (toCreate, config = {}) =>
            axios.post(resourceURL, toCreate, config);

        endpoints.update = (toUpdate: {id: string}, config = {}) =>
            axios.put(`${resourceURL}/${toUpdate.id}`, toUpdate, config);

        endpoints.patch = (id, toPatch, config = {}) =>
            axios.patch(`${resourceURL}/${id}`, toPatch, config);

        endpoints.delete = (id, config = {}) =>
            axios.delete(`${resourceURL}/${id}`, config);

        return endpoints;
    }
}

export default Api;
