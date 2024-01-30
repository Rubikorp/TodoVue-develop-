function createNote(id, text, flag) {
  const obj = {
    id: id,
    text: text,
    flag: flag,
  };
  return obj;
}

export default createNote;