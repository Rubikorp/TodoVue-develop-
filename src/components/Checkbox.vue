<template>
  <div class="note-checkbox">
    <input id="note-checkbox-id" type="checkbox" style="display: none" />
    <label class="note-checkbox__label" for="note-checkbox-id">
      <span class="note-checkbox__container">
        <span class="note-checkbox__check"></span>
      </span>
      <slot></slot>
    </label>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss"></style>
