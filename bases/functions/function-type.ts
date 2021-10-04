(() => {

    const addNumber = (a: number, b: number) => a + b;
    const greet = (name: string) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo está salvado`

    let myFunction: (x:number, y:number) => number;

    // myFunction = 10;
    // console.log(myFunction);

    myFunction = addNumber
    console.log(myFunction(2, 4));

    // myFunction = greet
    // console.log(myFunction('David'));

    // myFunction = saveTheWorld
    // console.log(myFunction());

})()