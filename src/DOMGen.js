import {addWeeks, format} from 'date-fns'
import {listeners, cardFn_close, cardFn_changePriority, cardFn_toggleDone} from "./functions.js"
import Todos from "./todos"

const DOMGen = (() => {
  let todosContainer = null

  const init = () =>{

    const content = document.createElement('div')
    content.id = 'content'

    const header = document.createElement('header')
    header.innerHTML = `
      <div>My Logo</div>
      <p>Simple Todo App</p>
      <nav>
        <ul class="headerList">
          <li><a href="#">Sample1</a></li>
          <li><a href="#">Sample2</a></li>
          <li><a href="#">Sample3</a></li>
        </ul>
      </nav>
    `
    const main = document.createElement('main')
    
    const addTodoContainer = document.createElement('div')
    addTodoContainer.classList.add('addTodo-container')
    addTodoContainer.innerHTML = `
      <form id="addForm" action="#">
        <label for="title"><input type="text" id="title" name="title" required></label>
        <button type="submit">Add</button>
        <span id="toggle-hiddenForm">v</span>
        <div class="hiddenForm">
          <label for="description">Description<input type="text" id="description" name="description"></label>
          <div>
            <p>Priority</p>
            <label for="p1">1<input type="radio" id="p1" name="priority" value="1"></label>
            <label for="p2">2<input type="radio" id="p2" name="priority" value="2" checked></label>
            <label for="p3">3<input type="radio" id="p3" name="priority" value="3"></label>
          </div>
          <label for="dueDate">Due Date:</label>
          <input type="date" id="dueDate" name="dueDate"
                 min="${format(new Date(), 'yyyy-MM-dd')}"
                 value="${format(addWeeks(new Date(), 1), 'yyyy-MM-dd')}">
        </div>
      </form>
    `

    todosContainer = document.createElement('div')
    todosContainer.classList.add('todo-container')

    if(Todos.getAllTodos()){
      Todos.getAllTodos().forEach(t => {
        todosContainer.appendChild(genCard(t))
      })
    }

    main.append(addTodoContainer, todosContainer)

    content.append(header, main)

    document.body.appendChild(content)

    listeners()
  }
  
  const genCard = (todo) => {
    const card = document.createElement('div')
    card.classList.add('todo-card')
    card.classList.add(
      todo.priority == 1 
        ? 'priority-low'
        : todo.priority == 2 
          ? 'priority-medium'
          : 'priority-high'
    )
    card.setAttribute('card-id', todo.id)

    const closeSpn = document.createElement('span') 
    closeSpn.classList.add('close-card')
    closeSpn.addEventListener('click', cardFn_close)

    const priorityDiv = document.createElement('div')
    priorityDiv.classList.add('card-priority-container')
    for(let i = 1; i <=3; i++){
      const priority = document.createElement('div')
      priority.classList.add('card-priority')
      priority.setAttribute('priority', i)
      priority.addEventListener('click', cardFn_changePriority)
      priorityDiv.appendChild(priority)
    }

    const cardTitle = document.createElement('h3')
    cardTitle.textContent = todo.title

    const cardDescription = document.createElement('p')
    cardDescription.textContent = todo.description

    const cardDuedate = document.createElement('p')
    cardDuedate.textContent = todo.dueDate

    const cardToggleDone = document.createElement('button')
    cardToggleDone.textContent = 'Undone'
    cardToggleDone.addEventListener('click', cardFn_toggleDone )

    card.append(closeSpn, priorityDiv, cardTitle, cardDescription, cardDuedate, cardToggleDone)
    // card.innerHTML = `
    //   <span class="close-card">x</span>
    //   <h3>${todo.title}</h3>
    //   <p>${todo.description}</p>
    //   <p>Priority: ${todo.priority}</p>
    //   <p>Due Date: ${todo.dueDate}</p>
    // `
    return card
  }

  const renderCards = () => {

  }

  const appendTodoCard = (todo) => todosContainer.appendChild(genCard(todo))

  return {
    init,
    appendTodoCard
  }
})()

export default DOMGen
