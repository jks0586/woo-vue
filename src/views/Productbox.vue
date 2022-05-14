<template>
  <div class="col-md-3">
    <div class="product-box" v-on:click="detailProduct" :data-id="product.id">
      <b-card
        no-body
        :imgSrc="product.image"
        :imgAlt="product.name"
        img-top
        tag="article"
        style="max-width: 20rem"
        class="mb-2"
      >
        <b-card-title
          title-tag="h6"
          class="text-center"
          :title="product.name"
        ></b-card-title>
        <span class="sale_label" v-if="product.sale_price.length">Sale!</span>
        <div class="rating_row text-center" v-if="product.rating_counts != 0">
          <span
            class="rating_label"
            :class="{
              danger: product.average_rating < 2,
              warning: product.average_rating >= 2 && product.average_rating < 3.5,
            }"
            >{{ product.average_rating }}</span
          >
        </div>
        <div class="rating_row text-center" v-else>
          <span class="text-warning">No reviews yet</span>
        </div>
        <div class="price text-center">
          <h6>
            <span v-if="product.sale_price.length">
              <span class="text-danger"
                ><span v-html="currency"></span> {{ product.sale_price }}</span
              >
              <span class="text-decoration-line-through"
                ><span v-html="currency"></span> {{ product.regular_price }}</span
              >
            </span>
            <span v-else>
              <span v-html="currency"></span> {{ product.regular_price }}
            </span>
          </h6>
        </div>
      </b-card>
    </div>
  </div>
</template>
<script>
export default {
  props: ["product", "currency"],
  mounted() {},
  methods: {
    detailProduct(e) {
      let product_id = this.$el.querySelector(".product-box").dataset.id;
      this.$router.push(`/product/${product_id}`);
    },
  },
};
</script>
<style scoped>
.sale_label {
  position: absolute;
  top: -10px;
  right: -27px;
  background: #f70000bf;
  color: #fff;
  padding: 16px 0 7px;
  display: block;
  transform: rotate(45deg);
  z-index: 0;
  width: 78px;
  height: 42px;
  box-shadow: 0 0 11px 3px #999;
  text-align: center;
}
.product-box {
  overflow: hidden;
}
.rating_label {
  background: #11a604;
  padding: 1px 6px;
  display: inline-block;
  border-radius: 3px;
  margin: 4px 0;
  color: #fff;
  font-size: 10px;
}
.rating_row {
  min-height: 26px;
}
.rating_label.danger {
  background: #f53c3c;
}
.rating_label.warning {
  background: #fb9f4e;
}
</style>
