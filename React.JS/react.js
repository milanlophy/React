                        //REACT INTRO (react from scratch)
/*
const p= document.createElement('p')
p.textContent= 'React is an open source javascript library for building user interfaces. React is a project created and maintained by facebook. React has a component based architecture. This let us to breakdown our application into small encapsulated parts(components) which can then be composed to make more complex UI. Eg: a website breakdown as header, sidenav, main content and footer.'
document.body.appendChild(p) //(note that react is a JS library not a framework)

const p1= document.createElement('p')
const p2= document.createElement('p')
p1.textContent= 'Components makes it possible to write reusable code. React is declarative ie tell react what we want and it will build the UI. React will handle efficiently updating and rendering the components on data change(dom updates are handled easily) we can integrate react into any of our applications'
p2.textContent= 'Prequisites to start react: HTML, CSS and JavaScript fundamentals, ES6 (=>JS new version)'
document.body.appendChild(p1)
document.body.appendChild(p2)
*/

console.log('Components...')

const p= document.createElement('p')
p.textContent= 'Components describe a part of the user interface. They are reusable and can be nested inside other components. Components two types: Stateless functional components and Stateful functional components. To connect any Component with rest of our application export it from the js file where it is defined, import it in App.js and then include it in app component '
document.body.appendChild(p)

const p1= document.createElement('p')
p1.textContent= 'Fnal components are JavaScript fns. They receive obj of properties cld props as input return html(jsx) that describes UI. Class components are ES6 classes. props(input)~~~>|ES6 cls|~~~>html cld as jsx(output). Cls components can also maintain a private internal state. JSX (JavaScript XML) is an extension to the JavaScript language syntax.'// ie it can maintain some private info of component and can use it to describe UI. 
document.body.appendChild(p1)