<template>
  <div class="p-0">
    <nav id="idddd" class="navbar navbar-light bg-light p-0">
      <div class="w-100 d-flex">
        <div class="row navBarDiv ms-3 me-3">
          <div class="col-6 h-100 ps-0">
            <btn
              class="fs-3 btn bi bi-list p-0"
              data-bs-target="#sideBar"
              data-bs-toggle="collapse"
              @click="toggleSideBarOpenFunctionInParent"
            ></btn>
          </div>
          <div class="col-6 p-0 h-100 text-nowrap"><h3>Keep-i</h3></div>
        </div>
        <div class="navBarDiv ms-5 me-5">
          <div class="input-group input-group-sm mt-2" style="width: 600px">
            <input
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
            />
          </div>
        </div>
        <div class="navBarDiv d-flex justify-content-end flex-fill">
          <div class="navBarDiv d-flex me-5">
            <div class=""><button class="fs-4 bi bi-arrow-clockwise btn m-0"></button></div>
            <div class=""><button class="fs-4 bi bi-view-list btn"></button></div>
            <div class=""><button class="fs-4 bi bi-gear btn"></button></div>
          </div>
          <div class="navBarDiv d-flex">
            <div class=""><button class="fs-4 bi bi-grid-3x3-gap-fill btn"></button></div>
            <div class="d-flex flex-column justify-content-center">
              <button
                class="fs-4 bi bi-person-circle btndropdown-toggle border-0 bg-transparent"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-auto-close="outside"
              ></button>

              <div class="dropdown-menu dropdown-menu-end">
                <div class="d-flex flex-column">
                  <i
                    class="bi bi-person-circle border-0 bg-transparent text-center"
                    style="font-size: 70px"
                  ></i>
                  <p class="text-center m-0">Juan Dela Cruz</p>
                  <p class="text-center text-secondary" style="font-size: 12px">juan@example.com</p>

                  <button type="button" class="btn btn-outline-danger bi bi-box-arrow-right">
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    toggleSideBarOpenFunctionInParent() {
      this.$parent.toggleSideBarOpen()
    }
  }
}
</script>

<style scoped>
.navBarDiv {
  height: 48px;
}
nav {
  height: 64px;
}
</style>