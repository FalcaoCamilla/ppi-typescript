"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cachorro = void 0;
var Raca;
(function (Raca) {
    Raca["SRD"] = "Sem ra\u00E7a definida";
    Raca["POODLE"] = "Poodle";
    Raca["PITBULL"] = "Pitbull";
    Raca["PINSCHER"] = "Pinscher";
    Raca["PASTORALE"] = "Pastor Alem\u00E3o";
    Raca["DOBERMAN"] = "Doberman";
    Raca["SHITZU"] = "Shitzu";
})(Raca || (Raca = {}));
class Cachorro {
    constructor(nm, dn) {
        this.nome = nm;
        this.raca = Raca.SHITZU;
        this.distancia = 0;
        this.nascimento = dn;
    }
}
exports.Cachorro = Cachorro;
