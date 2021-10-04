(() => {

    const fullName = (firstname: string, lastname?:string, upper: boolean = false): string => {
        if (upper ) {
            return `${firstname} ${lastname || 'no lastname'}`.toUpperCase();
        } else {
            return `${firstname} ${lastname || 'no lastname'}`;
        }
    }

    let name = fullName('Tony','Stark', true);
    console.log(name);
    name = fullName('Tony');
    console.log(name);

})()