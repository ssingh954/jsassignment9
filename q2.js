

Question 2. What is the difference between a closure and a scope ?
Ans: A closure is an inner function that has access to the outer function's variables.

Scope in JavaScript refers to the current context of code, which determines the accessibility of variables to JavaScript. 
The two types of scope are local and global.


Scope refers to the part of a program where we can access a variable. 
JavaScript allows us to nest scopes, and variables declared in outer scopes are accessible from all inner ones. 
Variables can be globally-, module-, or block-scoped.

A closure is a function enclosed with references to the variables in its outer scope. 
Closures allow functions to maintain connections with outer variables, even outside the scope of the variables.