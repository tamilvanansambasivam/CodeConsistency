function x(){
    console.log("hello from callback");
}

function y(y1){
    y1()
    console.log("hello from HOF")
}

y(x)