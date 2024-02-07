<template>
  <div style="width: 283px; height: auto">
    <div
      :id="notes.id"
      @mouseenter="this.isHovering = !this.isHovering"
      @mouseleave="this.isHovering = !this.isHovering"
      @click="flipIsEdit()"
      class="ms-3 mt-3 align-self-start border rounded p-3 pb-0 card-container"
    >
      <div class="d-flex flex-wrap">
        <p v-if="!isEditing" class="m-0 text-break">{{ noteDescription }}</p>
        <input v-else type="text" @click.stop :value="noteTitle" />
      </div>
      <hr class="m-0" />
      <div style="margin-bottom: 40px">
        <p v-if="!isEditing" style="font-size: small">{{ noteDescription }}</p>
        <input v-else type="text" @click.stop :value="noteDescription" />
      </div>
      <transition>
        <div
          v-if="isHovering"
          class="noteFooter d-flex flex-row mb-1 ps-3 pe-3"
          style="height: auto; font-size: 15px; margin-top: -34px"
          @click.stop
        >
          <!-- normal note footer icons-->
          <div v-if="!isEditing" class="d-flex flex-row w-100 justify-content-around">
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
              @mouseover="onIconHover($event.target)"
              @mouseout="onIconOut($event.target)"
            >
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li><a class="dropdown-item" href="#" @click="deleteNote(notes.id)">Action</a></li>
              </ul>
            </a>
          </div>
          <!-- EDIT note footer icons-->
          <div
            v-if="isEditing"
            @click="
              () => {
                this.isEditing = !this.isEditing
              }
            "
            class="w-100 d-flex flex-row justify-content-between"
          >
            <i
              class="bi bi-x footer-icons rounded-circle d-flex justify-content-center align-items-center text-danger fs-3"
              @mouseover="onIconHover($event.target)"
              @mouseout="onIconOut($event.target)"
            ></i>
            <i
              class="bi bi-check2 footer-icons rounded-circle d-flex justify-content-center align-items-center text-success fs-4"
              @mouseover="onIconHover($event.target)"
              @mouseout="onIconOut($event.target)"
              @click="updateNote(notes.id)"
            ></i>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHovering: false,
      isEditing: false,
      noteTitle: this.notes.title,
      noteDescription: this.notes.description,
      liveNoteTitle: this.notes.title,
      liveNoteDescription: this.notes.description
    }
  },
  props: {
    notes: String
  },
  methods: {
    flipIsEdit() {
      this.isEditing = !this.isEditing
      console.log(this.noteTitle)
    },
    onIconHover(value) {
      value.classList.add('background')
    },
    onIconOut(value) {
      value.classList.remove('background')
    },
    deleteNote(value) {
      this.$emit('delete-note', value)
    },
    updateNote(id) {
      this.noteTitle = this.liveNoteTitle
      this.noteDescription = this.liveNoteDescription
      this.$emit('update-note', {
        id: id,
        title: this.noteTitle,
        description: this.noteDescription
      })
    }
  }
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
input {
  width: 100%;
  height: 24px;
  background: transparent;
  border: none;
}
.noteFooter > div > i {
  width: 30px;
  height: 30px;
}
a {
  color: black;
  text-decoration: none;
}
.background {
  /* animation: gradual-background ease-in 0s 1 normal; */

  background: rgba(102, 102, 102, 0.226);
  transition: background 0.4s ease;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
/* #noteBody:hover {
  background: grey;
  transition: background 0.5s;
} */
.cardFooter {
  position: absolute;
}
</style>