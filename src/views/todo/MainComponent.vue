<template>
  <div>
    <HeaderComponent />
    <SideBarComponent />
  </div>
</template>

<script>
import HeaderComponent from './subcomponents/HeaderComponent.vue'
import SideBarComponent from './subcomponents/SideBarComponent.vue'

export default {
  components: {
    HeaderComponent,
    SideBarComponent
  }
}
</script>

<style scoped>
</style>