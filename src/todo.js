import {addWeeks} from 'date-fns'

export default class Todo {
  completed = false
  priority =  2
  dueDate = addWeeks(new Date(), 1)
  description = ''

  constructor(title) {
    this.title = title 
  }

  toggleCompleted () {
    this.completed = !this.completed
  }

  get isCompleted(){
    return this.completed
  }
}
