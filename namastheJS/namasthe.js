
console.log('JavaScript code execution...')
/*

const p= document.createElement('p')
const p1= document.createElement('p')
p.textContent= 'JavaScript is a synchronous(orderly executed ie second one after first completed) single threaded (run one command at a time) language. Everything in JavaScript happens inside an Execution Context. Execution context is created in 2 phases: Creation phase or m/y creation phase and code execution phase.'
p1.textContent= `Execution Context has 2 components: Memory component (or variable environment) and code component (or thread of execution). 
All variables and fns are stored in m/y component as key-value pair. Code component is the place where code is executed line by line one after other.`  // execution_context|| memory| key: value    code| codeline1, codeline2, ...
document.body.append(p)
document.body.append(p1)

// As soon as js pgm is runned execution context is created (global exec_ctxt)

var n=2 // CREATION PHASE=>  exec_ctxt|| m/y| n: undefined, square: {fn full...}, result1: undefined, result2: undefined  | code| **on fn invocation   //  EXECUTION PHASE=>  exec_ctxt|| n: 2, square: {...}, result1: **when fn invoked create exec_ctxt in code component |code
function square(num){// ie  code| CREATION_PHASE=> exec_ctxt|| m/y| num: undefined, ans: undefined  | code| ans:2*2  // EXECUTION_PHASE=> exec_ctxt|| m/y| num: 2 (as n is passed), ans: 4 (2*2) // cleared on reaching return ans and go back to result2
    var ans = num* num
    return ans
}
var result1= square(n)
var result2= square(4)// CREATION PHASE=>  exec_ctxt|| m/y| n: undefined, square: {fn full...}, result1: undefined, result2: undefined  | code| **on fn invocation   //  EXECUTION PHASE=>  exec_ctxt|| n: 2, square: {...}, result1: 4(returned value) , result2: ** fn invoked create exec_ctxt 
// ie  code| CREATION_PHASE=> exec_ctxt|| m/y| num: undefined, ans: undefined  | code| ans: 4*4 // EXECUTION_PHASE=> exec_ctxt|| m/y| num: 4 (as 4 is passed), ans: 16 (4*4) // cleared on reaching return ans and clear global exec_ctxt ie first created

console.log('Call stack : It is also cld as execution contxt stack, pgm stack, ctrl stack, runtime stack and machine stack')
//NOTE: call stack is a stack that stores the execution ctxt. global exec_ctxt(let gec) is stored last . Above gec , exec ctxt (let ec) then created is stored, when it is cleared ec is removed from stack. then on invoking fn again ec is pushed again. on clearing again popped. 
// After gec is cleared, gec is also popped from calling stack.

*/

console.log('Hoisting...')

/*
const p= document.createElement('p')
p.innerText= 'Hoisting enables accessing of fns and variables (only var, not let and const) even before initializing it.'// declarations are moved onto top but assignments won't. That's why undefined is returned.
document.body.appendChild(p)

console.log(getName)// return fn body when logged before calling as fn is stored in memory component on creation phase(1st phase). 
getName()
console.log(x)//return undefined when logged before initialization as undefined is stored to var x on creation phase

var x=7 // not defined error is appeared if this line is not there as no place is created in memory for x

function getName() {
    console.log('Namasthe JavaScript')
}

console.log('In case of arrow fns and fn assigned to a var:  behave as variables ') // not fns

console.log(getArrFn) //so return undefined
//getArrFn() // return not a fn error 

console.log(fn)
//fn() //return error that not a fn

var getArrFn= ()=> {
    console.log('Arrow Fn')
}

var fn= function() {
    console.log('function assigned to fn')
}
   */ 

console.log('Functions in JavaScript...')
/*
var x= 1 // CREATION=>    exec_ctxt|| m/y| x: undefined a: {fn...} b: {fn...}  | code|   ,  EXECUTION=> exec_ctxt|| m/y: x: 1  a: **invoked  b: {...} ,code | x=1, a() ~ CREATION => exec_ctxt|| m/y|  x:undefined  code|  EXECUTION => exec_ctxt|| m/y| x: 10| code| x=10 console x ie 10 //clears the exec-ctxt
a()  // EXECUTION=>exec_ctxt|| m/y: x: 1  a: {...}  b: invoked , code | x=1, a() b()~ CREATION => exec_ctxt|| m/y|  x:undefined  code|  EXECUTION => exec_ctxt|| m/y| x: 100| code| x=100 console x ie 100 //clears the exec-ctxt
b()
console.log(x)

function a(){
    var x= 10
    console.log(x)
}
function b(){
    var x=100
    console.log(x)
}
*/

