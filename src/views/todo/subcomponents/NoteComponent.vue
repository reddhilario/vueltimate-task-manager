<template>
  <div style="width: 283px; height: 108px" class="ms-3 mt-3">
    <div id="note" class="align-self-start border rounded p-3" style="width: 283px; height: 108px">
      <div>
        <p class="m-0">{{ notes.title }}</p>
      </div>
      <hr class="m-0" />
      <div>
        <p style="font-size: small">{{ notes.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    notes: String
  }
}
</script>

<style scoped>
</style>