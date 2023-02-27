import './style.css'
import DOMGen from './DOMGen.js'
import {listeners} from './functions.js'

import Todos from '../src/todos.js'
import Todo from '../src/todo.js'

window.Todos = Todos

//Filling data
Todos.addTodo(new Todo('todo1', 'testing testing test', 1))
Todos.addTodo(new Todo('important todo', 'tessiofajo saoijf oasjf fad', 3))
Todos.addTodo(new Todo('todo5 afs mwe', 'ahsdfsaoijf fadsdf'))

DOMGen.init()

//Testing console logic behavior

/* 
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

 */
