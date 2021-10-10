(() => {

    // clase en Java Script
    class Avenger {
        name;
        power;

        constructor(name:string, power:number) {
            this.name = name;
            this.power = power;
        }
    }

    class FlyingAvenger extends Avenger {
        flying;
        
        constructor(name: string, power:number) {
            super(name, power)
            this.flying = true;
        }
    }

    const hulk = new Avenger('hulk', 9000)
    const falcon = new FlyingAvenger('Falcon', 5000);

    console.log(hulk);
    console.log(falcon);
})()