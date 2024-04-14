import { TypeC } from "../types/typeC"

export class CallExpressService{

    constructor(private url: string, private port: string) {
        
    }

    async getData() {

        var result = await fetch(`http://${this.url}:${this.port}/users`)
        return (await result.json()) as TypeC
    }
}