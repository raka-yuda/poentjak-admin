<template>
  <d-container fluid class="main-content-container px-4">
    <!-- Page Header -->
    <d-row no-gutters class="page-header py-2 pb-4 mb-3 border-bottom">
      <d-col col sm="4" class="text-center text-sm-left mb-4 mb-sm-0">
        <span class="text-uppercase page-subtitle">ARTICLE</span>
        <h3 class="page-title">Edit Author</h3>
      </d-col>
    </d-row>

    <d-row>
      <d-col lg="12" class="mb-4">
        <d-card class="card-small mb-4">
          <div v-if="currentPostMountain">
            <d-card-header class="border-bottom">
              <h6 class="m-0">Form Inputs</h6>
            </d-card-header>

            <d-list-group-item class="p-3">
              <d-row>
                <!-- Forms -->
                <d-col md="12">
                  <!-- <strong class="text-muted d-block mb-2">Forms</strong> -->
                  <d-form>
                    <div class="form-group">
                      <d-input-group class="mb-3">
                        <d-input
                          placeholder="Post Name"
                          id="post_name"
                          v-model="currentPostMountain.post_name"
                          class="form-control"
                          required
                          name="post_name"
                        />
                      </d-input-group>
                    </div>

                    <div class="form-group">
                      <d-input-group class="mb-3">
                        <d-input
                          placeholder="Description"
                          id="description"
                          v-model="currentPostMountain.description"
                          class="form-control"
                          required
                          name="description"
                        />
                      </d-input-group>
                    </div>

                    <div class="form-group">
                      <d-input-group class="mb-3">
                        <d-select :required="true" v-model="currentPostMountain.id_mountain">
                          <option :value="null" disabled>Select Id</option>
                          <option
                            class="list-group-item"
                            v-for="item in mountains"
                            :key="item.id"
                            v-bind:value="item.id"
                            :selected="currentPostMountain.id_mountain == item.id"
                            >{{ item.name_mt }}</option
                          >
                        </d-select>
                      </d-input-group>
                    </div>
                    
                  </d-form>

                  <!-- <button @click="deleteArticle" class="btn btn-danger mr-3">
                    Delete
                  </button> -->
                  <button
                    @click="updatePostMountain()"
                    class="btn btn-success"
                    type="submit"
                  >
                    Update
                  </button>
                </d-col>
                <div v-if="message">
                  <d-col>
                    <d-button outline theme="success" class="mb-2 mr-1 mt-3">{{
                      message
                    }}</d-button>
                  </d-col>
                </div>
              </d-row>
            </d-list-group-item>
          </div>

          <div v-else>
            <br />
            <p>Please click on a Tutorial...</p>
          </div>
        </d-card>
      </d-col>
    </d-row>
  </d-container>
</template>

<script>

import MountainDataService from "../../services/MountainDataService";
import PostMountainDataService from "../../services/PostMountainDataService";

export default {
  name: "edit-post-mountain",
  data() {
    return {
      currentPostMountain: null,
      mountain: [],
      message: "",
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
    getPostMountain(id) {
      PostMountainDataService.get(id)
        .then(response => {
          this.currentPostMountain = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    updatePostMountain() {
      PostMountainDataService.update(this.currentPostMountain.id, this.currentPostMountain)
        .then(response => {
          console.log(response.data);
          this.message = "Post Mountain was updated successfully!";
        })
        .catch(e => {
          console.log(e);
        });
    },

  },
  mounted() {
    this.message = "";
    this.retrieveMountains();
    this.getPostMountain(this.$route.params.id);
    
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
