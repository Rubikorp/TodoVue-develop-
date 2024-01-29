import { createStore } from "vuex";
import { v4 as uuidv4 } from "uuid";

export default createStore({
  state: {
    todos: [
      {
        id: uuidv4(),
        text: "Планируй и создавай",
        flag: false,
      },
    ],
  },
  getters: {
    getClickAdd(state) {
      return state.click_add;
    },

    getStateFindWords(todos = state.todos, input) {
      const matches = [];
      todos.forEach((todo) => {
        if (todo.text.indexOf(input) !== -1) {
          matches.push(todo);
        }
      });
      state.view_todos = matches;
    },

    getComplUncomplAllState(state, view) {},
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo);
    },
    deleteTodo(state, id) {
      state.todos.filter((todo) => todo.id !== id);
    },
  },
  actions: {},
  modules: {},
});
