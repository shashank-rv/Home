<template>
  <div>
    <a-menu mode="horizontal" theme="dark" class="app-menu">
      <a-menu-item key="mail">
        <a-icon type="mail" />Data Science
      </a-menu-item>
      <a-sub-menu>
        <span slot="title" class="submenu-title-wrapper">
          <a-icon type="setting" />About me
        </span>
        <a-menu-item-group title="Item 1">
          <a-menu-item key="setting:1">Option 1</a-menu-item>
          <a-menu-item key="setting:2">Option 2</a-menu-item>
        </a-menu-item-group>
        <a-menu-item-group title="Item 2">
          <a-menu-item key="setting:3">Option 3</a-menu-item>
          <a-menu-item key="setting:4">Option 4</a-menu-item>
        </a-menu-item-group>
      </a-sub-menu>
    </a-menu>
  </div>
</template>
<script>
export default {
  name: "HeaderNavigation"
};
</script>
<style scoped>
.app-menu {
  line-height: 64px;
}
</style>