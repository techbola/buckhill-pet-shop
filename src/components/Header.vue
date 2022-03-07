<template>
  <v-app-bar app color="#4EC690" dark>
    <div class="d-flex align-center">
      <v-img
        alt="Logo"
        class="shrink mr-2"
        contain
        src="images/logo.svg"
        transition="scale-transition"
        width="30"
      />

      <span><strong>PetStore</strong></span>
    </div>

    <nav>
      <ul>
        <li>
          <a>Products</a>
        </li>
        <li>
          <a>Promotions</a>
        </li>
        <li>
          <a>Blog</a>
        </li>
      </ul>
    </nav>

    <div>
      <v-btn outlined class="ma-2 white--text">
        <v-icon left dark> mdi-cart </v-icon>
        Upload
      </v-btn>
      <v-btn outlined class="ma-2 white--text"> LOGIN </v-btn>
    </div>
  </v-app-bar>
</template>

<style scoped>
::v-deep .v-toolbar__content {
  display: flex;
  justify-content: space-around;
}
nav ul {
  display: flex;
  list-style: none;
}
nav ul li {
  margin-right: 1rem;
}
nav ul li a {
  color: #ffffff;
  text-transform: uppercase;
}
</style>
