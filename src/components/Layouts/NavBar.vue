<template>
    <nav class="navbar is-success mb-5" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <div>
                <h1 class="notes">Notes</h1>
            </div>

            <a @click.prevent="showMobileNav = !showMobileNav" role="button" class="navbar-burger" :class="{'is-active' : showMobileNav }" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" ref="navbarBurgerRef">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu" ref="navBarMenuRef" :class="{'is-active' : showMobileNav }">
            <div class="navbar-start">
                <button v-if="storeAuth.user.id" @click="logout" class="button is-small is-info mt-3 ml-3">
                    Log out {{ storeAuth.user.email }}
                </button>
            </div>
            <div class="navbar-end">
                <RouterLink @click="showMobileNav = false" to="/" class="navbar-item" active-class="is-active">
                    Notes
                </RouterLink>
                <RouterLink @click="showMobileNav = false" to="/stats" class="navbar-item" active-class="is-active">
                    Stats
                </RouterLink>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref } from '@vue/reactivity'
import { onClickOutside } from '@vueuse/core'
import { useStoreAuth } from '@/stores/storeAuth'

const showMobileNav = ref(false)
const navBarMenuRef = ref(null)
const navbarBurgerRef = ref(null)
const storeAuth = useStoreAuth()

onClickOutside(navBarMenuRef, ()=>{
    showMobileNav.value = false
}, {
    ignore: [navbarBurgerRef]
})

const logout = () => {
    showMobileNav.value = false
    storeAuth.logoutUser()
}
</script>

<style scoped>
@media (max-width: 1023px) {
    .navbar-menu {
        position: absolute;
        left: 0;
        width:100%;
    }
}
.notes{
    font-size: xx-large;
    font-style:oblique;
    padding-left: 5px;
}
</style>