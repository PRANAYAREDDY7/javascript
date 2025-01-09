function main(a) {
    console.log("I am higher order function")
    console.log(a);
}

main( function() { 
    return "I am call back function 1";
} );

main( function() { 
    return "I am call back function 2";
} )
