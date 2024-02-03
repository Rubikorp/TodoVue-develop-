<template>
  <section class="modal">
    <div class="modal__wrapper">
      <form
        class="modal-container"
        onsubmit="return false;"
        v-on:keyup.enter="text !== '' ? pushText(text) : pushText(edit_text)"
      >
        <h2
          class="modal-container__head"
          v-if="checkModal()"
        >
          НОВАЯ ЗАДАЧА
        </h2>
        <h2 class="modal-container__head" v-if="checkModalEdit()">
          ИЗМЕНИТЬ
        </h2>
        <input
          v-if="checkModal()"
          type="text"
          placeholder="введите задачу..."
          v-model="text"
          class="input modal-container__input"
        />
        <input
          v-if="checkModalEdit()"
          type="text"
          placeholder="введите задачу..."
          v-model="edit_text"
          class="input modal-container__input"
        />
        <div class="modal-btn">
          <button class="modal-btn__close" @click="$emit('close')">
            Закрыть
          </button>
          <button v-if="checkModal()" class="modal-btn__apply" @click="pushText(text)">
            Принять
          </button>
          <button v-if="checkModalEdit()" class="modal-btn__apply" @click="pushText(edit_text)">
            Принять
          </button>
        </div>
      </form>
    </div>
  </section>
</template>
<script>
import {mapMutations } from "vuex";
export default {
  props: {
    show_modal: Boolean,
    show_modal_edit: Boolean,
    id_cur: String,
    text_prev: String
  },
  data() {
    return {
      text: "",
      edit_text:this.text_prev
    };
  },
  methods: {
    ...mapMutations(["addNote", "removeCurrentNote","editTextNote" ]),

    checkModal() {
      return this.show_modal && this.show_modal_edit === false;
    },
    checkModalEdit() {
      return this.show_modal && this.show_modal_edit
    },

    pushText(text) {
      if(this.checkModal && this.text !== '') {
        this.addNote(text);
        this.text = "";
      } else if(this.checkModalEdit && this.edit_text !== '') {
        const textValueId = {id: this.id_cur, text: text}
        this.editTextNote(textValueId);
        this.removeCurrentNote();
        this.edit_text = "";
        this.$emit('close')
      }
    },
  },
};
</script>
