import Todo from './todo.js'
import Todos from './todos.js'
import DOMGen from './DOMGen.js'

const listeners = () => {
  const addForm = document.getElementById('addForm')

  //Form listener
  addForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new FormData(addForm)
    console.log(formData)

    const todo = new Todo(
      formData.get('title'),
      formData.get('description'),
      formData.get('priority'),
      formData.get('dueDate')
    )

    console.log(todo)
    Todos.addTodo(todo)
    DOMGen.appendTodoCard(todo)

    addForm.reset()
  })




}
    
function cardFn_close() {
  const cardId = this.parentNode.attributes['card-id'].value
  //Deleting from DOM 
  this.parentNode.remove()
  //Deleting from Data
  Todos.deleteTodo(cardId) 
}

function cardFn_changePriority(e){
  const priorities = {1: 'priority-low', 2: 'priority-medium', 3: 'priority-high'}
  const priority = e.target.attributes['priority'].value
  const currentCard = e.target.parentNode.parentNode
  const currentTodo = Todos.getTodo(currentCard.attributes['card-id'].value)

  currentCard.classList.remove(priorities[1])
  currentCard.classList.remove(priorities[2])
  currentCard.classList.remove(priorities[3])
  currentCard.classList.add(priorities[priority])

  currentTodo.priority = Number(priority)
}

function cardFn_toggleDone(e){
  const currentCard = e.target.parentNode
  const currentTodo = Todos.getTodo(currentCard.attributes['card-id'].value)
  
  currentTodo.toggleCompleted()
  e.target.textContent = currentTodo.isCompleted ? 'Done' : 'Undone'
  
}

export{
  listeners,
  cardFn_close,
  cardFn_changePriority,
  cardFn_toggleDone

} 
