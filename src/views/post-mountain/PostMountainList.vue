<template>
  <d-container fluid class="main-content-container px-4">
    <!-- Page Header -->
    <d-row no-gutters class="page-header py-2 pb-4 mb-3 border-bottom">
      <d-col col sm="4" class="text-center text-sm-left mb-4 mb-sm-0">
        <span class="text-uppercase page-subtitle">MOUNTAIN</span>
        <h3 class="page-title">All List Post of Mountain</h3>
      </d-col>
    </d-row>

    <d-row>
      <d-col md="6" class="mb-4">
        <d-card class="card-small mb-4">
          <d-card-header class="border-bottom">
            <h6 class="m-0">Post List</h6>
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

      
      <!-- <d-col v-if="currentMountain" md="6" class="mb-4">
        <d-card class="card-small mb-4">
          <d-card-header class="border-bottom">
            <h6 class="m-0">List Post of {{currentMountain.name_mt}}</h6>
          </d-card-header>
          <d-card-body>
              <ul class="list-group">
              <li
                class="list-group-item"
                :class="{ active: index == currentIndex }"
                v-for="(post_mountain, index) in post_mountains"
                :key="index"
              >
                {{ post_mountain.post_name }}
              </li>
            </ul>
          </d-card-body>
        </d-card>
      </d-col> -->

      <d-col md="6" class="mb-4">
        <d-card class="card-small mb-3">
          <d-card-header class="border-bottom">
            <h6 class="m-0">List Post of current Mountain</h6>
          </d-card-header>

          <d-card-body>
            <div v-if="currentMountain && post_mountains.length != 0">
              <d-list-group flush>
                
                  <div v-for="(post_mountain, index) in post_mountains" :key="index">
                    <d-list-group-item class="p-3">
                        <d-row>
                            <d-col md="4" class="">
                              <span class="d-flex mb-2"><i class="material-icons mr-1">flag</i><strong class="mr-1">post_name:</strong></span>
                            </d-col>
                            <d-col md="8" class="">
                              {{post_mountain.post_name}}
                            </d-col>
                        </d-row>
                        <d-row>
                            <d-col md="4" class="">
                              <span class="d-flex mb-2"><i class="material-icons mr-1">flag</i><strong class="mr-1">description:</strong></span>
                            </d-col>
                            <d-col md="8" class="">
                              {{post_mountain.description}}
                            </d-col>
                        </d-row>
                        <d-row>
                            <d-col md="4" class="">
                              <span class="d-flex mb-2"><i class="material-icons mr-1">flag</i><strong class="mr-1">id_mountain:</strong></span>
                            </d-col>
                            <d-col md="8" class="">
                              {{post_mountain.id_mountain}}
                            </d-col>
                        </d-row>
                      
                    </d-list-group-item>
                    <!-- Content - Actions -->
                    <d-list-group-item class="d-flex px-3">
                      <div class="blog-comments__actions">
                        <d-button-group size="small">
                          <d-button class="btn-white" @click="{}">
                            <span class="text-danger"><i class="material-icons">clear</i></span> Delete
                          </d-button>
                            <d-button class="btn-white">
                              <router-link :to="'/post-mountain/edit/' + post_mountain.id">
                              <span class="text-light"><i class="material-icons">more_vert</i>
                                Edit
                              </span>
                              </router-link>
                            </d-button>
                        </d-button-group>
                      </div>
                    </d-list-group-item>

                  
                </div>
                
              </d-list-group>

              </div>

              <div v-else-if="currentMountain && post_mountains.length == 0">
                <d-button outline theme="danger" class="my-1" disabled>
                  Empty post data on this mountain!
                </d-button>
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
import PostMountainDataService from "../../services/PostMountainDataService";

export default {
  name: "mountain-list",
  data() {
    return {
      mountains: [],
      post_mountains: [],
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
          // console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    retrievePostMountains(id_mountain) {
      PostMountainDataService.getByIdMountain(id_mountain)
        .then(response => {
          this.post_mountains = response.data.post_mountains;
          // console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    // deletePostMountain(id) {
    //   PostMountainDataService.delete(id)
    //     .then(response => {
    //       console.log(response.data);
    //       this.$router.push({ name: "post-mountains" });
    //     })
    //     .catch(e => {
    //       console.log(e);
    //     });
    // },
    
    refreshList() {
      this.retrieveMountains();
      this.currentMountain = null;
      this.currentIndex = -1;
    },

    setActiveMountain(mountain, index) {
      this.currentMountain = mountain;
      this.currentIndex = index;
      // console.log(index)
      this.retrievePostMountains(this.currentMountain.id)
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
