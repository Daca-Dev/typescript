(() => {

    class Avenger {
        constructor(
            public name: string,
            public realName: string
        ) {
            console.log('Contructor avenger llamado');
        }

        protected getFullName() { // método accesible solo desde la clase y las clases que extiendan
            return `${this.name} ${this.realName}`
        }
    }

    class Xmen extends Avenger {
        constructor(
            name: string,
            realName: string,
            public isMutant: boolean
        ) {
            super(name, realName)
            console.log('Constructor X-men llamdado');
        }

        get fullName() {
            return `${this.name} - ${this.realName}`
        }

        set fullName(name:string) { // set solo recibe un parámetro
            this.realName = name;
        }

        public getFullNameDesdeXmen() {
            return super.getFullName()
        }
    }

    const wolverine: Xmen = new Xmen('Wolverine', 'Logan', true)
    console.log(wolverine);
    wolverine.getFullNameDesdeXmen();

    console.log(wolverine.fullName);
    wolverine.fullName = 'David'
    console.log(wolverine.fullName);
})()