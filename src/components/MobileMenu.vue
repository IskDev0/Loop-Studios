<template>
  <div class="mobile-header-list">
    <router-link @click="$emit('close', show)" class="header-link" to="/about">About</router-link>
    <router-link @click="$emit('close', show)" class="header-link" to="/careers">Careers</router-link>
    <router-link @click="$emit('close', show)" class="header-link" to="/events">Events</router-link>
    <router-link @click="$emit('close', show)" class="header-link" to="/products">Products</router-link>
    <router-link @click="$emit('close', show)" class="header-link" to="/support">Support</router-link>
  </div>
</template>

<script>
export default {
  name: "MobileMenu",
  props: {
    show: {
      type: Boolean
    },
  }
}
</script>

<style scoped>



</style>