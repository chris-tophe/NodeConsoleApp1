import { TypeC } from "../types/typeC";

export class MonService {


    constructor(private monRepo:any) {

    }

    maMethode(param: string): TypeC {
        if (this.monRepo) {
            console.log("yeah")
        }
        return {
            A: param, B: 0, C: { CA: "" }, D: "APAGNAN"
        }
    }
}

export function MaFactory(): MonService {
    return new MonService({})
}