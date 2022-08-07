export class User {
    constructor(public email: string, private localId: string, private _token: string, private expirationDate: Date) {

    }
}