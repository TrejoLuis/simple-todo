
//Testing console logic behavior
import Todos from '../src/todos.js'

window.Todos = Todos

//Adding todo 
Todos.addTodo('make bed')
Todos.addTodo('pay credit card')
console.log(Todos.getAllTodos())

//Modifying todo
const todo1 = Todos.getTodo('pay credit card')
console.log(todo1)
todo1.priority = 3
todo1.description = 'purchased item x, at y.'
todo1.toggleCompleted()
console.log(todo1)

//Deleting todo
Todos.deleteTodo('pay credit card')
console.log(Todos.getAllTodos())


