<template>
  <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        :aria-label="slider.title"
        v-for="(slider, index) in sliders"
        :key="index"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" v-for="(slider, index) in sliders" :key="index">
        <img :src="slider.image" class="d-block w-100" :alt="slider.title" />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#myCarousel"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#myCarousel"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
<script>
import * as Bootstrap from "bootstrap";
export default {
  name: "Slider",
  props: ["sliders"],
  mounted() {
    // alert('aaaa');
    var myCarousel = document.querySelector("#myCarousel");
    // new Bootstrap.Carousel(myCarousel)
    var carousel = new Bootstrap.Carousel(myCarousel, {
      interval: 2000,
      wrap: false,
    });
  },
};
</script>
