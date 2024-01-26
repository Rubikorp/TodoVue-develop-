<template>
    <button class="btn-create-note" @click="update_click_add">
        <img class="btn-create-note__img" src="../assets/img/add-btn.svg" alt="add">
    </button>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
    name: "CreateNoteIcon",
    methods: {
        ...mapMutations(['update_click_add'])
    },
}
</script>
<style lang="scss">
    
</style>