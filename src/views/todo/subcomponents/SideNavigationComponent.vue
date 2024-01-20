<template>
  <div class="h-50 w-100">
    <div class="col h-100 container">
      <div class="row itemDivs container">
        <div class="col-2 h-75 d-flex align-items-center justify-content-center">
          <i class="fs-4 bi bi-lightbulb"></i>
        </div>
        <div class="col-6 collapse" id="sideBar">
          <div class="h-100 d-flex align-items-center justify-content-center">
            <h6 class="">Notes</h6>
          </div>
        </div>
      </div>
      <div class="row itemDivs container">
        <div class="col-2 h-75 d-flex align-items-center justify-content-center">
          <i class="fs-4 bi bi-bell"></i>
        </div>
        <div class="col-6 collapse" id="sideBar">
          <div class="h-100 d-flex align-items-center justify-content-center">
            <h6 class="">Reminders</h6>
          </div>
        </div>
      </div>
      <div class="row itemDivs container">
        <div class="col-2 h-75 d-flex align-items-center justify-content-center">
          <i class="fs-4 bi bi-pencil"></i>
        </div>
        <div class="col-6 collapse text-nowrap" id="sideBar">
          <div class="h-100 d-flex align-items-center justify-content-center">
            <h6 class="">Edit Labels</h6>
          </div>
        </div>
      </div>
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
      </div>
    </div>
  </div>
</template>
<script>
</script>
<style scoped>
.itemDivs {
  height: 50px;
}
</style>