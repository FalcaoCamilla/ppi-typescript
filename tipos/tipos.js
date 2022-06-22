"use strict";
//enum
var Curso;
(function (Curso) {
    Curso["INFO"] = "Inform\u00E1tica";
    Curso["MECA"] = "Mecatronica";
    Curso["REDES"] = "Redes";
    Curso["TSI"] = "Sistemas para Internet";
})(Curso || (Curso = {}));
//tupla
let estudante;
estudante = ['camilla', Curso.INFO, 2222];
console.log(estudante);
