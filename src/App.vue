<template>
  <div class="main center">
    <section 
        class="section">
        <div class="ankhor">
            <create-note-icon class="create-note-icon" @click="show_modal=true"></create-note-icon>
        </div>
        <h1 class="ttl">
            СПИСОК ЗАДАЧ
        </h1>
        <find-note-component></find-note-component>
        <div class="note">
            <div class="note__container">
                <note> NOTE #1</note>
                <note> NOTE #1</note>
                <note> NOTE #1</note>
            </div>
        </div>
    </section>
    <modal v-if="show_modal" @close="show_modal=false"></modal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import FindNoteComponent from './components/FindNoteComponent.vue'
import CreateNoteIcon from './components/CreateNoteIcon.vue';
import Modal from './components/Modal.vue';
import Note from './components/Note.vue';


export default {
    components: {
        FindNoteComponent,
        CreateNoteIcon,
        Modal,
        Note
    },
    data() {
        return {
            show_modal:false
        }
    },
    methods: {
        
    },
    computed: {

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
