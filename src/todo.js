import {addWeeks, format} from 'date-fns'
import {v4 as genId} from 'uuid'

export default class Todo {
  completed = false
  #dueDate = ''
  #id = genId()
  constructor(title, description = '', priority = 2, dueDate = addWeeks(new Date(), 1)) {
    this.title = title
    this.description = description
    this.priority = priority
    this.#dueDate = dueDate instanceof Date ? 
      dueDate : new Date(dueDate)  
  }

  toggleCompleted () {
    this.completed = !this.completed
  }

  get isCompleted(){
    return this.completed
  }

  get dueDate () {
    if(this.#dueDate instanceof Date){
      return format(this.#dueDate, 'MM/dd/yyyy')
    }
    return this.#dueDate
  }

  set dueDate (date) {
    this.#dueDate = new Date(date)
  }

  get id(){
    return this.#id
  }
}
