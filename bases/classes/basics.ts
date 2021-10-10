(() => {

    class Avenger {
        
        // private name: string = ''; // aceeso solo dentro de esta clase
        // public team: string; // vista desde fuera de la clase
        // public realName: string;

        static avgAge: number = 35; // parametro de la clase NO de la instancia
        static getAvgAge() {
            return this.name; // nombre de la clase!! NO de la instancia
        }

        constructor(
            private name: string,
            public team: string,
            public realName?: string
        ) { }

        public bio() {
            return `${this.name} ${this.team}`
        }

        private bio_2() {
            return `${this.realName} ${this.team}`
        }

    }

    const antman: Avenger = new Avenger('Antman', 'Captain', 'Scott');
    console.log(antman);
    console.log(Avenger.avgAge);
    console.log(antman.bio());
    // console.log(antman.bio_2()); // error porque es un método privado



})()