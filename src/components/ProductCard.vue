<template>
  <div>
    <img src="../assets/images/product.png" alt="" />
    <h6 class="product-name text-capitalize">
      {{ product.title | truncate(30) }}
    </h6>
    <div class="text-capitalize product-brand">{{ product.brand.title }}</div>
    <div class="product-price">{{ product.price }} kn</div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
};
</script>

<style scoped>
.product-name {
  font-weight: 500;
  font-size: 20px;
  letter-spacing: 0.15px;
  text-decoration-line: underline;
  color: #000000;
}
.product-brand {
  font-size: 16px;
  letter-spacing: 0.15px;
  color: rgba(0, 0, 0, 0.54);
}
.product-price {
  font-weight: 500;
  font-size: 20px;
  color: #000000;
}
</style>
