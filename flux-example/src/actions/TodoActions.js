import dispatcher from "../dispatcher";

export function createTodo(text) {
  dispatcher.dispatch({
    type: "CREATE_TODO",
    text,
  });
}

export function reloadTodos() {
  dispatcher.dispatch({type: "FETCH_TODOS"});
  setTimeout(() => {
    dispatcher.dispatch({type: "RECEIVE_TODOS", todos: [
      {
        id: 8484848484,
        text: "Go Shopping Again"
      },
      {
        id: 6262627272,
        text: "Hug Wife"
      },
    ]});
  }, 1000);
}
