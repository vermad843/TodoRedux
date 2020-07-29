

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


export function reducer(state = initialState, action) {
    return state;
}