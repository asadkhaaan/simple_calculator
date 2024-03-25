import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter first Number", type: "number", name: "firstNumber" },
  { message: "Enter second Number", type: "number", name: "secondNumber" },
  {
    messege: "select one of the operator to perform action",
    type: "list",
    name: "operator",
    choices: ["addition", "subtraction", "multiplication", "Division"],
  },
]);
console.log(answer);

// conditional statement.
if (answer.operator === "addition") {
  console.log(answer.firstNumber + answer.secondNumber);
  
} else if(answer.operator === "subtraction") {
console.log(answer.firstNumber - answer.secondNumber);
  } else if(answer.operator === "multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
  } else if(answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
  } else {
    console.log("please select valid operator")
  }

  
  

