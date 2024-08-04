// function printNumbers(){
//     let counter = 0;
//     for (var i = 0; i <1000; i++){
//         counter += 1;
//         console.log(counter);

//     }
//     return Counter
// }
// printNumbers()
// console.log(printNumbers);
// console.log("AHH! RUNNING FINALLY");


// setInterval function
// the clearInterval to ensure it has only a single say hi
 const interval = setInterval(() => {
    console.log("say hi")
    clearInterval(interval)
}, 2000)