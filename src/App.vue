<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<!--<script>
export default {
  name: "app"
};
</script>
-->

<script>
export default {
  computed: {
    layout() {
      return `${this.$route.meta.layout || "default"}-layout`;
    }
  }
};
</script>
