<template>
  <div class="container-fluid p-0" style="height: 100vh">
    <TopNavigationComponent />
    <div class="row h-100 w-100">
      <div class="col-4">
        <SideNavigationComponent />
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
  components: {
    TopNavigationComponent,
    SideNavigationComponent,
    TaskContainerComponent
  }
}
</script>

<style scoped>
</style>