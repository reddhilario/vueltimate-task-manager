<template>
  <div class="p-0">
    <nav class="navbar navbar-light bg-light p-0">
      <div class="w-100 d-flex">
        <div class="row navBarDiv ms-3 me-3">
          <div class="col-6 h-100">
            <btn
              class="fs-3 btn bi bi-list p-0"
              data-bs-target="#sideBar"
              data-bs-toggle="collapse"
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
            <div class="">
              <div class="">
                <button
                  class="fs-4 bi bi-person-circle btn dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-bs-auto-close="outside"
                ></button>

                <div class="dropdown-menu dropdown-menu-end">
                  <div class="d-flex flex-column">
                    <div class="align-self-center"><p class="text-center">name</p></div>
                    <div class="align-self-center"><p>email</p></div>
                    <hr class="hr" />
                    <div class="align-self-center">
                      <button type="button" class="btn btn-outline-danger bi bi-box-arrow-right">
                        Sign Out
                      </button>
                    </div>
                  </div>
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
</script>

<style scoped>
.navBarDiv {
  height: 48px;
}
nav {
  height: 64px;
}
</style>