(() => {

    const fullName = (firstname: string, lastname:string):string => {

        return `${firstname} ${lastname}`;
    }

    const noName: any = undefined

    const name = fullName(noName,'Stark');
    console.log(name);

})()