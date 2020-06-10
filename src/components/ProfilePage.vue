<template>
  <a-layout id="components-layout-top" class="layout">
    <a-layout-header class="app-header">
      <div class="logo">
        <h2>Shashank VSR</h2>
      </div>
      <HeaderNavigation />
    </a-layout-header>
    <a-layout-content style="padding: 5rem">
      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
        <ShowcaseCards />
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">Designed and developed by Hruday</a-layout-footer>
  </a-layout>
</template>

<script>
import HeaderNavigation from "./HeaderNavigation.vue";
import ShowcaseCards from "./ShowcaseCards.vue";

export default {
  name: "ProfilePage",
  components: {
    HeaderNavigation,
    ShowcaseCards
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.app-header {
  display: flex;
  justify-content: space-around;
}
#components-layout-top {
  height: 100%;
}
#components-layout-top .logo {
  width: 120px;
  padding: 0 2rem;
  float: left;
  color: white;
}
h2 {
  color: white;
}
</style>
