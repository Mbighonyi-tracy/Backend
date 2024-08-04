// const generateSillyName=require("sillyname");
// const sillyName=generateSillyName();
// console.log(sillyName);



const generateSillyName=require("generateSillyName");
const sillyName=generateSillyName();
const readLine=require("readline");

console.log("welcomet to sillyName generator")

const inputOutput = readLine.createInterface({
    input:process.stdin,
    output:process.stdout,
})

inputOutput.question=("what is your name?" , (name) =>{
    console.log(`(welcome) ${name}`);
    console.log(`hey ${name} your silly name is ${sillyName}`)
})



