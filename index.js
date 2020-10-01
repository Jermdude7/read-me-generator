const inquirer = require("inquirer");
const fs = require("fs");


// function to initialize program
function init() {
  
}

// function call to initialize program
// array of questions for user
const questions = [

];
init(
  
  inquirer
  .prompt([
    {
      type: "input",
      message: "title of project?",
      name: "Project",
    },
    {
      type: "input",
      message: "description of project",
      name: "description",
    },
    {
      type: "input",
      message: "Table of content",
      name: "table",
    },
    {
      type: "input",
      message: "How do I install?",
      name: "installation",
    },
    {
      type: "input",
      message: "Usage of program",
      name: "useage",
    },
    {
      type: "input",
      message: "License",
      name: "license",
    },
    {
      type: "input",
      message: "Contributions",
      name: "contributions",
    },
    {
      type: "input",
      message: "test",
      name: "tests",
    },
    {
      type: "input",
      message: "Questions about program?",
      name: "Questions",
    },
  ])
  .then(function (userResponse) {
    
      fs.writeFile("readme.text", JSON.stringify(userResponse, null, 2), function (err) {});
  })
);