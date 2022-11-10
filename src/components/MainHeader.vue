<template>
  <header class="header">
    <div class="logo">
      <router-link @click="logoClick" class="header-link-logo" to="/"><img src="../assets/images/icons/logo.svg" alt=""></router-link>
    </div>
    <div class="header-list">
    <router-link
        class="header-link"
        to="/about">About</router-link>
    <router-link
        class="header-link"
        to="/careers">Careers</router-link>
    <router-link
        class="header-link"
        to="/events">Events</router-link>
    <router-link
        class="header-link"
        to="/products">Products</router-link>
    <router-link
        class="header-link"
        to="/support">Support</router-link>
    </div>
    <div @click="openMenu" class="burger-btn">
      <span
          :class="show ? 'rotateLeft' : ''"
          class="burger-line"></span>
      <span
          :class="show ? 'none' : ''"
          class="burger-line"></span>
      <span
          :class="show ? 'rotateRight' : ''"
          class="burger-line"></span>
    </div>
  </header>
  <Transition name="slide-fade">
  <MobileMenu @close="close" :show="show" v-if="show"/>
  </Transition>

</template>

<script setup>
import {onMounted, ref} from "vue";
import MobileMenu from "./MobileMenu.vue";

let show = ref(false)

const openMenu = () => {
  show.value = !show.value
  document.body.classList.toggle("block")
}
const logoClick = () => {
  if (show.value === true){
    show.value = false
    document.body.classList.remove("block")
  }
}
let close = () => {
  show.value = !show.value
  document.body.classList.remove("block")
}

onMounted(()=> {
  let header = document.querySelector(".header")
  window.addEventListener("scroll", ()=> {
    if (window.scrollY > 100){
        header.classList.add("active")
    }else{
      header.classList.remove("active")
    }
  })
})
</script>
<style lang="scss">
.active{
  transition: 0.3s ease;
  background: linear-gradient(0deg, rgba(2,0,36,0) 0%, rgba(0,0,0,1) 100%);
}

</style>