// declaration way
let obj = {
    name : "qwerty",
    id   : 7,
    boolean : true,
    arr : [10, 20 ,30],
    null : null,
    undefined : undefined,
    demo : function(){
        console.log("hello");
    }
}

console.log(obj);
console.log(obj.id);
console.log(obj.arr);
obj.demo()

//constructor function
function obj1(name, id)
{
    this.name = name;
    this.id = id;
}

let p1 = new obj1("abc", 16)
console.log(p1);
console.log(p1.name);
console.log(p1.id);