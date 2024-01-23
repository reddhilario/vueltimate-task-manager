<template>
  <li
    class="p-1 border border-secondary border-end-0 border-start-0 border-top-0"
    style="width: auto"
  >
    <p
      class="m-0 p-1"
      style="
        width: fit-content;
        max-width: 130px;
        word-break: break-all;
        white-space: normal;
        color: white;
        font-size: 0.8em;
        border-radius: 5px 20px 20px 5px;
        font-weight: bold;
      "
      :class="tag.color"
    >
      {{ tag.name }}
    </p>
  </li>
</template>

<script>
export default {
  props: {
    tag: String
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
#tagBody {
  width: auto;
  height: 10px;
  background: red;
}
</style>