<template>
  <div class="main center">
    <section class="section">
      <div class="ankhor">
        <create-note-icon
          class="create-note-icon"
          @click="show_modal = true"
        ></create-note-icon>
      </div>
      <h1 class="ttl">СПИСОК ЗАДАЧ</h1>
      <find-note-component></find-note-component>
      <div class="note">
        <div class="note__container">
          <note 
            v-for="item in checkFilter" 
            :key="item.id" 
            :flag="item.flag"
            :id="item.id"
            >{{item.text}}</note
          >
          <empty-component v-if="getLength === 0"></empty-component>
        </div>
      </div>
    </section>
    <transition name="slide-fade">
      <modal v-if="show_modal" @close="show_modal = false"></modal>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import FindNoteComponent from "./components/FindNoteComponent.vue";
import CreateNoteIcon from "./components/CreateNoteIcon.vue";
import Modal from "./components/Modal.vue";
import Note from "./components/Note.vue";
import EmptyComponent from "./components/EmptyComponent.vue";

export default {
  components: {
    FindNoteComponent,
    CreateNoteIcon,
    Modal,
    Note,
    EmptyComponent,
  },
  data() {
    return {
      show_modal: false,
    };
  },
  methods: {

  },
  computed: {
    ...mapGetters(["getAllNotes", "getLength", "getComplNote", "getUnComplNote", "getFilterValue"]),
    checkFilter() {
        const filter = this.getFilterValue;
        if(filter === "all") return this.getAllNotes;
        if(filter === "uncompl") return this.getUnComplNote;
        if(filter === "compl") return this.getComplNote;
    }
  },
};
</script>

<style lang="scss">
@media (max-width: 720px) {
  .section {
    padding: 8px;
  }
}
.ankhor {
  position: relative;
  width: 100%;
}
.create-note-icon {
  position: absolute;
  right: 8px;
  top: 80vh;
}
</style>
