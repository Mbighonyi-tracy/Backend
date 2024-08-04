// building a url to qrcode to website application
// const inquirer=require("inquirer")
import inquirer from 'inquirer';

// converting inquirer to qrcode
// var qrcode = require('qrcode-terminal');
// convert
import qrcode from "qrcode-terminal"


inquirer
  .prompt([
    /* Pass your questions in here */
      {
        message: "enter you URL please!",
        name: "URL"
      }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers)
    // qrcode.generate('This will be a QRCode, eh!');
    qrcode.generate(answers.URL, {small: true},  (qrcode) => {
        console.log(qrcode)
    });

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });