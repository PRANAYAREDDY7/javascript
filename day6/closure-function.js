// function parent()
// {
//     let a = 10;
//     function child()
//     {
//         console.log(a);
//     }
//     return child
// }
// parent()()


function parent1()
{
    function child1()
    {
        console.log("I am child1");
        function child1_1()
        {
            console.log("I am child 1.1");
        }
        return child1_1
    }

    function child2()
    {
        console.log("I am child2");
    }
    return [child1, child2]
}
parent1()[0]()()
parent1()[1]()