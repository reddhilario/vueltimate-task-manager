<template>
  <div class="w-100">
    <div class="h-100 container d-flex flex-column justify-content-between">
      <div class="container horizontal-accordion">
        <div :class="this.divClass" @click="expandSideNav">
          <i class="fs-4 bi bi-lightbulb col-2"></i>
          <div class="card-body col-10 p-0 d-flex justify-content-center">
            <h6 class="align-self-center">Notes</h6>
          </div>
        </div>
      </div>
      <div class="container horizontal-accordion">
        <div :class="this.divClass" @click="expandSideNav">
          <i class="fs-4 bi bi-bell col-2"></i>
          <div class="card-body col-10 p-0 d-flex justify-content-center">
            <h6 class="align-self-center">Reminders</h6>
          </div>
        </div>
      </div>
      <div class="container horizontal-accordion">
        <div :class="this.divClass" @click="expandSideNav">
          <i class="fs-4 bi bi-pencil col-2"></i>
          <div class="card-body col-10 p-0 d-flex justify-content-center">
            <h6 class="align-self-center">Edit Labels</h6>
          </div>
        </div>
      </div>
      <div class="container horizontal-accordion">
        <div :class="this.divClass" @click="expandSideNav">
          <i class="fs-4 bi bi-archive col-2"></i>
          <div class="card-body col-10 p-0 d-flex justify-content-center">
            <h6 class="align-self-center">Archive</h6>
          </div>
        </div>
      </div>
      <div class="container horizontal-accordion">
        <div :class="this.divClass" ref="choice" @click="expandSideNav">
          <i class="fs-5 bi bi-trash col-2 text-dark align-self-center"></i>
          <div class="card-body col-10 p-0 d-flex justify-content-center">
            <h6 class="align-self-center text-dark">Trash</h6>
          </div>
        </div>
      </div>
      <!--
      <div class="row itemDivs container">
        <div class="col-2 h-75 d-flex align-items-center justify-content-center">
          <i class="fs-4 bi bi-archive"></i>
        </div>
        <div class="col-6 collapse" id="sideBar">
          <div class="h-100 d-flex align-items-center justify-content-center">
            <h6 class="">Archive</h6>
          </div>
        </div>
      </div>
      <div class="row itemDivs container">
        <div class="col-2 h-75 d-flex align-items-center justify-content-center">
          <i class="fs-4 bi bi-trash"></i>
        </div>
        <div class="col-6 collapse" id="sideBar">
          <div class="h-100 d-flex align-items-center justify-content-center">
            <h6 class="">Trash</h6>
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
      choiceElement: null,
      divClass:
        'row card choice small text-white mx-2 small rounded-pill bg-warning bg-opacity-25 border-0'
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
  height: 180px;
  box-sizing: border-box;
  padding: 0;
  overflow: hidden;
  float: left;
  align-items: center;
  transition: width 0.1s;
  border-radius: 3px;
}
.expand {
  width: 25%;

  height: 40px;
}
.unset {
  width: 16%;
  color: black !important;
  background-color: #ddd !important;
}
.small {
  width: 45px;
  height: 40px;
}
.small > div {
  opacity: 0;
}
.unset > div > p {
  opacity: 0;
}
.expand > div {
  transition-delay: 200ms;
}
</style>