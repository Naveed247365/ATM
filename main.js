import inquirer from "inquirer";
let mybalance = 10000; // doller
let mypin = 1974;
console.log("Welcome to ATM");
let pinanswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin",
    }
]);
if (pinanswer.pin == mypin) 
// slecat your account saving/cirrant
{
    let options = await inquirer.prompt([
        {
            name: "options",
            type: "list",
            choices: ["Balance Inquiry", "Withdraw", "Fast Cash", "Deposit", "Exit"],
            message: "Select your options",
        }
    ]);
    if (options.options == "Balance Inquiry") {
        console.log(`Your balance is ${mybalance}`);
    }
    else if (options.options == "Withdraw") {
        let withdraw = await inquirer.prompt([
            {
                name: "withdraw",
                type: "number",
                message: "Enter your withdraw amount",
            }
        ]);
        if (withdraw.withdraw <= mybalance) {
            console.log(`Your withdraw amount is ${withdraw.withdraw}`);
            mybalance = mybalance - withdraw.withdraw;
            console.log(`Your remaining balance is ${mybalance}`);
        }
        else {
            console.log("Insufficient balance");
        }
    }
    else if (options.options == "Fast Cash") {
        let fastcash = await inquirer.prompt([
            {
                name: "fastcash",
                type: "list",
                choices: ["500", "1000", "2000", "5000"],
                message: "Select your fast cash amount",
            }
        ]);
        console.log(`Your fast cash amount is ${fastcash.fastcash}`);
        mybalance = mybalance - fastcash.fastcash;
        console.log(`Your remaining balance is ${mybalance}`);
    }
    else if (options.options == "Deposit") {
        let deposit = await inquirer.prompt([
            {
                name: "deposit",
                type: "number",
                message: "Enter your deposit amount",
            }
        ]);
        console.log(`Your deposit amount is ${deposit.deposit}`);
        mybalance = mybalance + deposit.deposit;
        console.log(`Your remaining balance is ${mybalance}`);
    }
    else if (options.options == "Exit") {
    }
    else {
        console.log("Invalid options");
    }
    console.log("Visit Again");
}
else {
    console.log("Invalid pin");
}
console.log("Thank you for using ATM");
