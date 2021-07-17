export class Request {
    clientId : string;
    clientSecret : string;
    script : string;
    language : string;
    versionIndex : string;

    constructor(clientId : string,
        clientSecret : string,
        script : string,
        language : string,
        versionIndex : string){
            this.clientId = clientId;
            this.clientSecret = clientSecret;
            this.script=script;
            this.language=language;
            this.versionIndex=versionIndex;
        }
    
}