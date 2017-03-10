export interface IApi {
    addUser(alias: string): void;
    removeUser(): void;
    grantUser(): void;
    addAsset(): void;
    removeAsset(): void;
    readAsset(): void;
    updateAsset(): void;
    executeSmartContract(): void;
}