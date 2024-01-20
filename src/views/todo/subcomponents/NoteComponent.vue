<template>
  <div
    id="note"
    class="align-self-start border rounded ms-3 mt-3"
    style="width: 283px; height: 108px"
  >
    <div class="input-group input-group-sm">
      <p>{{ notes.title }}</p>
    </div>
    <hr class="m-0" />
    <div class="input-group">
      <p>{{ notes.description }}</p>
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
input {
  background: transparent;
}
</style>