console.log('Shortest Js pgm...') //empty file
/*
const p= document.createElement('p')//anything at top level is at global space. ie anything that is not inside function is the global space.
p.textContent= 'Shortest Js pgm is emty file. On running a Js pgm a window is created and a this variable. Window is a global obj created along with global execution context. "This" points to the window object. At global level this === window. Anything created inside global space get attached to window object.'
document.body.appendChild(p)

var a= 10
function b() {
    var x= 10// not in global space as inside fn so not attached to window.
}
console.log(window.a) // attached to window so can be cld as window.a
console.log(a) // if called without attaching anything to front of it, it tries to find a in global space(window) automatically and hence return 10
//console.log(x) // similarly it tries to find x in window but not found so return error 
console.log(this.a) // at global level window===this, so this.a return 10
*/

console.log('Undefined and not defined...')

/*
const p= document.createElement('p')
p.textContent='Undefined is like a placeholder that holds memory space for a variable until a value is assigned to it. JS is a loosely/weakly typed language. ie it doesn\'t attaches it\'s variables to a specific datatype. we can store number first then change it to string,...'
document.body.appendChild(p)

console.log(a)// Js already reserved memory for a. Undefined implies right now a is just declared not assigned any value.
var a=7
console.log(a)// now a is assigned value of 7 ie now a is defined

//console.log(x)// return error not defined as x is not given a space inside memory. undefined and not defined are different
//undefined reserve memory for a var whereas not defined has not been allocated in memory. 

var b
console.log(b) // if b is not assigned a value it will be undefined throughout the whole pgm.

if(b===undefined) {
    console.log('b is undefined')
}else{
    console.log('b is not undefined')
}

console.log('Js loosely typed property:')

var c
console.log(c)// undefined
c= 40
console.log(c)// now store number
c='HAI'
console.log(c)// now string

c=undefined// don't do this as undefined is a keyword meant for reserving memory for a variable. Just keep undefined for its own purpose. undefined is to know whether a var is assigned a value or not
console.log(c)
*/

console.log('Scope Chain...')
/*
console.log('scope in JS is directly related to lexical environment. Lexical env is created whenever an exec_ctxt is created.')

const p= document.createElement('p')
p.textContent= ' Lexical env is the local m/y + the lexical env of its parent. Scope is the area where you could access a fn or var in our code. Whole chain of lexical analysis is cld scope chain. Scope chain defines whether a var or fn is present inside a scope. if a var or fn is not found inside scopechain then it is not in scope (return undefined). '
document.body.appendChild(p)

function a() { //phase 1=> global_exec_ctxt|| m/y| a: {...}, num2: undefined LE->null  code|   //phase2=> global_exec_ctxt|| m/y| a{...}, num2:20   code| num2=20, // a()~ exec_ctxt phase1=> m/y| num1:undefined, b:{...} LE->gec code|  a()~2ndphase=> m/y| num1:10,   code| num1=10, 
                // b()~exec_ctxt phase1=> m/y| LE->a()  code| console num1(checks num1 in m/y, if not found checks in LE, parent is a() checks there and find num1 console 10), console num2 (same process find num2 in gec console 20) clears b() , clears a(), 
                //after cleared this is left::  phase2=> global_exec_ctxt|| m/y| a{...}, num2:20  LE->null   code| console num1 (checks m/y not found then checks LE but it points to null so return not defined error)
    var num1=10//LE->null => lexical env points to null
    b()
    function b(){
        console.log(num1)// num1 in parent fn can be accessed by child fn
        console.log(num2)// num2 in global space can be accessed inside fn
    }
}
var num2= 20
a()
//console.log(num1)// num1 in fn cannot be accessed outside
*/

console.log('Hoisting in Let and const...')

/*
const p= document.createElement('p')
p.textContent= 'Let and const also perform hoisting but in a different way. They are in temporal dead zone until initialized. Memory allocation is done (=>hoisting is done) in a separate m/y space which allow access only after initialization. Time zone b/w hoisting and initialization is temporal dead zone.'
document.body.appendChild(p)

console.log(b)// var accessed before assigning
//console.log(a) // accessing something in temporal dead zone gives ReferenceError  as a is not having any reference in m/y
let a= 10// a is also allocated memory space (hoisting) as undefined in script (a separate m/y space, not inside global obj so also not attached to window ) . this separate m/y space cannot be accessed before assigning value (ie before initialization)
var b= 100 // b is allocated memory space (hoisting) as 'undefined' in global object (this m/y space can be accessed before initialization) and is attached to window obj
console.log(a)

console.log(this.b, window.b) //attached to window obj and this === window
console.log(this.a, window.a) // not attached to window so return undefined as there is nothing in window named as 'a'

//let a='hai' // won't allow redeclarataion in same scope ,return syntax error
var b= ' hai' // allow redeclaration

console.log('const:')

console.log('Same as let, stored in script (separate m/y space) but const won\'t allow assignment later')

let c;
c=10 //possible for let
console.log(c)

//const d; //return Syntaxerror 'missing initializer' because here syntax is missing so syntax error
const d= 30
//d=50// return typeError, assignment to const variable . Here d is of const type which must remain constant hence typeError 

console.log('priority of usage: 1) const 2) let 3) var')
console.log('To avoid temporal dead zones always put declarations and initializations on top of scope')
*/

console.log('Block Scope...')

