<template>
    <div>
        <NavBar></NavBar>
    </div>
    
    <div>
        <RouterView />
    </div>
    
</template>

<script setup>
import { onMounted } from 'vue'
import NavBar from '@/components/Layouts/NavBar.vue'
import { useStoreAuth } from '@/stores/storeAuth'

const storeAuth = useStoreAuth()

onMounted(() => {
    storeAuth.init()
})

</script>

<style>
@import 'bulma\css\bulma.min.css';
</style>
