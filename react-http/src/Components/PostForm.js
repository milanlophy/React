import React, {Component} from 'react'
import axios from 'axios'

// post the object we want using axios : steps|| 1) create the input field 2) tie the values with state object 3) make a post request in the submit handler

export class PostForm extends Component{
    constructor(){
        super()
        this.state= {
            userId : '',
            title : '',
            body : ''
        }
    }
    changeHandler=(e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitHandler=(e) =>{   // STEP 3
        e.preventDefault()
        console.log(this.state)
         axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
            .then(response =>{
                console.log(response)
            })
            .catch(error=> {
                console.log(error)
            })
    }
    render(){
        const {userId, title, body} = this.state
        return(     //  STEP 1
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type= 'text' name='userId' value={userId} onChange={this.changeHandler}/>   {/* STEP 2 // tie value with state. value= {userId} */ }
                    </div>
                    <div>
                        <input type= 'text' name= 'title' value={title} onChange= {this.changeHandler}/>
                    </div>
                    <div>
                        <input type='text' name='body' value = {body} onChange= {this.changeHandler}/>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

const p= document.createElement('p')
p.textContent='React Hooks allows to use react features without having to write a class. Eg: state can be used without creating a class using hooks. Hooks  won\'t work inside a class. React version 16 has implemented this special feature called hooks.'
document.body.appendChild(p)

const p1= document.createElement('p')
p1.textContent='Motivation behind Hooks: this keyword in javaScript is a little bit confusing than in other languages. 2) In class components we need to remember to bind event handlers  3)  Classes don\'t minify very well and make hot reloading very unreliable '
document.body.appendChild(p1)

const p2= document.createElement('p')
p2.textContent= 'There is on particular way to reuse stateful component logic. HOC and render props patterns do '
// 4)  There is on particular way to reuse stateful component logic. HOC and render props patterns do address this problem but we need to change components which make it awkward in looking. ie makes the code harder to follow. So there is a need to share stateful logic in a better way which is hooks 
// 5)  In cases of creating components for complex scenarios such as data fetching and subscribing to events , the related code is not organized in one place. eg: data fetching is done in componentDidMount and sometimes in componentDidUpdate , to set eventListeners we set them in componentDidMount and subscribe in componentWillUnmount. Unrelated code data fetching and event listeners are together in componentDidMount. It will be good if we could categorize related code together hooks make it possible.