/*
//Block is also cld compound statement. It combines multiple Js statements into a group using curly braces. This group of statements can be used in places where JS expects one

if(true) console.log('Hi') 
if(true){// here if expects a single statement on grouped using braces they are considered single statement
    console.log('hello')
    console.log('Good Morning')
}

{// another block
    var a=10 // hoisted in global scope , can be accessed outside the block
    let b= 20 
    const c= 30 //let and const are stored (hoisted separate m/y space) inside block scope and are not accessible outside this block
    console.log(a,b,c)
}// clears the block now a only reside in global scope(global obj)

console.log(a) //accessible as global scope
//console.log(b,c) // error as not accessible as block scope

*/
console.log('Shadowing in JS...')

//if we have same named variable outside the block one variable shadows another. One which is shadowed will depend on where it is called
//to know which is shadowing: start from where var is used, look up the scope chain, first declared var we meet is shadowing, any same named var above it are shadowed. 
console.log('shadowing var:')
/*
var a=100 //global scope
{
    var a= 10 //as said earlier, var hoisted in global scope and let and const block scope
    let b= 20
    const c= 30
    console.log(a)// return 10 //'block a' shadows global a
    console.log(b)
    console.log(c)
}
console.log(a) // return 10//IMP: again block a shadows global a. var a has global scope , declared in global obj. first assign 100 , when var a=10 is declared a in global obj (with value 100) is assigned 10
*/
console.log('Shadowing let and const:')
/*
const c=400 //globally declared but stored in spcl m/y cld script not in global obj
let b= 100// globally declared but stored in spcl m/y cld script not in global obj
{
    var a=10 //stored in global scope
    let b=20 //stored in block scope// block b shadows global b
    const c=30 //stored in block scope // block c shadows global c
    console.log(a,b,c)//return 10,20,30
}
console.log(b)//return 100 //global b shadows local b
console.log(c) // return 400 //global c shadows local c
*/
console.log('shadowing in fn scope:')
/*
 var a= 100 // global scope inside window too
 let b= 200  // stored in script(block scope)
 const c= 300 // stored in script( block scope) not in window
function fn(){
    var a= 10  //fn scope not global scope
    let b= 20 
    const c= 30
    console.log(window.a, window.c) //100 undefined // c is stored in fn scope not in window
    console.log(a,b,c) //3 of them are in fn scope
}
fn()
console.log(a) // return 100// global a shadows local a (fnscope a)
console.log(b) // return 100// global b shadows local b (fnscope b)
console.log(c) // return 300// global c shadows local c (fnscope c)
*/
console.log('Illegal Shadowing:')

/*
let a=10//globally declared but not in global obj ,block scope(inside script)
{
    //var a= 20// var shadowing let return error //as var is global scope. it is hoisted to top of global scope where let a is declared. Now Js sees 2 declarations of a in same scope and return error
    console.log(a)
}

//this inside fn is not illegal shadowing
let b= 20// globally declared block (in script) scope
function x() {
    var b= 30 // var is fn scope ,shadows global b
    console.log(b)
}
x()
console.log(b) // global b shadows local b(fnscope b)
console.log('block scope follows lexical scope:')

const c= 20// in script(spcl m/y space)
{
    const c= 100// in block
    {
        //const c= 200 //in different block 
        console.log(c)//lexical=>check this block if not found goes to parent...
    }
}
console.log(c)// check this block ie gec so 20
*/

console.log('Closures...')

const p= document.createElement('p')
const p1= document.createElement('p')
p.textContent='Uses of closures: 1)Module design patterns  2)currying in JS  3) fns like once (only runs once)  4) memoize  5)maintaining state in async world  6) setTimeouts  7) Iterators  8) Data hiding and encapsulation'
p1.textContent= 'Disadvantages of closures: over consumption of memory on creating lot\'s of closures, variables in closures are not garbage collected, if not handled correctly can lead to memory leaks.'


console.log('Inner fn along with its lexical scope(include its parent var reference ,etc) forms a closure')

/*
function x() {
    var a= 7
    function y() {
        console.log(a)// closure gives access to outer fn's lexical env (var, etc) from inner fn
    }//closure has fn y and lexical scope of x (parent) ie a=7
    y()
}
x()
*/
console.log('consider below given example')
/*
function a(){
    var b=7
    return function c(){
        console.log(b)
    }
    //or return c
}//cleared out after returning c

var z= a()// a is called and it returns fn c to z
console.log(z)// display fn c. now z is a fn (as c is inside it)
z()//calling z() will return 7 but c and a is cleared out still we get the value. this is because return fn c => returning the closure of c ie c along with lexical scope(its parent var,...)
*/

console.log('suppose whole fn is again wrapped inside another fn')
/*
function wrap (){
    var v= 900
    function a(){
        var b=7
        function c(){
            console.log(b,v)
        }
        c()
    }
    a()
}
wrap()

document.body.appendChild(p)
document.body.appendChild(p1)
*/

console.log('setTimeout and closures...')

