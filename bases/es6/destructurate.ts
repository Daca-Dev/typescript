(() => {

    type Hero = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }

    const avenger: Hero = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.024154
    };

    // destructuración
    const {poder, vision} = avenger;
    console.log(poder);
    console.log(vision.toUpperCase());


    const getHero = ({ ironman, ...resto }: Hero) => {
        console.log(ironman);
        console.log(resto);
    }

    getHero(avenger);

    const avengersArr: string[] = ['Cap. America', 'Ironman', 'Hulk'];

    const [,ironman,] = avengersArr;
    console.log(ironman);

})()