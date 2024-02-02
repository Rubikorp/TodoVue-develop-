import { createStore } from "vuex";
import { v4 as uuidv4 } from "uuid";
import createNote from "@/assets/scripts/createNote";
import {getNoteFlag, findNoteId} from "@/assets/scripts/clearFunction";

export default createStore({
  state: {
    filter: 'all',
    notes: [
      {
        id: uuidv4(),
        text: "Планируй и создавай",
        flag: false,
      },
    ],
  },
  getters: {
    getAllNotes(state) {
      return state.notes;
    },
    getComplNote(state) {
      return getNoteFlag(state.notes, true)
    },
    getUnComplNote(state) {
      return getNoteFlag(state.notes, false)
    },
    getLength(state) {
      return state.notes.length
    },
    getFilterValue(state) {
      return state.filter
    },
    getNote(state,id) {
      return findNoteId(state, id);
    }
  },
  mutations: {
    addNote(state, text) {
      state.notes.push(createNote(uuidv4(), text, false))
    },
    deleteNote(state, id) {
      state.notes = state.notes.filter(item => item.id !== id)
    },
    editFilter(state, filter) {
      state.filter = filter
    },
    editFlag(state, id) {
      state.notes.forEach((note) => {if(note.id === id) note.flag = !note.flag})
    },
    editTextNote(state, id, text) {
      findNoteId(state, id).text = text;
    }
  },
  actions: {},
  modules: {},
});
