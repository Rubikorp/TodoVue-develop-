<template>
  <section class="modal">
    <div class="modal__wrapper">
      <div class="modal-container">
        <h2 class="modal-container__head">НОВАЯ ЗАДАЧА</h2>
        <input type="text" placeholder="введите задачу..." class="input modal-container__input" />
        <div class="modal-btn">
          <button class="modal-btn__close" @click="$emit('close')">Закрыть</button>
          <button class="modal-btn__apply" @click="$emit('apply')">Принять</button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
