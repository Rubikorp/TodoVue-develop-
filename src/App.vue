<template>
  <div class="main center">
    <div :class="show_modal ? 'modal-mask' : ''"></div>
    <section 
        class="section">
        <div class="ankhor">
            <create-note-icon class="create-note-icon"></create-note-icon>
        </div>
        <h1 class="ttl">
            СПИСОК ЗАДАЧ
        </h1>
        <find-note-component></find-note-component>
        
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import FindNoteComponent from './components/FindNoteComponent.vue'
import CreateNoteIcon from './components/CreateNoteIcon.vue';


export default {
    components: {
        FindNoteComponent,
        CreateNoteIcon,
    },
    data() {
        return {
            show_modal:false
        }
    },
    computed: {
        ...mapGetters([
            "get_compl_uncompl_all_state",
             "get_state_find_words"
            ]),
    }
}


</script>

<style lang="scss">
    @media (max-width: 720px) {
        .section {
            padding: 8px;
        }
    }
    .ankhor{
        position: relative;
        width: 100%;
    }
    .create-note-icon {
        position: absolute;
        right: 8px;
        top: 80vh;
    }
</style>
