<template>
  <section class="creations">
    <div class="container">
      <div class="creations-top">
        <h2 class="creations-title">Our creations</h2>
        <router-link to="/products" class="btn">See all</router-link>
      </div>
      <div class="creations-body">
        <div :style="{ 'background-image': 'url(' + creation.img + ')', 'width': '256px', 'height': '450px'}" class="creations-item" v-for="creation in creations" :key="creation.id">
          <router-link :to="creation.id" class="creations-heading">{{ creation.title }}</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {onMounted, ref} from "vue";

const creations = ref([
  {
    id: "1",
    title: "Deep earth",
    img: "./src/assets/images/desktop/image-deep-earth.jpg",
    description: "Ut vulputate condimentum quam gravida gravida. Phasellus ac est dapibus, suscipit erat."
  },
  {
    id: "2",
    title: "Night arcade",
    img: "./src/assets/images/desktop/image-night-arcade.jpg",
    description: "Sed non est eget magna finibus molestie. Donec mollis pretium sem, ut condimentum odio pharetra."
  },
  {
    id: "3",
    title: "Soccer team VR",
    img: "./src/assets/images/desktop/image-soccer-team.jpg",
    description: "Vivamus in velit quis sem placerat ornare venenatis eu metus. Morbi."
  },
  {
    id: "4",
    title: "The Grid",
    img: "./src/assets/images/desktop/image-grid.jpg",
    description: "Donec pulvinar orci quis tellus pharetra lacinia. Donec et cursus nisl, id interdum ligula."
  },
  {
    id: "5",
    title: "From up above VR",
    img: "./src/assets/images/desktop/image-from-above.jpg",
    description: "Sed eleifend, massa non rutrum convallis, nunc lacus imperdiet."
  },
  {
    id: "6",
    title: "Pocket borealis",
    img: "./src/assets/images/desktop/image-pocket-borealis.jpg",
    description: "Donec cursus sollicitudin nunc, ut ultrices odio facilisis sit amet. Nullam id orci condimentum, aliquet ipsum sed."
  },
  {
    id: "7",
    title: "The curiosity",
    img: "./src/assets/images/desktop/image-curiosity.jpg",
    description: "Sed nisl sem, eleifend nec turpis sed, lacinia pretium lacus."
  },
  {
    id: "8",
    title: "Make it fisheye",
    img: "./src/assets/images/desktop/image-fisheye.jpg",
    description: "Nulla ac pharetra ligula. Sed efficitur in sem non sodales."
  }

])
onMounted(() => {
  console.log(creations.value[0])
})

</script>
