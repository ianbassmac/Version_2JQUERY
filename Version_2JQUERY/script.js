window.onload = function(){
    init("Hello World from code page!");
};

var myVar = "Something is here.";
let myLetVar = "More stuff here.";

function init(whatever){
    console.log(whatever);
    console.log(myVar);
    
    var someVar;
    
    if(true){
        myVar = "The same stuff here.";
        let myLetVar = "Not the same stuff.";
        console.log(myLetVar);
    };
    console.log(myLetVar);
    callMe(someVar);
};

function callMe(data){
    if(typeof data === undefined){
        console.log("oops");
    }
    console.log(data);
}