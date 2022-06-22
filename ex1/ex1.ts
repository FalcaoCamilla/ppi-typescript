let nome: string = 'Camilla';
nome = 'falcão';
const matricula = 20191144010011;
console.log(matricula)


//ES3 --> js lê classe como função
class Pessoa{
    private nome: string;

    constructor(){
        this.nome='';
    }

    obterNome(): string{
        return this.nome;
    }

}