<template>
  <d-container fluid class="main-content-container px-4">
    <!-- Page Header -->
    <d-row no-gutters class="page-header py-2 pb-4 mb-3 border-bottom">
      <d-col col sm="4" class="text-center text-sm-left mb-4 mb-sm-0">
        <span class="text-uppercase page-subtitle">MOUNTAIN</span>
        <h3 class="page-title">All List Mountain</h3>
      </d-col>
    </d-row>

    <d-row>
      <d-col md="6" class="mb-4">
        <d-card class="card-small mb-4">
          <d-card-header class="border-bottom">
            <h6 class="m-0">Articles List</h6>
          </d-card-header>
          <d-card-body>
            <ul class="list-group">
              <li
                class="list-group-item"
                :class="{ active: index == currentIndex }"
                v-for="(mountain, index) in mountains"
                :key="index"
                @click="{}"
              >
                {{ mountain.name_mt }}
              </li>
            </ul>
          </d-card-body>
        </d-card>
      </d-col>

      <!-- <d-col md="6" class="mb-4">
        <d-card class="card-small mb-4">
          <d-card-header class="border-bottom">
            <h6 class="m-0">Current Article</h6>
          </d-card-header>
          <d-card-body>
            <div v-if="currentArticle">
              {{currentArticle.title_article}}
            </div>
            <div v-else>
              <br />
              <p>Please click on a Tutorial...</p>
            </div>
          </d-card-body>
        </d-card>
      </d-col> -->

    </d-row>
  </d-container>
</template>

<script>
import MountainDataService from "../../services/MountainDataService";

export default {
  name: "mountain-list",
  data() {
    return {
      mountains: [],
      currentMountain: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    retrieveMountains() {
      MountainDataService.getAll()
        .then(response => {
          this.mountains = response.data.mountains;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveMountains();
      this.currentMountain = null;
      this.currentIndex = -1;
    },

    setActiveMountain(mountain, index) {
      this.currentMountain = mountain;
      this.currentIndex = index;
    },

  },
  mounted() {
    this.retrieveMountains();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
