<template>
  <div class="d-flex justify-content-center w-100">
    <div class="d-flex flex-column w-100">
      <div>
        <p class="title fs-1" aria-label="page-title">New Page Title</p>
      </div>
      <div class="d-flex flex-column">
        <input aria-label="inputFieldDesciption" v-model="inputValue" class="w-25" />
        <p class="text-wrap">{{ this.inputValue }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: ''
    }
  }
}
</script>
<style>
</style>