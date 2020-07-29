const NEW_TODO_CHANGED = 'NEW_TODO_CHANGED';
const ADD_TODO = 'ADD_TODO';

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
    },
    addTodo(todo) {
        return {
            type : ADD_TODO,
            todo
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
        case ADD_TODO : {
            return {
                ...state,
                todos : [...state.todos,action.todo]
            }
        }
        default :
          return state;         
    }
}