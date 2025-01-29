let a = document.createElement("hi")
console.log(a);
a.textContent = "hello-world"

document.body.appendChild(a)

a.style.backgroundColor = "pink"

// create a div tag 
let div = document.createElement("div")
console.log(div);

// append div tag to body tag 
document.body.appendChild(div)

div.style.border = "5px solid"

// create an ol tag 
let ol = document.createElement("ol")
console.log(ol);

//append ol tag to div tag 
div.appendChild(ol)

// create an li tag 
let li1 = document.createElement("li")
console.log(li1);
li1.textContent="React"

let li2 = document.createElement("li")
console.log(li2);
li2.textContent="Node JS"

//append li tag to ol tag
ol.appendChild(li1)
ol.appendChild(li2)



//create table
let table = document.createElement("table")
console.log(table);

table.setAttribute("border", "2px solid") //it accepts like key-value pair

//append table tag to body tag
document.body.appendChild(table)

// create tr tag
let tr1 = document.createElement("tr")
console.log(tr1);

// append table tr tag to table tag 
table.appendChild(tr1)

// create td tag 
let th1 = document.createElement("th")
console.log(th1);
th1.textContent="Roll number"


let th2 = document.createElement("th")
console.log(th2);
th2.textContent="Name"

let th3 = document.createElement("th")
console.log(th3);
th3.textContent="Section"

let th4 = document.createElement("th")
console.log(th4);
th4.textContent="Year"

// append td tag to tr tag
tr1.appendChild(th1)
tr1.appendChild(th2)
tr1.appendChild(th3)
tr1.appendChild(th4)


// create tr tag
let tr2 = document.createElement("tr")
console.log(tr2);

// append table tr tag to table tag 
table.appendChild(tr2)

// create td tag 
let td1 = document.createElement("td")
console.log(td1);
td1.textContent="2211cs010016"


let td2 = document.createElement("td")
console.log(td2);
td2.textContent="PRANAYA REDDY"

let td3 = document.createElement("td")
console.log(td3);
td3.textContent="Epsilon"

let td4 = document.createElement("td")
console.log(td4);
td4.textContent="3"

// append td tag to tr tag
tr2.appendChild(td1)
tr2.appendChild(td2)
tr2.appendChild(td3)
tr2.appendChild(td4)
