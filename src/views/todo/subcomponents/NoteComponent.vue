<template>
  <div style="width: 283px; height: 108px" class="ms-3 mt-3">
    <div id="note" class="align-self-start border rounded" style="width: 283px; height: 108px">
      <div class="input-group input-group-sm">
        <p>{{ notes.title }}</p>
      </div>
      <hr class="m-0" />
      <div class="input-group">
        <p>{{ notes.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    notes: String
  },
  data() {},
  methods: {}
}
</script>

<style scoped>
@keyframes moveToMiddle {
  from {
    transform: translate(0%);
  }

  to {
    transform: translate(50%, 50%);
  }
}
#backDrop {
  height: 1578px;
  width: 929px;
  top: 0%;
  left: 0%;
  transform: translate(0%, 0%);
  background: rgba(0, 0, 0, 0.466);
}
.noteAnimate {
  background: black;
  position: absolute;
  animation: moveToMiddle 0.1s ease-in 1 normal;
  animation-name: moveToMiddle;
  animation-duration: 1s;
  animation-timing-function: ease-in;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: both;
}
input {
  background: transparent;
}
</style>