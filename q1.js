

Question 1. Carefully observe this example.
a. Is the InnerFunction() a closure?

Ans: Yes InnerFunction() is a closure.

////////////////////////////////////////////////////////


function OuterFunction()
{ var outerVariable = 100;
function InnerFunction() {
alert(outerVariable);
}
return InnerFunction;
}
var innerFunc = OuterFunction();
innerFunc();


Ans :  100



