import { IRequest } from "./IRequest";

export class SignRequest implements IRequest {
    constructor(public publicKey: string, public privateKey: string, public message: string) {
        
    }
}