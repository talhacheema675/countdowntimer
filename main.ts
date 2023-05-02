#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
console.log(chalk.yellow.bold(figlet.textSync("Welcome To Timer App")))


let set_timer= await inquirer.prompt([{
    name:"timer",
    type:"number",
    message:"enter timer value in seconds",
}])
set_timer.timer=set_timer.timer*1000;//conversion seconds into milliseconds
let date=new Date();
let timer2=date.getTime();
let logic=timer2;
logic=logic+1000;
timer2=timer2 + set_timer.timer;

for(let i=0;i>=0;i++)
{ 
let secnd=new Date().getTime();

if(secnd>=timer2)
    {
        console.log(chalk.red.bold("Times UP"))
        break;
    }
    if(secnd==logic)
    {
        logic=logic+1000;
    let count=timer2-secnd
    count=count/1000
    count=Math.round(count)
    console.log(chalk.yellow.bold(`time left : ${count}`))
    }
}
