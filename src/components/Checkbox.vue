<template>
  <div class="note-checkbox" @click="editFlag(id)">
    <input class="checkbox-input" id="note-checkbox-id" type="checkbox" style="display: none"  :checked="flag"/>
    <label class="note-checkbox__label">
      <span class="note-checkbox__container">
        <span class="note-checkbox__check"></span>
      </span>
      <slot></slot>
    </label>
  </div>
</template>
<script>
import { mapMutations } from 'vuex';
export default {
  props: {
    flag:Boolean,
    id: String
  },
  methods: {
    ...mapMutations(['editFlag'])
  }
};
</script>
<style lang="scss"></style>
