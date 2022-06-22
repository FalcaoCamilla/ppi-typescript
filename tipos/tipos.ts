//enum
enum Curso{
    INFO = 'Informática', 
    MECA = 'Mecatronica',
    REDES = 'Redes',
    TSI = "Sistemas para Internet"
}

//tupla
let estudante: [string, Curso, number];
estudante=['camilla', Curso.INFO, 2222];
console.log(estudante)