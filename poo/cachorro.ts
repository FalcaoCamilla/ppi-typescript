enum Raca{
    SRD = 'Sem raça definida',
    POODLE = 'Poodle',
    PITBULL = 'Pitbull',
    PINSCHER = 'Pinscher',
    PASTORALE = 'Pastor Alemão',
    DOBERMAN = 'Doberman',
    SHITZU = 'Shitzu'
}

export class Cachorro {
    nome: string;
    raca: Raca;
    distancia: number;
    nascimento: Date;

    constructor(nm: string, dn: Date){
        this.nome = nm;
        this.raca = Raca.SHITZU;
        this.distancia = 0;
        this.nascimento = dn;
    }
}