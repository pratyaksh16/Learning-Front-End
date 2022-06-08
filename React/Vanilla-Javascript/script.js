window.console.log("Playing with setTimeout in GEC and FEC scopes")

function localScope(message){

    function setTimeout(message){
        console.log(message);
    }
    setTimeout(message);
    window.setTimeout(()=>{console.log("This is actual global scope wala setTimeout inside localScope, after 3 seconds")},3000)

    function localSubScope(){

        function setTimeout(){
            console.log("This is localSubScope wala setTimeout");
        }
        setTimeout();
        window.setTimeout(()=>{console.log("This is actual global scope wala setTimeout inside localSubScope, after 5 seconds")},5000)
        // FIXME
        // TODO Now how can i access and use setTimeout() of local scope inside LocalSubScope ?  
        // BUG Uncommenting these two lines below takes this code into an infinite loop !!
        // setTimeout:localScope("I'm trying to access setTimeout() of local scope inside localSubScope");
        // localScope().setTimeout("I'm trying to access setTimeout() of local scope inside localSubScope");
    }
    localSubScope();
}
localScope("This is local scope wala setTimeout");