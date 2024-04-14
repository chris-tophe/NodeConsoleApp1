"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const CallExpressService_1 = require("./modules/CallExpressService");
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
function app() {
    return __awaiter(this, void 0, void 0, function* () {
        const service = new CallExpressService_1.CallExpressService("localhost", "1337");
        const result = yield service.getData();
        console.log(result.A);
        console.log(result.D);
    });
}
app();
//# sourceMappingURL=app.js.map