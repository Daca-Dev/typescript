(()=> {

    // principal
    interface Client {
        name: string;
        age?: number;
        address?: Address;
        getFullAddress(id:string): void; 
    }
    // secundarias
    interface Address {
        id: number;
        zip: string;
        city: string;
    }
    // *******************

    const client: Client = {
        name: 'David',
        address: {
            id: 125,
            zip: 'KYD 234',
            city: 'Chía'
        },
        getFullAddress(id: string) {
            return `${this.address.city}`
        }
    }

    // const client2: Client = {
    //     name: 'Melissa',
    //     age: 30
    // }

})()