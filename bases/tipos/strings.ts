(() => {
    // tres formas de declararlo
    const batman: string = 'batman';
    const linternaVerde: string = "linterna verde";
    const volcanNegro: string = `Volcan negro`;

    console.log(`I'm ${batman}!`);
    console.log(batman[10]?.toUpperCase() || 'No está presente');

    console.log( batman.toLocaleUpperCase() );

})()