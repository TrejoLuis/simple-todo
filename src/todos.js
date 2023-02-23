const Todos = (() =>{
  let todosArray = []

  const addTodo = (todo) => {
    if(!todosArray.some(t => t.id === todo.id)){
      todosArray.push(todo)
    } 
  }

  const deleteTodo = (todoId) => {
    console.log(todoId)
    if(todosArray.some(t => t.id === todoId)){
      //Deleting in place
      todosArray.forEach((t, ind) => {
        if(t.id === todoId) {
          todosArray.splice(ind, 1)
        }
      })
      return `${todoId} deleted`
    }
    return `${todoId} not found`
  }

  const getAllTodos = () => {
    return todosArray
  }

  const getTodo = (todoId) => {
    let todo = null
    todosArray.some((t, tInd) => {
      if(t.id === todoId) {
        todo = todosArray[tInd]
      }
    }) 
    if(todo) return todo
    return `${todoId} not found`
  }

  return {
    addTodo,
    deleteTodo,
    getAllTodos,
    getTodo
  }
})()

export default Todos
