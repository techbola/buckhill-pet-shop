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
      <v-col class="banner-box">
        <v-img src="../assets/images/banner.png" contain></v-img>
        <div class="banner-box__heading">Up to 30% sale</div>
        <div class="banner-box__details">On select dog food and toys</div>
      </v-col>
    </v-row>
    <h4 class="category-label mt-6">Pet clean-up and odor control</h4>
    <SimpleCarousel v-if="filteredProducts.length > 0">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.uuid"
        :product="product"
        class="pa-3"
      />
    </SimpleCarousel>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import SimpleCarousel from "vue2-simple-carousel";
import ProductCard from "../components/ProductCard.vue";

export default {
  components: {
    SimpleCarousel,
    ProductCard,
  },
  data() {
    return {
      filteredProducts: [],
      filee: "",
      settings: {
        arrows: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    };
  },
  created() {
    this.getProducts().then(() => {
      let categoryId = "02d057a7-6b8a-3b84-9f0e-13bae9bbc3a8";
      this.filteredProducts = this.products.filter(
        (product) => (product.category_uuid = categoryId)
      );
    });

    // this.getProductImage("ae0623ac-a434-3826-9b5c-c3e183661030").then(
    //   (data) => {
    //     this.filee = data;
    //     console.log("ff", this.filee);
    //   }
    // );
  },
  computed: {
    ...mapGetters(["products"]),
  },
  methods: {
    ...mapActions({
      getProducts: "getProducts",
      getProductImage: "getFile",
    }),
  },
};
</script>

<style scoped>
.banner-box {
  position: relative;
}
.banner-box__heading {
  position: absolute;
  top: 32px;
  left: 32px;
  background: rgba(0, 0, 0, 0.26);
  font-weight: 300;
  font-size: 60px;
  color: #ffffff;
  padding: 12px;
}
.banner-box__details {
  position: absolute;
  top: 152px;
  left: 32px;
  background: rgba(0, 0, 0, 0.26);
  font-weight: 500;
  font-size: 20px;
  color: #ffffff;
  padding: 4px 8px;
}
.category-label {
  font-weight: 300;
  font-size: 48px;
  color: #4ec690;
}

::v-deep .carousel__track {
  cursor: auto !important;
}
</style>
