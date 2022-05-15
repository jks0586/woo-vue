<script lang="ts">
import ProductService from "../../services/products";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      product: "",
      largeImage: "",
    };
  },
  methods: {
    viewLarge(image) {
      this.largeImage = image;
    },
  },
  mounted() {
    let product_id = this.$route.params.id;
    ProductService.getProduct(product_id)
      .then((response) => {
        console.log(response);
        this.product = response.data.data;
        response.data.data.gallery_images.unshift(response.data.data.image);
        this.largeImage = response.data.data.gallery_images[0];
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
<template>
  <div class="product-details app-pages app-section">
    <div class="container" v-if="product">
      <div class="entry">
        <div class="row">
          <div class="big-image">
            <div id="choose1" class="col s12">
              <img :src="largeImage" />
              <span class="sale_label" v-if="product.sale_price.length"
                >Sale!</span
              >
            </div>
          </div>
        </div>
        <div class="row">
          <carousel :items-to-show="1.5">
            <slide v-for="image in product.gallery_images" :key="image">
              <a v-on:click="viewLarge(image)">
                <img :src="image" />
              </a>
            </slide>
          </carousel>
        </div>
        <div class="row">
          <div class="details">
                <h5>{{ product.name }}</h5>
          </div>
        </div>
        <div class="row">
          <div class="desc-review">
            <b-tabs content-class="mt-3" class="des-tab">
              <b-tab title="Description" active><p>{{product.description}}</p></b-tab>
              <b-tab title="Review"><p>I'm the second tab</p></b-tab>
              
            </b-tabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.des-tab .nav-item{
  width: 50%;
}
.des-tab .nav-item .nav-link{
    width:100%;
}
.nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link{
  border-top:0px !important;
  border-left:0px !important;
  border-right:0px !important;
  border-bottom: 1px solid var(--bs-cyan) !important;
}
.nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus{
  border:0px !important
}
.big-image {
  position: relative;
  overflow: hidden;
  margin-top: 5px;
  padding: 0px;
}
.sale_label {
  position: absolute;
  top: -6px;
  right: -25px;
  background: #f70000bf;
  color: #fff;
  padding: 15px 0 0;
  display: block;
  transform: rotate(45deg);
  z-index: 999;
  width: 81px;
  height: 41px;
  box-shadow: 0 0 11px 3px #999;
  text-align: center;
}
.carousel {
  padding: 0px;
}
.carousel__slide {
  width: 15% !important;
}
.carousel__slide img {
  margin-bottom: 0px !important;
}
.product-details .details{
  margin-top:10px;
}
</style>
