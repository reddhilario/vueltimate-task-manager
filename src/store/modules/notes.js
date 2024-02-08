import axios from "axios"
import Tasks from '../../views/todo/subcomponents/MainComponent.vue'
import NewPage from '../../views/todo/subcomponents/NewPageComponent.vue'
import {ref} from 'vue'
const state = {
    notes: [],
    pages:{
        Tasks,
        NewPage
    },
    currentPage: ref('Tasks'),
    taskIsActive: false,
    newPageIsActive: true
}
const mutations = {
    SET_NOTES(state, note) {
        state.notes = note
    },
    ADD_NOTE(state, note) {
        state.notes.push(note)
    },
    DELETE_NOTE(state, id) {
        state.notes.forEach((note, index) => {
            if (note['id'] == id) {
                state.notes.splice(index, 1)
            }
        })
    },
    CHANGE_CURRENT_PAGE(state, page) {
        state.currentPage = page
    }
}
const actions = {
    addNote({
        commit
    }, note) {

        commit('ADD_NOTE', note)
        axios
            .post(
                'http://127.0.0.1:8000/api/notes', {
                    'title': note.title,
                    'description': note.description
                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
    },
    fetchNotes({
        commit
    }) {
        axios.get('http://127.0.0.1:8000/api/notes').then((response) => {
            commit('SET_NOTES', response.data)
        })
    },
    deleteNote(id) {
        axios.delete('http://127.0.0.1:8000/api/notes/' + id)

    },
    changeCurrentPage({commit}, page)
    {
        commit('CHANGE_CURRENT_PAGE', page)
    }
}
const getters = {
    getNotes(state) {
        return state.notes
    },
    getTaskIsActiveStatus(state) {
        return state.taskIsActive
    },
    getNewPageIsActiveStatus(state) {
        return state.newPageIsActive
    },
    getPages(state){
        return state.pages
    },
    getCurrentPage(state){
        return state.currentPage
    }
}

export default {
    state,
    mutations,
    actions,
    getters,
    namespaced: true
}