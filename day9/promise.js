function main(m,n)
{
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if(isNaN(m) || isNaN(n))
            {
                return reject()
            }
            for(let i=m; i<=n; i++)
            {
                console.log(i);
            }
            return resolve()
        },5000) 
        
    })
    .then(() => console.log("Promise is resolved"))
    .catch(() => console.log(("Error occurred")))
}
//main(1,"10n")
main(1,10)
