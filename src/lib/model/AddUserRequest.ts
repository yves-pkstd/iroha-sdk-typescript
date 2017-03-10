import { IRequest } from "./IRequest";

export class AddUserRequest implements IRequest {
    constructor(public publicKey: string, alias: string, timestamp: number) {
    }
}