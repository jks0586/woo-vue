<template>
  <Slider :sliders="sliders" />
  <div class="container mt-5">
  <div class="row">
    <Productbox
      v-for="(product, index) in products"
      :key="index"
      :product="product"
      :currency="currency"
    ></Productbox>
  </div>
  </div>
</template>
<script>
import ProductService from "../services/products";
import Productbox from "@/views/Productbox.vue";
import Slider from '@/views/Slider.vue';
export default {
  components: {
    Productbox,
    Slider
  },
  setup() {},
  data() {
    return {
      products: "",
      sliders:'',
      currency:'',
    };
  },
  mounted() {
    ProductService.products()
      .then((response) => {
        console.log(response);
        this.products = response.data.data.products;
        this.sliders = response.data.data.slider;
        this.currency = response.data.data.currency;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
