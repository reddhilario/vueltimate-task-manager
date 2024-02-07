<template>
  <div style="width: 283px; height: auto">
    <div class="ms-3 mt-3 align-self-start border rounded p-3 pb-0 card-container">
      <div class="d-flex flex-wrap">
        <p class="m-0 text-break">Clone</p>
      </div>
      <hr class="m-0" />
      <div style="margin-bottom: 40px">
        <p style="font-size: small">Clone</p>
      </div>
      <transition>
        <div
          v-if="isHovering"
          class="noteFooter d-flex flex-row w-100 mb-1 ps-3 pe-3 justify-content-around"
          style="height: auto; font-size: 15px; margin-top: -34px"
        >
          <i
            class="bi bi-calendar-plus footer-icons rounded-circle d-flex justify-content-center align-items-center"
            @mouseover="onIconHover($event.target)"
            @mouseout="onIconOut($event.target)"
          ></i>
          <i
            class="bi bi-person-plus footer-icons rounded-circle d-flex justify-content-center align-items-center"
            @mouseover="onIconHover($event.target)"
            @mouseout="onIconOut($event.target)"
          ></i>
          <i
            class="bi bi-palette rounded-circle d-flex justify-content-center align-items-center"
            @mouseover="onIconHover($event.target)"
            @mouseout="onIconOut($event.target)"
          ></i>

          <i
            class="bi bi-image rounded-circle d-flex justify-content-center align-items-center"
            @mouseover="onIconHover($event.target)"
            @mouseout="onIconOut($event.target)"
          ></i>
          <i
            class="bi bi-archive rounded-circle d-flex justify-content-center align-items-center"
            @mouseover="onIconHover($event.target)"
            @mouseout="onIconOut($event.target)"
          ></i>
          <a
            style="width: 30px; height: 30px"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            href="#"
            class="bi bi-three-dots-vertical rounded-circle d-flex justify-content-center align-items-center dropdown btndropdown-toggle"
            @click.stop
            @mouseover="onIconHover($event.target)"
            @mouseout="onIconOut($event.target)"
          >
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li><a class="dropdown-item" href="#" @click="deleteNote(notes.id)">Action</a></li>
            </ul>
          </a>
        </div>
      </transition>
      <!-- <div
      v-if="isEditing"
      style="
        position: absolute;
        width: 100vw;
        height: 100vh;
        background: rgba(95, 95, 95, 0.486);
        top: 0%;
        left: 0%;
        z-index: 1;
      "
      class="d-flex justify-content-center align-items-center"
    > -->

      <!-- </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {},
  methods: {}
}
</script>

<style scoped>
@keyframes moveToMiddle {
  0% {
    position: absolute;
    width: 100px;
    height: 100px;
    top: 302px;
    left: 294px;
    /* transform: translate(5%, 5%); */
  }
  100% {
    position: absolute;
    top: 37%;
    left: 34.5%;
    /* transform: translate(50%, 50%); */
  }
}
#editCard {
  position: relative;
  z-index: 22222;
  animation-name: moveToMiddle;
  animation-duration: 2s;
  animation-timing-function: ease-in;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: both;
}
.noteFooter > i {
  width: 30px;
  height: 30px;
}
a {
  color: black;
  text-decoration: none;
}

.cardFooter {
  position: absolute;
}
</style>