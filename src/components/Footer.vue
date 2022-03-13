<template>
  <v-footer app>
    <v-container>
      <v-row class="ma-4">
        <v-col>
          <v-img
            alt="Logo"
            class="shrink mr-2"
            contain
            src="../assets/images/logo-footer.svg"
            transition="scale-transition"
            width="60"
          />

          <div class="font-weight-bold mt-2 green--text accent-2">PetStore</div>
        </v-col>
        <v-col class="footer-links">
          <h4>PetShop</h4>
          <ul>
            <li>About us</li>
            <li>Blog</li>
            <li>Store locator</li>
          </ul>
        </v-col>
        <v-col class="footer-links">
          <h4>Contact</h4>
          <ul>
            <li>About us</li>
            <li>Blog</li>
            <li>Store locator</li>
          </ul>
        </v-col>
        <v-col class="footer-links">
          <h4>Information</h4>
          <ul>
            <li>About us</li>
            <li>Blog</li>
            <li>Store locator</li>
          </ul>
        </v-col>
        <v-col class="footer-links">
          <p>
            If you can’t find answer to your question, please contact our
            <a href="#" class="text-decoration-none">customer service</a>
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<style scoped>
.footer-links h4 {
  font-weight: 500;
  font-size: 20px;
  letter-spacing: 0.15px;
  color: #000000;
}
.footer-links ul {
  list-style: none;
  padding-left: 0;
}
.footer-links ul li,
.footer-links p {
  font-size: 16px;
  letter-spacing: 0.15px;
  color: rgba(0, 0, 0, 0.54);
}
</style>
