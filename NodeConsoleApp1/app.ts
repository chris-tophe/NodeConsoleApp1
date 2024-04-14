
import { CallExpressService } from './modules/CallExpressService';
import { monGene } from './modules/GeneratorFunction';
import { MaFactory, MonService } from './modules/monService';
import TypeA from './types/typeA'
import { TypeB } from './types/typeB'
import { TypeC } from './types/typeC'

console.log('Hello world');

//let myVar = "a"

// myVar = 1
//myVar = "aa"

//const maConst = "b"

//maConst = "bbb"

//const monObj = {}

//monObj.A = 0

//monObj = { A: 0 }

//const objB = { A: 0 }

//objB.A = 1

//objB = {A:3}

//const type = new TypeA()
//type.A = "Yo"
//type.B = "Ya"

//const typeB: TypeB = { B: "", C: 2 }

//const typeC: TypeC = { A: "", B: 0, C: { CA: "" }, D: "KRAMTE" }

//const anonObject = { CA: "toctoc", E:2 }
//typeC.C = anonObject

//const serviceA = new MonService({})

//const serviceB = MaFactory()

/*
for (let s of monGene()) {
    console.log(s)
}
*/


async function app() {
    const service = new CallExpressService("localhost", "1337")
    const result = await service.getData()
    console.log(result.A)
    console.log(result.D)
}

app()