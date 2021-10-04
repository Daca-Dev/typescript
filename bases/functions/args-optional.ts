(() => {

    const fullName = (firstname: string, lastname?:string):string => {

        return `${firstname} ${lastname || 'no lastname'}`;
    }


    let name = fullName('Tony','Stark');
    console.log(name);
    name = fullName('Tony');
    console.log(name);

})()