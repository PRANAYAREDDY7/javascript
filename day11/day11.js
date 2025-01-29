let c = document.getElementsByTagName("p")
console.log(c);
console.log(c[1]);
c[1].style.color = "orange"
c[1].textContent = "hello"



let d = document.getElementsByName("demo2")
console.log(d);
console.log(d[1]);
d[1].style.backgroundColor = 'lightgreen'

//console.log(document.body.childNodes);


//query selector
let e = document.querySelector('#demo')
console.log(e);

let e1 = document.querySelector('#demo1')
console.log(e1);

let f = document.querySelectorAll('#demo')
console.log(f);






