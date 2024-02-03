export const getNoteFlag = (state, flag_value) => {
  try {
    return state.filter((item) => item.flag === flag_value);
  } catch (err) {
    console.log(`getNoteFlag /n ${err}`);
  }
};

export const findNoteId = (state, id_value) => {
  try {
    return state.notes.find((item) => item.id === id_value);
  } catch (err) {
    console.log(`findNoteId /n ${err}`);
  }
};
