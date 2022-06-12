window.console.log("Playing with setTimeout in GEC and FEC scopes")

function localScope(message){

    function setTimeout(message){
        console.log(message + " Heheheeee ");
    }
    window.setTimeout(()=>{console.log("This is actual global scope wala setTimeout inside localScope : after 3 seconds")},3000)
    setTimeout(message);

    function localSubScope(callBack){

        function setTimeout(){
            console.log("This is localSubScope wala setTimeout");
        }
        callBack("OMG it is actually working");
        window.setTimeout(()=>{console.log("This is actual global scope wala setTimeout inside localSubScope : after 5 seconds")},5000)
        setTimeout();
        // TODO Now how can i access and use setTimeout() of local scope inside LocalSubScope ?  
            // ~>Can this be done with the help of callback functions ? 👍🏻✅
        
        // FIXME
        // BUG Uncommenting these two lines below takes this code into an infinite loop !!
        // setTimeout:localScope("I'm trying to access setTimeout() of local scope inside localSubScope");
        // localScope().setTimeout("I'm trying to access setTimeout() of local scope inside localSubScope");
    }
    localSubScope((message)=>{
        this.setTimeout(message);
    });
}
localScope("This is local scope wala setTimeout");
setTimeout(()=>console.log("Therefore if you want to call a function of previous scope then you can use callBack funcitons."),6000)