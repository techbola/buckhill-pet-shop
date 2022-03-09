<template>
  <v-container>
    <v-row justify="center">
      <v-col sm="8" class="mt-4">
        <v-text-field
          outlined
          placeholder="Search products"
          prepend-inner-icon="mdi-magnify"
          hide-details=""
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row v-if="product">
      <v-col cols="12">
        <v-breadcrumbs :items="breadcrumbs" divider=">"></v-breadcrumbs>
      </v-col>
      <v-col>
        <img src="../assets/images/product.png" alt="" />
      </v-col>
      <v-col>
        <h4 class="product-name text-capitalize">{{ product.title }}</h4>
        <div class="text-capitalize mt-2">{{ product.category.title }}</div>
        <div class="text-capitalize product-brand">
          {{ product.brand.title }}
        </div>
        <div class="product-price mt-3">{{ product.price }} kn</div>
        <div class="d-flex align-center mt-4">
          <v-btn v-if="quantity <= 0" disabled class="mr-4 white--text">
            <v-icon left dark> mdi-cart </v-icon>
            Add To Cart
          </v-btn>
          <v-btn v-else depressed class="primary mr-4 white--text">
            <v-icon left dark> mdi-cart </v-icon>
            Add To Cart
          </v-btn>
          <div class="d-flex align-center">
            <v-btn depressed class="mr-1" @click="increaseQty">
              <v-icon> mdi-minus </v-icon>
            </v-btn>
            <v-text-field
              v-model="quantity"
              outlined
              hide-details
              dense
            ></v-text-field>
            <v-btn depressed class="ml-1" @click="quantity++">
              <v-icon> mdi-plus </v-icon>
            </v-btn>
          </div>
        </div>
      </v-col>
      <v-col cols="12">
        {{ product.description }}
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      breadcrumbs: [
        {
          text: "Home",
          disabled: false,
          href: "/",
        },
        {
          text: "",
          disabled: true,
          href: "#",
        },
      ],
      quantity: 0,
    };
  },
  created() {
    let productId = this.$route.params.id;
    this.getProduct(productId).then((data) => {
      this.breadcrumbs.find((item) => item.disabled).text = data.title;
    });
  },
  computed: {
    ...mapGetters({ product: "product/product" }),
  },
  methods: {
    increaseQty() {
      if (this.quantity !== 0) this.quantity--;
    },
    ...mapActions({
      getProduct: "product/getProduct",
    }),
  },
  watch: {
    quantity(newQuantity) {
      if (newQuantity < 0 || typeof newQuantity == "string") {
        this.quantity = 0;
      }
    },
  },
};
</script>

<style scoped>
.product-name {
  font-size: 40px;
  letter-spacing: 0.15px;
  color: #000000;
  line-height: 46px;
}
.product-brand {
  font-size: 28px;
  letter-spacing: 0.15px;
  color: rgba(0, 0, 0, 0.54);
}
.product-price {
  font-size: 48px;
  color: #000000;
}
</style>
