function parent()
{
    function child()
    {
        console.log("I am child function");
    }
    child()
}
parent()


var a = 10;
let b = 20;
function parent1()
{
    var a = "hello";
    let b = "hii";
    console.log(a);
    console.log(b);
    console.log(this.a);
    console.log(this.b); //undefined as b is local scope

}
parent1()