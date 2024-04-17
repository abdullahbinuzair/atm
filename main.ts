#! usr/bin/env node

import inquirer from "inquirer"

let myBalance = 100000; // Dollar
let myPin = 1234;

let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "enter your pin number",
            type: "number"
        }
    ]
);
//   12345 === 1234 - false 
if (pinAnswer.pin === myPin){
    console.log("correct pin code !!!");

    let operationAns = await inquirer.prompt(
        [
            {
                name: "operation",
                message:"please select an option",
                type:"list",
                choices:["withraw","check balance"]
            }
        ]
    );

    console.log(operationAns);

    if(operationAns.operation === "withraw"){
        let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message:"enter your amount",
                    type:"number"
                }
            ]
        );
        // =, -=, +=
        myBalance -= amountAns.amount;

        console.log("you remaining account balance is: " + myBalance)
    
    }  else if(operationAns.operation === "check balance"){
        console.log("your balance is: "  + myBalance)
    }
}

