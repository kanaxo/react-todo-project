import React from "react"
import {v4 as uuidv4} from "uuid";

import TodosList from "./TodosList"
import Header from "./Header"
import InputTodo from "./InputTodo";

class TodoContainer extends React.Component {
  state = {
    todos: []
   };

  delTodo = id => {
    this.setState({
      todos: [
        ...this.state.todos.filter(todo => {
          return todo.id !== id; // retain the ines whose id not equal to id passed in
        })
      ]
    })
  };

  handleChange = (id) => {
    // console.log("clicked",id);
    this.setState(prevState => ({
      // todos: prevState.todos.map(todo => {
        // if (todo.id === id){
        //   return {
        //     ...todo, //spread the properties
        //     completed: !todo.completed // toggle only completed value
        //   }
        // }
        // return todo;
      // })
      todos: prevState.todos.map(todo => (todo.id === id) ? {...todo, completed : !todo.completed} : todo )
    }))
  };
  
  // handleChange = (id) =>{
  //   const newTodos = this.state.todos.map((todo) =>{
  //     if (todo.id === id){
  //       todo.completed = !todo.completed;
  //     }
  //     return todo
  //   })
  //   this.setState({todos: newTodos })
  // }


  addTodoItem = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  // update TodoItem by double clicking
  setUpdate = (updatedTitle, id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.title = updatedTitle
        }
        return todo
      }),
    })
  }

  componentDidMount(){
    // fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
    // .then(response => response.json())
    // .then(data => this.setState({todos: data}))
    
    const temp = localStorage.getItem("todos") // get stored item
    const loadedTodos = JSON.parse(temp) 
    if (loadedTodos) {
      this.setState({
        todos: loadedTodos
      })
    }

  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.todos !== this.state.todos){
      const temp = JSON.stringify(this.state.todos)
      localStorage.setItem("todos", temp) //set to local storage
    }
  }

  render() {
    return (
      <div className="container">
        <div className="inner">
        <Header />
        <InputTodo addTodoProps = {this.addTodoItem}/>
        <TodosList todos = {this.state.todos} 
          handleChangeProps = {this.handleChange} 
          deleteTodoProps={this.delTodo}
          setUpdate = {this.setUpdate}
        />
        </div>
      </div>
    )
  }
}
export default TodoContainer