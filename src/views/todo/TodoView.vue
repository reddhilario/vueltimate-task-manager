<template>
  <div class="container-fluid p-0" style="height: 100vh">
    <TopNavigationComponent />
    <div class="row w-100">
      <div class="col" style="width: 280px">
        <SideNavigationComponent :sideBarStatus="this.sideBarOpen" />
      </div>
      <div class="col-8 d-flex">
        <TaskContainerComponent />
      </div>
    </div>
  </div>
</template>

<script>
import TopNavigationComponent from './subcomponents/TopNavigationComponent.vue'
import SideNavigationComponent from './subcomponents/SideNavigationComponent.vue'
import TaskContainerComponent from './subcomponents/MainComponent.vue'

export default {
  data() {
    return {
      sideBarOpen: false
    }
  },
  components: {
    TopNavigationComponent,
    SideNavigationComponent,
    TaskContainerComponent
  },
  methods: {
    toggleSideBarOpen() {
      this.sideBarOpen = !this.sideBarOpen
      console.log('Parent Component: ' + this.sideBarOpen)
    }
  }
}
</script>

<style scoped>
</style>