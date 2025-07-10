import React, {Component} from 'react'
import axios from 'axios'  // STEP 1

console.log('Making get request using axios and Render the fetched data in react component...')

//  To fetch data we need an API endpoint(A URL or path on a server where a client can send requests to get or send data). Here we use JsonPlaceholder to get the url. visit https://jsonplaceholder.typicode.com -> Routes section -> click a link -> copy the url

//  Fetching data steps:  1)  import axios library  2)  create a state property to store list of posts  3)  Using axios make a get request to JsonPlaceholder API inside componentDidMount lifecycle method. Resolve it to have access 4)  Assign the resolved data to state property 5)  render it (first destructure the state property then display the post list using map method ).

export class PostList extends Component{
    constructor(){
        super()
        this.state= {
            posts: [],  // STEP 2
            error: ''
        }
    }
    componentDidMount(){// This method will be executed when the component mounts for the first time and is only executed once in component's lifetime. Invoke get method on axios library=>  axios.get() . This method accepts API endpoint as it's argument.
        axios.get('https://jsonplaceholder.typicode.com/posts')  // STEP 3  //   here we are making a get request. To access the data returned we resolve it because axios is a promise based library.
            .then(response=> {  //  then accepts an arrow fn as argument which gives us access to the response.
                console.log(response)   // we get an object with data, id, title, user_id
                this.setState({posts: response.data})   // STEP 4  //  Assigning the data resolved (ie response.data) to the state.
            })
            .catch(error=> {    // catches the error if occurs 
                console.log(error)
                this.setState({errorMsg: 'Error in retrieving data'})
            })
    }
    render(){
        const {posts, errorMsg}= this.state
        return(
            <div>
                List of posts:
                {// STEP 5
                    posts.length ? // if there is atleast one post map it to a new array otherwise null
                    posts.map(post => <div key={post.id}>{post.title}</div>) :
                    null
                }
                { errorMsg ? <div>{errorMsg}</div>: null}
            </div>
        )
    }
}

// starts with constructor. It has a state property called 'posts' which is an empty array. Then control flows to render method. The text 'List of posts' is displayed. Actual list is not rendered because 'posts' is empty now. Then control flows to componentDidMount() where the get request is made to API endpoint. Once the data is retrieved we update the state (ie posts property). When state is changed the component will re-render. This time array is not empty so list of titles are displayed.

