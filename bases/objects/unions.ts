(() => {

    type Hero = {
        name: string;
        age?: number;
        powers: string[];
        getName?: () => string;
    }

    let myCustomVariable: Hero | string | number = 'Hola mundo!'

    console.log(myCustomVariable);

})()