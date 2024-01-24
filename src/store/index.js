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
    get_state(state) {
      return state.todos;
    },

    get_state_find_words(todos = state.todos, input) {
      const matches = [];
      todos.forEach((todo) => {
        if (todo.text.indexOf(input) !== -1) {
          matches.push(todo);
        }
      });
      return matches;
    },
  },
  mutations: {
    add_todo(state, todo) {
      state.todos.push(todo)
    },
    delete_todo(state, id) {
      state.todos.filter((todo) => todo.id !== id)
    }
  },
  actions: {},
  modules: {},
});
