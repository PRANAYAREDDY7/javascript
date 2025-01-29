console.log(window);
console.log(window.document);
console.log(typeof document);
console.log(document.URL);
console.log(document.doctype);
console.log(document.head);
console.log(document.title);
document.title = "flipkart"
console.log(document.body);

let link = document.links
console.log(link);

//console.log(link[0]);
//console.log(link[1]);
//console.log(link[2]);

for(let i=0; i<link.length; i++)
{
    console.log(link[i]);
    link[i].className="demo"
    link[i].href="http://www.youtube.com"
    link[i].target = "_blank"
    
}

let a = document.getElementById("demo")
console.log(a);
console.log(a.textContent);
a.style.backgroundColor = "lavender"
a.style.textAlign = "center"


let b = document.getElementsByClassName("demo1")
console.log(b);
console.log(b[0]);
console.log(b[0].textContent);
b[0].style.backgroundColor = "skyblue"
b[1].style.backgroundColor = "pink"
b[0].style.textAlign = "center"
b[1].style.textAlign = "center"
console.log(b[1]);

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


//querySelector
let e = document.querySelector('#demo')
console.log(e);

let e1 = document.querySelector('#demo1')
console.log(e1);


//querySelectorAll
let f = document.querySelectorAll('#demo')
console.log(f);
console.log(f[0]);

let f1 = document.querySelectorAll('.demo1')
console.log(f1);
console.log(f1[1]);


