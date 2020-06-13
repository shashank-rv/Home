<template>
  <a-layout id="components-layout-top" class="layout">
    <a-layout-header class="app-header">
      <div class="logo">
        <h2>alpha</h2>
      </div>
      <HeaderNavigation />
    </a-layout-header>
    <a-layout-content style="padding: 5rem">
      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
        <ShowcaseCards />
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">Designed and developed by hruday</a-layout-footer>
  </a-layout>
</template>

<script>

export default {
  name: "AboutMe",
  components: {
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
