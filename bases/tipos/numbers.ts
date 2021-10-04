(() => {
    let avengers: number = 10;

    console.log(avengers);

    const villians: number = 20;
    villians.toFixed()

    if ( avengers < villians ) {
        console.log('Estamos en problemas');
    } else {
        console.log('Nos salvamos');
    }

    avengers = Number('55a');
    // NaN (not a number) es considerado un número
    console.log({avengers});
})()