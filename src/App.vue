<!--<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <a href="#" class="navbar-brand">Admin</a>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <a href="/articles" class="nav-link">Articles</a>
        </li>
        <li class="nav-item">
          <a href="/add" class="nav-link">Add</a>
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>-->

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
