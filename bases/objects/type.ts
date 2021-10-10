(() => {

    type Hero = {
        name: string;
        age?: number;
        powers: string[];
        getName?: () => string;
    }
    

    // objeto literal en JS
    let flash: Hero = {
        name: 'Barri Allen',
        age: 24,
        powers: [
            'super velocidad',
            'Viajar en el tiempo'
        ]
    }
    let superman: Hero = {
        name: 'Barri Allen',
        age: 24,
        powers: [
            'super velocidad',
            'Viajar en el tiempo'
        ],
        getName() {
            return this.name;
        }
    }


})()