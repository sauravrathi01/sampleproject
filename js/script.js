function reverseStr(str){
    return str.split('').reverse().join("")
}

console.log(reverseStr('saurav'));

function vishal(arr){
    return arr.filter((item, index)=>{
        return arr.indexOf(item) !== index;
    })
}

console.log(vishal([2,3,4,2,5,3]));


// debounce -- way to rate the limit the fun at which fun gets executed
// timer is used to delay the execution of fun


function sayHi() {
    var name = 'Lydia';
    let age = 21;
    
    console.log(name);
    console.log(age);
    }
    sayHi();
    
    //swapping 2 numbers
    let a = 10;
    let b = 20;
    let temp;
    
    temp = a
    a = b
    b = temp
    
    console.log(a)
    console.log(b)
    
    
    let x=5; let y=10;
    [x,y] = [y,x]
    console.log(x)
    console.log(y)
    
    
    function Person(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    
    const lydia = new Person('Lydia', 'Hallie');
    const sarah = Person('Sarah', 'Smith');
    
    console.log(lydia);
    console.log(sarah);
    
    // without new keyword it throws error in strict mode and gives undefined in regular js



// callback
// fun passed as an argument to another fun

// synchronous callback
function greet(name, callback){
    console.log('Hello ' + name);
    callback();
}
function sayGoodbye(){
    console.log('Goodbye')
}
greet("saurav", sayGoodbye)

//sayGoodbye fun is passed as a callback fun to greet
