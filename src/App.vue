<template>
  <div class="main center">
    <header>
        <h1 class="ttl">
            СПИСОК ЗАДАЧЬ
        </h1>
    </header>
    <div class="find-note">
        <find-note-component></find-note-component>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import FindNoteComponent from './components/FindNoteComponent.vue'

export default {
    components: {
        FindNoteComponent,
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

</style>
