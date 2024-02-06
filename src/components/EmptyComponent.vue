<template>
    <div class="empty-container">
        <img class="empty-img" src="../assets/img/empty.svg" alt="пусто">
        <p :class="'empty-text ' + (getBlackScheme ? 'font-black-scheme' : '')">Пусто...</p>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters(['getBlackScheme'])
    }
}
</script>
<style lang="">
    
</style>