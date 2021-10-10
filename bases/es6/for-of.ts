(() => {

    type avenger = {
        name: string;
        weapon: string;
    }

    const ironman: avenger = {
        name: 'Tony Stark',
        weapon: 'Armorsuit'
    }
    const capAmerica: avenger = {
        name: 'Steve Rogers',
        weapon: 'Shield'
    }
    const thor: avenger = {
        name: 'Thor',
        weapon: 'Mjolnir'
    }

    const avengers = [ironman, thor, capAmerica];

    for (const hero of avengers) {
        console.log(hero);
    }

})()