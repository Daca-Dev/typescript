interface Power {
    id: number;
    desc: string;
}

export const powers: Power[] = [
    {
        id: 1,
        desc: 'Money'
    },
    {
        id: 2,
        desc: 'Drugs'
    },
]

export default class Powers {
    constructor(
        public name: string,
        public weapon: string,
        public ammo: number
    ) { }
}