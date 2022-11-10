<script setup>

import MainHeader from "./components/MainHeader.vue";
import MainFooter from "./components/MainFooter.vue";
import HomeHero from "./components/HomeHero.vue";</script>

<template>
  <div class="hero-wrapper">
    <MainHeader/>
    <div class="container">
      <HomeHero/>
    </div>
  </div>
  <main class="main">
    <router-view/>
  </main>
  <MainFooter/>
</template>

