let operation = (a, b, task) => {
    console.log(task(a, b));
}
operation(a= Number(prompt("Enter a for addition:")),
            b= Number(prompt("Enter a for addition:")),
        (a,b) => {
            return a+b;
        })
    
operation(a= Number(prompt("Enter a for subtraction:")),
            b= Number(prompt("Enter a for subtraction:")),
        (a,b) => {
            return a-b;
        })

operation(a= Number(prompt("Enter a for product:")),
        b= Number(prompt("Enter a for product:")),
    (a,b) => {
        return a*b;
    })