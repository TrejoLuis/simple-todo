const Todos = (() =>{
  let todosArray = []

  const addTodo = (todo) => {
    if(!todosArray.some(t => t.title === todo.title)){
      todosArray.push(todo)
    } 
  }

  const deleteTodo = (todoTitle) => {
    if(todosArray.some(t => t.title === todoTitle)){
      //Deleting in place
      todosArray.forEach((t, ind) => {
        if(t.title === todoTitle) {
          todosArray.splice(ind, 1)
        }
      })
      return `${todoTitle} deleted`
    }
    return `${todoTitle} not found`
  }

  const getAllTodos = () => {
    return todosArray
  }

  const getTodo = (todoTitle) => {
    let todo = null
    todosArray.some((t, tInd) => {
      if(t.title === todoTitle) {
        todo = todosArray[tInd]
      }
    }) 
    if(todo) return todo
    return `${todoTitle} not found`
  }

  return {
    addTodo,
    deleteTodo,
    getAllTodos,
    getTodo
  }
})()

export default Todos
