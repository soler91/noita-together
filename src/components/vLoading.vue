<template>
  <transition name="loading">
    <div class="loading-mask">
      <div class="loading-wrapper">
        <div class="loading-container">
          <i class="fas fa-spinner fa-spin fa-pulse"></i>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts"></script>

<style>
.loading-mask {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
}

.loading-wrapper {
  margin: auto;
}

.loading-container {
  padding: 20px 30px;
  transition: all 0.1s ease;
}

.loading-container > i {
  font-size: 4rem;
}

/*
   * The following styles are auto-applied to elements with
   * transition="modal" when their visibility is toggled
   * by Vue.js.
   *
   * You can easily play with the modal transition by editing
   * these styles.
   */

.loading-enter {
  opacity: 0;
}

.loading-leave-active {
  opacity: 0;
}

.loading-enter .loading-container,
.loading-leave-active .loading-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
