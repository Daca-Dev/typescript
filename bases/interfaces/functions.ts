(()=>{

    interface addTwoNumbers {
        (a: number, b: number): number;
    }

    let AddNumbersFunction: addTwoNumbers;

    AddNumbersFunction = (a: number, b: number): number => {
        return a + b
    }

})()