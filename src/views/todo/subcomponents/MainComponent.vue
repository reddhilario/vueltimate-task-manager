<template>
  <div class="w-100">
    <div class="row">
      <div class="d-flex justify-content-center mb-4">
        <div class="shadow rounded p-1" id="addTask">
          <div class="input-group input-group-sm">
            <input
              placeholder="Title"
              type="text"
              class="form-control border-0"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              @input="setTitle($event.target.value)"
            />
          </div>
          <hr class="m-0" />
          <div class="input-group">
            <textarea
              :style="{ height: this.textAreaHeight }"
              ref="textArea"
              placeholder="Take a note..."
              class="form-control border-0"
              aria-label="With textarea"
              @input="setDescription($event.target.value)"
            ></textarea>
          </div>
          <div class="d-flex justify-content-around">
            <button type="button" class="btn btn-outline-secondary">cancel that shyet</button>
            <i></i>
            <button type="button" class="btn btn-outline-success" @click="saveNote">
              save that shyet
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <TaskComponent v-for="(note, index) in this.notes" :key="index" :notes="note" />
    </div>
  </div>
</template>

<script>
import TaskComponent from './NoteComponent.vue'
export default {
  components: {
    TaskComponent
  },
  data() {
    return {
      textAreaElement: null,
      textAreaHeight: null,
      notes: [],
      title: '',
      description: ''
    }
  },
  mounted() {
    ;(this.textAreaElement = this.$refs.textArea),
      (this.textAreaHeight = this.$refs.textArea.clientHeight)
    console.log('mount')
  },
  methods: {
    changeTextAreaHeight() {
      this.textAreaHeight += 10
      //   this.textAreaElement.clientHeight = this.textAreaElement
      console.log(this.textAreaheight)
    },
    saveNote() {
      this.notes.unshift({
        title: this.title
      })
      console.log(this.notes)
    },
    setTitle(value) {
      this.title = value
    },
    setDescription(value) {
      this.description = value
    }
  }
}
</script>

<style scoped>
#addTask {
  width: 600px;
  height: 135px;
}
textarea {
  resize: none;
  overflow: hidden;
}
</style>