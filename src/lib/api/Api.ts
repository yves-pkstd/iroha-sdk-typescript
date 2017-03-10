import { IApi } from "./IApi";
import { KeyPair } from "../model/KeyPair";
import { SignRequest } from "../model/SignRequest";
import { VerifyRequest } from "../model/VerifyRequest";
import jsSha3 = require("js-sha3");

export class Api implements IApi {

    url: string;
    
    addUser(alias: string): void {
        throw new Error('Method not implemented.');
    }
    removeUser(): void {
        throw new Error('Method not implemented.');
    }
    grantUser(): void {
        throw new Error('Method not implemented.');
    }
    addAsset(): void {
        throw new Error('Method not implemented.');
    }
    removeAsset(): void {
        throw new Error('Method not implemented.');
    }
    readAsset(): void {
        throw new Error('Method not implemented.');
    }
    updateAsset(): void {
        throw new Error('Method not implemented.');
    }
    executeSmartContract(): void {
        throw new Error('Method not implemented.');
    }

    public createKeyPair(): KeyPair {
        let seed = supercop.createSeed();
        let keys = supercop.createKeyPair(seed);
        return new KeyPair(keys.publicKey.toString('base64'),keys.secretKey.toString('base64'));
    }

    public sign(request: SignRequest): string {
        if (!request.publicKey || !request.privateKey || !request.message) {
            return null;
        }
        let publicKey = request.publicKey;
        let privateKey = request.privateKey;
        let sha3Message = jsSha3.sha3_256(request.message);

        let sig:string = supercop.sign(
                sha3Message,
                publicKey,
                privateKey
              ).toString('base64');

        return sig;       
    }

    public verify(request: VerifyRequest): boolean {
        if(!request.publicKey || !request.message || !request.signature) {
            return false;
        }
        var valid:boolean = supercop.verify(
                request.signature,
                request.message,
                request.publicKey
             );

        return valid;
    }
}