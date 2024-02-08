<template>
  <div class="container-fluid p-0" style="height: 100vh">
    <TopNavigationComponent />
    <div class="d-flex flex-row">
      <div class="" style="width: 280px">
        <SideNavigationComponent :sideBarStatus="this.sideBarOpen" />
      </div>
      <div class="d-flex flex-fill justify-content-center">
        <!-- <TaskContainerComponent v-if="taskIsActive" />
        <NewPageComponent v-if="newPageIsActive" /> -->
        <component :is="pages[currentPage]"></component>
      </div>
    </div>
  </div>
</template>

<script>
    import TopNavigationComponent from './subcomponents/TopNavigationComponent.vue'
    import SideNavigationComponent from './subcomponents/SideNavigationComponent.vue'
    import TaskContainerComponent from './subcomponents/MainComponent.vue'
    import NewPageComponent from './subcomponents/NewPageComponent.vue'
    import { mapGetters } from 'vuex'
    
    export default {
        computed: {
        ...mapGetters({
            taskIsActive: 'notes/getTaskIsActiveStatus',
            newPageIsActive: 'notes/getNewPageIsActiveStatus',
            pages: 'notes/getPages',
            currentPage: 'notes/getCurrentPage'
        })
        },
        data() {
        return {
            sideBarOpen: false
        }
        },
        components: {
        TopNavigationComponent,
        SideNavigationComponent,
        TaskContainerComponent,
        NewPageComponent
        },
        methods: {
        toggleSideBarOpen() {
            this.sideBarOpen = !this.sideBarOpen
        }
        }
    }
</script>

<style scoped>
</style>