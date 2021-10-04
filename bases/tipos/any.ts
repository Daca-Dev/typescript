(() => {
    // any acepta cualquier tipo de dato
    let avenger: any = 123;
    let exists;
    let power;

    avenger = 'Dr. Strange';

    console.log( (avenger as string).charAt(0));

    avenger = 15.23425;
    console.log( <number>avenger.toFixed(2) );

    console.log(exists);
    console.log(power);

})()