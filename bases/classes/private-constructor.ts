(()=>{

    class Apocalipsis{

        static instance: Apocalipsis;

        constructor(public name: string) {

        }

        static callApocalipsis(): Apocalipsis {
            if ( Apocalipsis.instance ) {
                this.instance = new Apocalipsis('Soy Apocalipsis... el único');
            }
            return this.instance;
        }
    }

    const apocalipsis = Apocalipsis.callApocalipsis()

    console.log(apocalipsis);
})()