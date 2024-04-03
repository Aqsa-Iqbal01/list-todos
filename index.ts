#! /usr/bin/env node

import inquirer from "inquirer"

let todo = []

let condition = true;

while(condition) {

let todosQues = await inquirer.prompt(
    [

       {
           name: "todos",
           type: "input",
           message: "What would you like to add in your todos?"
       },
       {
           name: "addMore",
           type: "confirm", // when type is confirm answer is in yes or no
           message: "Would you like to add more in your todos?",
           default: "true"
       }

    ]
);
todo.push(todosQues.todos);
console.log(todo)
// The loop is running on the based of this variable condition
condition = todosQues.addMore;
};

if (todo.length > 0) {
    console.log(`List of Todos: `);
    todo.forEach((todos) => {
        console.log(todos)
    })
}else {
    console.log(`No todos found.`)
};