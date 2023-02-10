
import { defineStore } from 'pinia'
import { ref, computed } from 'vue';

export const useNotes = defineStore('useNotes', () => {

    const count = ref(0)
    const name = ref('Eduardo')
    const doubleCount = computed(() => count.value * 2)

    const notes =  ref([
        {
            id: 'id1',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quas voluptate soluta libero optio expedita ipsa modi placeat sequi, veniam odit. Architecto quo quibusdam odit accusamus dolor unde reprehenderit praesentium?'
        },
        {
            id: 'id2',
            content: 'This is the shorter note!'
        }
    ])

    const title =  ref('test 3')

    function increment() {
        count.value++
    }
  
    function addNote (newNoteContent) {
        let currentDate = new Date().getTime();
        let id = currentDate.toString();
        let note = {
            id,
            content: newNoteContent
        }
        notes.value.unshift(note)
    }

    function deleteNote (idToDelete) {
        notes.value = notes.value.filter((note) => { return note.id !== idToDelete })
    }

    return { count, name, doubleCount, increment, notes, addNote, deleteNote }
  })