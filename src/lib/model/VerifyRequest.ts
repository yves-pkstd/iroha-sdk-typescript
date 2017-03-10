import { IRequest } from "./IRequest";

export class VerifyRequest implements IRequest {
    constructor(public signature: string, public message: string, public publicKey: string) {
    }
}