console.log('settimer stores callback somewhere and attach timer to it:')
/*
function x() {
    var i=1
    setTimeout(function() {//JS doesn't wait for anyone. What happens here is that callback function forms a closure which have the reference to i. setTimeout takes callback fn and store it somewhere else and attach timer 1s to it.  then js proceeds to nxt line and prints namasthe js. After 1s is finished takes callback fn put it again to call stack and runs it and prints i=1 then clears setTimeout, x()
        console.log('i=',i)
    },1000) //fn inside timeout is callback fn as it is set to call back after 1000ms// 1000ms===1s, after 1s prints i=1
    console.log('Namasthe JavaScript')//display namasthe js first then wait 1s then print i=1
}//settimeout(callbackfn, delay) are 2 parameters
x()
*/
console.log('print 1 after 1s , 2 after 2s, till 5 :')
/*
function y(){
    for(var i=1; i<=5; i++){ //var is fn scoped and inside loop every iteration shares same i. JS doesn't pause loops. ie loop is running while waiting for 1s and i iterates to 6 . as all callback refer same i, 6 is returned
        setTimeout(function() {
            console.log(i)
        },i*1000)
    }
}
y()
*/
console.log('Solution:- use let instead:')
/*
function z() {
    for(let i=1; i<=5; i++){//let with block scope stores i in a separate block(separate m/y space for each i) for each iteration so after each iteration callback fn has a new copy of i with it
        setTimeout(function() {//eg: after i++, i=2 is a new copy which forms closure with callback fn. settimeout take this fn and saves it. when i becomes 3 same happens till 5... and after timer setted expires displays it
            console.log(i)
        }, i*1000);
    }
}
z()  */

console.log('solution using var itself:')

/*
function x(){//can be solved if each we are able to store each i in new m/y space at each iteration.
    for(var i=1; i<=5; i++){
        function close(x){//so enclose setTimeout in close fn and is given a parameter x which stores each i in new m/y space
            setTimeout(function (){
                console.log(x)
            },x*1000)
        }
        close(i)//close is called with an argument i which gives the i values to parameter x
    }
}
x()
*/

console.log('eg for closure:')

/*
function cover() {
    const y= 40
    function outer(c) {
        var a=10
        let b= 20// if we comment this b output will be 30 (b from cover() is in closure)
        function inner() {
            console.log(a,y)
            console.log(b)// closure works for var, let
            console.log(c)// parameter also belongs to lexical scope of parent so include inside closure so can be accessed from inner fns
        }
        return inner
    }
    let b=30
    outer('hello')()
}

// var x=outer()//return inner fn to x
// x() //calling x calls fn and displays value ,instead this write

cover()// outer() return inner fn outer()() calls the returned fn
*/
console.log('closure in data hiding')// data hiding/encapsulation is incapsulating data so that others cannot access it

/*
//var counter= 0//this counter is accessible by all so to ensure that nobody else could modify this counter use closure ie wrap this in a fn (let it be counterWrap, see below)

function counterWrap(){
    var counter= 0 // now this var is hidden from others. 
    return function incrementCounter() {
        counter++ 
        console.log(counter)
    }// when returned, the closure of fn is returned so it has counter reference (as it has lexical scope of its parent too)
    
}
counterWrap()() //counterWrap() has returned fn which is cld again to get value or we can call as shown below

var count= counterWrap()// this will be a new counterwrap with a new closure. it will be independent of previous one
count()
*/

console.log('using constructor fn to add decrement counter...')
/*
function counterWrap(){
    var count= 0
    this.incrementCounter= function() {
        count++
        console.log(count)
    }
    this.decrementCounter= function() {
        count--
        console.log(count)
    }
}//still forms closure

var counter =  new counterWrap()
counter.incrementCounter()
counter.decrementCounter()
8?

console.log('Closures and garbage collector')
/*

//garbage collector is a pgm in browser or js engine that freeze up unused memory by taking out unused variables

const p2= document.createElement('p')
p2.textContent= 'If inner fn returned, use parent variables they are not garbage collected instead forms into closure (b is formed into closure with x as it is used). Parent variables not used are garbage collected and freezed (z is garbage collected).'
document.body.appendChild(p2)

function a() {
    var x= 20 , z=10
    return function b(){
        console.log(x)
    }//b() forms closure with x and this closure is returned. 
}
a()()
*/

console.log('Fns some related terms...')


const p3=document.createElement('p')
p3.textContent= 'Differences b/w fn statement and fn expression:- 1) hoisting.  2) naming:  fn statement requires a name to fn, but fn exp can be named or not(anonymous fn : fn without name) '

