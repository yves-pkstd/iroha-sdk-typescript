export class VerifyRequest {
    constructor(public signature: string, public message: string, public publicKey: string) {
        
    }
}