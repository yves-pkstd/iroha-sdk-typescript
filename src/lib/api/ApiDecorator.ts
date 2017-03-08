import { IApi } from "./IApi";
import { Api } from "./Api";

export class ApiDecorator implements IApi {

    private _api: Api;

    constructor(api: Api) {
        this._api = api;
    }

    addUser(): void {
    }
    removeUser(): void {
        return this._api.removeUser();
    }
    grantUser(): void {
        return this._api.grantUser();
    }
    addAsset(): void {
        return this._api.addAsset();
    }
    removeAsset(): void {
        return this._api.removeAsset();
    }
    readAsset(): void {
        return this._api.readAsset();
    }
    updateAsset(): void {
        return this._api.updateAsset();
    }
    executeSmartContract(): void {
        return this._api.executeSmartContract();
    }
}