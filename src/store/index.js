import { createStore } from "vuex";
import { v4 as uuidv4 } from "uuid";
import createNote from "@/assets/scripts/createNote";
import {getNoteFlag, findNoteId} from "@/assets/scripts/clearFunction";

export default createStore({
  state: {
    filter: 'all',
    current_note: '',
    searchQuery: '',
    black_scheme: false,
    // -----------
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
    },
    getCurrentNote(state) {
      return state.current_note
    },
    filteredData: state => {
      return state.notes.filter(item => {
        const searchData = item.text.toLowerCase();
        const query = state.searchQuery.toLowerCase();
        return searchData.includes(query);
      });
    },
    getBlackScheme(state) {
      return state.black_scheme;
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
      state.notes.forEach(note => {if(note.id === id) note.flag = !note.flag})
    },
    editTextNote(state, obj) {
      state.notes.forEach(note => {if(note.id === obj.id) 
        note.text = obj.text
      })
    },
    updateNoteList(state, note_list) {
      state.notes = note_list
    },
    updateCurrentNote(state, note) {
      state.current_note = note
    },
    removeCurrentNote(state) {
      state.current_note = '';
    },
    setSearchQuery: (state, query) => {
      // Мутация для установки поискового запроса
      state.searchQuery = query;
      state.filter = 'search';
    },
    toogleBlackScheme(state) {
      state.black_scheme = !state.black_scheme;
    }
  },
  actions: {},
  modules: {},
});
