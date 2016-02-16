/* 
one kind of singleton implemetation
the constructor will only create the object the first time, then the constructor will be rewrotten    
*/
function Singleton(){
    var instance;
    
    // rewrite the constructor  
    Singleton = function(){
        return instance;
    };
    
    // carry over the prototype properties  
    Singleton.prototype = this;  
    // the instance  
    instance = new Singleton();  
    // reset the constructor pointer  
    instance.constructor = Singleton;  

    
    // other code to init instance object
    console.log("create the instance object")
    
    return instance;
}

var obj1 = new Singleton();
var obj2 = new Singleton();
console.log(obj1 === obj2);


/* 
the closure will maintain an object that create by user function 
the function code will be running in singleton mode

NOTE: user function must have a return value
*/
function singleton(func){
    var instance;
    
    return function(){
        return instance || (instance = func.apply(func. arguments));
    };
}  

var onlyRunOnce = singleton(function(){
    console.log("call onlyRunOnce");
    return [];
});

onlyRunOnce();
onlyRunOnce();
onlyRunOnce();
