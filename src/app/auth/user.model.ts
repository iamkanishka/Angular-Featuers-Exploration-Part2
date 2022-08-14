export class User {
    constructor(public email: string, private localId: string, public _token: string, private expirationDate: Date) {

    }
    getToken(){
        if(new Date()>this.expirationDate){
            return null;
        }
        return this._token
    }
}