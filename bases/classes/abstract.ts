(() => {

    abstract class Mutante {

        constructor(
            public name: string,
            public realName: string
        ) {}
    }

    class Xmen extends Mutante {
        public saveWorld() {
            return 'Mundo salvado';
        }
    }
    class Villians extends Mutante {
        public conquistWorld() {
            return 'Mundo conquistado';
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villians('Magneto', 'Magnus');
    console.log(wolverine);
    console.log(magneto);
    console.log(wolverine.saveWorld());
    console.log(magneto.conquistWorld());

    const printName = ( character: Mutante) => {
        console.log(character.name);
    }

    printName( wolverine );
    printName( magneto );
    

})()