console.log('1) fn statement:')  // or fn declaration  (a way to create fn)
/*

document.body.appendChild(p3)

a()// a can be called as hoisted to top so return 'a called'
function a(){
    console.log('a called')
}
*/
console.log('2) fn expression:') // (a way to create fn) fn defined inside an expression. ie when fn is assigned to a variable or passed as an argument, or used inside another construct
/*
//b() // b is treated as var, where declaration only is pinned to top (hoisting) but not assignment . so return reference error that b is not a fn (if we do console b undefined is displayed)
var b= function (){
    console.log('b called')
} 

console.log('3) anonymous fns:')  // fns without name

console.log('anonymous fns are used when fns are used as values')// when fns are assigned to something
*/
console.log('4) Named fn expression:') // fn exp with a name (ie fn is given a name)
/*
var c= function xyz(){
    console.log('c called')
}
c()
//xyz()   // cannot be called as not defined in global scope it is inside fn's own scope 
*/
console.log('5) parameters and arguments:')
/*
//values passed inside a fn on calling are arguments. Identifiers or labels on fn declarations or fn expressions that accepts these values are parameters

function add(a,b) { // values are accepted by a,b (parameters)
    console.log(a+b)
}
add(3,4)// values passed on calling are 3,4 (arguments)

let fnExp=function add(c,d) {//c,d are parameters
    console.log(c+d)
}
fnExp(2,3)// 2,3 are arguments
*/
console.log('6) First class fns:')// ability of fns to be used as values is cld first cls fns/ first cls citizens
/*
// fn as a value assigned to variable greet
const greet= function(){
    console.log('hello')
}
greet()
// fn as a value passed as argument
function callMe(fn) {
    fn()
}
callMe(function() {
    console.log('Called !')//fn passed as arg to callMe() fn
})
// fn as a value returned from another fn
function outer() {
    return function() {
        console.log('I came from outer')
    }
}
outer()()
// fn as a value stored inside an object
const obj= {
    sayHi: function(){
        console.log('Hi from obj')
    }
}
obj.sayHi()
*/

console.log('Callback fn...')
/*

//fn passed onto another fn is called callback fn. Callback fns gave access to  asynchronous world (NOTE: JS is synchronous single-threaded language )

//syntax: setTimeout(callbackFn, delay)
setTimeout(function(){ 
    console.log('timer')
},5000)// at first setTimeout is registered. setTimeout will take this callback fn and store it in separate space and attach a timer of 5000ms to it. Js proceeds to nxt line
function x(y){ // phase1=> exec_ctxt||  m/y| x: {...} code|   phase 2=> exec_ctxt||  m/y| x: {...}  code| x(fn y())=> exec_ctxt phase 1||  m/y| y: undefined code|    phase2=> m/y| y: fn y()  code| coslole('inside x') y()=> exec_ctxt phase 1 || m/y| code|   phase2=> exec_ctxt|| m/y|  code| console('inside y) clear y() clear x()
    console.log('inside x')
    y()
}
x(function y(){// y is passed to x and hence y is cld callback fn
    console.log('inside y')
})//after 5s callback in setTimeout is executed (again placed in callstack) exec_ctxt phase 1||  m/y|  code|   phase2=>  m/y|  code| console('timer')  clears setTimeout 

// callstack also cld mainthread, everything executed in page is executed through the callstack only. if anything blocks callstack=> blocking the mainthread suppose x is a long fn and takes time if callback hasn't used it will block call stack Always avoid callstack blocking so use callback fns in such cases for asyncronous behaviour(syn=> orderly executed, async=> executes by not waiting for anything)
*/

console.log('Event listeners...')
/*
document.getElementById('clickMe')// document.getElementById('clickMe').addEventListener()...  instead of writing like this we wrote it down for more visibility.
.addEventListener("click", function xyz() {// this fn is a callback fn
    console.log('Button clicked')
})
*/
console.log('print the count of button clicked:')
/*
let count= 1 // but this count is globally declared and can be accessed by all , so enable data hiding using closure
document.getElementById('clickMe')
.addEventListener('click',function xyz(){// if this event occurs the callback fn xyz() automatically comes into callstack for execution
    console.log('Button clicked' ,count++)
})
   */ 
console.log('closure along with event listener:')
/*
function btonCount(){
    let count= 0
    document.getElementById('clickMe')
    .addEventListener('click',function xyz(){// xyz is forming closure with count (lexical scope: closure with btonCount, gec)
        console.log('Button clicked',++count) //count++ first assigns count then increments so first value will be 0 so use ++count so it first increment then assign
    })
    
}
btonCount()

// EventListeners are heavy.ie it takes memory. Whenever we attach event listeners to button or something closure is created. Even if button is not clicked for long still the memory is not cleared as closure stores it. so we need to remove eventListeners if not needed afterwards. on removing variables, everything collected by closures are garbage collected
*/

