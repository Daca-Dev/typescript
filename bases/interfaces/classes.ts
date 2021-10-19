(()=>{

    interface Xmen {
        name: string;
        realName: string;
        mutanPower( id: number ): string;
    }

    interface Human {
        age: number;
    }

    // la clase Mutant implemente la interface Xmen
    class Mutant implements Xmen, Human {
        public age: number;
        public name: string;
        public realName: string;

        mutanPower( id: number ): string {
            return 'Hola mundo';
        }
    }

})()