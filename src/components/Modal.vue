<template>
  <section class="modal">
    <div class="modal__wrapper">
      <form
        class="modal-container"
        onsubmit="return false;"
        v-on:keyup.enter="checkText(text)"
      >
        <h2 class="modal-container__head">НОВАЯ ЗАДАЧА</h2>
        <input
          type="text"
          placeholder="введите задачу..."
          v-model="text"
          class="input modal-container__input"
          autofocus
        />
        <div class="modal-btn">
          <button class="modal-btn__close" @click="$emit('close')">
            Закрыть
          </button>
          <button class="modal-btn__apply" @click="checkText(text)">
            Принять
          </button>
        </div>
      </form>
    </div>
  </section>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  props: {
    show_modal_edit: Boolean,
  },
  data() {
    return {
      text: "",
    };
  },
  methods: {
    ...mapMutations(["addNote"]),

    checkText(text) {
      if (this.show_modal_edit !== true && text !== "") {
        this.addNote(text);
        this.text = "";
      } else {
        
      }
    },
  },
};
</script>
