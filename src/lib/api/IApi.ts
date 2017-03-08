export interface IApi {
    addUser(): void;
    removeUser(): void;
    grantUser(): void;
    addAsset(): void;
    removeAsset(): void;
    readAsset(): void;
    updateAsset(): void;
    executeSmartContract(): void;
}