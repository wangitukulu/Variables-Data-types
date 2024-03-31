// Javascript programming, variables,and data types
// Creating a fortune teller based on the information that i you receive from the user.

// Asking the user to enter the following information
let mother_first_name = prompt("what is your mother first name");
let name_street = prompt("what is the name of the street they grew up on");
let colour_child = prompt(" what is your favourite colour as a child");
let current_age = prompt("what is your current age");                   
let number_between = prompt("choose a number between 1 and 10")

let marige_year = Number(current_age) + Number(number_between);
let number_children = Number(current_age) % Number(number_between);
let years_dye = Math.round(Number(current_age)/Number(number_between))

// By using the template literals, we output the result of the above in a multiline string

console.log(`In ${number_between} Years you are going to meet your best friend named ${mother_first_name} ${name_street}.
\nYou will get married in ${marige_year} years and have ${number_children} children.
\nIn ${years_dye} years you are going to dye your hair ${colour_child}.`)