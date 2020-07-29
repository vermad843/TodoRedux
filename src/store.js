const NEW_TODO_CHANGED = 'NEW_TODO_CHANGED';

const initialState = {
    heading: "Todos",
    newTodo: "",
    todos: [
      {
        title: "Learn React",
        done: false
      },
      {
        title: "Learn Vue",
        done: false
      }
    ]
}


export const actions = {
    newTodoChanged(newTodo) {
        return {
            type : NEW_TODO_CHANGED,
            newTodo
        }
    }
}

export function reducer(state = initialState, action) {
    switch(action.type) {
        case NEW_TODO_CHANGED : {
            return {
                ...state,
                newTodo : action.newTodo
            }
        }
        default :
          return state;         
    }
}