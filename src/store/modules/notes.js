import axios from "axios"

const state = {
    notes: []
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
                console.log(state.notes)
                console.log('index: ' + index)
                console.log('current note id: ' + note['id'])
                console.log('passsed id: ' + id)
            }
        })
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
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error)
            })
    },
    fetchNotes({
        commit
    }) {
        axios.get('http://127.0.0.1:8000/api/notes').then((response) => {
            console.log(response.data)

            commit('SET_NOTES', response.data)
        })
    },
    deleteNote(id) {
        axios.delete('http://127.0.0.1:8000/api/notes/' + id)

    },
}
const getters = {
    getNotes(state) {
        return state.notes
    }
}

export default {
    state,
    mutations,
    actions,
    getters,
    namespaced: true
}