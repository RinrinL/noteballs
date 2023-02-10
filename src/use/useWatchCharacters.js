import { watch } from 'vue'

export function useWatchCharacters (valueToWatch, maxChars = 100) {
    watch(valueToWatch, (newcontent) => {
        if(newcontent.length === maxChars) {
            alert(`Just input ${ maxChars } characters! darnit!`)
        }
    })
}