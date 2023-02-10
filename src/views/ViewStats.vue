<template>
    <div class="stats">
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>Stat</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Number of notes</td>
                    <td>{{ storeNotes.totalNoteCount }}</td>
                </tr>
                <tr>
                    <td>Number of Character (of all notes)</td>
                    <td>{{ storeNotes.totalNoteCharacters }}</td>
                </tr>
            </tbody>
        </table>
        <input class="input" type="text" v-model="love" v-autofocus />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStoreNotes } from '../stores/storeNotes';
import { vAutofocus } from '@/directives/vAutofocus'
import { useWatchCharacters } from '@/use/useWatchCharacters'

const storeNotes = useStoreNotes()
const love = ref('')
useWatchCharacters(love, 40)
</script>