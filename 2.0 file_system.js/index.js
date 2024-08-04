
// weite on file
// const fs = require("fs");

// fs.writeFile("text.txt" , 'good morning', (err) => {
//     if (err) {
//         console.log(err);
//         }
//         console.log("file created successfully");
//     })

// // read on file
//     fs.readFile("text.txt" , 'utf-8' , (err,data) => {
//         if (err){
//             console.log(err);
//         }
//         console.log(data)
//     })


const fs = require("fs");
const readLine = require("readline")

    const inputOutput = readLine.createInterface({
        input:process.stdin,
        output:process.stdout,
    })

    //how to take in input and output in node


    // how can we use it

    inputOutput.question("what is your name?" , (name) => {
        console.log(`my name is ${name}`)
    }
        )