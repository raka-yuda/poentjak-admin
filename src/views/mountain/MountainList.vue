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
            <h6 class="m-0">Mountain List</h6>
          </d-card-header>
          <d-card-body>
            <ul class="list-group">
              <li
                class="list-group-item"
                :class="{ active: index == currentIndex }"
                v-for="(mountain, index) in mountains"
                :key="index"
                @click="setActiveMountain(mountain, index)"
              >
                {{ mountain.name_mt }}
              </li>
            </ul>
          </d-card-body>
        </d-card>
      </d-col>

      <d-col md="6" class="mb-4">
        <!-- <d-card class="card-small mb-4">
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
        </d-card> -->

        <d-card class="card-small mb-3">
          <d-card-header class="border-bottom">
            <h6 class="m-0">Current Mountain</h6>
          </d-card-header>

          <d-card-body>
            <div v-if="currentMountain">
               <d-list-group flush>
                
                  <d-list-group-item>
                    <d-row>
                        <d-col md="4" class="">
                          <span class="d-flex mb-2"><i class="material-icons mr-1">flag</i><strong class="mr-1">name_mt:</strong></span>
                        </d-col>
                        <d-col md="8" class="">
                          {{currentMountain.name_mt}}
                        </d-col>
                    </d-row>
                    <d-row>
                        <d-col md="4" class="">
                          <span class="d-flex mb-2"><i class="material-icons mr-1">flag</i><strong class="mr-1">coordinate:</strong></span>
                        </d-col>
                        <d-col md="8" class="">
                          {{currentMountain.coordinate}}
                        </d-col>
                    </d-row>
                    <d-row>
                        <d-col md="4" class="">
                          <span class="d-flex mb-2"><i class="material-icons mr-1">flag</i><strong class="mr-1">rating:</strong></span>
                        </d-col>
                        <d-col md="8" class="">
                          {{currentMountain.rating}}
                        </d-col>
                    </d-row>
                    <d-row>
                        <d-col md="4" class="">
                          <span class="d-flex mb-2"><i class="material-icons mr-1">flag</i><strong class="mr-1">img_mt:</strong></span>
                        </d-col>
                        <d-col md="8" class="">
                          {{currentMountain.img_mt}}
                        </d-col>
                    </d-row>
                    <d-row>
                        <d-col md="4" class="">
                          <span class="d-flex mb-2"><i class="material-icons mr-1">flag</i><strong class="mr-1">location:</strong></span>
                        </d-col>
                        <d-col md="8" class="">
                          {{currentMountain.location}}
                        </d-col>
                    </d-row>
                    <d-row>
                        <d-col md="4" class="">
                          <span class="d-flex mb-2"><i class="material-icons mr-1">flag</i><strong class="mr-1">description:</strong></span>
                        </d-col>
                        <d-col md="8" class="">
                          {{currentMountain.description}}
                        </d-col>
                    </d-row>
                    <d-row>
                        <d-col md="4" class="">
                          <span class="d-flex mb-2"><i class="material-icons mr-1">flag</i><strong class="mr-1">notes:</strong></span>
                        </d-col>
                        <d-col md="8" class="">
                          {{currentMountain.notes}}
                        </d-col>
                    </d-row>
                  </d-list-group-item>

                  <!-- <d-list-group-item class="d-flex px-3">
                    <d-button size="sm" class="btn-outline-accent">
                      <i class="material-icons">save</i> Save Draft
                    </d-button>

                    <d-button size="sm" class="btn-accent ml-auto">
                      <i class="material-icons">file_copy</i> Publish
                    </d-button>
                  </d-list-group-item> -->

                  <!-- Content - Actions -->
                  <d-list-group-item class="d-flex px-3">
                    <div class="blog-comments__actions">
                      <d-button-group size="small">
                        <d-button class="btn-white" @click="{}">
                          <span class="text-danger"><i class="material-icons">clear</i></span> Delete
                        </d-button>
                          <d-button class="btn-white">
                            <router-link :to="'/mountain/edit/' + currentMountain.id">
                            <span class="text-light"><i class="material-icons">more_vert</i>
                              Edit
                            </span>
                            </router-link>
                          </d-button>
                      </d-button-group>
                    </div>
                  </d-list-group-item>

                
                
              </d-list-group>
              </div>
              <div v-else>
                  <d-button outline theme="warning" class="my-1" disabled>
                    Just click one of them dude!
                  </d-button>
                </div>
          </d-card-body>
        </d-card>
      </d-col>

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
