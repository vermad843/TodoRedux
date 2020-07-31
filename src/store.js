const NEW_TODO_CHANGED = 'NEW_TODO_CHANGED';
const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO_DONE = 'TOGGLE_TODO_DONE';
const REMOVE_TODO = 'REMOVE_TODO';

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
    },
    toggleTodoDone(toggle) {
        return {
            type : TOGGLE_TODO_DONE,
            toggle
        }
    },
    removeTodo(index){
        return {
            type : REMOVE_TODO,
            index
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
        case TOGGLE_TODO_DONE : {
            const todos = [...state.todos];
            todos[action.toggle.index] = { ...todos[action.toggle.index] };
            todos[action.toggle.index].done = action.toggle.checked;
            return {
                ...state,
                todos
            }
        }
        case REMOVE_TODO : {
            const todos = [...state.todos];
             todos.splice(action.index, 1);
             return {
                ...state,
                todos 
             }
        }
        default :
          return state;         
    }
}