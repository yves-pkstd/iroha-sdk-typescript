import { ApiDecorator } from "./api/ApiDecorator";
import { Api } from "./api/Api";

export class IrohaSdk extends ApiDecorator {
    constructor(api: Api, url: string) {
        super(api,url);
    }
}