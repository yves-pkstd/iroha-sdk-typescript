
import { Api } from "./Api";
import moment = require("moment");
import { AddUserRequest } from "../model/AddUserRequest";
import { IRequest } from "../model/IRequest";

export class RestApi extends Api {


    /*
       const url = `${IROHA_URL}/account/register`
      axios.post(url, {
        'publicKey': keys.publicKey,
        'alias': this.userName,
        'timestamp': moment().unix()
      })
      .then((response) => {
        console.log(response)

        // save data
        this.$localStorage.set('publicKey', keys.publicKey)
        this.$localStorage.set('privateKey', keys.privateKey)
        this.$localStorage.set('uuid', response.data.uuid)

        this.$router.push('user/wallet')
      })
    */

    public addUser(alias: string): void {
        let keyPair = this.createKeyPair();
        let request = new AddUserRequest(keyPair.publicKey,alias,moment().unix());
        this.restCall("POST","",request);
    }

    public removeUser(): void {
        throw new Error("Method not implemented.");
    }

    public grantUser(): void {
        throw new Error("Method not implemented.");
    }

    public addAsset(): void {
        throw new Error("Method not implemented.");
    }
    public removeAsset(): void {
        throw new Error("Method not implemented.");
    }

    public readAsset(): void {
        throw new Error("Method not implemented.");
    }

    public updateAsset(): void {
        throw new Error("Method not implemented.");
    }

    public executeSmartContract(): void {
        throw new Error("Method not implemented.");
    }

    private restCall(method: string, url: string, request: IRequest): Promise<string> {
        method = method.toUpperCase();
        return new Promise<string>((resolve,reject) => {
            let bustCache = "?" + new Date().getTime();
            let httpRequest = new XMLHttpRequest();
            httpRequest.setRequestHeader("Content-type", "text/plain");
            httpRequest.withCredentials = true;

            httpRequest.open(method,url + bustCache + "&" + this.encodeUrl(request),true);
            httpRequest.responseType = "json";
            if(method === "POST") {
                httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                httpRequest.send(null);
            }
            httpRequest.onload = function (event: Event) {
                let xhr = event.target as XMLHttpRequest;
                if (xhr.status === 200) {
                    if(xhr.responseType === "json") {
                        resolve(xhr.response.message);
                    } else {
                         resolve(JSON.parse(xhr.responseText).message);
                    }
                } else {
                    reject(httpRequest.status);
                }
            };
        });
       
    }

    private encodeUrl(request: IRequest): string {
        let encodedString = "";
        for (let prop in request) {
            if (request.hasOwnProperty(prop)) {
                if (encodedString.length > 0) {
                    encodedString += "&";
                }
                encodedString += encodeURI(prop + "=" + request[prop]);
            }
        }
        return encodedString;
    }
}