<template>
  <div class="w-100">
    <div class="d-flex flex-column choice expand" ref="choice">
      <!-- start of individual row-->
      <div class="d-flex flex-row" style="width: 200px; height: 45px" @click="changeCurrentPage('Tasks')">
        <i class="fs-5 bi bi-lightbulb col-2 me-3"></i>
        <p class="text-center text-nowrap" style="margin-top: 6px">Notes</p>
      </div>
      <!-- end of individual row-->
      <!-- start of individual row-->
      <div class="d-flex flex-row" style="width: 200px; height: 45px">
        <i class="fs-5 bi bi-bell col-2 me-3"></i>
        <p class="mt-1 text-center text-nowrap" style="width: 75px; margin-top: 6px">Reminders</p>
      </div>
      <!-- end of individual row-->
      <!-- start of individual row-->
      <div class="d-flex flex-row" style="width: 200px; height: 45px">
        <i class="fs-5 bi bi-pencil col-2 me-3"></i>
        <p class="mt-1 text-center text-nowrap" style="width: 75px; margin-top: 6px">Edit Labels</p>
      </div>
      <!-- end of individual row-->
      <!-- start of individual row-->
      <div class="d-flex flex-row" style="width: 200px; height: 45px">
        <i class="fs-5 bi bi-archive col-2 me-3"></i>
        <p class="mt-1 text-center text-nowrap" style="margin-top: 6px">Archive</p>
      </div>
      <!-- end of individual row-->
      <!-- start of individual row-->
      <div class="d-flex flex-row" style="width: 200px; height: 45px">
        <i class="fs-5 bi bi-trash col-2 me-3"></i>
        <p class="mt-1 text-center text-nowrap" style="margin-top: 6px">Trash</p>
      </div>
      <!-- end of individual row-->
      <!-- start of individual row-->
      <div class="d-flex flex-row" style="width: 200px; height: 45px" @click="changeCurrentPage('NewPage')">
        <i class="fs-5 bi bi-trash col-2 me-3"></i>
        <p class="mt-1 text-center text-nowrap" style="margin-top: 6px">New Page</p>
      </div>
      <!-- end of individual row-->
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  props: {
    sideBarStatus: Boolean
  },
  data() {
    return {
      choiceElement: null
    }
  },
  watch: {
    sideBarStatus() {
      this.expandSideNav()
    }
  },
  methods: {
    ...mapActions({
      flipStatus: 'notes/flipStatus',
      changeCurrentPage: 'notes/changeCurrentPage'
    }),
    sideWatch() {
      alert('triggered')
    },
    expandSideNav() {
      if (this.choiceElement.classList.contains('expand')) {
        this.choiceElement.classList.remove('expand')
        this.choiceElement.classList.add('small')
      } else if (this.choiceElement.classList.contains('small')) {
        this.choiceElement.classList.remove('small')
        this.choiceElement.classList.add('expand')
      }
    }
  },
  mounted() {
    this.choiceElement = this.$refs.choice
  }
}
</script>
<style scoped>
.choice {
  height: 500px;
  padding-left: 20px;
  overflow: hidden;
  transition: width 0.5s;
}
.expand {
  width: 200px;
}
.small {
  width: 50px;
  font-size: 1em;
}
</style>