console.log('Event Loop...')
/*

//Browser has JS engine in it, JS engine has callstack in it where code execution performs. We need web API's to access Browser's localstorage, timer(using web API setTimeout()), url, webpage/ ui, bluetooth, location, to access external servers(using fetch()) etc. DOM API's give access to dom trees ie what we could write document.getE..., console(Browser API) allows us to log something to console bar, localstorage, location(Browser api) gives access to local storage, location respectively
// Browser wraps all API's to window (global obj) and gives access of window to this callstack / JS engine . So these can be used in JS ie all API's are plugged to our code via window .

//NOTE: on calling settimeout, it registers the callback fn in web API env and delay time is set to timer in browser. as soon as timer expires callback fn is put inside callback queue. event loop (acts as gatekeeper) checks callback queue and puts callback fns to callstack. callstack executes it

console.log('Start') // call_stack| gec run 611 to 616 and pop gec =>  call_stack| 
document.getElementById('clickMe')// document.getElementById.addEventListener() is dom API. document.getele..byid call dom API and it search for id clickMe and returns it (dom=> Document Object Model)
.addEventListener('click', function cb(){//addevntlistnr registers a callback in web API env with event click attached to it
    console.log('Callback')
})
console.log('end')// pop gec, but cb() is still there in web API env until eventlistnr is removed or browser is closed. on clicking bton, cb is pushed to callback queue and event loop puts it to callstack and hence callback queue is empty now=>call_stack| cb() executed and popped after execution
//callback queue lines up all callback fns (suppose bton clicked number of times) . without callback queue all callbacks try to run at once in unpredictable order, which may crash JS midway

console.log('Microtask Queue using fetch:')

const p2= document.createElement('p')
p2.textContent= 'There are 2 queues : callback queue/task queue and microtask queue. Callback queue stores all callback fns. Microtask queue stores "callback fns come through promises" and mutation observer (ie cb fns executed due to mutation in dom tree). Microtask queue has high priority than callback queue.'
document.body.appendChild(p2)

console.log('start')// once gec is inserted in callback, start is displayed in console
setTimeout(function cbT() { //setTimeout reg the callback fn cbT in web API env and 5000ms is set to timer
    console.log('CB setTimeout')
}, 5000);

fetch('https://api.netflix.com/')//fetch(a web API used to make n/w calls) goes and request an API call,  it returns a promise. fetch also reg the callback fn cbF to web API env. Once the promise is resolved(once data is fetched) the callback fn we put in will be executed. 
.then(function cbF(){ // ie cbF waits for data to be fetched and cbT waits for timer to expire so it can be put into callback queue. **Meanwhile js moves to next line. once data is fetched from netflix server cbF is ready for execution. 
    console.log('CB Netflix') // so cbF is moved to microtask queue. after 5000ms cbT is moved to callback queue. event loop checks if callstack is empty, if it does cbF is pushed first and executed (as microqueue has high priority) then cbT
})/
console.log('End')//  **Js display end in console , now callstack is empty as gec is popped. now cbF is first pushed to callstack and executed (so microtask and call stack is now cleared) then cbT is pushed (cleared from task queue and callstack) after execution 

// starvation of callback queue=> callback queue won't get chance to execute as microtask has many callbacks pending 
*/

console.log('JS engine architeture...')
/*
//JS runtime env has everything required to run JavaScript. JS engine, APIs (to connect to outer env), event loop, callback queue, microtask queue, etc are inside JS runtime env. JS runtime env is present in all browsers hence we could run js in them. JS engine is the most imp part of js runtime env. eg: for js engine include chakra(used in microsoft edge), spiderMonkey 1st js engine (in firefox), v8 (in chrome, node.js, deno) 
//JS engine should follow ECMAScript language stds. we can create our own JS engine(if needed) following these stds. JS engine is not a machine but a pgm written in low level lang

const p4= document.createElement('p')
const p5= document.createElement('p')
const  p6= document.createElement('p')
const p7= document.createElement('p')

p4.textContent= 'There are interpreted languages and compiled languages. Interpretted languages has interpreter for execution. Interpreter takes a pgm and execute it line by line (it is fast as no need to wait for compilation). compiled lang has compiler which compiles whole pgm first to an optimized code which is then executed (it is efficient). JS can behave as interpreted lang as well as compiled lang. it is decided based on chosen JS engine whether it is interpreted or it is just in time(jit) compile (ie use both) '
p5.textContent= 'JS engine has parsing,compilation and execution steps , Interpretter , Compiler , Memory heap , Garbage collecter, Callstack.'// first js developed was interpreted lang as it was only meant for browsers, and browsers won't wait for code compilation.
p6.textContent= 'Inside JS engine, code undergoes 3 steps: code ~> parsing ~~(ast)~~> compilation ~~(bytecode)~~> execution.'  //NOTE: astexplorer.net create ast for a piece of code try on google//  It is decided based on chosen JS engine whether JS is interpreted or it is just in time(jit) compile (ie use both).
p7.textContent= 'Parsing => code is broken into tokens and syntax parser convert code into AST(abstract syntax tree). AST is passed to interpreter and it convert this high level code to byte code with help of compiler. Execution requires memory heap and callstack to perform'//  @ compilation step, interpretter takes help from compiler to optimize the code and develop bytecode. ie compiler compiles as much as it can, at the same time when interpreter execute line by line so cld just in time compilation (ie at run time itself so browser no need to wait). generated bytecode is passed to execution step //some js engine has aot compilation (ahead of time) in which compiler compiles a piece of code that is going to be executed later(previous one ie jit compile code along with interpreter)
document.body.appendChild(p4)//optimizations compiler perform for the code includes inlining, copy elision, inline caching, etc
document.body.appendChild(p5)// m/y heap is where all var and fns are assigned memory.Garbage collecter tries to free up m/y space whenever possible( using mark and sweep alg ). @ execution step
document.body.appendChild(p6)
document.body.appendChild(p7)// V8 Js engine|| interpretter is named ignition, compiler is turbofan(it is cld optimizing compiler), garbage collecter is orinoco and oilpan
*/

