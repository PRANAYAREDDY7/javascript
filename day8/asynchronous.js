function main(m,n)
{
setTimeout(() =>{
    for(let i=m; i<=n; i++)
    {
        console.log(i);
    }
},5000) 
}
//main(1,10)
main(1,"10n")

function demo()
{
    console.log("nums printed");
}
demo()




//asynchronous funtion:

window.setTimeout(() =>{
    console.log("i am settimeout");
},5000)

window.setInterval(() => {
    console.log("i am setinterval");
},3000)





let online = window.navigator.onLine

new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(online == true)
        {
            return resolve()
        }else{
            return reject()
        }
    } , 5000)
})
.then(() =>console.log("Online...😉")
)
.catch(() => console.log("Offline...😤")
)
