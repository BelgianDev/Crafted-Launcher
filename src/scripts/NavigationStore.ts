import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNavigationStore = defineStore('navigation', () => {
    const activeScreen = ref<'main' | 'settings'>('main')

    function setActiveScreen(screen: typeof activeScreen.value) {
        activeScreen.value = screen
    }

    return { activeScreen, setActiveScreen }
})
