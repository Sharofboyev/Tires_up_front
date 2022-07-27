import React from "react"
import TodosList from "./TodosList";
import Header from "./Header";
import InputToDo from "./InputTodo";

class TodoContainer extends React.Component {

    state = {
        todos: [
          {
            id: 1,
            title: "Setup development environment2",
            completed: true
          },
          {
            id: 2,
            title: "Develop website and add content",
            completed: true
          },
          {
            id: 3,
            title: "Deploy to live server",
            completed: false
          }
        ],
        counter: 3
    };

    handleChange = id => {
        this.setState(prevState => ({
            todos: prevState.todos.map(todo => {
              if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
              }
              return todo
            }),
          }))
    };

    delTodo = id => {
        this.setState(prevState => {
            return {
                todos: prevState.todos.filter((todo) => {
                    return todo.id !== id
                })
            }
        })
    };

    handleSubmit = (title) => {
      const newTodo = {
        title: title,
        id: 4,
        completed: false,
      }
      this.setState({
        todos: [...this.state.todos, newTodo]
      })
    }
    render() {
        return (
          <div>
            <Header/>
            <InputToDo handleSubmit={this.handleSubmit}/>
            <TodosList todos={this.state.todos} handleChangeProps={this.handleChange} deleteTodoProps={this.delTodo}/>
          </div>
        );
    }
}
export default TodoContainer