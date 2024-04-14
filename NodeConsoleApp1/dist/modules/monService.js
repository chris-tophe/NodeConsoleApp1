"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaFactory = exports.MonService = void 0;
class MonService {
    constructor(monRepo) {
        this.monRepo = monRepo;
    }
    maMethode(param) {
        if (this.monRepo) {
            console.log("yeah");
        }
        return {
            A: param, B: 0, C: { CA: "" }, D: "APAGNAN"
        };
    }
}
exports.MonService = MonService;
function MaFactory() {
    return new MonService({});
}
exports.MaFactory = MaFactory;
//# sourceMappingURL=monService.js.map