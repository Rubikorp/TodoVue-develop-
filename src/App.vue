<template>
  <button class="button-focus">Hello</button>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters(["get_state", "get_state_find_words"]),
    }
}


</script>

<style lang="scss">

</style>
