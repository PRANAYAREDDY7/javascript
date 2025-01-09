let a = function()
{
    let b = Number(prompt("Enter first number:"));
    let c = Number(prompt("Enter second number:"));
    let d = Number(prompt("Enter third number:"));
    let e = b + c + d
    console.log(e);
    let f = b - c - d
    console.log(f);
    let g = b * c * d
    console.log(g);

    if(b>=c && b>=d)
    {
        console.log("b is greatest");
    }else if(c>="b && c>=d")
    {
        console.log("c is greatest");
    }else
    {
        console.log("d is greatest");
    }
}
console.log(a);
console.log(a());
