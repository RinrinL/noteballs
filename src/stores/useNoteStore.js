import { defineStore } from "pinia"
import { ref } from 'vue'

export const useNoteStore = defineStore('useNoteStore', () => {
    const notes = ref([
        {
            id: 'id1',
            content: 'However, some mutations are really hard or costly to apply with this syntax: any collection modification'
        },
        {
            id: 'id2',
            content: 'By default, state subscriptions are bound to the component where they are added (if the store is inside a component'
        },
        {
            id: 'id3',
            content: 'The state is, most of the time, the central part of your store. People often start by defining the state that represents their app. In Pinia the state is defined as a function that returns the initial state. This allows Pinia to work in both Server and Client Side.'
        }
    ])

    const addNote = (newNote) => {
        let id = new Date().getTime();
        let note = {
            id,
            content: newNote
        }
        notes.value.unshift(note)
    }

    const deleteNote = (idToDelete) => {
        notes.value = notes.value.filter((note)=>{return note.id !== idToDelete})
    }

    return {
        notes,
        addNote,
        deleteNote
    }
})