console.log('Trust issues in setTimeout...')
/*
console.log('Start')

setTimeout(function cb() {
    console.log('Callback')

}, 5000);// setTimeout doesn't guarantees that it will wait exactly for specified delay time (here 5 sec). But it guarentees that it will wait for atleast the specified delay time.
// for 10 sec we run this while loop
console.log('End')//consider we have millions of code to be executed after this 'end' which takes 10 sec to complete execution. Meanwhile the 5 sec timer set has been expired but it won't be executed until gec is popped from callstack ie after 10 sec =>after whole code is executed

//delaying our code for 10 sec using while loop
var startDate= new Date().getTime()//new Date() return current date and time , new Date().getTime() return current time in millisec
var endDate= startDate
while(endDate <= startDate + 10000){ // while loop runs until endDate becomes equal to the startDate+10sec (startDate is stored with current time in ms, 10 sec added to it to make while waits for 10 sec)
    endDate= new Date().getTime() // we assign endDate with current time at each iteration, when it equals to started time+10 sec while loop stops (ie after 10 sec while loop stops)
} 

console.log('While expires')   // even if we set delay time as 0 setTimeout works only after gec is popped from the callstack. setTimeout(cb Fn, delay=0) is called like this in cases such as cb Fn is less important than rest of the code or we want to display it last not at that time, etc

*/

                                        //HIGHER ORDER FNS & FNal PGMMING
console.log('Higher order fns...')
/*

const p4= document.createElement('p')
p4.textContent= 'A function which take another function as an arg or returns a fn from it is cld higher order fns. This is possible because fns are first class citizens in javascript'
document.body.appendChild(p4)

function x(){
    console.log('Namasthe')
}
function y(fn){
    fn()
}
y(x)// here y which takes another fn x as an arg is higher order fn and x is cld the callback fn. 

*/
console.log('calculate radius, circumference, diameter of a circle with given set of radii...')

const radius= [3,1,2,4]
    
console.log('normal way:')           
/*    

const calculateArea= function (r){// here so many repetitions. In Software engineering a principle is there cld DRY ie don't repeat yourself
    const output= []
    for(let i=0; i<r.length; i++){
        output.push(Math.PI*r[i]*r[i])// the logic is only changed here. 
    }
    return output
}
console.log(calculateArea(radius))

const calculateCircumference= function(r){
    const output= []
    for(let i=0; i<r.length; i++){
        output.push(2*Math.PI*r[i])
    }
    return output
}
console.log(calculateCircumference(radius))

const calculateDiameter= function(r) {
    const output= []
    for(let i=0; i<r.length; i++){
        output.push(2*r[i])
    }
    return output
}
console.log(calculateDiameter(radius))
*/
console.log('using FNal pgming:')
/*
//In functional pgming we wrap all logic into small reusable components cld fns (reusability, modularity(each fn as independent modules), higher order fns, pure fns, composition of fns, etc are considered here)

const area= function (r){//logic of area
    return Math.PI*r*r
}
const perimeter= function(r){// logic of perimeter
    return 2*Math.PI*r
}
const diameter= function(r){// logic of diameter
    return 2*r
} 

const result= function(arr, logic){
    const output= []
    for(let i=0; i<arr.length; i++){
        output.push(logic(arr[i]))// the logic is put into the array given (here radius)
    }
    return output
}// now fn is not repeated for each and every logic 

console.log(result(radius,area))// fn result is a higher order fn that takes each logic fn as argument
console.log(result(radius,perimeter))
console.log(result(radius,diameter))

console.log(radius.map(diameter))// the above result fn, is similar to map() fn (a higher order fn) which let us tranform each item of given array and returns a new array. Here result also takes each item of radius array and perform the logic and return the new array. ie we have written our implementation of map() here 🥳
*/

console.log('transforming result fn as map() fn:')
/*
const area= function(r){
    return Math.PI*r*r
}
const perimeter= function(r){
    return 2*Math.PI*r
}
const diameter= function(r){
    return 2*r
}

Array.prototype.result= function(logic){// to call result as radius.result() [just like we call map:  radius.map()] add Array.prototype to result instead of const. this makes result to be accessible by any array in our code (***called as radius.result(radius,area))
    const output=[]
    for(let i=0; i<this.length; i++){
        output.push(logic(this[i]))
    }
    return output
}
//***console.log(radius.result(radius,area))// On calling like this, result takes 2 arguments but map only takes one argument . to make it like map, instead of arr use this. this implies the array called by result( this => current obj)
console.log(radius.result(area))
console.log(radius.result(perimeter))
console.log(radius.result(diameter))// result() is similar to map or we can say result() is a kind of polyphil of map
*/

