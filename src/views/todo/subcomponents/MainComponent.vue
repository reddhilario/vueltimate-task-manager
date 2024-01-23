<template>
  <div>
    <div class="d-flex mb-4" style="height: auto">
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
        <div class="d-flex flex-wrap" style="list-style-type: none">
          <!-- <div
            class="rounded-pill btn-group dropdown"
            style="height: 10px; width: 30px"
            @click="addTag"
          >
            <button
              type="button"
              class="btn btn-secondary dropdown-toggle"
              id="tagDropDownButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            ></button>
            <ul class="dropdown-menu" aria-labelledby="tagDropDownButton">
              <li class="dropdown-item">
                <div class="rounded-pill bg-warning" style="height: 10px; width: 30px"></div>
              </li>
            </ul>
          </div> -->
          <TagComponent v-for="(listedTag, index) in listedTags" :key="index" :tag="listedTag" />
          <div class="dropdown">
            <button
              class="btndropdown-toggle rounded-pill pb-2 border-0"
              type="button"
              id="tagDropDownButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style="height: auto; width: auto"
            >
              <p class="m-0 p-0" style="font-size: 0.7em; height: 1em">Add Tag</p>
            </button>
            <ul
              class="dropdown-menu flex-wrap"
              aria-labelledby="tagDropDownButton"
              style="width: 300px; height: 200px; overflow: auto; background: rgb(68, 76, 92)"
            >
              <input
                class="w-100 border border-secondary border-end-0 border-start-0 border-top-0"
                type="text"
                style="overflow: hidden; background: transparent; font-size: small; color: white"
                placeholder="Search or Create"
                @input="setTagName($event.target.value)"
                @keyup.enter="createTag"
              />
              <div class="d-flex flex-column">
                <li
                  class="p-1 border border-secondary border-end-0 border-start-0 border-top-0"
                  style="width: auto"
                >
                  <p
                    class="m-0 p-1"
                    style="
                      width: fit-content;
                      max-width: 130px;
                      word-break: break-all;
                      white-space: normal;
                      color: white;
                      font-size: 0.8em;
                      border-radius: 5px 20px 20px 5px;
                      font-weight: bold;
                      background: rgb(169, 215, 151);
                    "
                  >
                    not urgent at all <br />
                    like dont even do <br />this
                  </p>
                </li>
                <li
                  class="p-1 border border-secondary border-end-0 border-start-0 border-top-0"
                  style="width: auto"
                >
                  <p
                    class="m-0 p-1"
                    style="
                      width: fit-content;
                      max-width: 130px;
                      word-break: break-all;
                      white-space: normal;
                      color: white;
                      font-size: 0.8em;
                      border-radius: 5px 20px 20px 5px;
                      font-weight: bold;
                      background: rgb(255, 211, 93);
                    "
                  >
                    not so urgent
                  </p>
                </li>
                <li
                  class="p-1 border border-secondary border-end-0 border-start-0 border-top-0"
                  style="width: auto"
                >
                  <p
                    class="m-0 p-1"
                    style="
                      width: fit-content;
                      max-width: 130px;
                      word-break: break-all;
                      white-space: normal;
                      color: white;
                      font-size: 0.8em;
                      border-radius: 5px 20px 20px 5px;
                      font-weight: bold;
                      background: rgb(211, 77, 73);
                    "
                  >
                    urgent
                  </p>
                </li>
                <TagComponent
                  v-for="(tag, index) in tags"
                  :key="index"
                  :tag="tag"
                  @click="addTag($event.target.classList[2], $event.target.innerHTML)"
                />
              </div>
            </ul>
          </div>
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
    <div class="row">
      <NoteComponent
        v-for="(note, index) in this.notes"
        :key="index"
        :notes="note"
        :id="index"
        @click="animate($event.target)"
      />
    </div>
  </div>
</template>

<script>
import NoteComponent from './NoteComponent.vue'
import TagComponent from './TagComponent.vue'
export default {
  components: {
    NoteComponent,
    TagComponent
  },
  data() {
    return {
      textAreaElement: null,
      textAreaHeight: null,
      notes: [],
      tags: [],
      listedTags: [],
      title: '',
      description: '',
      tagName: '',
      colors: [
        'pastel-yellow',
        'pastel-pink',
        'pastel-green',
        'pastel-purple',
        'pastel-orange',
        'pastel-blue',
        'pastel-lavender',
        'pastel-mint',
        'pastel-peach',
        'pastel-sky-blue',
        'pastel-mauve',
        'pastel-coral',
        'pastel-aqua',
        'pastel-rose',
        'pastel-mint-green',
        'pastel-lilac',
        'pastel-peach-puff',
        'pastel-turquoise',
        'pastel-salmon',
        'pastel-lavender-blush',
        'pastel-gold',
        'pastel-lime',
        'pastel-cyan',
        'pastel-champagne',
        'pastel-turquoise-blue',
        'pastel-lavender-gray',
        'pastel-coral-pink',
        'pastel-seafoam',
        'pastel-cotton-candy',
        'pastel-silver'
      ]
    }
  },
  mounted() {
    ;(this.textAreaElement = this.$refs.textArea),
      (this.textAreaHeight = this.$refs.textArea.clientHeight)
    console.log('mount')
  },
  methods: {
    animate(value) {
      value.classList.add('noteAnimate')
    },
    changeTextAreaHeight() {
      this.textAreaHeight += 10
      //   this.textAreaElement.clientHeight = this.textAreaElement
      console.log(this.textAreaheight)
    },
    saveNote() {
      this.notes.unshift({
        title: this.title,
        description: this.description
      })
      console.log(this.notes)
    },
    createTag() {
      // console.log('' + typeof this.randomColor())
      this.tags.push({
        name: this.tagName,
        color: this.randomColor()
      })
    },
    addTag(color, title) {
      console.log(typeof title)
      this.listedTags.push({
        title: title,
        color: color
      })
    },
    setTitle(value) {
      this.title = value
    },
    setDescription(value) {
      this.description = value
    },
    setTagName(value) {
      this.tagName = value
    },
    randomColor() {
      //   console.log(
      //     '' +
      //       JSON.stringify(this.colors[Math.floor(Math.random() * this.colors.length)]).substring(
      //         1,
      //         JSON.stringify(this.colors[Math.floor(Math.random() * this.colors.length)]).length + 1
      //       )
      //   )
      //   return this.colors[Math.random() * this.colors.length]
      console.log('' + typeof this.colors[Math.floor(Math.random() * this.colors.length)])

      return this.colors[Math.floor(Math.random() * this.colors.length)]
    }
  }
}
</script>

<style scoped>
@keyframes moveToMiddle {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%, -50%);
  }
}
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  background: rgb(180, 180, 180);
}
::-webkit-scrollbar-thumb {
  border-radius: 15px;
  background: rgb(131, 131, 131);
}
ul {
  list-style-type: none;
}
.NoteStyle {
  animation-name: moveToMiddle;
  animation-duration: 1s;
  animation-timing-function: ease-in;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: both;
}
#addTask {
  width: 600px;
  height: auto;
}
textarea {
  resize: none;
  overflow: hidden;
}
</style>