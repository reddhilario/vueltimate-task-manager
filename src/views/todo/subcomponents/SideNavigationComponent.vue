<template>
  <div class="w-100">
    <div class="d-flex flex-column choice expand" ref="choice">
      <!-- start of individual row-->
      <div class="d-flex flex-row" style="width: 180px; height: 45px">
        <i class="fs-5 bi bi-lightbulb col-2 me-3"></i>
        <p class="mt-1 text-center text-nowrap">Notes</p>
      </div>
      <!-- end of individual row-->
      <!-- start of individual row-->
      <div class="d-flex flex-row" style="width: 200px; height: 45px">
        <i class="fs-5 bi bi-bell col-2 me-3"></i>
        <p class="mt-1 text-center text-nowrap" style="width: 75px">Reminders</p>
      </div>
      <!-- end of individual row-->
      <!-- start of individual row-->
      <div class="d-flex flex-row" style="width: 200px; height: 45px">
        <i class="fs-5 bi bi-pencil col-2 me-3"></i>
        <p class="mt-1 text-center text-nowrap" style="width: 75px">Edit Labels</p>
      </div>
      <!-- end of individual row-->
      <!-- start of individual row-->
      <div class="d-flex flex-row" style="width: 200px; height: 45px">
        <i class="fs-5 bi bi-archive col-2 me-3"></i>
        <p class="mt-1 text-center text-nowrap">Archive</p>
      </div>
      <!-- end of individual row-->
      <!-- start of individual row-->
      <div class="d-flex flex-row" style="width: 200px; height: 45px">
        <i class="fs-5 bi bi-trash col-2 text-dark me-3"></i>
        <p class="mt-1 text-center text-nowrap">Trash</p>
      </div>
      <!-- end of individual row-->
      <!-- 
      <div class="container horizontal-accordion">
        <div :class="this.divClass" @click="expandSideNav">
          <i class="fs-5 bi bi-trash col-2 text-dark align-self-center"></i>
          <div class="card-body col-10 p-0 d-flex justify-content-center">
            <h6 class="align-self-center text-dark">Trash</h6>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>
<script>
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
    sideWatch() {
      alert('triggered')
    },
    expandSideNav() {
      console.log('from Side bar component: ' + this.sideBarStatus)
      if (this.choiceElement.classList.contains('expand')) {
        console.log('has expand')
        this.choiceElement.classList.remove('expand')
        this.choiceElement.classList.add('small')
      } else if (this.choiceElement.classList.contains('small')) {
        console.log('has small')
        this.choiceElement.classList.remove('small')
        this.choiceElement.classList.add('expand')
      }

      // console.log(this.choiceElement)
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