console.log('Higher order fns eg: map(), filter(), reduce()...')

console.log('map() fn is used to transform each and every item of array as a new array:')// ie when we want transformation of whole array
/*
const arr= [5,1,3,2,6]

// some examples for transformation of arr => double of arr [10,2,6,4,12], binary of arr ["101","1","11","10","110"], etc

function double(x){
    return 2*x
}
function triple(x){
    return 3*x
}
function binary(x){
    return x.toString(2)
}
const output= arr.map(binary) //a function that tells what transformation is to be done should be passed onto map
console.log(output)

const output2= arr.map(function plus10(x){
    return x+10
})
console.log(output2) // function can be directly passed onto map() too as we know map is a higher order fn 

const output3= arr.map(x => {// arrow fns can also be passed to map() fn
    return x*x
})
console.log(output3)

const output4= arr.map(x=> x/2) // if only one statement is there arrow fns can be written as this (remove return statement and curly braces)
console.log(output4)
*/
console.log('filter() fn filters the values in an array')  //used when we want to filter the array to obtain a required value. eg: filter out odd values from an array, filter out values > 4, filter out values divisible by 3, etc
/*
const arr= [5,1,3,2,6]

function isOdd(x){
    return x % 2 // x mod 2 gives remainder 1 or 0 . if 0=> even, if 1=> odd. return x%2 (truthy case) is equal to return x%2 ===1. it returns values in array that gives remainder 1 on division by 2
}
console.log(arr.filter(isOdd))

function isEven(x){
    return x % 2 === 0
}
console.log(arr.filter(isEven))

function greaterThan4(x){
    return x>4
}
console.log(arr.filter(greaterThan4))
console.log(arr.filter(function lessThan3(x) {
    return x<3
}))
console.log(arr.filter(x=> {
    return x % 3 === 0
}))
console.log(arr.filter(x=> x>5))
*/

console.log('reduce() fn is used to reduce an array to a single value:') // reduce() is used when we need to iterate over all items and find out a particular value. ie when we want to reduce array to single value
/*
const arr= [5,1,3,2,6]

function findSum(arr){// here finding sum of items ie array reduced to a single value 
    let sum= 0
    for(let i=0; i<arr.length; i++){
        sum+=arr[i]
    }
    return sum
}
console.log(findSum(arr)) 

const output= arr.reduce(function(acc, curr){ // reduce() takes 2 parameters, a function (which takes accumulator and current as parameters) and initial value od accumulator.  when we write arr.reduce, reduce iterates over each item  of arr. curr represents, each item on each iteration. acc is used to accumulate the result got from each value 
    acc+=curr // ie acc accumulates the sum result on each iteration
    return acc
},0)// initial value of acc is the 2nd parameter (ie zero) of reduce fn. acc must be initialized with a value as it is just appending the result on each iteration to itself. if not initialized it returns a type error for empty arrays as nothing is there to use as first accumulator. for other arrays first value is considered as acc value
console.log(output)

function findMax(arr){
    let max=0
    for(let i=0; i<arr.length; i++){
        if(arr[i]>max){
            max= arr[i]
        }
    }
    return max
}
console.log(findMax(arr))

console.log(arr.reduce(function (acc, curr){// we could change names of acc and curr as we like
    if(curr>acc){
        acc= curr  //accumulator accumulates the max value over each iteration
    } 
    return acc
},0))
*/

console.log('real life example:')

const users= [
    {fstName: 'Akshay', lstName: 'Saini', age: 26},
    {fstName: 'Donald', lstName: 'Trump', age: 75},
    {fstName: 'Elon', lstName: 'Musk', age: 50},
    {fstName: 'Deepika', lstName: 'Padukone', age: 26}
]
// finding list of fullname=> ['Akshay Saini', 'Donald Trump', 'Elon Musk', 'Deepika Padukone'] use map as we need to return a modified array of users with fullName as items
console.log(users.map(x=> x.fstName+' '+x.lstName))

// find out how many people are with a particular age ie we need to return no. of people with a particular age=> [26: 2, 75: 1, 50: 1] use reduce as we need to get a single value age at each iteration
const fullname= users.reduce(function(acc, curr){
    if(acc[curr.age]){
        acc[curr.age]= ++acc[curr.age]
    }else{
        acc[curr.age]= 1
    }
    return acc
},{})
console.log(fullname)// it returns array with a single value (age) from each iteration (so total 3) as key value pair (as given array is in key value pair) 

// find out fst name of all people whose age is less than 30
const output1= users.reduce(function(acc, curr){
    if(curr.age<30){
        acc.push(curr.fstName)
    }
    return acc
},[])
console.log(output1)

console.log('chaining map, filter and reduce:')
console.log(users.filter(x=>x.age<30) .map(x=>x.fstName)) //filter out items with age<30 then map() on this filtered array returns fstName of items in filtered array
